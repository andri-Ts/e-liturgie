import React from 'react';
import LectureForm from './lectureForm/LectureForm';
import ChantForm from './chantForm/ChantForm';

function ElementRender({ element }) {
  switch (element.type) {
    case 'lecture':
    case 'psaume':
      return <LectureForm element={element} />;

    case 'chant':
      return <ChantForm element={element} />;

    default:
      return null;
  }
}

export default ElementRender;
