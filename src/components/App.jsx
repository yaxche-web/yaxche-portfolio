// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Page404Page from '../pages/Page404';
import '../styles/Global.scss'; // Import du fichier Global.scss



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Page404Page />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;