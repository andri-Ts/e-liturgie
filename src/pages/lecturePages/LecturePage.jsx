import React, { useMemo, useState } from 'react';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { data, Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../services/apiRequest';
import InfosForm from '../../components/liturgie/infosForm/InfosForm';
import { buildLectures } from '../../utils/buildLectures';
import { getLectures } from '../../services/liturgieService';
import { getLecturesFallBackUrl } from '../../utils/getLecturesFallBackUrl';
import { useLectures } from '../../context/LecturesContext';
import { useInfos } from '../../context/InfosContext';
import { useLiturgieInitializer } from '../../hooks/useLiturgieInitializer';

function LecturePage() {
  // infos globales formulaire
  const { lecturesDuJour, initializeLiturgie } = useLiturgieInitializer(); // utiliser le custom hook
  const { infosLiturgie, setInfosLiturgie } = useInfos();
  const nav = useNavigate();

  // Etat local pour les erreurs spécifiques à ce compoent
  const [isInitializing, setIsInitializing] = useState(false);
  const [localError, setLocalError] = useState(null);

  // =============================================
  // MEMOIZATION #1 : Formater les lectures
  // =============================================
  // Avec useMemo(), la fonction ne sera pas recalculer à CHAQUE render.
  // formatage des données api lectures en tab
  const formattedLectures = useMemo(() => {
    if (!lecturesDuJour) return [];

    // DÉPENDANCES : - [lecturesDuJour] = recalculer si lecturesDuJour change ; - ne pas recalculer sinon
    return buildLectures(lecturesDuJour);
  }, [lecturesDuJour]);

  // =============================================
  // MEMOIZATION #2 : Vérifier les lectures manquantes
  // =============================================
  // - Cette vérification parcourt 3 propriétés de lecturesDuJour
  // - Sans useMemo, ce calcul se ferait à CHAQUE render (inutile!)

  const hasMissingLecture = useMemo(() => {
    if (!lecturesDuJour) return false;

    // Vérifier si l'une des 3 lectures est null
    lecturesDuJour &&
      (lecturesDuJour.vakiteny1 === null ||
        lecturesDuJour.vakiteny2 === null ||
        lecturesDuJour.vakiteny3 === null);
  }, [lecturesDuJour]);

  // =============================================
  // FONCTION : Soumettre le formulaire
  // =============================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Récupéré les lectures de l'API
    try {
      // Feedback utilisateur : on initialise
      setIsInitializing(true);
      setLocalError(null);

      // Appeler le hook qui fait : API + créer éléments + stocker
      await initializeLiturgie(infosLiturgie.dateMesse);

      setIsInitializing(false);
    } catch (error) {
      console.log(error);
      // Affiche l'erreur à l'utilisateur
      setLocalError(
        error.message || 'Erreur lors de la récupération des letcures',
      );
      setIsInitializing(false);
    }
  };

  // =============================================
  // FONCTION : Naviguer vers la page suivante
  // =============================================
  const handleNext = () => {
    nav('/fanomanana-litorjia/hira');
  };

  return (
    <section className="lecture-page">
      <InfosForm
        infosLiturgie={infosLiturgie}
        setInfosLiturgie={setInfosLiturgie}
        onSubmit={handleSubmit}
      />

      {/* Affichier les erreurs si besoin */}
      {localError && <div className="error-message">{localError}</div>}

      {/* Afficher un spinner pendant el chargement */}
      {isInitializing && (
        <div className="loading-spinner">Chargement des lectures...</div>
      )}

      {lecturesDuJour && (
        <section className="lectures-section">
          {/* <div className="lectures-header">
            <h2>Fanomanana ny vakiteny</h2>
          </div> */}

          {hasMissingLecture ? (
            <div className="lectures-fallback">
              <p>Tsy hita ny vakiteny amin'ity daty ity...</p>
              <a
                href={getLecturesFallBackUrl(infosLiturgie.dateMesse)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jereo ny vakiteny eto →
              </a>
              <div className="lectures-actions">
                <button onClick={handleNext}>
                  Hanohy ny fanomanana ny litorjia →
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="lectures-list">
                {formattedLectures.map((lecture, index) => (
                  <Lecture
                    key={index}
                    titre={lecture.titre}
                    ref={lecture.ref}
                    texte={lecture.texte}
                  />
                ))}
              </div>

              <div className="lectures-actions">
                <button onClick={handleNext}>Suivant →</button>
              </div>
            </>
          )}
        </section>
      )}
    </section>
  );
}

export default LecturePage;
