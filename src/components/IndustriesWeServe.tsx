import React from 'react';

const IndustriesWeServe = () => {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Industries We Serve
                        </h2>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Technology & Software */}
                        <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
                                    alt="Technology & Software"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Default overlay - only bottom 20% dark */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Technology & Software</h4>
                                    </div>
                                </div>
                                {/* Hover overlay with full content */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="p-6 text-center max-w-xs">
                                        <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Technology & Software</h4>
                                        <p className="text-sm leading-relaxed text-white">
                                            Connecting innovative tech companies with top-tier software engineers, developers, and IT professionals. We specialize in full-stack development, cloud architecture, and emerging technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Healthcare & Life Sciences */}
                        <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                                    alt="Healthcare & Life Sciences"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Default overlay - only bottom 20% dark */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Healthcare & Life Sciences</h4>
                                    </div>
                                </div>
                                {/* Hover overlay with full content */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="p-6 text-center max-w-xs">
                                        <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Healthcare & Life Sciences</h4>
                                        <p className="text-sm leading-relaxed text-white">
                                            Providing healthcare organizations with skilled professionals in health informatics, medical technology, and healthcare administration. We understand the critical nature of healthcare staffing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Financial Services */}
                        <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                                    alt="Financial Services"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Default overlay - only bottom 20% dark */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Financial Services</h4>
                                    </div>
                                </div>
                                {/* Hover overlay with full content */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="p-6 text-center max-w-xs">
                                        <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Financial Services</h4>
                                        <p className="text-sm leading-relaxed text-white">
                                            Serving banks, fintech companies, and financial institutions with expertise in risk management, compliance, financial analysis, and digital banking solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Manufacturing & Industrial */}
                        <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                                    alt="Manufacturing & Industrial"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Default overlay - only bottom 20% dark */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Manufacturing & Industrial</h4>
                                    </div>
                                </div>
                                {/* Hover overlay with full content */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="p-6 text-center max-w-xs">
                                        <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Manufacturing & Industrial</h4>
                                        <p className="text-sm leading-relaxed text-white">
                                            Connecting manufacturing companies with IoT specialists, automation engineers, and supply chain experts. We support Industry 4.0 initiatives with talent skilled in smart manufacturing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education & E-Learning */}
                        <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                    alt="Education & E-Learning"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Default overlay - only bottom 20% dark */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Education & E-Learning</h4>
                                    </div>
                                </div>
                                {/* Hover overlay with full content */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="p-6 text-center max-w-xs">
                                        <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Education & E-Learning</h4>
                                        <p className="text-sm leading-relaxed text-white">
                                            Supporting educational institutions and e-learning platforms with instructional designers, learning technology specialists, and educational content developers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Energy & Utilities */}
                        <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
                                    alt="Energy & Utilities"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Default overlay - only bottom 20% dark */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <div className="p-4">
                                        <h4 className="text-lg font-bold" style={{ color: 'rgb(234, 176, 135)' }}>Energy & Utilities</h4>
                                    </div>
                                </div>
                                {/* Hover overlay with full content */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="p-6 text-center max-w-xs">
                                        <h4 className="text-xl font-bold mb-3" style={{ color: 'rgb(234, 176, 135)' }}>Energy & Utilities</h4>
                                        <p className="text-sm leading-relaxed text-white">
                                            Providing expertise in renewable energy, smart grid technology, and utility management systems. We connect organizations with specialists in sustainable energy solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesWeServe;
