import React from 'react';
import '../elementRender/elementGlobal.css';

function LectureForm({ element }) {
  return (
    <div className="element-card">
      {/* LABEL */}
      <div className="element-label">{element.label}</div>

      {/* REFERENCE */}
      <div className="element-input">
        <input type="text" defaultValue={element.data.reference} />
      </div>

      {/* COLONNE VIDE (alignement PDF) */}
      <div className="element-input" />
    </div>
  );
}

export default LectureForm;
