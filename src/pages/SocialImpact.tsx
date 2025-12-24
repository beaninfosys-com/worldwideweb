import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
import { HeartHandshake, Users, HandCoins, Building2, CheckCircle2 } from 'lucide-react';
import styles from '@/index2/components/TechVisualSection.module.css';

const FlowStep = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
  <Card className="p-6 md:p-8 text-center border-2 hover:border-[#D4A76A]/40 transition-all duration-300">
    <div className="w-14 h-14 mx-auto rounded-full bg-[#D4A76A]/10 text-[#D4A76A] flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
  </Card>
);

const SocialImpact = () => {
  return (
    <>
      <PageHero
        title="Social Impact"
        subtitle="SocialBirds fundraising software gives you the power to raise more money online. Create beautifully branded fundraising pages in minutes."
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Social Impact Hero Section */}
      <div className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Visual Element */}
            <div className="visualColumn">
              <div className="visualWrapper">
                <svg viewBox="0 0 1000 600" className="svgShape">
                  <defs>
                    <clipPath id="join-hands-text-clip">
                      <text x="50%" y="50%" textAnchor="middle" dy="-0.3em" className="svgText">JOIN</text>
                      <text x="50%" y="50%" textAnchor="middle" dy="0.7em" className="svgText">HANDS</text>
                    </clipPath>
                  </defs>
                  <image
                    href="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#join-hands-text-clip)"
                  />
                </svg>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#3B2416]/10 border border-[#3B2416]/20">
                  <span className="text-sm font-medium text-[#3B2416]">Our Mission</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#3B2416] leading-tight">
                  Social Impact Through Technology:
                  <span className="block text-gray-900">Empowering Social Enterprises and NGOs</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#3B2416] rounded-full"></div>
                  <div className="pl-6">
                    <h3 className="text-xl font-semibold text-[#3B2416] mb-2">Our Commitment</h3>
                    <p className="text-gray-800 leading-relaxed">
                      Bean Infosystems devotes a portion of its time augmenting social impact with Nonprofits and Social Enterprises. We believe in the need for social impact activities at the core of our business and not just another CSR initiative.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#3B2416] rounded-full"></div>
                  <div className="pl-6">
                    <h3 className="text-xl font-semibold text-[#3B2416] mb-2">Our Approach</h3>
                    <p className="text-gray-800 leading-relaxed">
                      Bean Infosystems works with Nonprofits for subsidized development together with introductions to fundraising to support their work, with an aim to help Nonprofits with a more social enterprise model for predictable income and better planning.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#3B2416] rounded-full"></div>
                  <div className="pl-6">
                    <h3 className="text-xl font-semibold text-[#3B2416] mb-2">Our Impact</h3>
                    <p className="text-gray-800 leading-relaxed">
                      Nonprofits and social enterprises are on the front lines trying to make this a reality and our ability to help people support these efforts has never been more important.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Diagram Section */}
      <div className="py-20 lg:py-32" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #C19A6B 100%)' }}>
        <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How Our Social Impact Flow Works</h3>

            {/* Connected steps */}
            <div className="relative">
              {/* horizontal connector line on md+ */}
              <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-white/30"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <FlowStep
                    icon={<Building2 size={22} color='black'/>}
                    title="Nonprofits"
                    description="Organizations on the frontlines seeking sustainable support and tools."
                  />
                  <FlowStep
                    icon={<HeartHandshake size={22} color='black'/>}
                    title="Bean Infosystems"
                    description="Subsidized development + strategic guidance to maximize impact."
                  />
                  <FlowStep
                    icon={<Users size={22} color='black'/>}
                    title="SocialBirds Community"
                    description="Brings donors, volunteers, and supporters together to act."
                  />
                </div>
              </div>

              {/* Second row with SocialBirds logo card center */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="hidden md:block"></div>
                <Card className="p-8 text-center border-2 border-[#D4A76A]/50 bg-white/95">
                  <img src="https://www.beaninfosys.com/img/social-bird.png" className="w-40 mx-auto mb-4" alt="SocialBirds" />
                  <p className="text-gray-800">Create beautifully branded fundraising pages in minutes.</p>
                </Card>
                <div className="hidden md:block"></div>
              </div>

              {/* Outcomes */}

            </div>
        </div>
      </div>
    </>
  );
};

export default SocialImpact;
