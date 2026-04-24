import { useEffect } from "react";

function Hero() {

  useEffect(() => {
    const pw = document.getElementById("profileWrapper");

    if (!pw) return;

    const colors = ["#38bdf8", "#7c3aed", "#10b981"];

    for (let i = 0; i < 10; i++) {
      const p = document.createElement("div");
      p.className = "pparticle";
      p.style.setProperty("--s", `${(i / 10) * 360}deg`);
      p.style.setProperty("--r", `${90 + i * 5}px`);
      p.style.background = colors[i % colors.length];
      pw.appendChild(p);
    }
  }, []);

  return (
   <section id="hero">
  <div class="hero-text">
    <p class="hero-greeting">Hello, It's Me</p>
    <h1 class="hero-name">Fathima Sahla</h1>
    <p class="hero-title">BSc Hons Information Technology</p>
    <p class="hero-desc">An IT undergraduate at the University of Moratuwa with a passion for software development, web design, and technology innovation — driven by the challenge of solving complex problems.</p>
    <div class="hero-cta">
      <a href="#projects" class="btn-primary">View Projects</a>
      <a href="#contact" class="btn-outline">Get In Touch</a>
    </div>
    <div class="hero-socials">
      <a href="mailto:asfathimasahla@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
      <a href="https://www.linkedin.com/in/fathima-sahla-159255288/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/FathimaSahlaAS" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
    </div>
  </div>
  <div class="hero-visual">
    <div class="profile-3d-wrapper" id="profileWrapper">
      <div class="profile-ring"></div>
      <div class="profile-ring"></div>
      <div class="profile-ring"></div>
      <div class="profile-hex"></div>
      <div class="profile-img-container">
        
        <img src="https://ui-avatars.com/api/?name=Fathima+Sahla&size=300&background=0a1628&color=38bdf8&bold=true&font-size=0.32" alt="Fathima Sahla"></img>
      </div>
      <div class="profile-glow"></div>
    </div>
  </div>
</section>
  );
}

export default Hero;