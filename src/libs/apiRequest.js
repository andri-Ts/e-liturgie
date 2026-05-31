import axios from 'axios';

const isDev = import.meta.env.MODE;

const apiRequest = axios.create({
  baseURL: isDev
    ? import.meta.env.VITE_API_URL // ex: http://localhost:5000/api
    : '/api/proxy',

  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
