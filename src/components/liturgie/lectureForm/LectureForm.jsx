import React from 'react';

function LectureForm({ element }) {
  return (
    <div className="item">
      <label>{element.label}</label>
      <input type="text" value={element.data.reference} readOnly />
    </div>
  );
}

export default LectureForm;
