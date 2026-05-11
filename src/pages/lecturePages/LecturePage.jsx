import React, { useState } from 'react';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { mockLectures } from '../../mocks/lecture';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../libs/apiRequest';

function LecturePage() {
  const [readingShow, setReadingShow] = useState(false); // pour faire apparaître les lectures
  const [infos, setInfos] = useState(null); // infos globales
  const [lecturesData, setLecturesData] = useState(null); // infos sur les lectures
  const nav = useNavigate();

  // formatage des données api en tab
  const formatLectures = lecturesData
    ? [
        {
          titre: lecturesData.boky1,
          ref: lecturesData.andininy1,
          texte: lecturesData.fehiny1,
        },
        {
          titre: lecturesData.setriny,
          ref: lecturesData.setriny,
          texte: lecturesData.setriny,
        },
        {
          titre: lecturesData.boky3,
          ref: lecturesData.andininy3,
          texte: lecturesData.fehiny3,
        },
        {
          titre: lecturesData.boky2,
          ref: lecturesData.andininy2,
          texte: lecturesData.fehiny2,
        },
      ]
    : [];

  // Faire appraître les textes de la lecture
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

    // appel api pour recevoir les ref des textes (selon la date)
    try {
      const resLectureData = await apiRequest.post('/Sorona/Vakiteny', {
        date: new Date(dataform.date).toISOString(), // on ne renvoye que la date en format '2026-05-11T00:00:00.000Z' avec new Date()
      });
      console.log(resLectureData);
      setLecturesData(resLectureData.data);
    } catch (error) {
      console.log(error);
    }

    toggleReading();
  };

  // pour envoyer les data du formulaire vers la page suivante
  const handleNext = () => {
    nav('/liturgie', {
      state: {
        infos,
        lecturesData,
      },
    });
  };

  return (
    <section className="lecture-page">
      <div className="infos">
        <h2>Informations générales</h2>
        <form onSubmit={handleSubmit}>
          <div className="fields-row">
            {/* <FormField type="date" label="Daty" name="date" />
            <FormField type="text" label="Andro litorjika" name="jour" />
            <FormField type="text" label="Vondrona" name="entite" /> */}
            <div className="form-field">
              <label htmlFor="date">Daty</label>
              <input type="date" id="date" name="date" />
            </div>
            <div className="form-field">
              <label htmlFor="jour">Andro litorjika</label>
              <input type="text" id="jour" name="jour" />
            </div>
            <div className="form-field">
              <label htmlFor="entite">Vondrona</label>
              <input type="text" id="entite" name="entite" />
            </div>
          </div>
          <button type="submit">Valider</button>
        </form>
      </div>
      {readingShow && (
        <div className="lectures">
          <h2>Fanomanana ny vakiteny</h2>
          {formatLectures.map((lecture, index) => (
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
