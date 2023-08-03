// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Page404 from './components/Page404';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route component={Page404} />
        </Routes>
    </Router>
  );
};

export default App;
