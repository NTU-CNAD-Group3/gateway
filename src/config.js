import dotenv from 'dotenv';
dotenv.config();

class Config {
  constructor() {
    this.PORT = process.env.PORT || 8000;
    this.API_VERSION = process.env.API_VERSION || 'v1';
    this.SECRET_KEY = process.env.SECRET_KEY || '123';
    this.JWT_TOKEN = process.env.JWT_TOKEN || '456';
    this.CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
    this.AUTH_BASE_URL = process.env.AUTH_BASE_URL || 'http://localhost:8003';
    this.BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || 'http://localhost:8004';
    this.REDIS_HOST = process.env.REDIS_HOST || 'localhost';
    this.REDIS_PORT = process.env.REDIS_PORT || 6379;
    this.REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'redis';
    this.GET_DC = '/fab';
    this.CREATE_DC = '/fab';
    this.GET_ALL_DC = '/fab/allFabs';
    this.UPDATE_DC = '/fab';
    this.DELETE_DC = '/fab';
    this.GET_ROOM = '/room';
    this.CREATE_ROOMS = '/room';
    this.UPDATE_ROOM = '/room';
    this.DELETE_ROOM = '/room';
    this.GET_RACK = '/rack';
    this.CREATE_RACKS = '/rack';
    this.UPDATE_RACK = '/rack';
    this.DELETE_RACK = '/rack';
    this.GET_SERVER = '/server';
    this.CREATE_SERVER = '/server';
    this.MOVE_SERVER = '/server';
    this.DELETE_SERVER = '/server';
    this.GET_ALL_SERVER = '/server/allServers';
    this.UPDATE_BY_NAME = '/server/name';
    this.SEARCHING_SERVER = '/server/searching';
    this.REPAIR = '/server/repair';
    this.BROKEN = '/server/broken';
    this.GET_ALL_BROKEN_SERVER = '/server/allBrokenServers';

    // this.ASSIGN_IP = '/ip';
    this.CREATE_IP_POOL = '/ip/pool';
    // this.RELEASE = '/ip';
    this.GET_ALL_IP = '/ip/allIp';
    this.GET_USED_IP = '/ip/usedIp';
    this.GET_IP_POOL = '/ip/pool';
    this.GET_ALL_IP_POOLS = '/ip/allPools';
  }
}
export default new Config();
