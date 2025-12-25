import React from 'react';
import PageHero from '@/components/layout/PageHero';
import { Card } from '@/components/ui/card';
import { CheckCircle, Rocket, Users, Heart, TrendingUp, Zap } from 'lucide-react';
import CTASection from '@/index2/components/CTASection';

const Product = () => {
  const socialBirdsFeatures = [
    {
      title: "Community Building",
      description: "Connect philanthropists with nonprofit organizations in meaningful ways",
      icon: <Users size={32} className="text-[#FF8C00]" />
    },
    {
      title: "Campaign Creation",
      description: "Create visually compelling campaigns that raise awareness and funding",
      icon: <Rocket size={32} className="text-[#3B82F6]" />
    },
    {
      title: "Social Impact",
      description: "Celebrate youth and empower communities through social causes",
      icon: <Heart size={32} className="text-[#22C55E]" />
    },
    {
      title: "Fundraising Tools",
      description: "User-friendly platform to complement existing fundraising activities",
      icon: <TrendingUp size={32} className="text-[#FFD700]" />
    }
  ];

  const benefits = [
    "Online platform for nonprofits and organizations",
    "Connect with philanthropists meaningfully",
    "Create visually compelling campaigns",
    "Raise awareness and funding efficiently",
    "Build stronger communities",
    "Celebrate youth for social causes"
  ];

  return (
    <>
      <PageHero
        title="Our products and investments"
        subtitle="Innovative solutions designed to create meaningful impact and connect communities"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Hero Section with AI Hand Image */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image (50%) */}
              <div>
                <img
                  src="/images/products/innovation_hand.png"
                  alt="Innovation Hand"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right Side - Text (50%) */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Powered by<br />Innovation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left">
                  We leverage cutting-edge technology and artificial intelligence to create products that make a real difference in how organizations connect, collaborate, and create impact.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-left">
                  Our solutions are designed with the future in mind, combining powerful features with intuitive interfaces to deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SocialBirds Product Section */}
      <div style={{ background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 30%, #ffffff 50%, #C19A6B 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Product Header */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 bg-[#FF8C00]/10 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#FF8C00] rounded-full animate-pulse"></div>
                <span className="text-[#FF8C00] font-semibold text-sm">Currently Available</span>
              </div>
              <h2
                className="text-6xl lg:text-7xl font-bold mb-6"
                style={{
                  backgroundImage: 'url(/images/products/socialbirds_pen_bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                SocialBirds Platform
              </h2>
              <a
                href="https://socialbirds.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Visit Website
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Product Description with Person Image */}
            <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
              {/* Left Side - Text (60%) */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed text-left">
                    SocialBirds is an online platform providing help to organizations to achieve their objective.
                    Many social organizations are working to help the communities, however with the increasing
                    social media there is a potential opportunity to quickly reach out and engage large
                    philanthropists in a meaningful way.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed text-left">
                    To fulfill the need, we set off to build SocialBirds online platform that would connect
                    more people with our nonprofit beneficiaries in a more meaningful way. SocialBirds Team
                    has taken extra steps to create a stronger community of like-minded people dedicated to
                    celebrating youth for the social causes.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed text-left">
                    It is our intent to complement your organization's existing fundraising and volunteering
                    activities by giving you a user-friendly online platform to create visually compelling
                    campaigns that raise awareness and funding for your organizational needs and dreams.
                  </p>
                </div>
              </div>

              {/* Right Side - Image (40%) */}
              <div className="lg:col-span-2">
                <img
                  src="/images/socialbirds_logo.png"
                  alt="SocialBirds Platform"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Benefits</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#C19A6B] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialBirdsFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hireko.ai Product Section */}
      <div style={{ background: 'linear-gradient(to bottom, #C19A6B 0%, #f9fafb 50%, #ffffff 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Product Header */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></div>
                <span className="text-[#3B82F6] font-semibold text-sm">Investment</span>
              </div>
              <h2
                className="text-6xl lg:text-7xl font-bold mb-6"
                style={{
                  backgroundImage: 'url(/images/hireko_bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Hireko.ai
              </h2>
              <a
                href="https://hireko.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Visit Website
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Product Description - Logo Left, Text Right */}
            <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
              {/* Left Side - Logo (40%) */}
              <div className="lg:col-span-2">
                <img
                  src="/images/hireko_logo.png"
                  alt="Hireko.ai"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right Side - Text (60%) */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed text-left">
                    Hireko.ai is revolutionizing enterprise recruitment with AI-powered interview solutions.
                    Our advanced platform streamlines the hiring process by conducting intelligent,
                    automated interviews that assess candidates comprehensively and objectively.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed text-left">
                    By leveraging cutting-edge artificial intelligence and natural language processing,
                    Hireko.ai helps enterprises save time, reduce bias, and identify the best talent
                    efficiently. The platform provides detailed insights and analytics to make informed
                    hiring decisions.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed text-left">
                    As an investment by Bean Infosystems, Hireko.ai represents our commitment to
                    supporting innovative AI solutions that transform traditional business processes
                    and drive meaningful impact in the enterprise space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* More Innovations Section - Separate with Reverse Gradient */}
      <div style={{ background: 'radial-gradient(circle at bottom right, #C19A6B 0%, #ffffff 75%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#3B2416]/10 px-4 py-2 rounded-full mb-4">
                <Zap size={16} className="text-[#3B2416]" />
                <span className="text-[#3B2416] font-semibold text-sm">Future Innovations</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Revolutionizing Impact
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our development team is hard at work creating new products and services that will
                revolutionize how organizations connect, collaborate, and create meaningful impact.
              </p>
            </div>

            {/* Innovation Image and Description */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Left Side - Image (50%) */}
              <div>
                <img
                  src="/images/products_ai_hand.png"
                  alt="Future Innovations"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right Side - Description (50%) */}
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our AI-powered solutions are designed to transform how you work, collaborate, and achieve your goals. Stay tuned for groundbreaking features that will redefine what's possible.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                <div className="text-[#FF8C00] mb-4">
                  <Rocket size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">New Features</h3>
                <p className="text-gray-600 text-sm">
                  Enhanced capabilities and tools to amplify your organization's impact
                </p>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                <div className="text-[#3B82F6] mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Community Tools</h3>
                <p className="text-gray-600 text-sm">
                  Better ways to engage, connect, and grow your community
                </p>
              </Card>
              <Card className="p-6 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                <div className="text-[#22C55E] mb-4">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Powerful insights to measure and optimize your impact
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Product;
