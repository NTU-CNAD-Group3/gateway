import axios from 'axios';

import config from '#src/config.js';

class AxiosService {
  create(serviceName) {
    let baseUrl = '';
    switch (serviceName) {
      case 'auth':
        baseUrl = `${config.AUTH_BASE_URL}/api/${config.API_VERSION}/auth`;
        break;
      case 'backend':
        baseUrl = `${config.BACKEND_BASE_URL}/api`;
        break;
      default:
        throw new Error('Service not found');
    }

    const instance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      withCredentials: true,
    });

    return instance;
  }
}

export default new AxiosService();
