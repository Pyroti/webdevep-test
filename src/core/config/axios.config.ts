import axios from 'axios';
import {APP_CONFIG} from './app.config';

const axiosConfig = axios.create({
  baseURL: APP_CONFIG.BASE_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;
