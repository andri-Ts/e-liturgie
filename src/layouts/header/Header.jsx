import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to={'/'}>FKMP</Link>
      </h1>
      <p>Fanomanana litorjia</p>
    </header>
  );
}

export default Header;
