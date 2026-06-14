import apiRequest from './apiRequest';

// récuperer les lectures du jour avec l'api
export async function getLectures(dateMesse) {
  const response = await apiRequest.post('/Sorona/Vakiteny', {
    date: new Date(dateMesse).toISOString(),
  });

  return response.data;
}
