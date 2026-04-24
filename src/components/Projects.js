import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";

/* ─────────────────────────────────────────
   Project Data  (descriptions from actual project docs)
───────────────────────────────────────── */
const projects = [
  {
    title: "Full-Stack E-Commerce Web App",
    year: "DotTech Softwares · 2025",
    desc: "Production-ready e-commerce platform with admin dashboard, product & category management, wishlist, review system, order management, JWT auth, AWS S3 image storage, and full theme customization.",
    overview: "A production-ready full-stack e-commerce web application built during a 6-month internship, covering the complete software lifecycle from design to deployment.",
    fullDesc: `During my 6-month internship at DotTech Softwares, I designed and built a fully production-ready e-commerce web application from the ground up using Next.js, Tailwind CSS, and MongoDB.

Key Features I Developed:
• Admin Dashboard — Full CRUD for products, categories, orders, and banners with real-time stats.
• JWT Authentication — Secure login/signup flow with role-based access control for admin and users.
• AWS S3 Cloud Storage — Seamless image uploads for products and banners directly to S3 buckets.
• Wishlist & Reviews — Users can save favourite products and submit star ratings with comments.
• Order Management — End-to-end order lifecycle from cart to checkout to dispatch tracking.
• Student Management System — Additional internal module for managing staff records with JWT auth.
• Mobile Responsiveness — Fully adaptive layout across all device sizes.
• Theme Customization — Dynamic color theming for storefront branding.
• Bug Fixes — Identified and resolved 20+ production bugs before deployment.

This project gave me deep hands-on experience with real-world software engineering practices including API design, database schema design, cloud integration, and agile collaboration within a professional team.`,
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&h=250&fit=crop",
    modalImg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&h=400&fit=crop",
    badge: "Internship",
    techs: ["Next.js", "Tailwind CSS", "MongoDB", "JWT", "AWS S3"],
    github: "https://github.com/FathimaSahlaAS",
    role: "Full-Stack Developer Intern",
    duration: "Feb 2025 – Aug 2025 · 6 months",
    highlights: ["Admin Dashboard", "JWT Auth", "AWS S3", "Order Management", "20+ Bug Fixes"],
  },
  {
    title: "DataVerse — NL Data Visualization",
    year: "University · 2023/2024",
    desc: "A comprehensive web application to manage and interact with SQL databases using natural language prompts and interactive data visualizations.",
    overview: "An interactive database management and visualization tool that lets users query SQL databases using plain English and instantly see results as interactive charts.",
    fullDesc: `DataVerse is a comprehensive web application designed to simplify the management and interaction with SQL databases. It leverages React.js for the frontend and Django for the backend, providing a user-friendly interface that allows users to connect, query, and visualize data from multiple databases using natural language prompts.

My Contributions:
• Data Visualization Module — Designed and developed visually compelling and interactive chart components.
• Charts Page & Components — Created dynamic charts and tables for real-time data representation using Chart.js.
• Customization & Persistence — Implemented features for editing, saving, and viewing visualizations so user configurations are retained across sessions in SQLite.
• Data Validation — Ensured accuracy and reliability of all displayed information through frontend validation layers.
• Django REST Integration — Consumed NLP-processed backend data through REST API calls with proper error handling and loading states.

The project taught me how to bridge AI/NLP backends with rich visual frontends and gave me strong experience in React component design and data-driven UI development.`,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=250&fit=crop",
    modalImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=400&fit=crop",
    badge: "Group · L2",
    techs: ["React.js", "SQLite", "Python", "Django REST Framework", "Chart.js"],
    github: "https://github.com/FathimaSahlaAS/Dataverse",
    role: "Frontend Developer",
    duration: "Academic Year 2023/2024",
    highlights: ["NL Query Interface", "Dynamic Charts", "Real-Time Data", "Persistent Config", "Data Validation"],
  },
  {
    title: "Minor Safety Helmet",
    year: "University · 2022/2023",
    desc: "A wearable IoT helmet for miners that detects harmful gases and high temperatures in real time, with live alert systems for immediate on-site safety.",
    overview: "An IoT wearable safety helmet for miners that detects CO gas and high temperatures in real time and triggers immediate audio-visual alerts.",
    fullDesc: `The Miner's Safety Helmet is a Level 1 group project designed to improve the safety and efficiency of miners by integrating advanced sensors and communication technologies into a wearable helmet.

The helmet is equipped with features that detect harmful environmental conditions — such as dangerous gas levels and high temperatures — while providing miners with critical real-time information to enhance their safety and productivity in hazardous environments.

My Contributions:
• MQ-7 Sensor Calibration — Led the calibration of the MQ-7 sensor for accurate CO detection, ensuring reliable measurements of hazardous gas levels with programmable threshold alerts.
• DHT22 Sensor Implementation — Collaborated on implementing the DHT22 sensor to monitor temperature and humidity, enabling real-time environmental data collection.
• Environmental Data Integration — Integrated both sensors into the helmet system, providing miners with critical real-time data for detecting gas leaks and monitoring environmental conditions.
• Alert System — Dual-mode alert with audible buzzer and LED indicator lights for immediate on-site warning.
• Circuit Design — Designed PCB schematic using KiCad for a clean, compact hardware layout suitable for helmet integration.
• Firmware Development — Wrote C firmware in Atmel Studio for the ATmega microcontroller managing all sensor reading and alert logic.

This project gave me foundational experience in embedded systems, sensor integration, hardware-software co-design, and PCB layout — building a real device that addresses a genuine safety need.`,
    img: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=500&h=250&fit=crop",
    modalImg: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=900&h=400&fit=crop",
    badge: "Group · L1",
    techs: ["Arduino", "C", "Atmel Studio", "KiCad"],
    github: "https://github.com/FathimaSahlaAS/hardware-project",
    role: "Embedded Systems Developer",
    duration: "Academic Year 2022/2023",
    highlights: ["MQ-7 CO Sensor", "DHT22 Temp & Humidity", "Real-Time Alerts", "PCB Design (KiCad)", "ATmega Firmware"],
  },
  {
    title: "Personal Portfolio Website",
    year: "Solo Project · 2024",
    desc: "Responsive portfolio with 3D aurora effects, animations, glass UI and deployed via GitHub Pages.",
    overview: "A solo-built personal portfolio with immersive 3D aurora visual effects, animated profile rings, and a consistent glass morphism design system.",
    fullDesc: `A fully handcrafted personal portfolio website built solo from scratch, showcasing my work, skills, and experience with a visually distinctive dark glass morphism aesthetic.

What I Built:
• 3D Aurora Background — Multi-layered animated aurora blobs using CSS keyframes and conic gradients that drift independently across the viewport.
• Floating 3D Profile — Animated profile image with orbiting ring system, pulsing glow, and floating particles using pure CSS animations.
• Scroll-Triggered Reveals — IntersectionObserver-powered fade-slide-in animations that trigger as sections enter the viewport.
• 3D Card Tilt — mousemove event-driven perspective tilt on all project and skill cards for a physical depth feel.
• Typing Animation — CSS-only typewriter effect on the hero title using step-based keyframe animation.
• Glass Morphism UI — Consistent frosted-glass card system with blur, transparency, and subtle cyan borders.
• Fully Responsive — Mobile-first layout with graceful column stacking and touch-friendly interactions.
• Deployed via GitHub Pages — Automated CI/CD through GitHub Actions for seamless deployment.

This project represents my design philosophy: technical depth with visual elegance, built entirely without UI libraries or component kits.`,
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=250&fit=crop",
    modalImg: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=400&fit=crop",
    badge: "Personal",
    techs: ["React", "Styled Components", "CSS3", "GitHub Pages"],
    github: "https://github.com/FathimaSahlaAS/portfolio_1",
    live: "https://fathimasahlaas.github.io/portfolio_1/",
    role: "Solo Developer & Designer",
    duration: "2024",
    highlights: ["3D Aurora FX", "Particle Orbits", "Scroll Animations", "Glass Morphism", "GitHub Pages Deploy"],
  },
  {
    title: "😂 Jokes App",
    year: "University · 2025",
    desc: "Cross-platform mobile app that fetches random jokes with intelligent offline caching, pull-to-refresh, and graceful error handling across 6 platforms.",
    overview: "A Flutter cross-platform jokes app with intelligent offline caching via SharedPreferences, running on iOS, Android, macOS, Windows, Web, and Linux.",
    fullDesc: `A cross-platform mobile application (Level 3 individual project) built with Flutter and Dart that fetches and displays random jokes with intelligent offline support.

The app provides a seamless user experience with pull-to-refresh functionality, loading states, and graceful error handling that displays cached jokes when offline.

Key Features:
• REST API Integration — Fetches random jokes from the Official Joke API using the HTTP package.
• Offline Caching — Uses SharedPreferences to cache the last fetched joke batch, so the app works seamlessly without an internet connection.
• Pull-to-Refresh — Users can swipe down to fetch a fresh joke on demand with a smooth refresh animation.
• Loading States — Animated spinners provide clear visual feedback during API calls.
• Graceful Error Handling — Falls back to cached data when the network fails, with friendly error messages and retry options.
• Cross-Platform — Runs identically on iOS, Android, macOS, Windows, Web, and Linux from a single Flutter codebase.
• State Management — Built using StatefulWidget for clean, reactive UI updates.

This project deepened my Flutter skills and taught me the importance of offline-first design and graceful degradation in mobile apps.`,
    img: "https://thumbs.dreamstime.com/b/laughing-pointing-emoticon-20501720.jpg",
    modalImg: "https://thumbs.dreamstime.com/b/laughing-pointing-emoticon-20501720.jpg",
    badge: "Individual · L3",
    techs: ["Flutter", "Dart", "HTTP Package", "SharedPreferences", "Official Joke API"],
    github: "https://github.com/FathimaSahlaAS/jokes_app",
    role: "Solo Mobile Developer",
    duration: "2025",
    highlights: ["6-Platform Support", "Offline Caching", "Pull-to-Refresh", "Error Handling", "StatefulWidget"],
  },
  {
    title: "🎨 Coloring Book App",
    year: "University · 2025",
    desc: "Mobile app for digitally coloring image templates with user login, a Skia-powered drawing canvas, color picker, and full data persistence across sessions.",
    overview: "A React Native mobile coloring app with a Skia-powered GPU-accelerated canvas, user authentication, template selection, and persistent local storage.",
    fullDesc: `A feature-rich mobile coloring book application (Level 3 individual project) built with React Native and Expo that lets users digitally color image templates with a full set of drawing and customization tools.

Features:
• User Authentication — Login and Register flow with local persistence using AsyncStorage, keeping each user's drawing history separate.
• Template Library — Image selection screen with categorised coloring templates that users choose to start a coloring session.
• Drawing Canvas — Powered by Shopify's React Native Skia for smooth, GPU-accelerated drawing performance.
• Color Picker — Full color customization for selecting stroke colors before drawing.
• Data Persistence — All drawings and user sessions are saved locally with AsyncStorage so artwork is never lost between app restarts.
• Navigation — Built with React Navigation Stack for a clean, intuitive screen flow between login, template selection, and the drawing canvas.
• Gesture Support — React Native Gesture Handler and Reanimated for smooth touch interactions on the canvas.
• Cross-Platform — Runs on both Android and iOS from a single React Native codebase.

This project gave me strong experience with native drawing APIs, complex state management via React Context, and building polished mobile UX in React Native.`,
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=250&fit=crop",
    modalImg: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&h=400&fit=crop",
    badge: "Individual · L3",
    techs: ["React Native", "Expo", "Skia", "AsyncStorage", "React Navigation", "JavaScript"],
    github: "https://github.com/FathimaSahlaAS/coloring-book-app",
    role: "Solo Mobile Developer",
    duration: "2025",
    highlights: ["Skia Drawing Canvas", "User Auth", "Template Library", "Data Persistence", "Android & iOS"],
  },
];

