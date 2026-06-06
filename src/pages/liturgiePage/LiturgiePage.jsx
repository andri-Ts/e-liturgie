import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import LiturgieForm from '../../components/liturgieForm/LiturgieForm';
import './liturgiePage.css';
import downloadPdf from '../../utils/downloadPdf';
import LiturgiePdfTemplate from '../../components/pdf/LiturgiePdfTemplate';
import { useLiturgie } from '../../context/LiturgieContext';
import ElementRender from '../../components/liturgie/elementRender/ElementRender';

function LiturgiePage() {
  const {
    infosLiturgie,
    setInfosLiturgie,
    lecturesDuJour,
    elements,
    addElement,
  } = useLiturgie(); // Context global
  const [isValidate, setIsValidate] = useState(false); // validation pdf

  // Fonction pour créer un chant
  const handleAddChant = () => {
    addElement({
      id: crypto.randomUUID(),
      type: 'chant',
      label: 'Hira vaovao',
      data: {
        titre: '',
        page: '',
      },
    });
  };

  // -----------------------------
  // MODIFICATION INFOS (header)
  // -----------------------------
  const handleChangeInfos = (e) => {
    const { name, value } = e.target;
    setInfosLiturgie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------
  // PDF
  // -----------------------------
  const handleValidate = () => {
    downloadPdf();
    setIsValidate(false);
  };

  // -----------------------------
  // SUBMIT FORM
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(liturgieData);
    setIsValidate(true);
  };

  return (
    <section className="liturgie-page">
      <form onSubmit={handleSubmit}>
        <h2>Fanomamanana ny hira</h2>
        {/* ===================== */}
        {/* 🔵 INFOS LITURGIQUES */}
        {/* ===================== */}{' '}
        <div className="infos-liturgie">
          <div className="item">
            <label htmlFor="date">Daty</label>
            <input
              type="date"
              id="date"
              name="dateMesse"
              // onChange={handleChange}
              value={infosLiturgie.dateMesse}
              readOnly
            />
          </div>
          <div className="item">
            <label htmlFor="jour">Andro</label>
            <input
              type="text"
              id="jour"
              name="jourLiturgique"
              onChange={handleChangeInfos}
              value={infosLiturgie.jourLiturgique}
              // readOnly
            />
          </div>
          <div className="item">
            <label htmlFor="entite">Vondrona</label>

            <input
              type="text"
              id="entite"
              name="entite"
              onChange={handleChangeInfos}
              value={infosLiturgie.entite}
            />
          </div>
        </div>
        {/* ===================== */}
        {/*  ELEMENTS LITURGIE */}
        {/* ===================== */}
        <div className="liturgie-elements">
          {elements.map((element) => (
            <ElementRender key={element.id} element={element} />
          ))}
        </div>
        {/* ===================== */}
        {/* 🔵 ACTIONS */}
        {/* ===================== */}
        <div className="actions">
          <button onClick={handleAddChant} type="button">
            + Hira
          </button>
          <button type="submit">Valider</button>

          {isValidate && (
            <button type="button" className="btn-pdf" onClick={handleValidate}>
              Télécharger PDF
            </button>
          )}
        </div>
        {/* ===================== */}
        {/* PDF HIDDEN */}
        {/* ===================== */}
        {isValidate && (
          <div
            style={{
              position: 'absolute',
              left: '-9999px',
              top: 0,
            }}
          >
            <LiturgiePdfTemplate
              infosLiturgie={infosLiturgie}
              elements={elements}
            />
          </div>
        )}
      </form>
    </section>
  );
}

export default LiturgiePage;
