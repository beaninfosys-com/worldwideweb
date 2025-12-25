import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import CTASection from '@/index2/components/CTASection';
import { Code, Layers, Database, Shield, Globe, Monitor, Smartphone, Laptop } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ApplicationDevelopment = () => {
  const capabilities = [
    {
      title: "Web Applications",
      description: "Responsive, feature-rich web applications that deliver exceptional user experiences across all devices.",
      icon: <Monitor size={36} />
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications designed for optimal performance and usability.",
      icon: <Smartphone size={36} />
    },
    {
      title: "Desktop Applications",
      description: "Powerful desktop applications that leverage the full capabilities of modern operating systems.",
      icon: <Laptop size={36} />
    },
    {
      title: "Enterprise Software",
      description: "Comprehensive enterprise solutions designed to streamline operations and enhance productivity.",
      icon: <Layers size={36} />
    },
    {
      title: "Database Solutions",
      description: "Robust database architectures that ensure data integrity, security, and accessibility.",
      icon: <Database size={36} />
    },
    {
      title: "API Development",
      description: "Well-designed APIs that enable seamless integration between systems and services.",
      icon: <Code size={36} />
    }
  ];


  return (
    <>
      <PageHero
        title="Application Development"
        subtitle="Custom software solutions designed to drive your business forward"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-2 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3F321F]">
              Transform Your Business with Custom Applications
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                In today's digital-first world, custom applications can be a significant competitive advantage.
                At Bean Infosystem, we specialize in developing tailored software solutions that address your
                unique business challenges and opportunities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced developers combines technical expertise with deep industry knowledge
                to create applications that not only meet your functional requirements but also deliver
                exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need a web application, mobile app, or enterprise software, we have the skills and
                experience to bring your vision to life.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 relative">
            <img
              src="/images/app_dev/app_dev_hero.png"
              alt="Application Development - Custom Software Solutions"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </PageSection>

      {/* Key Features - Clean Grid style */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #C19A6B 100%)' }}>
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3F321F] text-left">
                Our Development Capabilities
              </h2>
              <p className="text-lg text-gray-600 text-left">
                Comprehensive solutions tailored to your unique business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex flex-col items-start space-y-4">
                  <div className="text-bean">
                    {React.cloneElement(capability.icon as React.ReactElement, {
                      color: '#ea580c',
                      strokeWidth: 1.5
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-left">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>
      </div>


      {/* Benefits Section - Polaroid Style */}
      <div style={{ background: 'linear-gradient(to bottom, #C19A6B 0%, #ffffff 30%, #ffffff 100%)' }}>
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
                Why Choose Our Application Development Services
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl text-left">
                Experience the Bean Infosystem advantage with modern, scalable, and future-ready solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Quality Assurance */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/app_dev/r.png"
                      alt="Quality Assurance"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">Quality Assurance</h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                      Our rigorous quality assurance processes ensure that your application meets the highest standards
                      of reliability, performance, and security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Scalable Architecture */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/app_dev/every.png"
                      alt="Scalable Architecture"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">Scalable Architecture</h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                      We design applications with scalability in mind, allowing them to grow seamlessly as your business
                      expands and evolves.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Future-Ready */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/app_dev/phone.png"
                      alt="Future-Ready"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">Future-Ready</h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                      Our applications are built using modern technologies and best practices, ensuring they remain
                      relevant and effective well into the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </div>

      {/* CTA Section */}
      <CTASection headline="Ready to supercharge<br />your Application Development?" />
    </>
  );
};

export default ApplicationDevelopment;
