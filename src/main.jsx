// Composant principal : point d'entrée de l'application React
// Monte l'application dans la page, applique le routage et les styles globaux

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import './utils/styles/main.css';
import AppRouter from './components/Router/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Fournit le routage à toute l'application */}
    <Router>
      {/* Définit toutes les routes de l'application */}
      <AppRouter />
    </Router>
  </StrictMode>
);
