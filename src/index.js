import 'express-async-errors';

import cors from 'cors';
import { RedisStore } from 'connect-redis';
import compression from 'compression';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import hpp from 'hpp';

import config from '@/config.js';
import createRedisClient from '@/models/redis.js';
import logger from '@/utils/logger.js';
import routes from '@/routes/index.js';

const app = express();

app.set('trust proxy', 1);

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
        sameSite: 'none', // sameSite is none means enable cross-site access
      }),
    },
  }),
);
app.use(hpp()); // http parameter pollution
app.use(helmet()); // secure your app by setting various HTTP headers

// log incoming requests
app.use((req, res, next) => {
  res.on('finish', () => {
    if (res.statusCode < 400) {
      logger.info({
        message: `msg=Received response method=${req.method} path=${req.route.path} ip=${req.ip} status=${res.statusCode} url=${req.originalUrl}`,
      });
    }
  });
  next();
});

app.use(`/api`, routes);

// route not found
app.use('*', (req, res, next) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || 500).json({
      message: err.message,
    });
    logger.error({
      message: `msg=Error occured method=${req.method} path=${req.route.path} ip=${req.ip} status=${res.statusCode} url=${req.originalUrl} error=${err.message}`,
    });
  }
});

app.listen(config.PORT, () => {
  logger.info({
    message: `msg=Server started at port ${config.PORT}`,
  });
});

export default app;
