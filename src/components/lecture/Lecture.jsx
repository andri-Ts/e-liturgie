import React from 'react';
import './lecture.css';

function Lecture(props) {
  return (
    <article>
      <h3>{props.titre}</h3>
      <span>{props.ref}</span>
      <p>{props.texte}</p>
    </article>
  );
}

export default Lecture;
