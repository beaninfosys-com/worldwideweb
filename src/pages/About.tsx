
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
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
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
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

            {/* Right Side - Pure Visual Elements */}
            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px]">
                {/* Floating Visual Elements */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-bean/20 rounded-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 ease-out shadow-lg"></div>

                <div className="absolute top-1/4 left-8 w-32 h-32 bg-bean/10 rounded-full transform -rotate-12 hover:rotate-0 transition-transform duration-300 ease-out shadow-lg"></div>

                <div className="absolute bottom-8 right-1/4 w-20 h-20 bg-bean/15 rounded-lg transform rotate-45 hover:rotate-0 transition-transform duration-300 ease-out shadow-lg"></div>

                <div className="absolute bottom-1/4 left-12 w-28 h-28 bg-bean/25 rounded-3xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 ease-out shadow-lg"></div>

                {/* Central Visual Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-bean rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ease-out">
                  <div className="w-full h-full flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(193,154,107,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(193,154,107,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                {/* Animated Background Elements */}
                <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-bean/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-bean/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-bean/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powering Talent Across Industries */}
      <div className="relative overflow-hidden bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powering Talent Across
              <span className="block text-bean">Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="Full Stack Developer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="Data Scientist" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="UX/UI Designer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="DevOps Engineer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gradient-to-b from-bean/20 to-bean/10 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="Project Manager" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="AI/ML Engineer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="Cyber Security" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="Business Analyst" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-0">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="QA Engineer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                      <img src="https://via.placeholder.com/120x400/cccccc/666666" alt="Cloud Architect" className="w-full h-full object-cover" />
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

          {/* Industries Section - Scrollable Container */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Industries We Serve</h3>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-w-[300px] max-w-[320px]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-bean/10 rounded-lg flex items-center justify-center mr-3">
                      <Building className="w-5 h-5 text-bean" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Technology & Software</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We connect skilled developers, engineers, and IT professionals with cutting-edge tech companies. Our expertise in software development, AI/ML, and cloud technologies ensures seamless integration and accelerated project delivery.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-w-[300px] max-w-[320px]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-bean/10 rounded-lg flex items-center justify-center mr-3">
                      <Heart className="w-5 h-5 text-bean" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Healthcare & Life Sciences</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Supporting healthcare organizations with specialized talent in medical technology, data analytics, and compliance. We ensure regulatory compliance while delivering innovative solutions for patient care and medical research.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-w-[300px] max-w-[320px]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-bean/10 rounded-lg flex items-center justify-center mr-3">
                      <Globe className="w-5 h-5 text-bean" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Financial Services</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Providing fintech expertise including blockchain specialists, regulatory compliance experts, and financial analysts. We help financial institutions navigate digital transformation while maintaining security and compliance standards.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-w-[300px] max-w-[320px]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-bean/10 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-bean" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Manufacturing & Industrial</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Connecting manufacturing companies with IoT specialists, automation engineers, and supply chain experts. We support Industry 4.0 initiatives with talent skilled in smart manufacturing and digital transformation.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-w-[300px] max-w-[320px]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-bean/10 rounded-lg flex items-center justify-center mr-3">
                      <BookOpen className="w-5 h-5 text-bean" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Education & E-Learning</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Supporting educational institutions and e-learning platforms with instructional designers, learning technology specialists, and educational content developers to enhance digital learning experiences.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-w-[300px] max-w-[320px]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-bean/10 rounded-lg flex items-center justify-center mr-3">
                      <Zap className="w-5 h-5 text-bean" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Energy & Utilities</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Providing expertise in renewable energy, smart grid technology, and utility management systems. We connect organizations with specialists in sustainable energy solutions and infrastructure modernization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Mission, Vision, Values */}
      <PageSection dark>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Lightbulb size={36} color='black' />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-foreground/70">
              To empower businesses through innovative digital solutions that drive growth, efficiency, and 
              competitive advantage in an increasingly connected world.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Target size={36} color='black' />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-foreground/70">
              To be the leading catalyst for digital transformation, helping businesses harness the power 
              of technology to achieve their fullest potential.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Heart size={36} color='black' />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <ul className="text-foreground/70 space-y-2">
              <li className="flex items-start">
                <span className="text-bean mr-2">•</span>
                <span>Innovation First</span>
              </li>
              <li className="flex items-start">
                <span className="text-bean mr-2">•</span>
                <span>Integrity Always</span>
              </li>
              <li className="flex items-start">
                <span className="text-bean mr-2">•</span>
                <span>Excellence Delivered</span>
              </li>
              <li className="flex items-start">
                <span className="text-bean mr-2">•</span>
                <span>Your Success, Our Success</span>
              </li>
            </ul>
          </Card>
        </div>
      </PageSection>

      {/* New Image Gallery Section */}
      <PageSection title="Our Workspaces" subtitle="Where innovation happens every day">
        <div className="grid md:grid-cols-3 gap-8">
          {officeImages.map((office, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={office.image} 
                  alt={office.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{office.title}</h3>
                    <p className="text-sm text-white/80">{office.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Company Timeline */}
      <PageSection title="Our Journey" subtitle="A timeline of Bean Infosystem's growth and evolution">
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`relative grid md:grid-cols-2 gap-6 items-center`}>
                {/* Icon marker instead of number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-bean flex items-center justify-center text-white z-10">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16 md:text-left'}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-bean/30 transition-all duration-300">
                    <div className="text-bean text-sm font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                  {/* Empty space to maintain grid alignment */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Our Approach */}
      <PageSection dark title="Our Approach" subtitle="How we deliver exceptional results for our clients">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Edit size={32} color='black'/>
            </div>
            <h3 className="text-lg font-bold mb-2">Discovery</h3>
            <p className="text-foreground/70">
              We begin with a thorough discovery process to understand your business objectives, challenges, and requirements.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Map size={32} color='black'/>
            </div>
            <h3 className="text-lg font-bold mb-2">Strategy</h3>
            <p className="text-foreground/70">
              We develop a comprehensive strategy tailored to your unique needs and aligned with your business goals.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Wrench size={32} color='black' />
            </div>
            <h3 className="text-lg font-bold mb-2">Implementation</h3>
            <p className="text-foreground/70">
              Our expert team executes the strategy with precision, leveraging the latest technologies and best practices.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Share2 size={32} color='black'/>
            </div>
            <h3 className="text-lg font-bold mb-2">Optimization</h3>
            <p className="text-foreground/70">
              We continuously monitor, analyze, and optimize to ensure sustainable results and ongoing improvement.
            </p>
          </Card>
        </div>
      </PageSection>
    </>
  );
};

export default About;
