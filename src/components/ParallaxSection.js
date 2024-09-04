import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxSection = () => (
  <Parallax bgImage="path-to-your-image.jpg" strength={500}>
    <div style={{ height: '500px' }}>
      <h2 style={{ textAlign: 'center', color: 'white', paddingTop: '200px' }}>Explore My Work</h2>
    </div>
  </Parallax>
);

export default ParallaxSection;
