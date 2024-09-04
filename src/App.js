import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

//import ParallaxSection from './components/ParallaxSection';


/*function App() {
  return (
    <div>
      <Hero />
      <Skills />
      <ParallaxSection />
      <Projects />
      <Contact />
      <About />
      <Education />
      <Experience />
      <Certificates />
    </div>
  );
}*/

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
   
  );
}

export default App;



