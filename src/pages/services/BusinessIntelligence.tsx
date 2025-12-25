
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import CTASection from '@/index2/components/CTASection';
import { BarChart, PieChart, TrendingUp, Database, Eye, ArrowRight, Target, Zap, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const BusinessIntelligence = () => {
  const solutions = [
    {
      title: "Data Visualization",
      description: (
        <>
          Transform complex data into clear, interactive dashboards and reports using <strong className="text-blue-600">Microsoft BI</strong> tools like Power BI to drive informed decision-making.
        </>
      ),
      icon: <BarChart size={36} />
    },
    {
      title: "Advanced Analytics",
      description: "Leverage statistical analysis and machine learning to uncover hidden patterns and insights in your data.",
      icon: <TrendingUp size={36} />
    },
    {
      title: "Data Warehousing",
      description: (
        <>
          Design and implement robust data warehouse solutions using <strong className="text-blue-600">SQL Server DI</strong> for centralized data storage and seamless management.
        </>
      ),
      icon: <Database size={36} />
    },
    {
      title: "Real-time Reporting",
      description: "Access up-to-the-minute business metrics and KPIs through dynamic, real-time reporting systems.",
      icon: <Eye size={36} />
    },
    {
      title: "Performance Metrics",
      description: (
        <>
          Develop comprehensive KPI frameworks integrated with <strong className="text-blue-600">Microsoft Dynamics</strong> to measure and track business performance across all areas.
        </>
      ),
      icon: <Target size={36} />
    },
    {
      title: "Predictive Insights",
      description: "Forecast future trends and outcomes using advanced predictive modeling and analytics techniques.",
      icon: <PieChart size={36} />
    }
  ];

  const benefits = [
    {
      title: "Data-Driven Decisions",
      description: "Make confident business decisions backed by comprehensive data analysis and actionable insights.",
      icon: <Target size={32} />
    },
    {
      title: "Operational Efficiency",
      description: "Identify inefficiencies and optimization opportunities through detailed operational analytics.",
      icon: <Zap size={32} />
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of market trends and competitors with advanced business intelligence capabilities.",
      icon: <Shield size={32} />
    }
  ];

  return (
    <>
      <PageHero
        title="Business Intelligence Solutions"
        subtitle="Transform your data into actionable insights for smarter business decisions"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-2 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3F321F]">
              Unlock the Power of Your Data
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                In today's data-driven business environment, the ability to quickly extract meaningful insights from
                your data can be a game-changer. Our business intelligence solutions help you transform raw data
                into powerful insights that drive strategic decision-making.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in creating comprehensive BI ecosystems that integrate seamlessly with your existing
                systems, providing real-time visibility into your business operations, customer behavior, and
                market trends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From interactive dashboards to advanced analytics, our solutions empower your team to make
                data-driven decisions with confidence and speed.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 relative flex justify-center">
            <img
              src="/images/services_banana.png"
              alt="Business Intelligence - Data Insights"
              className="w-full max-w-2xl h-auto transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </PageSection>

      {/* Solutions - Clean Grid style */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #C19A6B 100%)' }}>
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3F321F] text-left">
                Our BI Solutions
              </h2>
              <p className="text-lg text-gray-600 text-left">
                Comprehensive business intelligence capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {solutions.map((solution, index) => (
                <div key={index} className="flex flex-col items-start space-y-4">
                  <div className="text-bean">
                    {React.cloneElement(solution.icon as React.ReactElement, {
                      color: '#ea580c',
                      strokeWidth: 1.5
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-left">
                    {solution.description}
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
                Benefits of Our BI Solutions
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl text-left">
                Why businesses choose our intelligence platforms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Data-Driven Decisions */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/bi/toggle.png"
                      alt="Data-Driven Decisions"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">Data-Driven Decisions</h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                      Make confident business decisions backed by comprehensive data analysis and actionable insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Operational Efficiency */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/bi/abstract.png"
                      alt="Operational Efficiency"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">Operational Efficiency</h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                      Identify inefficiencies and optimization opportunities through detailed operational analytics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Competitive Advantage */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative">
                    <img
                      src="/images/bi/boat.png"
                      alt="Competitive Advantage"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">Competitive Advantage</h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                      Stay ahead of market trends and competitors with advanced business intelligence capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </div>

      {/* CTA Section */}
      <CTASection headline="Ready to supercharge<br />your Business Intelligence journey?" />
    </>
  );
};

export default BusinessIntelligence;