/* ─────────────────────────────────────────
   Modal Animations
───────────────────────────────────────── */
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(60px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

/* ─────────────────────────────────────────
   Modal Styled Components
───────────────────────────────────────── */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(4, 9, 20, 0.82);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: ${fadeIn} 0.25s ease both;
  overflow-y: auto;
`;

const Modal = styled.div`
  position: relative;
  background: var(--card);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 24px;
  max-width: 720px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6), 0 0 60px rgba(56, 189, 248, 0.12);
  animation: ${slideUp} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.25); border-radius: 2px; }
`;

const ModalImg = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, var(--deep, #0a1628) 100%);
  }
`;

const ModalBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: rgba(56, 189, 248, 0.18);
  border: 1px solid rgba(56, 189, 248, 0.4);
  color: var(--cyan);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(6, 13, 31, 0.75);
  color: #e2e8f0;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
  backdrop-filter: blur(8px);

  &:hover {
    border-color: var(--cyan);
    background: rgba(56, 189, 248, 0.12);
    transform: scale(1.1);
    color: var(--cyan);
  }
`;

const ModalBody = styled.div`
  padding: 1.8rem 2rem 2rem;
`;

const ModalTitle = styled.h2`
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  background: linear-gradient(135deg, var(--white, #fff) 30%, var(--cyan, #38bdf8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.4rem;
  line-height: 1.3;
`;

const OverviewText = styled.p`
  font-size: 0.92rem;
  color: var(--text, #e2e8f0);
  line-height: 1.7;
  margin-bottom: 0.4rem;
  opacity: 0.82;
`;

const ModalMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0.8rem 0 1.2rem;
`;

const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 50px;
  font-size: 0.76rem;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.18);
  color: var(--muted, #94a3b8);

  i { color: var(--cyan, #38bdf8); font-size: 0.7rem; }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--border, rgba(100,180,255,0.15));
  margin: 1.2rem 0;
`;

const SectionLabel = styled.p`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--cyan, #38bdf8);
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1px;
    background: var(--cyan, #38bdf8);
  }
`;

const FullDesc = styled.pre`
  white-space: pre-wrap;
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  color: var(--muted, #94a3b8);
  line-height: 1.85;
`;

const HighlightRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const HighlightChip = styled.span`
  padding: 5px 13px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 500;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.25);
  color: #c084fc;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.4rem;
`;

const TechChip = styled.span`
  padding: 4px 11px;
  border-radius: 50px;
  font-size: 0.76rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: #34d399;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-top: 1px solid var(--border, rgba(100,180,255,0.15));
`;

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 22px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s;
  cursor: pointer;

  ${({ variant }) => variant === 'github' && css`
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border, rgba(100,180,255,0.15));
    color: var(--muted, #94a3b8);
    &:hover {
      border-color: var(--cyan, #38bdf8);
      color: var(--cyan, #38bdf8);
      background: rgba(56,189,248,0.06);
    }
  `}

  ${({ variant }) => variant === 'live' && css`
    background: rgba(56,189,248,0.1);
    border: 1px solid rgba(56,189,248,0.3);
    color: var(--cyan, #38bdf8);
    &:hover {
      background: rgba(56,189,248,0.22);
      box-shadow: 0 4px 20px rgba(56,189,248,0.25);
    }
  `}
`;

/* ─────────────────────────────────────────
   Modal Component
───────────────────────────────────────── */
const ProjectModal = ({ proj, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>

        {/* Hero Image */}
        <ModalImg>
          <img src={proj.modalImg || proj.img} alt={proj.title} />
          <ModalBadge>{proj.badge}</ModalBadge>
        </ModalImg>

        {/* Close Button */}
        <CloseBtn onClick={onClose} aria-label="Close">✕</CloseBtn>

        <ModalBody>

          {/* Title + one-liner overview */}
          <ModalTitle>{proj.title}</ModalTitle>
          {proj.overview && <OverviewText>{proj.overview}</OverviewText>}

          {/* Role · Duration */}
          <ModalMeta>
            {proj.role && (
              <MetaPill><i className="fas fa-user-tie" /> {proj.role}</MetaPill>
            )}
            {proj.duration && (
              <MetaPill><i className="fas fa-calendar-alt" /> {proj.duration}</MetaPill>
            )}
          </ModalMeta>

          {/* Key Highlights */}
          {proj.highlights?.length > 0 && (
            <>
              <SectionLabel>Key Highlights</SectionLabel>
              <HighlightRow>
                {proj.highlights.map((h, i) => (
                  <HighlightChip key={i}>✦ {h}</HighlightChip>
                ))}
              </HighlightRow>
            </>
          )}

          <Divider />

          {/* Full Description */}
          <SectionLabel>About this Project</SectionLabel>
          <FullDesc>{proj.fullDesc}</FullDesc>

          <Divider />

          {/* Tech Stack */}
          <SectionLabel>Tech Stack</SectionLabel>
          <TechRow>
            {proj.techs.map((t, i) => <TechChip key={i}>{t}</TechChip>)}
          </TechRow>

          {/* Links */}
          <ModalFooter>
            {proj.github && (
              <LinkBtn href={proj.github} target="_blank" rel="noreferrer" variant="github">
                <i className="fab fa-github" /> View on GitHub
              </LinkBtn>
            )}
            {proj.live && (
              <LinkBtn href={proj.live} target="_blank" rel="noreferrer" variant="live">
                <i className="fas fa-external-link-alt" /> Live Demo
              </LinkBtn>
            )}
          </ModalFooter>

        </ModalBody>
      </Modal>
    </Overlay>
  );
};

/* ─────────────────────────────────────────
   Projects Section  (cards UNCHANGED)
───────────────────────────────────────── */
const Projects = () => {
  const [selected, setSelected] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );
    const fadeEls = sectionRef.current?.querySelectorAll('.fade-in') || [];
    fadeEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="projects" ref={sectionRef}>
        <div className="section-header fade-in">
          <div className="section-tag">What I built</div>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid fade-in">
          {projects.map((proj, index) => (
            <div
              className="project-card"
              key={index}
              onClick={() => setSelected(proj)}
              style={{ cursor: 'pointer' }}
            >
              {/* ── Image (unchanged) ── */}
              <div className="project-img">
                <img src={proj.img} alt={proj.title} />
                <div className="project-img-overlay" />
                <div className="project-badge" style={proj.badgeStyle || {}}>
                  {proj.badge}
                </div>
              </div>

              {/* ── Body (unchanged) ── */}
              <div className="project-body">
                <div className="project-title">{proj.title}</div>
                <div className="project-year">{proj.year}</div>
                <p className="project-desc">{proj.desc}</p>

                <div className="project-techs">
                  {proj.techs.map((tech, i) => (
                    <span className="tech-chip" key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link github"
                      onClick={e => e.stopPropagation()}
                    >
                      <i className="fab fa-github" /> GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link live"
                      onClick={e => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt" /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popup Modal ── */}
      {selected && (
        <ProjectModal proj={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default Projects;