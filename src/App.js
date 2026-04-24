import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Academics from './components/Academics';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import Effects from './components/Effects';

const theme = {
  background: '#060d1f',
  color: '#e2e8f0',
  headingColor: '#ffffff',
  navbarBackground: 'rgba(6, 13, 31, 0.8)',
};

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 3D Tilt Logic
    const handleTilt = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-6px)`;
    };

    const resetTilt = (e) => { e.currentTarget.style.transform = ''; };

    const cards = document.querySelectorAll('.glass-card, .project-card, .exp-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', handleTilt);
      card.addEventListener('mouseleave', resetTilt);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App"> 
      <Background /> 
      <Effects />  
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Academics />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        </div>
    </ThemeProvider>
  );
}

export default App;