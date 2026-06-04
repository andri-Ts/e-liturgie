import axios from 'axios';

// console.log('MODE =', import.meta.env.MODE);
// console.log('VITE_API_URL =', import.meta.env.VITE_API_URL);

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// console.log('Axios baseURL =', apiRequest.defaults.baseURL);

export default apiRequest;
