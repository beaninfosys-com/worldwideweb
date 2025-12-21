
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import MagneticButton from '@/components/ui/MagneticButton';


const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const words = ["Digital", "Business", "Creative", "Innovative"];

  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure muted is set before play attempt
    v.muted = true;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch (e) {
        // Autoplay might still be blocked until user interaction
        // Optional: you can add a "Tap to play" UI if needed
        console.warn("Video autoplay blocked:", e);
      }
    };

    tryPlay();
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const yPos = window.scrollY * 0.4;
        heroRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []
);

  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden first-section">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/lovable-uploads/hero_section.mp4"
        // poster="/lovable-uploads/hero_section.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
 
  {/* Content */}
  <div className="container mx-auto px-4 relative z-[3]" ref={heroRef}>
    {/* ... your existing content ... */}
  </div>
</section>

  );
};

export default HeroSection;
