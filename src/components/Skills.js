import React from 'react';

const Skills = () => {

  return (
   <section id="skills">
  <div className="section-header fade-in">
    <div className="section-tag">What I know</div>
    <h2 className="section-title">Skills</h2>
  </div>

  <div className="skills-grid fade-in">

    {/* LEFT CARD */}
    <div className="glass-card">
      <div className="skill-category-title">
        <i className="fas fa-code"></i> Technical Skills
      </div>

      {/* Languages */}
      <div style={{ marginBottom: "1.3rem" }}>
        <div style={{
          fontSize: "0.74rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "var(--muted)",
          marginBottom: "0.6rem"
        }}>
          Languages
        </div>

        <div className="skill-chips">
          <span className="chip">Java</span>
          <span className="chip">C</span>
          <span className="chip">Python</span>
          <span className="chip">Dart</span>
        </div>
      </div>

      {/* Web & Mobile */}
      <div style={{ marginBottom: "1.3rem" }}>
        <div style={{
          fontSize: "0.74rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "var(--muted)",
          marginBottom: "0.6rem"
        }}>
          Web & Mobile
        </div>

        <div className="skill-chips">
          <span className="chip">React</span>
          <span className="chip">React Native</span>
          <span className="chip">Next.js</span>
          <span className="chip">Flutter</span>
          <span className="chip">HTML</span>
          <span className="chip">CSS</span>
          <span className="chip">Tailwind CSS</span>
          <span className="chip">JavaScript</span>
          <span className="chip">Node.js</span>
          <span className="chip">Django</span>
        </div>
      </div>

      {/* Database */}
      <div style={{ marginBottom: "1.3rem" }}>
        <div style={{
          fontSize: "0.74rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "var(--muted)",
          marginBottom: "0.6rem"
        }}>
          Database
        </div>

        <div className="skill-chips">
          <span className="chip">MySQL</span>
          <span className="chip">SQLite</span>
          <span className="chip">MsSQL</span>
          <span className="chip">MongoDB</span>
        </div>
      </div>

      {/* Tools */}
      <div>
        <div style={{
          fontSize: "0.74rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "var(--muted)",
          marginBottom: "0.6rem"
        }}>
          Tools & Cloud
        </div>

        <div className="skill-chips">
          <span className="chip">Git</span>
          <span className="chip">GitHub</span>
          <span className="chip">AWS S3</span>
          <span className="chip">VS Code</span>
          <span className="chip">IntelliJ</span>
          <span className="chip">Blender</span>
          <span className="chip">Canva</span>
        </div>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div className="glass-card">
      <div className="skill-category-title">
        <i className="fas fa-users"></i> Soft Skills
      </div>

      <div className="soft-skills-list">
        <div className="soft-item"><i className="fas fa-clock"></i> Time Management</div>
        <div className="soft-item"><i className="fas fa-handshake"></i> Team Collaboration</div>
        <div className="soft-item"><i className="fas fa-brain"></i> Critical Thinking</div>
        <div className="soft-item"><i className="fas fa-puzzle-piece"></i> Problem Solving</div>
        <div className="soft-item"><i className="fas fa-comments"></i> Communication</div>
        <div className="soft-item"><i className="fas fa-sync-alt"></i> Adaptability</div>
      </div>
    </div>

  </div>
</section>
  );
};

export default Skills;