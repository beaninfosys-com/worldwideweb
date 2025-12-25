import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
import { HeartHandshake, Users, HandCoins, Building2, CheckCircle2 } from 'lucide-react';
import styles from '@/index2/components/TechVisualSection.module.css';
import bgImage from '../assets/index2/tech_visual_bg_3.jpg';
import CTASection from '@/index2/components/CTASection';

const FlowStep = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
  <Card className="p-6 md:p-8 text-center bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/80 hover:border-white/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105">
    {/* Glassmorphic gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-lg"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#3B2416]/20 to-[#D4A76A]/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-6 shadow-lg">
        <div className="text-[#3B2416] drop-shadow-sm">
          {icon}
        </div>
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-sm">{title}</h4>
      <p className="text-gray-700 text-sm leading-relaxed drop-shadow-sm">{description}</p>
    </div>
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
      <div className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Visual Element */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md lg:max-w-lg">
                <img
                  src="../public/images/socialimpact_1.png"
                  alt="Social Impact"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#3B2416]/10 border border-[#3B2416]/20">
                  <span className="text-sm font-medium text-[#3B2416]">Our Mission</span>
                </div>
                <div className="relative">
                  <svg viewBox="0 0 800 200" className="w-full h-auto">
                    <defs>
                      <clipPath id="social-impact-text-clip">
                        <text x="50%" y="40%" textAnchor="middle" dy=".35em" className="font-bold text-4xl lg:text-8xl" style={{ fontFamily: 'Outfit, sans-serif' }}>Social Impact</text>
                        <text x="50%" y="80%" textAnchor="middle" dy=".35em" className="font-bold text-2xl lg:text-5xl" style={{ fontFamily: 'Outfit, sans-serif' }}>Through Technology</text>
                      </clipPath>
                    </defs>
                    <image
                      href={bgImage}
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#social-impact-text-clip)"
                    />
                  </svg>
                  {/* <h2 className="absolute inset-0 flex flex-col justify-center items-center text-transparent">
                    <span className="text-4xl lg:text-5xl font-bold leading-tight">Social Impact</span>
                    <span className="text-2xl lg:text-3xl font-bold leading-tight">Through Technology</span>
                  </h2> */}
                </div>
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

            {/* SocialBirds logo card - moved to top center */}
            <div className="mb-12 flex justify-center">
              <Card className="p-8 text-center border-2 border-[#D4A76A]/50 bg-white/95 max-w-md">
                <img src="https://www.beaninfosys.com/img/social-bird.png" className="w-40 mx-auto mb-4" alt="SocialBirds" />
                <p className="text-gray-800">Create beautifully branded fundraising pages in minutes.</p>
              </Card>
            </div>

            {/* Connected steps - 2 cards */}
            <div className="relative">
              {/* horizontal connector line on md+ */}
              <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-white/30"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10 max-w-4xl mx-auto">
                <FlowStep
                  icon={<Building2 size={22} color='#FF8C00' />}
                  title="Nonprofits"
                  description="Organizations on the frontlines seeking sustainable support and tools."
                />
                <FlowStep
                  icon={<HeartHandshake size={22} color='#22C55E' />}
                  title="Bean Infosystems"
                  description="Subsidized development + strategic guidance to maximize impact."
                />
              </div>
            </div>

            {/* Outcomes */}

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default SocialImpact;
