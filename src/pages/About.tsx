
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
import CTASection from '@/index2/components/CTASection';
import {
  Lightbulb,
  Target,
  Heart,
  Users,
  Wrench,
  Edit,
  Share2,
  Map,
  Calendar,
  Building,
  Globe,
  Rocket,
  Zap,
  BookOpen
} from 'lucide-react';

const About = () => {

  const timeline = [
    {
      year: "2016",
      title: "Founding",
      description: "Bean Infosystems was founded with a clear vision to create innovative software that helps businesses work smarter and grow faster.",
      icon: <Building size={24} />
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Enhanced our services with consulting and advisory capabilities to better support client needs.",
      icon: <Rocket size={24} />
    },
    {
      year: "2018",
      title: "Global Presence",
      description: "Opened a technology-focused Offshore Development Center in India.",
      icon: <Globe size={24} />
    },
    {
      year: "2019",
      title: "SocialBirds Launch",
      description: "Rolled out \"SocialBirds.org,\" a platform built to bridge philanthropists and nonprofit organizations.",
      icon: <Zap size={24} />
    },
    {
      year: "2023",
      title: "AI Transformation",
      description: "Pivoted to helping businesses navigate AI-driven digital transformation in a rapidly evolving landscape.",
      icon: <BookOpen size={24} />
    },
    {
      year: "Current",
      title: "Shaping Tomorrow with AI",
      description: "Advancing with next-generation AI capabilities to better support our clients' changing demands.",
      icon: <Calendar size={24} />
    }
  ];

  const officeImages = [
    {
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop",
      title: "USA Office",
      description: "Our headquarters driving innovation and client partnerships"
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
      title: "India Office",
      description: "Our technology-focused Offshore Development Center"
    },
    {
      image: "https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?q=80&w=800&auto=format&fit=crop",
      title: "Remote",
      description: "Our global team collaborating across time zones"
    }
  ];

  return (
    <>
      <PageHero
        title="About Bean Infosystems"
        subtitle="Driving digital transformation through innovation and expertise"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Company Overview - Modern Split Design */}
      <div className="relative overflow-hidden bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-bean/10 border border-bean/20">
                  <span className="text-sm font-medium text-bean">AI Transformation</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Transforming Ideas into
                  <span className="block text-bean">Digital Reality</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-bean rounded-full"></div>
                  <div className="pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Foundation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Founded in 2016, Bean Infosystems has evolved from a small development team into a global technology partner. Our growth is driven by a commitment to innovation, quality and measurable results.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-bean rounded-full"></div>
                  <div className="pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Evolution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We have built a strong reputation for delivering high-performance software solutions that address complex business challenges. As our capabilities expanded, we incorporated AI-driven technologies, strategic consulting and digital advisory services.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-bean rounded-full"></div>
                  <div className="pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Future</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Today, we continue to advance our expertise and leverage emerging technologies to help clients stay competitive in a rapidly evolving digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Company Image */}
            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/About_Image.png"
                  alt="Bean Infosystems Team and Workspace"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Company Timeline */}
      <PageSection title="Our Journey" subtitle="A timeline of Bean Infosystem's growth and evolution">
        <div className="relative">
          {/* Timeline center line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {/* Timeline left line - shown on mobile only */}
          <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-border"></div>

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`relative md:grid md:grid-cols-2 gap-6 items-center`}>
                {/* Icon marker - positioned differently on mobile vs desktop */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-bean flex items-center justify-center text-white z-10">
                  {item.icon}
                </div>

                {/* Content - full width on mobile, half width alternating on desktop */}
                <div className={`ml-16 md:ml-0 md:text-right ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16 md:text-left'}`}>
                  <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-bean/30 transition-all duration-300">
                    <div className="text-bean text-sm font-semibold mb-2">{item.year}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/70">{item.description}</p>
                  </div>
                </div>

                <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                  {/* Empty space to maintain grid alignment on desktop */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Our Approach - Workflow Design */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-32" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #C19A6B 50%, #3B2416 100%)' }}>
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              How we deliver exceptional results for our clients through our proven methodology
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Desktop Workflow - Horizontal */}
            <div className="hidden lg:flex items-center justify-center">
              {/* Step 1 - Discovery */}
              <div className="flex flex-col items-center max-w-xs mx-4">
                <div className="relative">
                  {/* Step number circle - Glassmorphic */}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-bean/20">
                    <span className="text-gray-900 font-bold text-xl">1</span>
                  </div>
                </div>
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white/95 transition-all duration-300 text-center shadow-lg">
                  <div className="text-bean mb-4 flex justify-center">
                    <Edit size={40} color='rgb(193, 154, 107)' />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Discovery</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We begin with a thorough discovery process to understand your business objectives, challenges, and requirements.
                  </p>
                </Card>
              </div>

              {/* Arrow between steps */}
              <div className="mx-4 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                  <defs>
                    <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2D1810" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#1F1108" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0F0804" stopOpacity="1" />
                    </linearGradient>
                    <filter id="arrowShadow1" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(31, 17, 8, 0.5)" />
                    </filter>
                  </defs>
                  {/* Arrow body with 3D effect */}
                  <rect x="8" y="12" width="24" height="8" rx="4" fill="url(#arrowGradient1)" filter="url(#arrowShadow1)" />
                  <rect x="10" y="14" width="20" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  {/* Arrow head with 3D effect */}
                  <polygon points="32,8 40,16 32,24 28,20 28,12" fill="url(#arrowGradient1)" filter="url(#arrowShadow1)" />
                  <polygon points="30,12 38,16 30,20 32,18 32,14" fill="rgba(255,255,255,0.4)" />
                  {/* Highlight line */}
                  <rect x="12" y="15" width="16" height="2" rx="1" fill="rgba(255,255,255,0.6)" />
                </svg>
              </div>

              {/* Step 2 - Strategy */}
              <div className="flex flex-col items-center max-w-xs mx-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-bean/20">
                    <span className="text-gray-900 font-bold text-xl">2</span>
                  </div>
                </div>
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white/95 transition-all duration-300 text-center shadow-lg">
                  <div className="text-bean mb-4 flex justify-center">
                    <Map size={40} color='rgb(193, 154, 107)' />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Strategy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We develop a comprehensive strategy tailored to your unique needs and aligned with your business goals.
                  </p>
                </Card>
              </div>

              {/* Arrow between steps */}
              <div className="mx-4 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                  <defs>
                    <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2D1810" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#1F1108" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0F0804" stopOpacity="1" />
                    </linearGradient>
                    <filter id="arrowShadow1" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(31, 17, 8, 0.5)" />
                    </filter>
                  </defs>
                  {/* Arrow body with 3D effect */}
                  <rect x="8" y="12" width="24" height="8" rx="4" fill="url(#arrowGradient1)" filter="url(#arrowShadow1)" />
                  <rect x="10" y="14" width="20" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  {/* Arrow head with 3D effect */}
                  <polygon points="32,8 40,16 32,24 28,20 28,12" fill="url(#arrowGradient1)" filter="url(#arrowShadow1)" />
                  <polygon points="30,12 38,16 30,20 32,18 32,14" fill="rgba(255,255,255,0.4)" />
                  {/* Highlight line */}
                  <rect x="12" y="15" width="16" height="2" rx="1" fill="rgba(255,255,255,0.6)" />
                </svg>
              </div>

              {/* Step 3 - Implementation */}
              <div className="flex flex-col items-center max-w-xs mx-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-bean/20">
                    <span className="text-gray-900 font-bold text-xl">3</span>
                  </div>
                </div>
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white/95 transition-all duration-300 text-center shadow-lg">
                  <div className="text-bean mb-4 flex justify-center">
                    <Wrench size={40} color='rgb(193, 154, 107)' />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Implementation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our expert team executes the strategy with precision, leveraging the latest technologies and best practices.
                  </p>
                </Card>
              </div>

              {/* Arrow between steps */}
              <div className="mx-4 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                  <defs>
                    <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2D1810" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#1F1108" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0F0804" stopOpacity="1" />
                    </linearGradient>
                    <filter id="arrowShadow1" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(31, 17, 8, 0.5)" />
                    </filter>
                  </defs>
                  {/* Arrow body with 3D effect */}
                  <rect x="8" y="12" width="24" height="8" rx="4" fill="url(#arrowGradient1)" filter="url(#arrowShadow1)" />
                  <rect x="10" y="14" width="20" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  {/* Arrow head with 3D effect */}
                  <polygon points="32,8 40,16 32,24 28,20 28,12" fill="url(#arrowGradient1)" filter="url(#arrowShadow1)" />
                  <polygon points="30,12 38,16 30,20 32,18 32,14" fill="rgba(255,255,255,0.4)" />
                  {/* Highlight line */}
                  <rect x="12" y="15" width="16" height="2" rx="1" fill="rgba(255,255,255,0.6)" />
                </svg>
              </div>

              {/* Step 4 - Optimization */}
              <div className="flex flex-col items-center max-w-xs mx-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-bean/20">
                  <span className="text-gray-900 font-bold text-xl">4</span>
                </div>
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white/95 transition-all duration-300 text-center shadow-lg">
                  <div className="text-bean mb-4 flex justify-center">
                    <Share2 size={40} color='rgb(193, 154, 107)' />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Optimization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We continuously monitor, analyze, and optimize to ensure sustainable results and ongoing improvement.
                  </p>
                </Card>
              </div>
            </div>

            {/* Mobile Workflow - Vertical */}
            <div className="lg:hidden space-y-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-bean rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-white/20 text-center max-w-sm shadow-lg">
                  <div className="text-bean mb-4 flex justify-center">
                    <Edit size={32} color='rgb(193, 154, 107)' />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Discovery</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We begin with a thorough discovery process to understand your business objectives, challenges, and requirements.
                  </p>
                </Card>
                <div className="my-4 hover:translate-y-1 transition-all duration-300 cursor-pointer mx-auto">
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <defs>
                      <linearGradient id="arrowGradientDown" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2D1810" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#1F1108" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0F0804" stopOpacity="1" />
                      </linearGradient>
                      <filter id="arrowShadowDown" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="rgba(31, 17, 8, 0.5)" />
                      </filter>
                    </defs>
                    {/* Arrow body with 3D effect */}
                    <rect x="8" y="4" width="8" height="20" rx="4" fill="url(#arrowGradientDown)" filter="url(#arrowShadowDown)" />
                    <rect x="10" y="6" width="4" height="16" rx="2" fill="rgba(255,255,255,0.3)" />
                    {/* Arrow head with 3D effect */}
                    <polygon points="4,24 12,32 20,24 16,28 16,26 8,26 8,28" fill="url(#arrowGradientDown)" filter="url(#arrowShadowDown)" />
                    <polygon points="8,26 12,30 16,26 14,28 14,27 10,27 10,28" fill="rgba(255,255,255,0.4)" />
                    {/* Highlight line */}
                    <rect x="11" y="8" width="2" height="14" rx="1" fill="rgba(255,255,255,0.6)" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-bean rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-white/20 text-center max-w-sm shadow-lg">
                  <div className="text-bean mb-4 flex justify-center">
                    <Map size={32} color='rgb(193, 154, 107)' />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Strategy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We develop a comprehensive strategy tailored to your unique needs and aligned with your business goals.
                  </p>
                </Card>
                <div className="my-4 hover:translate-y-1 transition-all duration-300 cursor-pointer mx-auto">
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <defs>
                      <linearGradient id="arrowGradientDown" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2D1810" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#1F1108" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0F0804" stopOpacity="1" />
                      </linearGradient>
                      <filter id="arrowShadowDown" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="rgba(31, 17, 8, 0.5)" />
                      </filter>
                    </defs>
                    {/* Arrow body with 3D effect */}
                    <rect x="8" y="4" width="8" height="20" rx="4" fill="url(#arrowGradientDown)" filter="url(#arrowShadowDown)" />
                    <rect x="10" y="6" width="4" height="16" rx="2" fill="rgba(255,255,255,0.3)" />
                    {/* Arrow head with 3D effect */}
                    <polygon points="4,24 12,32 20,24 16,28 16,26 8,26 8,28" fill="url(#arrowGradientDown)" filter="url(#arrowShadowDown)" />
                    <polygon points="8,26 12,30 16,26 14,28 14,27 10,27 10,28" fill="rgba(255,255,255,0.4)" />
                    {/* Highlight line */}
                    <rect x="11" y="8" width="2" height="14" rx="1" fill="rgba(255,255,255,0.6)" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-bean rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-white/20 text-center max-w-sm shadow-lg">
                  <div className="text-bean mb-4 flex justify-center">
                    <Wrench size={32} color='rgb(193, 154, 107)' />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Implementation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our expert team executes the strategy with precision, leveraging the latest technologies and best practices.
                  </p>
                </Card>
                <div className="my-4 hover:translate-y-1 transition-all duration-300 cursor-pointer mx-auto">
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <defs>
                      <linearGradient id="arrowGradientDown" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2D1810" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#1F1108" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0F0804" stopOpacity="1" />
                      </linearGradient>
                      <filter id="arrowShadowDown" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="rgba(31, 17, 8, 0.5)" />
                      </filter>
                    </defs>
                    {/* Arrow body with 3D effect */}
                    <rect x="8" y="4" width="8" height="20" rx="4" fill="url(#arrowGradientDown)" filter="url(#arrowShadowDown)" />
                    <rect x="10" y="6" width="4" height="16" rx="2" fill="rgba(255,255,255,0.3)" />
                    {/* Arrow head with 3D effect */}
                    <polygon points="4,24 12,32 20,24 16,28 16,26 8,26 8,28" fill="url(#arrowGradientDown)" filter="url(#arrowShadowDown)" />
                    <polygon points="8,26 12,30 16,26 14,28 14,27 10,27 10,28" fill="rgba(255,255,255,0.4)" />
                    {/* Highlight line */}
                    <rect x="11" y="8" width="2" height="14" rx="1" fill="rgba(255,255,255,0.6)" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-bean rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <Card className="p-6 bg-white/90 backdrop-blur-sm border border-white/20 text-center max-w-sm shadow-lg">
                  <div className="text-bean mb-4 flex justify-center">
                    <Share2 size={32} color='rgb(193, 154, 107)' />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Optimization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We continuously monitor, analyze, and optimize to ensure sustainable results and ongoing improvement.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default About;
