import React from 'react';

const About = () => {
  return (
    <section id="about">
  <div class="section-header fade-in">
    <div class="section-tag">Who I am</div>
    <h2 class="section-title">About Me</h2>
  </div>
  <div class="about-inner fade-in">
    <div class="about-img-side">
      <div class="about-img-frame">
        <img src="https://ui-avatars.com/api/?name=Fathima+Sahla&size=400&background=0a1628&color=38bdf8&bold=true&font-size=0.3" alt="Fathima Sahla"></img>
      </div>
    </div>
    <div class="about-content">
      <p>I am an enthusiastic and fast-learning individual with a strong interest in the IT field, aspiring to become a Software Engineer. I am eager to gain hands-on experience in a professional environment where I can learn from experienced professionals and contribute my passion for technology.</p>
      <p>I am driven by the challenge of solving complex problems and am excited to bring my creativity and technical curiosity to a dynamic team, helping to create innovative solutions that make a real impact.</p>
      <div class="about-stats">
        <div class="stat-box"><div class="stat-num">6+</div><div class="stat-label">Projects</div></div>
        <div class="stat-box"><div class="stat-num">6mo</div><div class="stat-label">Internship</div></div>
        <div class="stat-box"><div class="stat-num">10+</div><div class="stat-label">Technologies</div></div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;