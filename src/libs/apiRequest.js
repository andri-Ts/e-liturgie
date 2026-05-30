import axios from 'axios';

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ex: http://localhost:5000/api
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
