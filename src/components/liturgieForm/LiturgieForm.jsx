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
      <h2>Hira</h2>
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
        <label htmlFor="fifonana">fifonana</label>
        <input
          type="text"
          id="fifonana"
          name="fifonana"
          onChange={handleChange}
          value={liturgieData.fifonana}
        />
      </div>
      <div className="item">
        <label htmlFor="voninahitra">voninahitra</label>
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
        <label htmlFor="setriny">setriny</label>
        <input
          type="text"
          id="setriny"
          name="setriny"
          onChange={handleChange}
          value={liturgieData.setriny}
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
        <label htmlFor="fihobiana">fihobiana</label>
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
    </section>
  );
}

export default LiturgieForm;
