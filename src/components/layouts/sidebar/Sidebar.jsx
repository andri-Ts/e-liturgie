import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>FKMP</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to={'/'}>Accueil</NavLink>
        <NavLink to={'/vakiteny'}>Fanomanana litorjia</NavLink>
        <NavLink to={'/lisitra'}>Lisitra litorjia</NavLink>
      </nav>
      <div className="sidebar-footer">Paramètres</div>
    </aside>
  );
}

export default Sidebar;
