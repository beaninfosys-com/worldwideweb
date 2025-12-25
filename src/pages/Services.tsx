import React from 'react';
import PageHero from '@/components/layout/PageHero';
import { Card } from '@/components/ui/card';
import {
    Code, Users, BarChart, Lightbulb, Database, Activity,
    BarChart2, Target, ThumbsUp, Star, CheckCircle, Zap
} from 'lucide-react';
import CTASection from '@/index2/components/CTASection';

const Services = () => {
    const coreServices = [
        {
            title: "Application Development",
            description: "Custom software applications designed to meet your unique business requirements and drive digital transformation.",
            icon: <Code size={32} className="text-[#FF8C00]" />,
            image: "/images/services_apple.png",
            benefits: [
                "Tailored solutions that perfectly match your needs",
                "Scalable architecture to grow with your business",
                "User-centric design for exceptional experiences",
                "Continuous support and maintenance"
            ]
        },
        {
            title: "Consulting Services",
            description: "Strategic guidance from industry experts to optimize your technology investments and improve business processes.",
            icon: <Users size={32} className="text-[#3B82F6]" />,
            image: "/images/services_ctrl.png",
            benefits: [
                "Expert analysis of your current technology landscape",
                "Strategic roadmaps for digital transformation",
                "Technology selection and implementation guidance",
                "Process optimization recommendations"
            ]
        },
        {
            title: "Advisory Services",
            description: "Insights and recommendations to help you navigate digital trends and make informed business decisions.",
            icon: <BarChart size={32} className="text-[#22C55E]" />,
            image: "/images/services_tower.png",
            benefits: [
                "Industry trend analysis and insights",
                "Competitive landscape evaluation",
                "Risk assessment and mitigation strategies",
                "Innovation opportunity identification"
            ]
        }
    ];

    const aiServices = [
        {
            title: "Data Engineering",
            description: "Build robust, scalable data pipelines and infrastructure to ensure your data is accessible, reliable, and ready for analysis.",
            icon: <Database size={32} className="text-[#C19A6B]" />
        },
        {
            title: "Machine Learning & AI",
            description: "Develop and deploy machine learning models and AI solutions that automate processes, generate insights, and create new business opportunities.",
            icon: <Activity size={32} className="text-[#FF8C00]" />
        },
        {
            title: "Data Analytics & Visualization",
            description: "Transform complex datasets into clear, actionable insights through advanced analytics and intuitive visual representations.",
            icon: <BarChart2 size={32} className="text-[#3B82F6]" />
        }
    ];

    const valuePillars = [
        {
            title: "Obsessive Customer Focus",
            description: "Intuitively designed to align effortlessly within your existing workflows & environment",
            icon: <Target size={32} className="text-white" />
        },
        {
            title: "Proven Value Delivery",
            description: "Proven track record of delivering Mn$ value to our enterprise customers",
            icon: <ThumbsUp size={32} className="text-white" />
        },
        {
            title: "Industry Leading Expertise",
            description: "Extensive experience with AI/ML technologies, long before AI became mainstream",
            icon: <Star size={32} className="text-white" />
        }
    ];

    return (
        <>
            <PageHero
                title="Our Services"
                subtitle="Comprehensive solutions to drive your digital success"
                imageUrl="/lovable-uploads/background_about.png"
            />

            {/* Hero Section with Coffee Image */}
            <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)' }} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Image (50%) */}
                            <div>
                                <img
                                    src="/images/services_coffee.png"
                                    alt="Our Service Philosophy"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Right Side - Text (50%) */}
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                    Our Service Philosophy
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left">
                                    At Bean Infosystems, we believe that technology should serve as an enabler for
                                    business success. Our services are designed with this philosophy at the core,
                                    focusing on delivering solutions that drive tangible business outcomes.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed text-left">
                                    We take a collaborative approach, working closely with our clients to understand
                                    their unique challenges and objectives. This enables us to develop tailored
                                    solutions that address specific needs rather than offering one-size-fits-all options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Services Section */}
            <div style={{ background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 30%, #ffffff 50%, #C19A6B 100%)' }} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Our Core Services
                            </h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Explore how we can help your business thrive with our comprehensive service offerings
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="space-y-16">
                            {coreServices.map((service, index) => (
                                <div key={index} className="grid lg:grid-cols-5 gap-12 items-center">
                                    {/* Image Side */}
                                    <div className={`lg:col-span-2 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Text Side */}
                                    <div className={`lg:col-span-3 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                                        <Card className="p-8 bg-white/70 backdrop-blur-md border border-white/30 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                                            <div className="mb-4">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                            <p className="text-gray-700 leading-relaxed mb-6">
                                                {service.description}
                                            </p>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                                                {service.benefits.map((benefit, i) => (
                                                    <div key={i} className="flex items-start">
                                                        <CheckCircle size={16} className="text-[#C19A6B] mr-3 mt-1 flex-shrink-0" />
                                                        <span className="text-gray-700 text-sm">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* AI & Data Services Section */}
            <div style={{ background: 'linear-gradient(to bottom, #C19A6B 0%, #3B2416 100%)' }} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            {/* Left Side - Text */}
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                    AI & Data Services
                                </h2>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    In today's data-driven world, organizations that effectively harness the power of AI and data analytics gain
                                    significant competitive advantages. Our specialized team of data scientists, engineers, and AI specialists
                                    delivers solutions that transform raw data into strategic assets.
                                </p>
                            </div>

                            {/* Right Side - Banana Image */}
                            <div>
                                <img
                                    src="/images/services_banana.png"
                                    alt="AI & Data Services"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* AI Services Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {aiServices.map((service, index) => (
                                <Card
                                    key={index}
                                    className="p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                                    <p className="text-white/80 text-sm">
                                        {service.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Proposition Section */}
            <div style={{ background: 'radial-gradient(circle at bottom right, #C19A6B 0%, #ffffff 75%)' }} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Bean Infosystems is a preferred partner for{' '}
                            <span className="text-[#FF8C00]">Fortune 100 companies</span>
                        </h2>

                        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                            Engineered for the complex demands of global enterprises: merging cutting-edge AI with governance precision, operational resilience, and uncompromising accountability.
                        </p>

                        {/* Three Value Pillars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                            {valuePillars.map((pillar, index) => (
                                <div key={index} className="p-4">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-[#FF8C00] flex items-center justify-center mb-4">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{pillar.title}</h3>
                                    <p className="text-gray-600 text-sm">
                                        {pillar.description}
                                    </p>
                                </div>
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

export default Services;