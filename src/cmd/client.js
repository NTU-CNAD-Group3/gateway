import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8001',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

// GET /api/healthy
const getHealthy = async () => {
  const response = await client.get('/api/healthy');
  return response.data;
};

// POST /api/v1/gateway/auth/signup

const signup = async () => {
  let user = {
    username: 'test',
    email: 'test',
    password: 'test',
  };

  const response = await client.post('/api/v1/gateway/auth/signup', user);
  return response.data;
};

// POST /api/v1/gateway/auth/signin

const signin = async () => {
  let user = {
    email: 'test',
    password: 'test',
  };

  const response = await client.post('/api/v1/gateway/auth/signin', user);
  return response.data;
};

// POST /api/v1/gateway/auth/signout

const signout = async () => {
  const response = await client.post('/api/v1/gateway/auth/signout');
  return response.data;
};

// PUT /api/v1/gateway/auth/verify-email

const verifyEmail = async () => {
  let token = 'test';
  const response = await client.put('/api/v1/gateway/auth/verify-email');
  return response.data;
};

// main.js

// getHealthy().then((data) => {
//   console.log(data);
// });

signup().then((data) => {
  console.log(data);
});

// signin().then((data) => {
//   console.log(data);
// });

// signout().then((data) => {
//   console.log(data);
// });

// verifyEmail().then((data) => {
//   console.log(data);
// });
