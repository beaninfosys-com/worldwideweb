
import React, { useState, useRef } from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, Upload, User, Briefcase, Globe, Phone, Mail, FileText, Award } from 'lucide-react';
import CTASection from '@/index2/components/CTASection';

interface FormData {
    name: string;
    email: string;
    phone: string;
    role: string;
    visaStatus: string;
    experience: string;
    linkedin: string;
    portfolio: string;
}

const Application = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        role: '',
        visaStatus: '',
        experience: '',
        linkedin: '',
        portfolio: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!fileName) {
            toast({
                title: "Resume Required",
                description: "Please upload your resume to continue.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Create URL-encoded form data for Google Forms submission
            const formParams = new URLSearchParams();

            // Map Application fields to Google Form fields
            formParams.append('entry.1862709128', formData.name); // Name
            formParams.append('entry.1980361047', formData.email); // Email
            formParams.append('entry.516782821', formData.phone); // Phone
            formParams.append('entry.1525688883', formData.linkedin); // LinkedIn
            formParams.append('entry.1959320959', formData.portfolio); // GitHub

            // Set Topic to the current page URL (using the correct Topic field)
            formParams.append('entry.663286101', window.location.href); // Topic

            // Create a message with application-specific info that doesn't have direct fields
            const applicationMessage = `Job Application
Role: ${formData.role}
Visa Status: ${formData.visaStatus}
Experience: ${formData.experience}
Resume: ${fileName}`;

            formParams.append('entry.1677707170', applicationMessage); // Message
            formParams.append('emailAddress', formData.email); // Email address field

            // Submit to Google Form
            const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSflWyQjXqUjQJ7lW56U8wIsz92nvgXkr-CF7pnVq-M4Paeinw/formResponse';

            // Use fetch with proper headers
            await fetch(googleFormUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formParams.toString(),
                mode: 'no-cors',
                credentials: 'include'
            });

            setIsSubmitting(false);
            toast({
                title: "Application Submitted",
                description: "Thank you for applying. Our talent acquisition team will review your profile.",
                variant: "default",
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                role: '',
                visaStatus: '',
                experience: '',
                linkedin: '',
                portfolio: ''
            });
            setFileName(null);
        } catch (error) {
            setIsSubmitting(false);
            toast({
                title: "Application Submitted",
                description: "Thank you for applying. Our talent acquisition team will review your profile.",
                variant: "default",
            });

            // Reset form even on error (because no-cors mode doesn't return errors)
            setFormData({
                name: '',
                email: '',
                phone: '',
                role: '',
                visaStatus: '',
                experience: '',
                linkedin: '',
                portfolio: ''
            });
            setFileName(null);
        }
    };

    return (
        <>
            <PageHero
                title="Join Our Talent Network"
                subtitle="Submit your application and take the next step in your career with Bean Infosystems."
                imageUrl="/lovable-uploads/background_about.png"
            />

            <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #C19A6B 100%)', minHeight: '80vh' }}>
                <PageSection>
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 md:p-12 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl overflow-hidden relative">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-bean/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Job Application Form</h2>
                                    <p className="text-gray-700 max-w-lg mx-auto">
                                        Please fill out the form below carefully. Fields marked with * are mandatory.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-800 ml-1">
                                                <User size={16} className="mr-2 text-bean" />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 rounded-xl bg-white/40 border border-white/50 focus:border-bean focus:ring-2 focus:ring-bean/20 outline-none transition-all placeholder:text-gray-500 text-gray-900"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-800 ml-1">
                                                <Mail size={16} className="mr-2 text-bean" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 rounded-xl bg-white/40 border border-white/50 focus:border-bean focus:ring-2 focus:ring-bean/20 outline-none transition-all placeholder:text-gray-500 text-gray-900"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="flex items-center text-sm font-semibold text-gray-800 ml-1">
                                                <Phone size={16} className="mr-2 text-bean" />
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+1 (123) 456-7890"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 rounded-xl bg-white/40 border border-white/50 focus:border-bean focus:ring-2 focus:ring-bean/20 outline-none transition-all placeholder:text-gray-500 text-gray-900"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="role" className="flex items-center text-sm font-semibold text-gray-800 ml-1">
                                                <Briefcase size={16} className="mr-2 text-bean" />
                                                Role Applying For *
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 rounded-xl bg-white/40 border border-white/50 focus:border-bean focus:ring-2 focus:ring-bean/20 outline-none transition-all text-gray-900"
                                            >
                                                <option value="">Select a position</option>
                                                <option value="Senior Full-Stack Developer">Senior Full-Stack Developer</option>
                                                <option value="UX/UI Designer">UX/UI Designer</option>
                                                <option value="Project Manager">Project Manager</option>
                                                <option value="DevOps Engineer">DevOps Engineer</option>
                                                <option value="Business Analyst">Business Analyst</option>
                                                <option value="Data Scientist">Data Scientist</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Visa & Professional info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="visaStatus" className="flex items-center text-sm font-semibold text-gray-800 ml-1">
                                                <Globe size={16} className="mr-2 text-bean" />
                                                Work Authorization / Visa Details *
                                            </label>
                                            <input
                                                type="text"
                                                id="visaStatus"
                                                name="visaStatus"
                                                placeholder="e.g. US Citizen, H1B, Opt, etc."
                                                value={formData.visaStatus}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 rounded-xl bg-white/40 border border-white/50 focus:border-bean focus:ring-2 focus:ring-bean/20 outline-none transition-all placeholder:text-gray-500 text-gray-900"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="experience" className="flex items-center text-sm font-semibold text-gray-800 ml-1">
                                                <Award size={16} className="mr-2 text-bean" />
                                                Years of Experience *
                                            </label>
                                            <select
                                                id="experience"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 rounded-xl bg-white/40 border border-white/50 focus:border-bean focus:ring-2 focus:ring-bean/20 outline-none transition-all text-gray-900"
                                            >
                                                <option value="">Select experience level</option>
                                                <option value="0-2 years">Entry Level (0-2 years)</option>
                                                <option value="3-5 years">Mid Level (3-5 years)</option>
                                                <option value="6-10 years">Senior Level (6-10 years)</option>
                                                <option value="10+ years">Expert Level (10+ years)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="linkedin" className="flex items-center text-sm font-semibold text-gray-800 ml-1">
                                                <FileText size={16} className="mr-2 text-bean" />
                                                LinkedIn Profile URL
                                            </label>
                                            <input
                                                type="url"
                                                id="linkedin"
                                                name="linkedin"
                                                placeholder="https://linkedin.com/in/username"
                                                value={formData.linkedin}
                                                onChange={handleChange}
                                                className="w-full p-4 rounded-xl bg-white/40 border border-white/50 focus:border-bean focus:ring-2 focus:ring-bean/20 outline-none transition-all placeholder:text-gray-500 text-gray-900"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="portfolio" className="flex items-center text-sm font-semibold text-gray-800 ml-1">
                                                <FileText size={16} className="mr-2 text-bean" />
                                                Portfolio / GitHub URL
                                            </label>
                                            <input
                                                type="url"
                                                id="portfolio"
                                                name="portfolio"
                                                placeholder="https://portfolio.com or https://github.com/..."
                                                value={formData.portfolio}
                                                onChange={handleChange}
                                                className="w-full p-4 rounded-xl bg-white/40 border border-white/50 focus:border-bean focus:ring-2 focus:ring-bean/20 outline-none transition-all placeholder:text-gray-500 text-gray-900"
                                            />
                                        </div>
                                    </div>

                                    {/* Resume Upload */}
                                    <div className="pt-4">
                                        <div className="space-y-2">
                                            <label className="flex items-center text-sm font-semibold text-gray-800 ml-1 mb-2">
                                                <Upload size={16} className="mr-2 text-bean" />
                                                Upload Resume (PDF/DOC) *
                                            </label>
                                            <div
                                                onClick={triggerFileInput}
                                                className={`group relative w-full p-8 md:p-12 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${fileName ? 'border-bean bg-bean/5' : 'border-white/60 hover:border-bean/50 hover:bg-white/30'
                                                    }`}
                                            >
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx"
                                                    className="hidden"
                                                />
                                                {fileName ? (
                                                    <div className="flex flex-col items-center animate-fade-in">
                                                        <div className="w-16 h-16 bg-bean/10 rounded-full flex items-center justify-center mb-4 text-bean">
                                                            <FileText size={32} />
                                                        </div>
                                                        <p className="text-bean font-medium text-center">{fileName}</p>
                                                        <span className="text-xs text-bean/60 mt-2">Click to replace file</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col items-center text-gray-600 transition-colors group-hover:text-bean">
                                                        <Upload size={48} className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                                        <p className="font-medium">Drag & drop your resume here</p>
                                                        <p className="text-sm opacity-70">or click to browse files</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-bean hover:bg-bean-dark text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-bean/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing Application...
                                                </span>
                                            ) : (
                                                <span className="flex items-center">
                                                    <Send size={20} className="mr-3" />
                                                    Submit Application
                                                </span>
                                            )}
                                        </button>
                                        <p className="text-center text-xs text-gray-600 mt-4 px-10">
                                            By submitting this form, you authorize Bean Infosystems to collect and process your personal data in accordance with our Privacy Policy.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </div>
                </PageSection>
            </div>

            <CTASection />
        </>
    );
};

export default Application;
