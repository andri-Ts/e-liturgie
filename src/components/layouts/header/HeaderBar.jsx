import React, { useEffect, useState } from 'react';
import './headerBar.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HeaderBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
    '/lecture': '📖 Fanomanana vakiteny',
    '/liturgie': '📖 Fanomanana hira',
    '/calendrier': 'Kalendrie',
  };

  return (
    <header className={`page-header ${scrolled ? 'page-header--glass' : ''}`}>
      <h1>{titles[location.pathname] || 'Page'}</h1>

      <button>+ Nouvelle liturgie</button>
    </header>
  );
}

export default HeaderBar;
