import { useState } from 'react';
import { useElements } from '../context/ElementsContext';
import { useInfos } from '../context/InfosContext';
import { useLectures } from '../context/LecturesContext';
import { buildLiturgiePayload } from '../utils/buildLiturgiePayload';
import { postLiturgie } from '../services/liturgieService';

// ✅ Ce custom hook encapsule TOUTE la logique de validation et sauvegarde
// Responsabilité:
//  - Récupérer les données de TOUS les contexts
//  - Construire le payload
//  - Envoyer à l'API
//  - Gérer erreurs/loading
//
// Avantage: Quand on ajoute des champs (participants, nomFete, etc.)
// On modifie Juste ce hook, pas le component !

export function useLiturgieValidator() {
  // Récupérer les données de TOUS les contexts
  const { infosLiturgie } = useInfos();
  const { lecturesDuJour } = useLectures();
  const { elements } = useElements();

  // État pour gérer les erreurs et loading
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // FONCTION : Valider les données avant d'envoyer (ex: dateMesse pas vide, élements pas vide,...)
  const validateData = () => {
    if (!infosLiturgie.dateMesse) {
      throw new Error('La date de la messe est requise');
    }
    if (!lecturesDuJour) {
      throw new Error('Les lectures du jour ne sont pas chargées');
    }
    if (elements.length == 0) {
      throw new Error('Au moins un élément est requis');
    }
    // ... ajouter d'autres validation
  };

  // FONCTION: Construire le payload avec tous les données
  const buildPayload = () => {
    return buildLiturgiePayload(infosLiturgie, lecturesDuJour, elements);
    // ...etc
  };

  // FONCTION PRINCIPALE: Sauvegarder la liturgie
  const saveLiturgie = async () => {
    try {
      // Feedback utilisateur: on sauvegarde
      setIsSaving(true);
      setSaveError(null);
      setSaveSuccess(false);

      // Step 1: Validé les données
      console.log('Validation des données...');
      validateData();

      // Step 2: Construire le payload
      console.log('Construction du payload');
      const payload = buildPayload();
      console.log('Payload construit: ', payload);

      // Step 3: Envoyer à l'API
      console.log("Envoie à l'API");
      const response = await postLiturgie(payload);
      console.log('Liturgie sauvegardée: ', response);

      // Feedback : succès
      setIsSaving(false);
      setSaveSuccess(true);

      // REtourner la réponse (utile pour redirection, etc)
      return response;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde: ', error);

      // Afficher l'erreur à l'utilisateur
      setSaveError(error.message || 'Erreur lors de la sauvegarde');
      setIsSaving(false);

      // Relancer l'erreur (au cas où le component veut la gérer)
      throw error;
    }
  };

  // Retourner tout ce que LiturgiePage a besoin
  return { saveLiturgie, isSaving, saveError, saveSuccess };
}
