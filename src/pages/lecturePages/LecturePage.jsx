import React, { useState } from 'react';
import FormField from '../../components/formField/FormField';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { mockLectures } from '../../mocks/lecture';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../libs/apiRequest';

function LecturePage() {
  const [readingShow, setReadingShow] = useState(false); // pour fiare apparaître les lectures
  const [infos, setInfos] = useState(null);
  const nav = useNavigate();

  const toggleReading = async () => {
    setReadingShow((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Récupérer les data du form et le stocker deans un Object
    const formData = new FormData(e.target);
    const dataform = {
      date: formData.get('date'),
      jour: formData.get('jour'),
      entite: formData.get('entite'),
    };
    setInfos(dataform);
    // console.log(dataform);

    const resLectureData = await apiRequest.post('/Sorona/Vakiteny', {
      date: new Date(dataform.date).toISOString(), // on ne renvoye que la date en format '2026-05-11T00:00:00.000Z' avec new Date()
    });
    console.log(resLectureData.data);

    // toggleReading();
  };

  // pour envoyer les data du formulaire vers la page suivante
  const handleNext = () => {
    nav('/liturgie', {
      state: infos,
    });
  };

  return (
    <section className="lecture-page">
      <div className="infos">
        <h2>Informations générales</h2>
        <form onSubmit={handleSubmit}>
          <div className="fields-row">
            <FormField type="date" label="Daty" name="date" />
            <FormField type="text" label="Andro litorjika" name="jour" />
            <FormField type="text" label="Vondrona" name="entite" />
          </div>
          <button type="submit">Valider</button>
        </form>
      </div>
      {readingShow && (
        <div className="lectures">
          <h2>Fanomanana ny vakiteny</h2>
          {mockLectures.map((lecture, index) => (
            <Lecture key={index} titre={lecture.titre} ref={lecture.ref} />
          ))}
          <button onClick={handleNext}>Suivant</button>
        </div>
      )}
    </section>
  );
}

export default LecturePage;
