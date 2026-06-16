import React, { useState } from 'react';
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

function LecturePage() {
  // infos globales formulaire
  const { lecturesDuJour, setLecturesDuJour, setIsLoading, setError } =
    useLectures();
  const { infosLiturgie, setInfosLiturgie } = useInfos();
  const nav = useNavigate();

  // formatage des données api lectures en tab
  const formattedLectures = buildLectures(lecturesDuJour);

  // variable pour savoir s'il y a un pb avec les lectures
  const hasMissingLecture =
    lecturesDuJour &&
    (lecturesDuJour.vakiteny1 === null ||
      lecturesDuJour.vakiteny2 === null ||
      lecturesDuJour.vakiteny3 === null);

  // Récupé
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Récupéré les lectures de l'API
    try {
      // Ajouter feedback utilisateur
      setIsLoading(true);
      setError(null);

      const infosGenLectures = await getLectures(infosLiturgie.dateMesse);
      console.log(infosGenLectures);

      // Stocker les données dans le context
      setLecturesDuJour(infosGenLectures);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      // Affiche l'erreur à l'utilisateur
      setError(error.message || 'Erreur lors de la récupération des letcures');
      setIsLoading(false);
    }
  };

  // Naviguer page suivant
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
