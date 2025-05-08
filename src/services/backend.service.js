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
  const response = await axios.get(config.GET_ROOM, {params: req.query});
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
