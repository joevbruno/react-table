import axios from 'axios';
import { host, port } from '../config/api';
const request = axios.create({
  baseURL: `${host}:${port}`,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default request;
