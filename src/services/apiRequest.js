import axios from 'axios';

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log(import.meta.env.VITE_API_URL);

export default apiRequest;
