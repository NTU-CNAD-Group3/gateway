import Redis from 'ioredis';

import config from '#src/config.js';
import logger from '#src/utils/logger.js';

export default function createRedisClient() {
  const redisClient = new Redis({
    port: config.REDIS_PORT,
    host: config.REDIS_HOST,
    username: 'default',
    password: config.REDIS_PASSWORD,
    retryStrategy: (times) => {
      const delay = Math.min(times * 10, 1000);
      return delay;
    },
  });

  redisClient.on('connect', () => {
    logger.info({
      message: `msg=Connected to Redis`,
    });
  });

  redisClient.on('ready', () => {
    logger.info({
      message: `msg=Redis is ready`,
    });
  });

  redisClient.on('error', (err) => {
    logger.error({
      message: `msg=Redis error occurred error=${err}`,
    });
  });

  return redisClient;
}
