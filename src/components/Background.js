import { useEffect } from "react";

function Background() {
  useEffect(() => {
    const starsEl = document.getElementById('stars');
    if (!starsEl) return;

    starsEl.innerHTML = "";

    for (let i = 0; i < 120; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 4 + "s";
      starsEl.appendChild(s);
    }
  }, []);

  return (
    <>
      <div className="bg-canvas">
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
        <div className="stars" id="stars"></div>
      </div>
      <div className="grid-overlay"></div>
    </>
  );
}

export default Background;