const axios = require('axios');

// URL privée stockée dans Netlify
const BACKEND_URL = process.env.BACKEND_URL;

exports.handler = async function (event) {
  try {
    // récupère le endpoint demandé
    const path = event.path.replace('/.netlify/functions/liturgieApi', '');

    // body envoyé depuis React
    const body = JSON.parse(event.body || '{}');

    // appel backend réel
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
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};
