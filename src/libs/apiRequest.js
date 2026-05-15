import axios from 'axios';

const apiRequest = axios.create({
  baseURL: '/.netlify/functions/vakitenyApi',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;
