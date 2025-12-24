
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
                  <span className="text-sm font-medium text-bean">Our Journey</span>
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

      {/* Powering Talent Across Industries */}
      <div className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powering Talent Across
              <span className="block text-bean">Industries</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We connect top talent with leading organizations across diverse industries, delivering exceptional results through our comprehensive staffing solutions.
            </p>
          </div>

          {/* Job Roles Images - Top Section */}
          <div className="mb-16">
            <div className="relative">
              <div className="job-roles-container overflow-x-auto scrollbar-hide pb-16">
                {/* First set of job role images */}

                {/* Duplicate for seamless loop */}
                <div className="flex space-x-6 min-w-max">
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per1.jpg" alt="Full Stack Developer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per2.jpg" alt="Data Scientist" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per3.jpg" alt="UX/UI Designer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per4.jpg" alt="DevOps Engineer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gradient-to-b from-bean/20 to-bean/10 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per5.webp" alt="Project Manager" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per6.webp" alt="AI/ML Engineer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per7.jpg" alt="AI/ML Engineer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per8.webp" alt="Cyber Security" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per9.jpg" alt="Business Analyst" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per10.jpg" alt="QA Engineer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per11.jpg" alt="Cloud Architect" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="/images/about/per12.jpg" alt="Cloud Architect" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Controls */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
                <button
                  className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                  onClick={() => {
                    const container = document.querySelector('.job-roles-container');
                    if (container) {
                      container.scrollLeft -= 300;
                    }
                  }}
                >
                  <svg className="w-6 h-6 text-bean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                  onClick={() => {
                    const container = document.querySelector('.job-roles-container');
                    if (container) {
                      container.scrollLeft += 300;
                    }
                  }}
                >
                  <svg className="w-6 h-6 text-bean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Industries Section - Image Gallery with Hover Effects */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Industries We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Technology & Software */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop"
                    alt="Technology & Software"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Default overlay - only bottom 20% dark */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="p-4">
                      <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Technology & Software</h4>
                    </div>
                  </div>
                  {/* Hover overlay with full content */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-6 text-center max-w-xs">
                      <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Technology & Software</h4>
                      <p className="text-sm leading-relaxed text-white">
                        We connect skilled developers, engineers, and IT professionals with cutting-edge tech companies. Our expertise ensures seamless integration and accelerated project delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healthcare & Life Sciences */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop"
                    alt="Healthcare & Life Sciences"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Default overlay - only bottom 20% dark */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="p-4">
                      <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Healthcare & Life Sciences</h4>
                    </div>
                  </div>
                  {/* Hover overlay with full content */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-6 text-center max-w-xs">
                      <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Healthcare & Life Sciences</h4>
                      <p className="text-sm leading-relaxed text-white">
                        Supporting healthcare organizations with specialized talent in medical technology, data analytics, and compliance. We ensure regulatory compliance while delivering innovative solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Services */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
                    alt="Financial Services"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Default overlay - only bottom 20% dark */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="p-4">
                      <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Financial Services</h4>
                    </div>
                  </div>
                  {/* Hover overlay with full content */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-6 text-center max-w-xs">
                      <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Financial Services</h4>
                      <p className="text-sm leading-relaxed text-white">
                        Providing fintech expertise including blockchain specialists, regulatory compliance experts, and financial analysts. We help financial institutions navigate digital transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing & Industrial */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                    alt="Manufacturing & Industrial"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Default overlay - only bottom 20% dark */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="p-4">
                      <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Manufacturing & Industrial</h4>
                    </div>
                  </div>
                  {/* Hover overlay with full content */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-6 text-center max-w-xs">
                      <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Manufacturing & Industrial</h4>
                      <p className="text-sm leading-relaxed text-white">
                        Connecting manufacturing companies with IoT specialists, automation engineers, and supply chain experts. We support Industry 4.0 initiatives with talent skilled in smart manufacturing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & E-Learning */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                    alt="Education & E-Learning"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Default overlay - only bottom 20% dark */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="p-4">
                      <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Education & E-Learning</h4>
                    </div>
                  </div>
                  {/* Hover overlay with full content */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-6 text-center max-w-xs">
                      <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Education & E-Learning</h4>
                      <p className="text-sm leading-relaxed text-white">
                        Supporting educational institutions and e-learning platforms with instructional designers, learning technology specialists, and educational content developers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Energy & Utilities */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
                    alt="Energy & Utilities"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Default overlay - only bottom 20% dark */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="p-4">
                      <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Energy & Utilities</h4>
                    </div>
                  </div>
                  {/* Hover overlay with full content */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-6 text-center max-w-xs">
                      <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Energy & Utilities</h4>
                      <p className="text-sm leading-relaxed text-white">
                        Providing expertise in renewable energy, smart grid technology, and utility management systems. We connect organizations with specialists in sustainable energy solutions.
                      </p>
                    </div>
                  </div>
                </div>
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
