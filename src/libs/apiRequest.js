import axios from 'axios';

const apiRequest = axios.create({
  baseURL: '/.netlify/functions/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
