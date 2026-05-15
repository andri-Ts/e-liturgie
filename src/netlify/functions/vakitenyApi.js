import axios from 'axios';

// Netlify va exécuter cette fonction comme une API
exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body);

    // envoyer une requête POST vers ton backend
    const response = await axios.post('http://72.61.166.33:5000/', {
      date: body.date, // envoyer seulement la date reçue du frontend
    });

    // renvoyer la réponse du backend vers le frontend React
    return {
      statusCode: 200,
      body: JSON.stringify(response.data), // toujours renvoyer du JSON sous forme de string
    };
  } catch (error) {
    return {
      statusCode: 500,

      // message d'erreur envoyé au frontend
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};
