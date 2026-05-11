import React, { useState } from 'react';
import './liturgieForm.css';

function LiturgieForm({ liturgieData, setLiturgieData }) {
  const handleChange = (e) => {
    const { name, value } = e.target; // contient les valeurs tapés par l'useSearchParams
    setLiturgieData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="liturgie-form">
      {/* <h2>Hira</h2> */}
      <div className="item">
        <label htmlFor="fidirana">Fidirana</label>
        <input
          type="text"
          id="fidirana"
          name="fidirana"
          onChange={handleChange}
          value={liturgieData.fidirana}
        />
      </div>
      <div className="item">
        <label htmlFor="fifonana">Fifonana</label>
        <input
          type="text"
          id="fifonana"
          name="fifonana"
          onChange={handleChange}
          value={liturgieData.fifonana}
        />
      </div>
      <div className="item">
        <label htmlFor="voninahitra">Voninahitra</label>
        <input
          type="text"
          id="voninahitra"
          name="voninahitra"
          onChange={handleChange}
          value={liturgieData.voninahitra}
        />
      </div>
      <div className="item">
        <label htmlFor="boky1">Vakiteny 1</label>
        <input
          type="text"
          id="boky1"
          name="boky1"
          onChange={handleChange}
          value={liturgieData.boky1}
        />
      </div>
      <div className="item">
        <label htmlFor="setriny">Setriny</label>
        <input
          type="text"
          id="setriny"
          name="setriny"
          onChange={handleChange}
          value={liturgieData.setriny}
        />
      </div>
      <div className="item">
        <label htmlFor="salamo">Salamo</label>
        <input
          type="text"
          id="salamo"
          name="salamo"
          onChange={handleChange}
          value={liturgieData.salamo}
        />
      </div>
      <div className="item">
        <label htmlFor="boky2">Vakiteny 2</label>
        <input
          type="text"
          id="boky2"
          name="boky2"
          onChange={handleChange}
          value={liturgieData.boky2}
        />
      </div>
      <div className="item">
        <label htmlFor="aleloia">aleloia</label>
        <input
          type="text"
          id="aleloia"
          name="aleloia"
          onChange={handleChange}
          value={liturgieData.aleloia}
        />
      </div>
      <div className="item">
        <label htmlFor="fihobiana">Fihobiana ny evanjely</label>
        <input
          type="text"
          id="fihobiana"
          name="fihobiana"
          onChange={handleChange}
          value={liturgieData.fihobiana}
        />
      </div>
      <div className="item">
        <label htmlFor="evanjely">evanjely</label>
        <input
          type="text"
          id="boky3"
          name="boky3"
          onChange={handleChange}
          value={liturgieData.boky3}
        />
      </div>
      <div className="item">
        <label htmlFor="credo">Fiekem-pinoana</label>
        <input
          type="text"
          id="credo"
          name="credo"
          onChange={handleChange}
          value={liturgieData.credo}
        />
      </div>
      <div className="item">
        <label htmlFor="ranombavaka">Ranombavaka</label>
        <input
          type="text"
          id="ranombavaka"
          name="ranombavaka"
          onChange={handleChange}
          value={liturgieData.ranombavaka}
        />
      </div>
      <div className="item">
        <label htmlFor="rakitra">Rakitra</label>
        <input
          type="text"
          id="rakitra"
          name="rakitra"
          onChange={handleChange}
          value={liturgieData.rakitra}
        />
      </div>
      <div className="item">
        <label htmlFor="fanolorana">Fanolorana</label>
        <input
          type="text"
          id="fanolorana"
          name="fanolorana"
          onChange={handleChange}
          value={liturgieData.fanolorana}
        />
      </div>
      <div className="item">
        <label htmlFor="masina">Masina</label>
        <input
          type="text"
          id="masina"
          name="masina"
          onChange={handleChange}
          value={liturgieData.masina}
        />
      </div>
      <div className="item">
        <label htmlFor="anamnese">Anamnèse</label>
        <input
          type="text"
          id="anamnese"
          name="anamnese"
          onChange={handleChange}
          value={liturgieData.anamnese}
        />
      </div>
      <div className="item">
        <label htmlFor="rainay">Rainay</label>
        <input
          type="text"
          id="rainay"
          name="rainay"
          onChange={handleChange}
          value={liturgieData.rainay}
        />
      </div>
      <div className="item">
        <label htmlFor="faidanana">Fiadanana</label>
        <input
          type="text"
          id="faidanana"
          name="faidanana"
          onChange={handleChange}
          value={liturgieData.faidanana}
        />
      </div>
      <div className="item">
        <label htmlFor="zanak_ondry">Zanak'ondry</label>
        <input
          type="text"
          id="zanak_ondry"
          name="zanak_ondry"
          onChange={handleChange}
          value={liturgieData.zanak_ondry}
        />
      </div>
      <div className="item">
        <label htmlFor="credo">Komonio</label>
        <input
          type="text"
          id="komonio"
          name="komonio"
          onChange={handleChange}
          value={liturgieData.komonio}
        />
      </div>
      <div className="item">
        <label htmlFor="fisaorana">Fisaorana</label>
        <input
          type="text"
          id="fisaorana"
          name="fisaorana"
          onChange={handleChange}
          value={liturgieData.fisaorana}
        />
      </div>
      <div className="item">
        <label htmlFor="fanirahana">Fanirahana</label>
        <input
          type="text"
          id="fanirahana"
          name="fanirahana"
          onChange={handleChange}
          value={liturgieData.fanirahana}
        />
      </div>
    </section>
  );
}

export default LiturgieForm;
