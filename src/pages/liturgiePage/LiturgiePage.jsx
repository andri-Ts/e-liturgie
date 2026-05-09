import React from 'react';
import { useLocation } from 'react-router-dom';
import LiturgieForm from '../../components/liturgieForm/LiturgieForm';
import './liturgiePage.css';
import { lecturesData } from '../../mocks/lecture';

function LiturgiePage() {
  const location = useLocation(); // permet de récupérer les données envoyés via useNavigate

  const infosLiturige = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(liturgieData);
  };

  return (
    <section className="liturgie-page">
      <div className="infos-liturgie">
        <h2>Informations générales</h2>
        <h3>{infosLiturige.date}</h3>
        <h3>{infosLiturige.jour}</h3>
        <h3>{infosLiturige.entite}</h3>
      </div>
      <div>
        <LiturgieForm lectures={lecturesData} handleSubmit={handleSubmit} />
      </div>
    </section>
  );
}

export default LiturgiePage;
