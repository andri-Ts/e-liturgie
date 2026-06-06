import React from 'react';
import LectureForm from '../lectureForm/LectureForm';
import ChantForm from '../chantForm/ChantForm';
import { useLiturgie } from '../../../context/LiturgieContext';

function ElementRender({ element }) {
  const { updateElement } = useLiturgie(); // pour ecrire dans le formuliare du chant

  switch (element.type) {
    case 'lecture':
    case 'psaume':
      return <LectureForm element={element} />;

    case 'chant':
      return <ChantForm element={element} updateElement={updateElement} />;

    default:
      return null;
  }
}

export default ElementRender;
