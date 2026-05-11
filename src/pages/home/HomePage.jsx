import React from 'react';
import { Link } from 'react-router-dom';

import './homePage.css';

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-card">
        <h1>Fanomanana Litorjia</h1>

        <p>
          Application simple pour préparer les chants et lectures de la messe.
        </p>

        <Link to="/lecture" className="start-btn">
          Commencer
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
