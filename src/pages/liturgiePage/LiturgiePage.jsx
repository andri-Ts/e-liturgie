import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LiturgieForm from '../../components/liturgieForm/LiturgieForm';
import './liturgiePage.css';
import downloadPdf from '../../utils/downloadPdf';
import LiturgiePdfTemplate from '../../components/pdf/LiturgiePdfTemplate';

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
    setriny: '',
    salamo: lecturesData?.setriny || '',
    boky2: lecturesData?.andininy2 || '',
    aleloia: '',
    fihobiana: '',
    boky3: lecturesData?.andininy3 || '',
    credo: 'Tononina' || '',
    ranombavaka: '',
    rakitra: '',
    fanolorana: '',
    masina: '',
    anamnese: '',
    rainay: '',
    fiadanana: '',
    zanak_ondry: '',
    komonio: '',
    fisaorana: '',
    fanirahana: '',
  });
  const [isValidate, setIsValidate] = useState(false);

  // appel la fonction pdf
  const handleValidate = () => {
    downloadPdf();
    setIsValidate(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLiturgieData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(liturgieData);
    setIsValidate(true);
  };

  return (
    <section className="liturgie-page">
      <h2>Fanomamanana ny hira</h2>
      <form onSubmit={handleSubmit}>
        {/* PDF */}
        <div id="pdf-content">
          <div className="infos-liturgie">
            <div className="item">
              <label htmlFor="date">Daty</label>

              <input
                type="date"
                id="date"
                name="date"
                onChange={handleChange}
                value={liturgieData.date}
                readOnly
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
                readOnly
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

          <LiturgieForm
            liturgieData={liturgieData}
            setLiturgieData={setLiturgieData}
          />
        </div>

        {/* ACTIONS */}
        <div className="actions">
          <button type="submit">Valider</button>

          {isValidate && (
            <button type="button" className="btn-pdf" onClick={handleValidate}>
              Télécharger PDF
            </button>
          )}
        </div>

        {/* 👇 PDF RENDER (HIDDEN POUR EXPORT UNIQUEMENT) */}
        {isValidate && (
          <div
            style={{
              position: 'absolute',
              left: '-9999px',
              top: 0,
            }}
          >
            <LiturgiePdfTemplate data={liturgieData} />
          </div>
        )}
      </form>
    </section>
  );
}

export default LiturgiePage;
