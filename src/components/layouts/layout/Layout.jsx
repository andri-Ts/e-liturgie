import React from 'react';

import { Outlet } from 'react-router-dom';
import './layout.css';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/HeaderBar';

function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
