import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';


const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


