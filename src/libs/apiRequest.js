import axios from 'axios';

const isDev = import.meta.env.MODE === 'development';

const apiRequest = axios.create({
  // local = backend direct
  // prod = netlify function
  baseURL: isDev
    ? import.meta.env.VITE_API_URL
    : '/.netlify/functions/liturgieApi',

  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
