import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LiturgieForm from '../../components/liturgieForm/LiturgieForm';
import './liturgiePage.css';
import { lecturesData } from '../../mocks/lecture';
import downloadPdf from '../../utils/downloadPdf';

function LiturgiePage() {
  const location = useLocation(); // permet de récupérer les données envoyés via useNavigate
  const { infos, lecturesData } = location.state || {};
  // console.log(location.state);
  const [liturgieData, setLiturgieData] = useState({
    date: infos.date || '',
    jour: infos.jour || '',
    entite: infos.entite || '',
    fidirana: '',
    fifonana: '',
    voninahitra: '',
    boky1: lecturesData?.andininy1 || '',
    setriny: lecturesData?.setriny || '',
    boky2: lecturesData?.andininy2 || '',
    aleloia: '',
    fihobiana: '',
    boky3: lecturesData?.andininy3 || '',
  });
  const [isValidate, setIsValidate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLiturgieData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(liturgieData);
    setIsValidate(true);
  };

  return (
    <section className="liturgie-page">
      <div className="infos-liturgie">
        <h2>Informations générales</h2>
        <div>
          <div className="item">
            <label htmlFor="date">Daty</label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={handleChange}
              value={liturgieData.date}
            />
          </div>
          <div className="item">
            <label htmlFor="jour">Andro</label>
            <input
              type="text"
              id="jour"
              name="jour"
              onChange={handleChange}
              value={liturgieData.jour}
            />
          </div>
          <div className="item">
            <label htmlFor="entite">Vondrona</label>
            <input
              type="text"
              id="entite"
              name="entite"
              onChange={handleChange}
              value={liturgieData.entite}
            />
          </div>
        </div>
      </div>
      <div id="pdf-content">
        <LiturgieForm
          liturgieData={liturgieData}
          setLiturgieData={setLiturgieData}
          handleSubmit={handleSubmit}
        />
      </div>
      {isValidate && (
        <button className="btn-pdf" onClick={() => downloadPdf()}>
          Télécharger en pdf
        </button>
      )}
    </section>
  );
}

export default LiturgiePage;

//http://72.61.166.33:5000/index.html
