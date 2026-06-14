import React, { useState } from 'react';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { data, Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../services/apiRequest';
import InfosForm from '../../components/liturgie/infosForm/InfosForm';
import { buildLectures } from '../../utils/buildLectures';
import { useLiturgie } from '../../context/LiturgieContext';
import { getLectures } from '../../services/liturgieService';

function LecturePage() {
  // infos globales formulaire
  const { infosLiturgie, setInfosLiturgie, lecturesDuJour, initLiturgieData } =
    useLiturgie();
  const nav = useNavigate();

  // formatage des données api lectures en tab
  const formattedLectures = buildLectures(lecturesDuJour);

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
        </section>
      )}
    </section>
  );
}

export default LecturePage;
