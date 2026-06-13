import React, { useEffect, useState } from 'react';
import './headerBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HeaderBar({ onMenuClick }) {
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
      <button className="menu-btn" onClick={onMenuClick}>
        ☰
      </button>
      <h1>{titles[location.pathname] || 'Page'}</h1>

      <button onClick={() => navigate('/fanomanana-litorjia/vakiteny')}>
        <span className="desktop-label">+ Nouvelle liturgie</span>
        <span className="mobile-label">+</span>
      </button>
    </header>
  );
}

export default HeaderBar;
