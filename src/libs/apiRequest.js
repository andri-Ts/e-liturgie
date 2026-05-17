import axios from 'axios';

const isDev = import.meta.env.MODE === 'development';

const apiRequest = axios.create({
  baseURL: isDev
    ? import.meta.env.VITE_API_URL // ex: http://localhost:5000/api
    : '/.netlify/functions/liturgieApi',

  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
