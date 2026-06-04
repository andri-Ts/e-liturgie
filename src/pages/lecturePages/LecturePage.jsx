import React, { useState } from 'react';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../libs/apiRequest';
import InfosForm from '../../components/infosForm/InfosForm';
import { buildLectures } from '../../utils/buildLectures';
import { useLiturgie } from '../../context/LiturgieContext';

function LecturePage() {
  // infos globales formulaire
  const { infosLiturgie, setInfosLiturgie, lecturesDuJour, setLecturesDuJour } =
    useLiturgie();
  const nav = useNavigate();

  // formatage des données api lectures en tab
  const formattedLectures = buildLectures(lecturesDuJour);

  // submit formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiRequest.post('/Sorona/Vakiteny', {
        date: new Date(infosLiturgie.date).toISOString(),
      });
      setLecturesDuJour(response.data);

      // remplir automatiquement le jour liturgique
      setInfosLiturgie((prev) => ({
        ...prev,
        jour: response.data.androLitorjika || '',
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
        infosData={infosLiturgie}
        setInfosData={setInfosLiturgie}
        onSubmit={handleSubmit}
      />
      {lecturesDuJour && (
        <div className="lectures">
          <h2>Fanomanana ny vakiteny</h2>
          {formattedLectures.map((lecture, index) => (
            <Lecture
              key={index}
              titre={lecture.titre}
              ref={lecture.ref}
              texte={lecture.texte}
            />
          ))}
          <button onClick={handleNext}>Suivant</button>
        </div>
      )}
    </section>
  );
}

export default LecturePage;
