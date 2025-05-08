import instance from '#src/utils/axios.js';
import config from '#src/config.js';
const axios = instance.create('backend');

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
