import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-header fade-in">
        <div className="section-tag">My Journey</div>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline fade-in">

        {/* ITEM 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Software Engineering Intern</div>
                <div className="exp-company">DotTech Softwares</div>
              </div>
              <div className="exp-date">
                Feb 2025 – Aug 2025 · 6 months
              </div>
            </div>

            <p className="exp-desc">
              During my 6-month internship at DotTech Softwares, I built and
              contributed to a full-scale e-commerce web application using
              Next.js, Tailwind CSS, and MongoDB. Key features I developed
              include a Student Management System with JWT authentication,
              complete product and category CRUD operations, an admin dashboard
              with banner and order management, AWS S3 cloud image storage, a
              wishlist and review system, and a full user authentication flow.
              I also handled mobile responsiveness, theme customization, API
              integration, and resolved 20+ production bugs to deliver a stable,
              deployment-ready platform.
            </p>

            <div className="exp-tags">
              <span className="exp-tag">Next.js</span>
              <span className="exp-tag">Tailwind CSS</span>
              <span className="exp-tag">MongoDB</span>
              <span className="exp-tag">JWT</span>
              <span className="exp-tag">AWS S3</span>
              <span className="exp-tag">REST API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;