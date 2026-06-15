import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import LiturgieForm from '../../components/liturgieForm/LiturgieForm';
import './liturgiePage.css';
import downloadPdf from '../../utils/downloadPdf';
import LiturgiePdfTemplate from '../../components/pdf/LiturgiePdfTemplate';
import { useLiturgie } from '../../context/LiturgieContext';
import ElementRender from '../../components/liturgie/elementRender/ElementRender';
import { buildLiturgiePayload } from '../../utils/buildLiturgiePayload';
import { createLiturgie } from '../../services/liturgieService';
import { buildLiturgieElements } from '../../utils/buildLiturgieElements';
import { mockElementsLiturgie } from '../../mocks/mockElementsLiturgie';
import { useInfos } from '../../context/InfosContext';
import { useElements } from '../../context/ElementsContext';

function LiturgiePage() {
  // Appel des variables contexts
  const { infosLiturgie, setInfosLiturgie } = useInfos();
  const { elements, setElements } = useElements();

  // validation pdf
  const [isValidate, setIsValidate] = useState(false);

  // console.log('lecturesDuJour LiturgiePage', lecturesDuJour);
  // console.log('elements: ', elements);

  // pour tester
  const loadDemoData = () => {
    setElements(mockElementsLiturgie);
  };

  // State warning pour ne pas perdre de données
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // -----------------------------
  // CRUD CHANT/LECTURES/Autre...
  // -----------------------------
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
  // SAVE LITURGIE
  // -----------------------------
  const handleSaveLiturgie = async () => {
    try {
      const payload = buildLiturgiePayload(
        infosLiturgie,
        lecturesDuJour,
        elements,
      );
      console.log(payload);

      // const res = await createLiturgie(payload);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
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
    handleSaveLiturgie();
    setIsValidate(true);
  };

  return (
    <section className="liturgie-page">
      {/*<button onClick={loadDemoData}>Charger données de test</button>*/}

      <form onSubmit={handleSubmit}>
        {/* <h2>Fanomamanana ny hira</h2> */}
        {/* ===================== */}
        {/* 🔵 INFOS LITURGIQUES */}
        {/* ===================== */}{' '}
        <section className="infos-liturgie">
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
        </section>
        {/* ===================== */}
        {/*  ELEMENTS LITURGIE */}
        {/* ===================== */}
        <section className="liturgie-elements">
          {elements.map((element) => (
            <ElementRender key={element.id} element={element} />
          ))}
        </section>
        {/* ===================== */}
        {/* 🔵 ACTIONS */}
        {/* ===================== */}
        <section className="actions">
          <button /*onClick={handleAddChant}*/ type="button">+ Hira</button>

          <button type="submit">Valider</button>

          {isValidate && (
            <button type="button" className="btn-pdf" onClick={handleValidate}>
              Télécharger PDF
            </button>
          )}
        </section>
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
