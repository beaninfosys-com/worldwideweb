import React, { useState } from 'react';
import PageHero from '@/components/layout/PageHero';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Heart, Zap, Lightbulb, Award, Building2 } from 'lucide-react';
import CTASection from '@/index2/components/CTASection';

const Careers = () => {
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [locationFilter, setLocationFilter] = useState<string>('All');

  const jobListings = [
    {
      id: "job-1",
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 weeks ago",
      description: "We're looking for an experienced Full-Stack Developer to join our engineering team."
    },
    {
      id: "job-2",
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      posted: "1 week ago",
      description: "Join our design team to create exceptional user experiences for our clients' products."
    },
    {
      id: "job-3",
      title: "Project Manager",
      department: "Operations",
      location: "New York, NY",
      type: "Full-time",
      posted: "3 days ago",
      description: "Lead project teams and ensure successful delivery of client projects."
    },
    {
      id: "job-4",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      posted: "1 month ago",
      description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines."
    },
    {
      id: "job-5",
      title: "Business Analyst",
      department: "Consulting",
      location: "Chicago, IL",
      type: "Full-time",
      posted: "2 weeks ago",
      description: "Work with clients to analyze business needs and translate them into technical requirements."
    },
    {
      id: "job-6",
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      posted: "5 days ago",
      description: "Help us grow our brand and reach new clients through innovative marketing strategies."
    },
    {
      id: "job-7",
      title: "Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "1 week ago",
      description: "Join our frontend team to build beautiful, responsive web applications."
    },
    {
      id: "job-8",
      title: "Data Scientist",
      department: "Analytics",
      location: "Boston, MA",
      type: "Full-time",
      posted: "3 weeks ago",
      description: "Apply your expertise in data analysis and machine learning to solve complex business problems."
    }
  ];

  const departments = ['All', ...new Set(jobListings.map(job => job.department))];
  const locations = ['All', ...new Set(jobListings.map(job => job.location))];

  const filteredJobs = jobListings.filter(job =>
    (departmentFilter === 'All' || job.department === departmentFilter) &&
    (locationFilter === 'All' || job.location === locationFilter)
  );

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages, performance bonuses, and equity options.",
      icon: <Award size={32} className="text-[#FF8C00]" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support.",
      icon: <Heart size={32} className="text-[#22C55E]" />
    },
    {
      title: "Growth & Development",
      description: "Continuous learning opportunities, mentorship, and career advancement pathways.",
      icon: <Zap size={32} className="text-[#FFD700]" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements, generous PTO, and respect for personal time.",
      icon: <Lightbulb size={32} className="text-[#3B82F6]" />
    }
  ];

  return (
    <>
      <PageHero
        title="Careers at Bean Infosystems"
        subtitle="Join our team and help shape the future of technology"
        imageUrl="/lovable-uploads/background_about.png"
      />

      {/* Why Join Us Section */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Text and Image - 40/60 Split */}
            <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
              {/* Left Side - Text (40%) */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Join Bean Infosystems?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're more than just a technology company—we're a community of innovators, problem-solvers,
                  and creative thinkers passionate about making an impact through technology.
                </p>
              </div>

              {/* Right Side - Image (60%) */}
              <div className="lg:col-span-3">
                <img
                  src="/images/careers_coconut_pool.png"
                  alt="Relaxing work environment"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div style={{ background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 30%, #ffffff 50%, #C19A6B 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore opportunities to join our team and make your mark in the digital landscape.
              </p>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">Department</label>
                <select
                  className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-[#3B2416] focus:border-[#C19A6B] focus:ring-2 focus:ring-[#C19A6B]/20 outline-none transition-all text-gray-900"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  {departments.map(department => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800">Location</label>
                <select
                  className="w-full p-3 rounded-xl bg-white/70 backdrop-blur-md border border-[#3B2416] focus:border-[#C19A6B] focus:ring-2 focus:ring-[#C19A6B]/20 outline-none transition-all text-gray-900"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Job Listings */}
            {filteredJobs.length === 0 ? (
              <Card className="p-12 text-center bg-white/70 backdrop-blur-md border border-white/30">
                <Briefcase size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">No positions found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or check back later for new opportunities.
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="p-6 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                          <span className="text-xs text-white bg-[#C19A6B] px-3 py-1 rounded-full font-medium">
                            {job.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Building2 size={16} />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={16} />
                            Posted {job.posted}
                          </span>
                        </div>
                        <p className="text-gray-700">{job.description}</p>
                      </div>
                      <div>
                        <Link
                          to="/application"
                          className="px-6 py-3 bg-[#C19A6B] hover:bg-[#3B2416] text-white rounded-xl transition-all duration-300 flex items-center justify-center whitespace-nowrap font-medium shadow-lg hover:shadow-xl"
                        >
                          Apply Now
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div style={{ background: 'linear-gradient(to bottom, #C19A6B 0%, #3B2416 100%)' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                What makes Bean Infosystems a great place to work
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-white mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Collaborative Environment</h3>
                <p className="text-white/80">
                  We believe in the power of teamwork and foster an environment where collaboration,
                  knowledge-sharing, and mutual support are encouraged.
                </p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-white mb-4">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Innovation-Driven</h3>
                <p className="text-white/80">
                  We're passionate about innovation and provide the resources, support, and freedom
                  for our team members to explore new ideas and approaches.
                </p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-white mb-4">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Continuous Learning</h3>
                <p className="text-white/80">
                  We're committed to ongoing learning and professional development, offering various
                  opportunities for growth and skill enhancement.
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

export default Careers;
