import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* HEADER BRAND */}
      <div className="sidebar-brand">
        <img src="/logo.png" alt="FKMP logo" />
        <span className="brand-text">FKMP</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/lecture">Fanomanana litorjia</NavLink>
        <NavLink to="/calendrier">Kalandrie litorjika</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
