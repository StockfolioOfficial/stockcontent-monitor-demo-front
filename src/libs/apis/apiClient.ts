import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.35.101:8000',
});

export default apiClient;
