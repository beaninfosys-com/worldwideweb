import React from 'react';
import HeroCard from '../components/HeroCard';
import TechVisualSection from '../components/TechVisualSection';
import AIPillSection from '../components/AIPillSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CareerSection from '../components/CareerSection';
import CTASection from '../components/CTASection';
import '../App.css';
import '../index.css'; // Import global styles for index2
const bgImage1 = '/beans_hybrid.png';

function Index2Home() {
  return (
    <div className="index2-home">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={bgImage1}
          alt="Hero Background"
          className="hero-bg-image"
          onError={(e) => console.log('Image failed to load:', bgImage1)}
          onLoad={() => console.log('Image loaded successfully:', bgImage1)}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <HeroCard currentImage={bgImage1} />
        </div>
      </section>

      {/* Other Sections */}
      <TechVisualSection />
      <AIPillSection />
      <TestimonialsSection />
      <CareerSection />
      <CTASection />
    </div>
  );
}

export default Index2Home;
