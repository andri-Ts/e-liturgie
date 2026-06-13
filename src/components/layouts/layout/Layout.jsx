import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';
import './layout.css';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/HeaderBar';
import ScrollToTop from '../ScrollToTop';
import HeaderBar from '../header/HeaderBar';

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content">
        {/* <Header /> */}
        <HeaderBar onMenuClick={() => setSidebarOpen(true)} />

        <main>
          <ScrollToTop />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
