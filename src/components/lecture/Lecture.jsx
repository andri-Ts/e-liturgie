import React from 'react';
import './lecture.css';
import { getLecturesFallBackUrl } from '../../utils/getLecturesFallBackUrl';
import { useInfos } from '../../context/InfosContext';

function Lecture({ titre, ref, texte }) {
  const { infosLiturgie } = useInfos();

  return (
    <article className="lecture-card">
      <header className="lecture-header">
        <h3 className="lecture-title">{titre}</h3>

        <p className="lecture-reference">
          {ref}

          <span className="lecture-note">
            Tsy vakiana ny référence rehefa manao lamesa
          </span>
        </p>
      </header>

      <div className="lecture-body">
        <p>{texte}</p>
      </div>
    </article>
  );
}

export default Lecture;
