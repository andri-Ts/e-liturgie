import axios from 'axios';

const apiRequest = axios.create({
  baseURL: import.meta.env.DEV // ex: http://localhost:5000/api
    ? import.meta.env.VITE_API_URL // ex: http://localhost:5000/api
    : '/api/proxy',

  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
