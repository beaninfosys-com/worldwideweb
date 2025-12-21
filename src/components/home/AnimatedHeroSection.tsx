
import React, { useEffect, useState,useRef } from 'react';
import HeroContent from './hero/HeroContent';
import BubbleAnimation from './hero/BubbleAnimation';

const AnimatedHeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden first-section">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/lovable-uploads/hero_section.mp4"
        poster="/lovable-uploads/hero_section.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      
      {/* Bubble Animation as a visual element */}
      <BubbleAnimation />
      
      {/* Animated dots grid for tech feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]" 
             style={{ backgroundSize: '50px 50px' }}></div>
      </div>
      
      {/* Content overlay - positioned to the right */}
      <div className="relative z-20 min-h-screen flex items-center justify-end">
        <div className="p-8 md:p-12 max-w-2xl md:max-w-4xl w-full">
          <HeroContent isLoaded={isLoaded} />
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;
