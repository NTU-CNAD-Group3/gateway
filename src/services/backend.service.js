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
