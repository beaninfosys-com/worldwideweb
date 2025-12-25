
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import CTASection from '@/index2/components/CTASection';
import { Users, Target, Lightbulb, Shield, ArrowRight, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AdvisoryConsulting = () => {
  const services = [
    {
      title: "Strategic Technology Planning",
      description: "Develop comprehensive technology strategies aligned with your business objectives and long-term vision.",
      icon: <Target size={36} />
    },
    {
      title: "Digital Transformation",
      description: "Guide your organization through successful digital transformation initiatives with proven methodologies.",
      icon: <TrendingUp size={36} />
    },
    {
      title: "Innovation Consulting",
      description: "Identify emerging technologies and innovation opportunities to maintain your competitive advantage.",
      icon: <Lightbulb size={36} />
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive technology risk assessments to protect your business from potential threats and vulnerabilities.",
      icon: <Shield size={36} />
    },
    {
      title: "Team Development",
      description: "Build and develop high-performing technology teams with the right skills and capabilities.",
      icon: <Users size={36} />
    },
    {
      title: "Best Practices Implementation",
      description: "Implement industry best practices and standards to optimize your technology operations.",
      icon: <Award size={36} />
    }
  ];

  const advantages = [
    {
      title: "Proven Track Record",
      description: "Years of experience helping businesses across industries achieve their technology and strategic goals.",
      image: "/images/advisory/track_record.png"
    },
    {
      title: "Industry Expertise",
      description: "Deep knowledge across multiple industries and technology domains to provide relevant, actionable advice.",
      image: "/images/advisory/expertise.png"
    },
    {
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring knowledge transfer and sustainable long-term success.",
      image: "/images/advisory/collaboration.png"
    }
  ];

  return (
    <>
      <PageHero
        title="Advisory & Consulting Services"
        subtitle="Strategic guidance to optimize your technology investments and business processes"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-2 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3F321F]">
              Strategic Guidance for Technology Excellence
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                In today's rapidly evolving technology landscape, making the right strategic decisions can be the
                difference between success and stagnation. Our advisory and consulting services provide you with
                the expertise and insights needed to navigate complex technology challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our seasoned consultants bring decades of combined experience across industries, helping organizations
                optimize their technology investments, streamline operations, and achieve sustainable growth through
                strategic technology initiatives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're planning a digital transformation, evaluating new technologies, or optimizing existing
                systems, we provide actionable recommendations tailored to your unique business context.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 relative flex justify-center">
            <img
              src="/images/services_tower.png"
              alt="Strategic Advisory - Technology Excellence"
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </PageSection>

      {/* Services - Clean Grid */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #C19A6B 100%)' }}>
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3F321F] text-left">
                Our Consulting Services
              </h2>
              <p className="text-lg text-gray-600 text-left">
                Comprehensive advisory solutions for your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-start space-y-4">
                  <div className="text-bean">
                    {React.cloneElement(service.icon as React.ReactElement, {
                      color: '#ea580c',
                      strokeWidth: 1.5,
                      size: 32
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-left">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>
      </div>

      {/* Why Choose Us - Polaroid Style */}
      <div style={{ background: 'linear-gradient(to bottom, #C19A6B 0%, #ffffff 30%, #ffffff 100%)' }}>
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
                Why Choose Our Consulting and Advisory Services
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl text-left">
                Empower your business with strategic insights and proven expertise from Bean Infosystem
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-square relative">
                      <img
                        src={advantage.image}
                        alt={advantage.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">{advantage.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-left">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageSection>
      </div>

      {/* CTA Section */}
      <CTASection headline="Ready to supercharge<br />your Advisory & Consulting journey?" />
    </>
  );
};

export default AdvisoryConsulting;
