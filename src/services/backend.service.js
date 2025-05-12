import instance from '#src/utils/axios.js';
import config from '#src/config.js';
const axios = instance.create('backend');

// 廠區
export const getDcService = async (req) => {
  const response = await axios.get(config.GET_DC, { params: req.query });
  return response;
};
export const createDcService = async (req) => {
  const response = await axios.post(config.CREATE_DC, req.body);
  return response;
};
export const getAllDcService = async (req) => {
  const response = await axios.get(config.GET_ALL_DC, req.body);
  return response;
};
export const updateDcService = async (req) => {
  const response = await axios.put(config.UPDATE_DC, req.body);
  return response;
};

export const deleteDcService = async (req) => {
  const response = await axios.delete(config.DELETE_DC, { data: req.body });
  return response;
};

// 機房
export const getRoomService = async (req) => {
  const response = await axios.get(config.GET_ROOM, { params: req.query });
  return response;
};
export const createRoomsService = async (req) => {
  const response = await axios.post(config.CREATE_ROOMS, req.body);
  return response;
};
export const updateRoomService = async (req) => {
  const response = await axios.put(config.UPDATE_ROOM, req.body);
  return response;
};

export const deleteRoomService = async (req) => {
  const response = await axios.delete(config.DELETE_ROOM, { data: req.body });
  return response;
};

// 機櫃
export const getRackService = async (req) => {
  const response = await axios.get(config.GET_RACK, { params: req.query });
  return response;
};
export const createRacksService = async (req) => {
  const response = await axios.post(config.CREATE_RACKS, req.body);
  return response;
};
export const updateRackService = async (req) => {
  const response = await axios.put(config.UPDATE_RACK, req.body);
  return response;
};

export const deleteRackService = async (req) => {
  const response = await axios.delete(config.DELETE_RACK, { data: req.body });
  return response;
};

// 伺服器
export const getServerService = async (req) => {
  const response = await axios.get(config.GET_SERVER, { params: req.query });
  return response;
};
export const createServerService = async (req) => {
  const response = await axios.post(config.CREATE_SERVER, req.body);
  return response;
};

export const updateServerService = async (req) => {
  const response = await axios.put(config.UPDATE_SERVER, req.body);
  return response;
};

export const deleteServerService = async (req) => {
  const response = await axios.delete(config.DELETE_SERVER, { data: req.body });
  return response;
};

export const getAllServerService = async (req) => {
  const response = await axios.get(config.GET_ALL_SERVER, req.body);
  return response;
};

// IP
export const assignService = async (req) => {
  const response = await axios.post(config.ASSIGN_IP, req.body);
  return response;
};

export const createIpPoolService = async (req) => {
  const response = await axios.post(config.CREATE_IP_POOL, req.body);
  return response;
};

export const releaseService = async (req) => {
  const response = await axios.delete(config.RELEASE_IP, { data: req.body });
  return response;
};

export const getAllIpService = async (req) => {
  const response = await axios.get(config.GET_ALL_IP, req.body);
  return response;
};

export const getUsedIpService = async (req) => {
  const response = await axios.get(config.GET_USED_IP, req.body);
  return response;
};

export const getIpPoolService = async (req) => {
  const response = await axios.get(config.GET_IP_POOL, { params: req.query });
  return response;
};

export const getAllIpPoolsService = async (req) => {
  const response = await axios.get(config.GET_ALL_IP_POOLS, req.body);
  return response;
};
