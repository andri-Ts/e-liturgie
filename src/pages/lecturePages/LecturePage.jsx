import React, { useState } from 'react';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { data, Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../services/apiRequest';
import InfosForm from '../../components/liturgie/infosForm/InfosForm';
import { buildLectures } from '../../utils/buildLectures';
import { useLiturgie } from '../../context/LiturgieContext';

import { createLectureElements } from '../../utils/createLectureElements';
import { createDefaultElements } from '../../data/defautlLiturgie';
import { buildLiturgieElements } from '../../utils/buildLiturgieElements';

function LecturePage() {
  // infos globales formulaire
  const {
    infosLiturgie,
    setInfosLiturgie,
    lecturesDuJour,
    setLecturesDuJour,
    setElements,
  } = useLiturgie();
  const nav = useNavigate();

  // formatage des données api lectures en tab
  const formattedLectures = buildLectures(lecturesDuJour);

  // submit formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiRequest.post('/Sorona/Vakiteny', {
        date: new Date(infosLiturgie.dateMesse).toISOString(),
      });
      // console.log(response.data);
      // stockage global des lectures
      setLecturesDuJour(response.data);

      setElements(buildLiturgieElements(response.data));

      // remplir automatiquement le jour liturgique
      setInfosLiturgie((prev) => ({
        ...prev,
        jourLiturgique: response.data.androLitorjika || '',
      }));
    } catch (error) {
      console.log(error);
    }
  };

  // pour envoyer les data du formulaire vers la page suivante
  const handleNext = () => {
    nav('/liturgie');
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
          <div className="lectures-header">
            <h2>Fanomanana ny vakiteny</h2>
          </div>

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
