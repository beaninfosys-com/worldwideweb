
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import CTASection from '@/index2/components/CTASection';
import { Brain, Zap, Cog, Shield, Bot, Database, TrendingUp } from 'lucide-react';

const AiSolutions = () => {
  const capabilities = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models designed to solve your specific business challenges and automate complex processes.",
      icon: <Brain size={32} />
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual intervention.",
      icon: <Bot size={32} />
    },
    {
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights using advanced AI algorithms and analytics.",
      icon: <Database size={32} />
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to forecast trends, optimize operations, and make data-driven decisions.",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Process Optimization",
      description: "AI-powered solutions to identify bottlenecks and optimize business processes for maximum efficiency.",
      icon: <Cog size={32} />
    },
    {
      title: "Intelligent Security",
      description: "Advanced AI security solutions to protect your systems and detect threats in real-time.",
      icon: <Shield size={32} />
    }
  ];

  const benefits = [
    {
      title: "Agentic Workflows",
      description: "We stay at the forefront of AI innovation, utilizing the latest technologies and methodologies to deliver superior solutions.",
      image: "/images/ai_solutions/Astra.png"
    },
    {
      title: "Industry Expertise",
      description: "Our team combines deep AI knowledge with extensive industry experience to create solutions that truly work.",
      image: "/images/ai_solutions/mess.png"
    },
    {
      title: "Scalable Solutions",
      description: "Our AI implementations are designed to scale with your business, adapting to changing needs and growing demands.",
      image: "/images/ai_solutions/shop.png"
    }
  ];

  return (
    <>
      <PageHero
        title="AI Solutions & Integration"
        subtitle="Harness the power of artificial intelligence to transform your business operations"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-2 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3F321F]">
              Agentic Solutions with LLMs for Modern Challenges
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Artificial Intelligence is no longer a futuristic concept—it's a present-day necessity for businesses
                looking to stay competitive. At Bean Infosystems, we specialize in developing and integrating AI solutions
                that drive innovation, efficiency, and growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our AI expertise spans machine learning, natural language processing, computer vision, and predictive
                analytics. We work closely with your team to identify opportunities where AI can make the biggest impact
                on your business outcomes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From automating routine tasks to uncovering hidden insights in your data, our AI solutions are designed
                to enhance human capabilities and accelerate business success.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 relative">
            <img
              src="/images/ai_solutions/ai_head.png"
              alt="AI Solutions - Intelligent Technology"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </PageSection>

      {/* Capabilities - Clean Grid */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #C19A6B 100%)' }}>
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3F321F] text-left">
                Our AI Capabilities
              </h2>
              <p className="text-lg text-gray-600 text-left">
                Comprehensive artificial intelligence solutions powered by cutting-edge technology
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

      {/* Why Choose Us - Polaroid Style */}
      <div style={{ background: 'linear-gradient(to bottom, #C19A6B 0%, #ffffff 30%, #ffffff 100%)' }}>
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-left">
                Why Choose Bean Infosystems for AI Solutions
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl text-left">
                Experience the difference of working with AI experts who understand your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-square relative">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">{benefit.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-left">
                        {benefit.description}
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
      <CTASection headline="Ready to supercharge<br />your AI Solutions journey?" />
    </>
  );
};

export default AiSolutions;
