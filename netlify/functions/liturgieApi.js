const axios = require('axios');

const BACKEND_URL = process.env.BACKEND_URL; // http://72.61.166.33:5000

exports.handler = async function (event) {
  try {
    // 👇 garde tout après /liturgieApi
    const path = event.path.replace('/.netlify/functions/liturgieApi', '');

    const body = JSON.parse(event.body || '{}');

    const response = await axios({
      method: event.httpMethod,
      url: `${BACKEND_URL}${path}`, // 👈 important
      data: body,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};
