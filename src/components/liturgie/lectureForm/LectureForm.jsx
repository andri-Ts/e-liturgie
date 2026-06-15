import React from 'react';
import '../elementRender/elementGlobal.css';
import { useLiturgie } from '../../../context/LiturgieContext';

function LectureForm({ element }) {
  const { updateElement } = useLiturgie();

  // Récup données user de lecture
  const handleChangeRefLecture = (e) => {
    updateElement(element.id, {
      data: {
        ...element.data,
        reference: e.target.value,
      },
    });
  };

  return (
    <div className="element-card">
      {/* LABEL */}
      <div className="element-label">{element.label}</div>

      {/* REFERENCE */}
      <div className="element-input">
        <input
          type="text"
          value={element.data.reference || ''}
          onChange={handleChangeRefLecture}
        />
      </div>

      {/* COLONNE VIDE (alignement PDF) */}
      <div className="element-input" />
    </div>
  );
}

export default LectureForm;
