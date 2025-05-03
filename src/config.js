import dotenv from 'dotenv';
dotenv.config();

class Config {
  constructor() {
    this.PORT = process.env.PORT || 8000;
    this.API_VERSION = process.env.API_VERSION || 'v1';
    this.SECRET_KEY = process.env.SECRET_KEY || '123';
    this.CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
    this.AUTH_BASE_URL = process.env.AUTH_BASE_URL || 'http://localhost:8003';
    this.BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || 'http://localhost:8004';
    this.REDIS_HOST = process.env.REDIS_HOST || 'localhost';
    this.REDIS_PORT = process.env.REDIS_PORT || 6379;
    this.REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'redis';
    this.GET_DC = '/fab';
    this.CREATE_DC = '/fab';
  }
}
export default new Config();
