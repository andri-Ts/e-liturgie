import React, { useState } from 'react';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../libs/apiRequest';
import InfosForm from '../../components/infosForm/InfosForm';
import { buildLectures } from '../../utils/buildLectures';

function LecturePage() {
  // infos globales formulaire
  const [infosData, setInfosData] = useState({
    date: '',
    jour: '',
    entite: '',
  });
  const [lecturesData, setLecturesData] = useState(null); // infos sur les lectures
  const nav = useNavigate();

  // formatage des données api lectures en tab
  const formattedLectures = buildLectures(lecturesData);

  // submit formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiRequest.post('/proxy', {
        path: 'Sorona/Vakiteny',
        date: new Date(infosData.date).toISOString(),
      });
      setLecturesData(response.data);

      // remplir automatiquement le jour liturgique
      setInfosData((prev) => ({
        ...prev,
        jour: response.data.androLitorjika || '',
      }));
    } catch (error) {
      console.log(error);
    }
  };

  // pour envoyer les data du formulaire vers la page suivante
  const handleNext = () => {
    nav('/liturgie', {
      state: {
        infos: infosData,
        lecturesData,
      },
    });
  };

  return (
    <section className="lecture-page">
      <InfosForm
        infosData={infosData}
        setInfosData={setInfosData}
        onSubmit={handleSubmit}
      />
      {lecturesData && (
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
