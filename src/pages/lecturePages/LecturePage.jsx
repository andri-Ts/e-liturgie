import React, { useState } from 'react';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { data, Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../services/apiRequest';
import InfosForm from '../../components/liturgie/infosForm/InfosForm';
import { buildLectures } from '../../utils/buildLectures';
import { useLiturgie } from '../../context/LiturgieContext';
import { getLectures } from '../../services/liturgieService';
import { getLecturesFallBackUrl } from '../../utils/getLecturesFallBackUrl';

function LecturePage() {
  // infos globales formulaire
  const { infosLiturgie, setInfosLiturgie, lecturesDuJour, initLiturgieData } =
    useLiturgie();
  const nav = useNavigate();

  // formatage des données api lectures en tab
  const formattedLectures = buildLectures(lecturesDuJour);

  // variable pour savoir s'il y a un pb avec les lectures
  const hasMissingLecture =
    lecturesDuJour &&
    (lecturesDuJour.vakiteny1 === null ||
      lecturesDuJour.vakiteny2 === null ||
      lecturesDuJour.vakiteny3 === null);

  // submit formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Récup infos du vakiteny avec api
    try {
      const infosGenLectures = await getLectures(infosLiturgie.dateMesse);
      console.log(infosGenLectures);

      initLiturgieData(infosGenLectures); // initialise les elements de la liturgie selon les données de l'apiLecture
    } catch (error) {
      console.log(error);
    }
  };

  // pour envoyer les data du formulaire vers la page suivante
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
