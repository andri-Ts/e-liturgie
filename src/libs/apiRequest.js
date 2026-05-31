import axios from 'axios';

const apiRequest = axios.create({
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_API_URL : '/api/proxy',

  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
