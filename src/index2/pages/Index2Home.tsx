import React from 'react';
import HeroCard from '../components/HeroCard';
import TechVisualSection from '../components/TechVisualSection';
import AIPillSection from '../components/AIPillSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CareerSection from '../components/CareerSection';
import CTASection from '../components/CTASection';
import ClientLogosSection from '@/components/home/ClientLogosSection';
import '../App.css';
import '../index.css'; // Import global styles for index2

function Index2Home() {
  return (
    <div className="index2-home">
      {/* Clean Hero Section */}
      <div className="hero-container">
        <img src="/beans_hybrid.png" alt="Hero Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <HeroCard currentImage="/beans_hybrid.png" />
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="bg-[#f9fafb]">
        <ClientLogosSection />
      </div>

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
