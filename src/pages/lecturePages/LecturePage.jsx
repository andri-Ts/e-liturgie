import React, { useState } from 'react';
import FormField from '../../components/formField/FormField';
import './lecturePage.css';
import Lecture from '../../components/lecture/Lecture';
import { mockLectures } from '../../mocks/lecture';
import { Link } from 'react-router-dom';

function LecturePage() {
  const [readingShow, setReadingShow] = useState(false); // pour fiare apparaître les lectures

  const toggleReading = async () => {
    setReadingShow((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Récupérer le form
    const formData = new FormData(e.target);
    const dateForm = formData.get('date');
    const jourForm = formData.get('jour');
    const entiteForm = formData.get('entite');

    // console.log('date: ', dateForm);

    toggleReading();
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
          <Link to={'/liturgie'} className="btn-style">
            Suivant
          </Link>
        </div>
      )}
    </section>
  );
}

export default LecturePage;
