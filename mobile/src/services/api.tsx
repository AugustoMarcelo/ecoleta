import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.193.138.134:3333',
});

export default api;
