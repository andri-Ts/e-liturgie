import React from 'react';
import './headerBar.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HeaderBar() {
  const location = useLocation();

  const titles = {
    '/': '🏠 Accueil',
    '/lecture': '📖 Fanomanana vakiteny',
    '/liturgie': '📖 Fanomanana hira',
    '/calendrier': 'Kalendrie',
  };

  return (
    <header className="page-header">
      <h1>{titles[location.pathname] || 'Page'}</h1>

      <button>+ Nouvelle liturgie</button>
    </header>
  );
}

export default HeaderBar;
