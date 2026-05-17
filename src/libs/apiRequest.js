import axios from 'axios';

const apiRequest = axios.create({
  baseURL: '/.netlify/functions/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiRequest;

// import axios from 'axios';

// const isDev = import.meta.env.MODE === 'development';

// export default axios.create({
//   baseURL: isDev
//     ? 'http://72.61.166.33:5000/api'
//     : '/.netlify/functions/vakitenyApi',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
