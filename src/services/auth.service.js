import instance from '#src/utils/axios.js';

const axios = instance.create('auth');

export const signupService = async (req) => {
  const response = await axios.post('/signup', req.body);
  return response;
};

export const signinService = async (req) => {
  const response = await axios.post('/signin', req.body);
  return response;
};

export const verifyEmailService = async (req) => {
  const response = await axios.put('/verify-email', req.body);
  return response;
};
