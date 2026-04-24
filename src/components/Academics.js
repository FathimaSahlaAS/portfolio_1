import React from 'react';

const Academics = () => {
 

  return (
   <section id="academics">
  <div className="section-header fade-in">
    <div className="section-tag">Education</div>
    <h2 className="section-title">Academics</h2>
  </div>

  <div className="edu-grid fade-in">

    {/* UNIVERSITY */}
    <div className="edu-card">
      <div className="edu-card-header">
        <div className="edu-icon uni">
          <i className="fas fa-university"></i>
        </div>
        <span className="edu-year">2022 – 2026</span>
      </div>

      <div className="edu-inst">University of Moratuwa</div>
      <div className="edu-degree">BSc Hons Information Technology</div>
      <div className="edu-detail">
        Pursuing a degree with focus on software engineering, web development, systems design, and IoT applications.
      </div>

      <span className="edu-badge badge-sgpa">✦ SGPA: 3.46 / 4.00</span>
    </div>

    {/* SCHOOL (A/L + O/L COMBINED) */}
    <div className="edu-card">
      <div className="edu-card-header">
        <div className="edu-icon al">
          <i className="fas fa-school"></i>
        </div>
        <span className="edu-year">2010 – 2018</span>
      </div>

      <div className="edu-inst">Mahmud Ladies College, Kalmunai</div>

      {/* A/L */}
      <div className="edu-degree">GCE Advanced Level — Biological Science</div>
      <div className="edu-detail">
        Physics — C, Chemistry — B, Biology — C
      </div>

      <div className="grade-pills">
        <span className="grade-pill">Physics — C</span>
        <span className="grade-pill">Chemistry — B</span>
        <span className="grade-pill">Biology — C</span>
      </div>

      {/* O/L */}
      <div className="edu-degree" style={{ marginTop: "1rem" }}>
        GCE Ordinary Level
      </div>

      <div className="edu-detail">
        Achieved outstanding results across all subjects with distinction.
      </div>

      <span className="edu-badge badge-result">🏆 9 A's</span>
    </div>

    {/* PRIMARY */}
    <div className="edu-card">
      <div className="edu-card-header">
        <div className="edu-icon primary">
          <i className="fas fa-school"></i>
        </div>
        <span className="edu-year">2005 – 2009</span>
      </div>

      <div className="edu-inst">Government Muslim Mixed School</div>
      <div className="edu-degree">Primary Education</div>
      <div className="edu-detail">
        Completed primary schooling, building a strong academic and social foundation for future studies.
      </div>
    </div>

  </div>
</section>
  );
};

export default Academics;