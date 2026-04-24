import { useEffect } from "react";

const Effects = () => {
  useEffect(() => {
    // ⭐ Stars
    const starsEl = document.getElementById("stars");
    if (starsEl) {
      for (let i = 0; i < 150; i++) {
        const s = document.createElement("div");
        s.className = "star";

        s.style.left = Math.random() * 100 + "%";
        s.style.top = Math.random() * 100 + "%";
        s.style.animationDelay = Math.random() * 4 + "s";
        s.style.animationDuration = 2 + Math.random() * 3 + "s";
        s.style.opacity = 0.1 + Math.random() * 0.45;

        starsEl.appendChild(s);
      }
    }

    // 🌌 Orbiting particles
    const pw = document.getElementById("profileWrapper");
    if (pw) {
      const cols = ["#38bdf8", "#7c3aed", "#10b981", "#f472b6", "#fb923c"];
      const radii = [95, 115, 135, 80, 105];

      for (let i = 0; i < 14; i++) {
        const p = document.createElement("div");
        p.className = "pparticle";

        const r = radii[i % radii.length];
        const startDeg = (i / 14) * 360;

        p.style.setProperty("--s", startDeg + "deg");
        p.style.setProperty("--r", r + "px");
        p.style.background = cols[i % cols.length];
        p.style.boxShadow = `0 0 7px ${cols[i % cols.length]}`;
        p.style.animationDuration = 6 + i * 0.8 + "s";
        p.style.animationDelay = -i * 0.6 + "s";

        pw.appendChild(p);
      }
    }

    // 👀 Scroll fade-in
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    const fadeEls = document.querySelectorAll(".fade-in");
    fadeEls.forEach((el) => obs.observe(el));

    // 🧊 3D Tilt Effect
    const cards = document.querySelectorAll(
      ".glass-card,.project-card,.exp-card,.edu-card"
    );

    cards.forEach((card) => {
      const handleMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;

        card.style.transform = `perspective(900px) rotateX(${
          -y * 7
        }deg) rotateY(${x * 7}deg) translateY(-6px)`;
      };

      const handleLeave = () => {
        card.style.transform = "";
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      // cleanup
      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });

    // 🔗 Active Nav Highlight
    const handleScroll = () => {
      const secs = document.querySelectorAll("section");
      const lks = document.querySelectorAll(".nav-links a");

      let cur = "";

      secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 220) {
          cur = s.id;
        }
      });

      lks.forEach((l) => {
        l.style.color =
          l.getAttribute("href") === "#" + cur ? "var(--cyan)" : "";
      });
    };

    window.addEventListener("scroll", handleScroll);

    // 🧹 CLEANUP (important in React)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      obs.disconnect();
    };
  }, []);

  return null; // no UI
};

export default Effects;