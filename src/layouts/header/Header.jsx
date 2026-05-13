import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to={'/'}>FKMP</Link>
      </h1>
      <p>
        <Link to={'/lecture'}>
          <strong>Fanomanana litorjia</strong>
        </Link>
      </p>
    </header>
  );
}

export default Header;
