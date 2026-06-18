// Ce custom hook encapsule toute la logique d'initialisaiton d'une liturgie
// Il combine LecturesContexte + ElementsContext

import { useElements } from '../context/ElementsContext';
import { useLectures } from '../context/LecturesContext';
import { getLectures } from '../services/liturgieService';
import { buildLiturgieElements } from '../utils/buildLiturgieElements';

export function useLiturgieInitializer() {
  const { lecturesDuJour, setLecturesDuJour, setIsLoading, setError } =
    useLectures();
  const { setAllElements } = useElements();

  // Fonction pour init une liturgie:
  // 1- appelle l'API 2- créer les éléments de base 3- stocke tout dans les contexte
  const initializeLiturgie = async (dateMesse) => {
    try {
      setIsLoading(true);
      setError(null);

      // Step 1: Récupérer les lectures de l'API
      console.log('Initialisaiton liturgie pour: ', dateMesse);
      const infosGenLectures = await getLectures(dateMesse);
      console.log('Lectures reçues: ', infosGenLectures);

      // Step 2: Stocker les lectures dans le context
      setLecturesDuJour(infosGenLectures);

      // Steps 3: Créer les élémeents de bases (Lectures ref + chants form)
      const elementsDeBase = buildLiturgieElements(infosGenLectures);
      console.log('Élements créés:', elementsDeBase);

      // Step 4: Stocker les éléments dans le context
      setAllElements(elementsDeBase);

      // Feedback utilisateur
      setIsLoading(false);

      // Retourner les données (utile pour les tests ou logs)
      return { lecturesData: infosGenLectures, elements: elementsDeBase };
    } catch (error) {
      console.error("Error lors de l'initialisaiton de la liturgie: ", error);

      // Afficher l'erreur à l'utilisateur
      setError(error.message || 'Erreur lors de la récupération des lectures');
      setIsLoading(false);

      // Realancer l'erreur(au cas où le composant veut la gérer)
      throw error;
    }
  };

  // Retourner le hook avec les élements nécessaires
  return {
    lecturesDuJour,
    initializeLiturgie,
  };
}
