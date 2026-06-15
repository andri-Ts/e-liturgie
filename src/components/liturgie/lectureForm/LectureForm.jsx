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
    <>
      {/* Desktop / tablette */}
      <div className="element-card">
        <div className="element-label">{element.label}</div>

        <div className="element-input">
          <input
            type="text"
            value={element.data.reference || ''}
            onChange={handleChangeRefLecture}
          />
        </div>

        <div className="element-input" />
      </div>

      {/* Mobile */}
      <div className="element-card-mobile">
        <div className="element-label">{element.label}</div>

        <div className="mobile-fields">
          <input
            type="text"
            value={element.data.reference || ''}
            onChange={handleChangeRefLecture}
          />
        </div>
      </div>
    </>
  );
}

export default LectureForm;
