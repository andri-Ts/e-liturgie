import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        {/* HEADER BRAND */}
        <div className="sidebar-brand">
          <img src="/logo.png" alt="FKMP logo" />
          <span className="brand-text">FKMP</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" onClick={onClose}>
            Accueil
          </NavLink>
          <NavLink to="/fanomanana-litorjia/vakiteny" onClick={onClose}>
            Fanomanana litorjia
          </NavLink>
          <NavLink to="/calendrier" onClick={onClose}>
            Kalandrie litorjika
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
