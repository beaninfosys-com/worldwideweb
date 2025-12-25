import React from 'react';
import PageHero from '@/components/layout/PageHero';
import { Card } from '@/components/ui/card';
import {
  TrendingUp,
  RefreshCw,
  Users,
  Target,
  BookOpen,
  Award,
  CheckCircle,
  Lightbulb,
  Zap
} from 'lucide-react';
import CTASection from '@/index2/components/CTASection';

const Training = () => {
  const trainingServices = [
    {
      title: "Upskilling",
      description: "Looking to fully build your in-house capabilities? We can provide the training and development you need to enhance your team's existing skills and take them to the next level.",
      icon: <TrendingUp size={32} className="text-[#22C55E]" />,
      features: [
        "Advanced technical skills development",
        "Industry-specific training programs",
        "Certification preparation",
        "Hands-on practical experience"
      ]
    },
    {
      title: "Reskilling",
      description: "Have the talent but lack the crucial skills they need to get your projects moving? We can help your team acquire new skills and transition into different roles effectively.",
      icon: <RefreshCw size={32} className="text-[#3B82F6]" />,
      features: [
        "Career transition support",
        "New technology adoption",
        "Cross-functional training",
        "Role-specific skill development"
      ]
    },
    {
      title: "Human Skills Development",
      description: "We can facilitate the development of advanced cognitive capabilities, leadership skills, and soft skills that are essential for success in the modern workplace.",
      icon: <Users size={32} className="text-[#FF8C00]" />,
      features: [
        "Leadership development programs",
        "Communication skills training",
        "Problem-solving methodologies",
        "Team collaboration techniques"
      ]
    }
  ];

  const benefits = [
    {
      title: "Customized Training Programs",
      description: "Tailored training solutions designed specifically for your organization's needs and objectives.",
      icon: <Target size={32} className="text-[#FF8C00]" />
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry experts with years of practical experience in their respective fields.",
      icon: <Award size={32} className="text-[#FFD700]" />
    },
    {
      title: "Flexible Learning Options",
      description: "Choose from in-person, online, or hybrid learning formats that fit your schedule and preferences.",
      icon: <BookOpen size={32} className="text-[#22C55E]" />
    },
    {
      title: "Certification Support",
      description: "Get assistance with industry certifications and professional development credentials.",
      icon: <CheckCircle size={32} className="text-[#3B82F6]" />
    }
  ];

  return (
    <>
      <PageHero
        title="Training & Development"
        subtitle="Empowering your team with the skills they need to succeed in the digital age"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Hero Section with Brain Bulb Image */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left Side - Image (60%) */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <img
                  src="/images/training_coffee.png"
                  alt="Innovation and Learning"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right Side - Text (40%) */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Upskilling &<br />Reskilling Solutions
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left">
                  Bean Infosystems bridges the skills and opportunity gap by providing in-demand Technology skills training and ensures that everyone has the opportunity to succeed in the future of work, and beyond.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-left">
                  Whether it's helping to foster and build a data-driven culture, upskill internal teams, or build talent pipelines through our customized training programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Training Services Section */}
      <div style={{ background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 30%, #ffffff 50%, #C19A6B 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Build The Expertise Your Business Needs
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We can provide specialized training in those skills to help you reskill your team quickly and efficiently and get your projects up and running.
              </p>
            </div>

            {/* Three Column Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {trainingServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle size={16} className="text-[#C19A6B] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Image Section with Benefits */}
      <div style={{ background: 'linear-gradient(to bottom, #C19A6B 0%, #3B2416 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Side - Text (50%) */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Why Choose Our Training Programs?
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  We blend expertise with innovation to deliver training that transforms your team's capabilities and drives real business results.
                </p>
              </div>

              {/* Right Side - Image (50%) */}
              <div>
                <img
                  src="/images/training_brain_bulb.png"
                  alt="Premium Training Experience"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Training;
