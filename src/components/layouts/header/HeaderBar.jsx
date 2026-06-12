import React, { useEffect, useState } from 'react';
import './headerBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HeaderBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      let isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up: quand le composant est détruit, on enlève le listener pour éviter fuite de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const titles = {
    '/': '🏠 Accueil',
    '/fanomanana-litorjia/vakiteny': '📖 Fanomanana vakiteny',
    '/fanomanana-litorjia/hira': '📖 Fanomanana hira',
    '/kalandrie': 'Kalendrie',
  };

  return (
    <header className={`page-header ${scrolled ? 'page-header--glass' : ''}`}>
      <h1>{titles[location.pathname] || 'Page'}</h1>

      <button onClick={() => navigate('/fanomanana-litorjia/vakiteny')}>
        + Nouvelle liturgie
      </button>
    </header>
  );
}

export default HeaderBar;
