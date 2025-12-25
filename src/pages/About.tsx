
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
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 45%, #C19A6B 100%)' }}>
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
      </div>

      {/* Our Approach - Redesigned */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Approach
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                How we deliver exceptional results for our clients through our proven methodology
              </p>
            </div>

            {/* Approach Grid - 2x2 Layout */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Think Big */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/about/think_big.png"
                      alt="Think Big"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Think Big</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We approach every challenge with ambition and vision, transforming small ideas into powerful solutions that create lasting impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Create Impact */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/about/pen_ink.png"
                      alt="Create Impact"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Create Impact</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Every strategy we craft is designed to make a meaningful difference, turning insights into action and vision into reality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/about/hands_circle.png"
                      alt="Connect"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We build bridges between technology and business, fostering collaboration and creating synergies that drive success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovate */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/about/circles_person.png"
                      alt="Innovate"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovate</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We embrace complexity and navigate challenges with creative solutions, constantly pushing boundaries to deliver excellence.
                    </p>
                  </div>
                </div>
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
