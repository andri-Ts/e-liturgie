import apiRequest from './apiRequest';

// récuperer les lectures du jour avec l'api
export async function getLectures(dateMesse) {
  const response = await apiRequest.post('/Sorona/Vakiteny', {
    date: new Date(dateMesse).toISOString(),
  });

  return response.data;
}

// poster la liturgie crée
export async function createLiturgie(payload) {
  const response = await apiRequest.post('/Messe/Create', payload);

  return response.data;
}
