import React from 'react';
import HeroCard from '../components/HeroCard';
import TechVisualSection from '../components/TechVisualSection';
import AIPillSection from '../components/AIPillSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CareerSection from '../components/CareerSection';
import CTASection from '../components/CTASection';
import '../App.css';
import bgImage1 from '../../assets/index2/beans_hybrid.png';

function Index2Home() {
  return (
    <div className="app-main">
      <div className="app-container">
        <div
          className="background-layer"
          style={{
            backgroundImage: `url(${bgImage1})`,
            opacity: 1
          }}
        />

        <div className="overlay"></div>
        <HeroCard currentImage={bgImage1} />
      </div>
      <TechVisualSection />
      <AIPillSection />
      <TestimonialsSection />
      <CareerSection />
      <CTASection />
    </div>
  );
}

export default Index2Home;
