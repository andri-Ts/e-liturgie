const axios = require('axios');

const BACKEND_URL = process.env.BACKEND_URL;

exports.handler = async function (event) {
  try {
    // 🔥 récupère le vrai endpoint
    const path = event.rawUrl.split('/.netlify/functions/liturgieApi')[1];

    const body = JSON.parse(event.body || '{}');

    const response = await axios({
      method: event.httpMethod,
      url: `${BACKEND_URL}${path}`,
      data: body,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log('NETLIFY ERROR:', error); // 👈 IMPORTANT

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};
