import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<h2>Page not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
