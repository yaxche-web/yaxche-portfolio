// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Cv from '../pages/Cv';
import Page404Page from '../pages/Page404';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="*" element={<Page404Page />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;