
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import CTASection from '@/index2/components/CTASection';
import { Database, TrendingUp, BarChart3, Search, Cpu, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const DataAnalytics = () => {
  const services = [
    {
      title: "Data Mining & Discovery",
      description: "Extract valuable patterns and insights from large datasets using advanced mining techniques and algorithms.",
      icon: <Search size={36} />
    },
    {
      title: "Statistical Analysis",
      description: "Apply rigorous statistical methods to understand data relationships and validate business hypotheses.",
      icon: <BarChart3 size={36} />
    },
    {
      title: "Machine Learning Analytics",
      description: "Leverage ML algorithms to build predictive models and automate complex analytical processes.",
      icon: <Cpu size={36} />
    },
    {
      title: "Data Processing & ETL",
      description: "Design efficient data pipelines for extraction, transformation, and loading of data from multiple sources.",
      icon: <Database size={36} />
    },
    {
      title: "Performance Analytics",
      description: "Monitor and analyze system performance, user behavior, and operational metrics for optimization.",
      icon: <TrendingUp size={36} />
    },
    {
      title: "Custom Analytics Solutions",
      description: "Develop tailored analytics solutions that address your specific business challenges and requirements.",
      icon: <Target size={36} />
    }
  ];

  const advantages = [
    {
      title: "Advanced Methodologies",
      description: "We employ cutting-edge analytical methods and tools to deliver the most accurate and actionable insights.",
      icon: <Zap size={32} />
    },
    {
      title: "Data Security & Privacy",
      description: "All analytics processes adhere to strict security standards and privacy regulations to protect your data.",
      icon: <Shield size={32} />
    },
    {
      title: "Scalable Solutions",
      description: "Our analytics infrastructure scales with your data volume and complexity as your business grows.",
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <>
      <PageHero
        title="Data & Analytics Services"
        subtitle="Comprehensive data analytics solutions to unlock insights and drive innovation"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-2 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3F321F]">
              Advanced Analytics for Data-Driven Success
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Data is the new oil, but raw data alone isn't valuable—it's the insights you extract that drive
                business value. Our comprehensive data and analytics services help you unlock the full potential
                of your data assets through advanced analytical techniques and technologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From statistical analysis to machine learning, we provide end-to-end analytics solutions that
                transform complex data into clear, actionable insights. Our team of data scientists and analysts
                work with you to understand your business challenges and develop custom analytical approaches.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're looking to optimize operations, understand customer behavior, or predict market
                trends, our analytics solutions provide the insights you need to make informed decisions.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 relative">
            <img
              src="/images/data_analytics/tablet_charts.png"
              alt="Data Analytics - Business Success"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </PageSection>

      {/* Services - Clean Grid Style */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #C19A6B 100%)' }}>
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3F321F] text-left">
                Our Analytics Services
              </h2>
              <p className="text-lg text-gray-600 text-left">
                Comprehensive data analysis and insights generation powered by advanced technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-start space-y-4">
                  <div className="text-bean">
                    {React.cloneElement(service.icon as React.ReactElement, {
                      color: '#ea580c',
                      strokeWidth: 1.5
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
                Why Choose Our Data Analytics Services
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl text-left">
                The Bean Infosystem analytics advantage for your business growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  ...advantages[0],
                  image: "/images/data_analytics/idea.png"
                },
                {
                  ...advantages[1],
                  image: "/images/data_analytics/folder.png"
                },
                {
                  ...advantages[2],
                  image: "/images/data_analytics/big_data.png"
                }
              ].map((advantage, index) => (
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
      <CTASection headline="Ready to supercharge<br />your Data Analytics journey?" />
    </>
  );
};

export default DataAnalytics;
