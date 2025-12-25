import React from 'react';

const PoweringTalentSection = () => {
    return (
        <>
            <style>{`
                .job-roles-container::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <div className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Powering Talent Across
                            <span className="block text-[#C19A6B]">Industries</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            We connect top talent with leading organizations across diverse industries, delivering exceptional results through our comprehensive staffing solutions.
                        </p>
                    </div>

                    {/* Job Roles Images - Top Section */}
                    <div className="mb-16">
                        <div className="relative">
                            <div
                                className="job-roles-container overflow-x-auto pb-16"
                                style={{
                                    scrollbarWidth: 'none', /* Firefox */
                                    msOverflowStyle: 'none', /* IE and Edge */
                                }}
                            >
                                {/* First set of job role images */}

                                {/* Duplicate for seamless loop */}
                                <div className="flex space-x-6 min-w-max">
                                    <div className="flex flex-col items-center mt-0">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per1.jpg" alt="Full Stack Developer" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-8">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per2.jpg" alt="Data Scientist" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-0">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per3.jpg" alt="UX/UI Designer" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-8">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per4.jpg" alt="DevOps Engineer" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-0">
                                        <div className="w-30 h-[400px] bg-gradient-to-b from-[#C19A6B]/20 to-[#C19A6B]/10 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per5.webp" alt="Project Manager" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-8">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per6.webp" alt="AI/ML Engineer" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-8">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per7.jpg" alt="AI/ML Engineer" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-0">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per8.webp" alt="Cyber Security" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-8">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per9.jpg" alt="Business Analyst" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-0">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per10.jpg" alt="QA Engineer" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-8">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per11.jpg" alt="Cloud Architect" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-8">
                                        <div className="w-30 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img src="/images/about/per12.jpg" alt="Cloud Architect" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow Controls */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
                                <button
                                    className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                                    onClick={() => {
                                        const container = document.querySelector('.job-roles-container');
                                        if (container) {
                                            container.scrollLeft -= 300;
                                        }
                                    }}
                                >
                                    <svg className="w-6 h-6 text-[#C19A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                                    onClick={() => {
                                        const container = document.querySelector('.job-roles-container');
                                        if (container) {
                                            container.scrollLeft += 300;
                                        }
                                    }}
                                >
                                    <svg className="w-6 h-6 text-[#C19A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PoweringTalentSection;
