import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { LiturgieContextProvider } from './context/LiturgieContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiturgieContextProvider>
      <App />
    </LiturgieContextProvider>
  </StrictMode>,
);
