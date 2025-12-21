
import React, { useEffect, useState } from 'react';
import AnimatedHeroSection from '@/components/home/AnimatedHeroSection';
import ClientLogosSection from '@/components/home/ClientLogosSection';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CareersSection from '@/components/home/CareersSection';
import CtaSection from '@/components/home/CtaSection';
import TestimonialsBanner from '@/components/home/TestimonialsBanner';
import ImpactCarousel from '@/components/home/ImpactCarousel';
import PageSection from '@/components/layout/PageSection';
import {
  Code, Users, BarChart, ArrowRight, Lightbulb,
  Database, Activity, BarChart2,
  Target, ThumbsUp, Star
} from 'lucide-react';
import { Color } from 'three';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const iconCircleClasses = "w-16 h-16 mx-auto rounded-full bg-[#3F321F] flex items-center justify-center mb-4";

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`home-page transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white`}>
      <div className="bg-white">
        <AnimatedHeroSection />
      </div>

      <div className="bg-gray-100">
        <ClientLogosSection />
      </div>

      {/* Alternating white and light grey sections */}
      <div className="bg-white">
        <AboutSection invertColors={true} />
      </div>

      <div className="bg-gray-100">
        <StatsSection />
      </div>

      <div className="bg-white">
        <ServicesSection invertColors={true} />
      </div>

      {/* Enhanced testimonials banner with light theme */}
      {/* <div className="bg-gray-100">
        <TestimonialsBanner />
      </div> */}

      {/* Impact carousel section with light theme */}
      <div className="bg-white py-12 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#3F321F] text-center">Success Stories</h2>

          {/* Animated background elements with light theme colors */}
          <div className="absolute inset-0 z-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px w-20 bg-gradient-to-r from-transparent via-[#3F321F] to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: Math.random() * 0.5 + 0.5
                }}
              ></div>
            ))}
          </div>

          <ImpactCarousel />
        </div>
      </div>

      <PageSection>
        <div className="container mx-auto text-center max-w-6xl">

          {/* Main Heading and Sub-text */}
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-gray-900">
            <span className="text-gray-700">Bean Infosystems is a preferred partner for</span>
            <br className="hidden sm:inline" />
            <span className="text-[#3F321F]">Fortune 100 companies</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Engineered for the complex demands of global enterprises: merging cutting-edge AI with governance precision, operational resilience, and uncompromising accountability.
          </p>

          {/* Three Value Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

            {/* 1. Obsessive Customer Focus */}
            <div className="p-4">
              <div className={iconCircleClasses}>
                <Target size={30} color='white' />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Obsessive customer focus</h3>
              <p className="text-gray-600 text-sm">
                Intuitively designed to align effortlessly within your existing workflows & environment
              </p>
            </div>

            {/* 2. Proven Value - Delivery */}
            <div className="p-4">
              <div className={iconCircleClasses}>
                <ThumbsUp size={30} color='white' />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Proven value- delivery</h3>
              <p className="text-gray-600 text-sm">
                Proven track record of delivering Mn$ value to our enterprise customers.
              </p>
            </div>

            {/* 3. Industry Leading Expertise */}
            <div className="p-4">
              <div className={iconCircleClasses} style={{ backgroundColor: 'blue !important' }}>
                <Star size={30} color='white' />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Industry leading expertise</h3>
              <p className="text-gray-600 text-sm">
                Extensive experience with AI/ML technologies, before AI became mainstream.
              </p>
            </div>
          </div>

        </div>
      </PageSection>

      <div className="bg-white">
        <CareersSection />
      </div>

      <div className="bg-gray-100">
        <CtaSection invertColors={true} />
      </div>
    </div>
  );
};

export default Home;
