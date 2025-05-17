import 'express-async-errors';

import cors from 'cors';
import { RedisStore } from 'connect-redis';
import compression from 'compression';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import hpp from 'hpp';

import config from '#src/config.js';
import createRedisClient from '#src/models/redis.js';
import logger from '#src/utils/logger.js';
import routes from '#src/routes/index.js';

const app = express();

// GCP load balancer (HTTPS) -> istio gateway (HTTP) -> gateway service 
app.set('trust proxy', 2); 

app.use(compression());
app.use(express.urlencoded({ extended: true, limit: '200mb' }));
app.use(express.json({ limit: '200mb' }));
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }),
);

app.use(
  session({
    secret: config.SECRET_KEY,
    name: 'session', // name of the cookie
    store: new RedisStore({ client: createRedisClient(), prefix: 'session:' }),
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't store empty session
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      secure: process.env.NODE_ENV === 'production', // secure is true means only use cookie over https
      ...(process.env.NODE_ENV === 'production' && {
        sameSite: 'lax',
      }),
    },
  }),
);
app.use(hpp()); // http parameter pollution
app.use(helmet()); // secure your app by setting various HTTP headers

// log incoming requests
app.use((req, res, next) => {
  res.on('finish', () => {
    const route = req.route ? req.route.path : '';
    if (res.statusCode < 400) {
      logger.info({
        message: `msg=Received response method=${req.method} path=${route} ip=${req.ip} status=${res.statusCode} url=${req.originalUrl}`,
      });
    } 
  });
  next();
});

app.use(`/api`, routes);

// route not found
app.use('*', (req, res, next) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  const errResponse = err?.response?.data?.message || err?.message || 'Internal Server Error';
  const errStatusCode = err?.response?.status || err?.status || 500;
  const errStack = (err?.response?.data?.stack || err?.stack || 'No stack available').replace(/\n/g, ' ');;

  res.status(errStatusCode);
  res.json({
    message: errResponse,
    ...(process.env.NODE_ENV === 'development' && { stack: errStack })
  });
  logger.error({
    message: `msg=Error occurred method=${req.method} path=${req.path} ip=${req.ip} status=${errStatusCode} url=${req.originalUrl} error=${errResponse} stack=${errStack}`,
  });
});

app.listen(config.PORT, () => {
  logger.info({
    message: `msg=Server started at port ${config.PORT}`,
  });
});

export default app;
