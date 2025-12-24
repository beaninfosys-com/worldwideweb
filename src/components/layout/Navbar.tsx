

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Info, Briefcase, Package, GraduationCap, Users, Heart, Mail } from 'lucide-react';

type NavLink = {
  name: string;
  path: string;
  icon?: any;
  children?: { name: string; path: string }[];
};

const navLinks: NavLink[] = [
  { name: 'About', path: '/about', icon: Info },
  {
    name: 'Services',
    path: '/services',
    icon: Briefcase,
    children: [
      { name: 'AI Solutions & Integration', path: '/services/ai-solutions' },
      { name: 'Application Development', path: '/services/application-development' },
      { name: 'Advisory & Consulting', path: '/services/advisory-consulting' },
      { name: 'Business Intelligence', path: '/services/business-intelligence' },
      { name: 'Data & Analytics', path: '/services/data-analytics' }
    ]
  },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Trainings', path: '/training', icon: GraduationCap },
  { name: 'Careers', path: '/careers', icon: Users },
  { name: 'Social Impact', path: '/social-impact', icon: Heart },
  { name: 'Contact', path: '/contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen
        ? 'bg-white shadow-lg py-4'
        : 'bg-white py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/f3e399f8-7966-46c6-9a9b-c467e8887e83.png"
              alt="Bean Logo"
              style={{ width: 100, height: 60, marginLeft: 20 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <nav>
              <div className="flex items-center space-x-2">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.name} className="relative group">
                      <div className="flex items-center">
                        <Link
                          to={link.path}
                          className={`inline-flex items-center px-4 py-2 rounded-full uppercase text-base tracking-wide transition-all duration-300 ${location.pathname === link.path
                            ? 'text-white font-medium bg-bean/80 backdrop-blur-md shadow-2xl shadow-bean/30 transform hover:scale-105'
                            : 'text-bean bg-white/10 backdrop-blur-md border border-transparent hover:bg-white/20 hover:shadow-xl hover:shadow-bean/20 hover:transform hover:scale-105'
                            }`}
                          style={{
                            backdropFilter: location.pathname === link.path ? 'blur(12px)' : 'blur(8px)',
                            WebkitBackdropFilter: location.pathname === link.path ? 'blur(12px)' : 'blur(8px)'
                          }}
                        >
                          {link.icon && <link.icon size={16} className="mr-1.5" style={{ color: location.pathname === link.path ? 'inherit' : '#3F321F' }} />}
                          {link.name}
                        </Link>

                      </div>
                      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                        <div className="bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              className="block px-4 py-3 hover:bg-gray-50 text-sm transition-colors text-gray-700 hover:text-[#3F321F]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`inline-flex items-center px-4 py-2 rounded-full uppercase text-base tracking-wide transition-all duration-300 ${location.pathname === link.path
                        ? 'text-white font-medium bg-bean/80 backdrop-blur-md shadow-2xl shadow-bean/30 transform hover:scale-105'
                        : 'text-bean bg-white/10 backdrop-blur-md border border-transparent hover:bg-white/20 hover:shadow-xl hover:shadow-bean/20 hover:transform hover:scale-105'
                        }`}
                      style={{
                        backdropFilter: location.pathname === link.path ? 'blur(12px)' : 'blur(8px)',
                        WebkitBackdropFilter: location.pathname === link.path ? 'blur(12px)' : 'blur(8px)'
                      }}
                    >
                      {link.icon && <link.icon size={16} className="mr-1.5" style={{ color: location.pathname === link.path ? 'inherit' : '#3F321F' }} />}
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </nav>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden transition-colors"
            style={{ color: '#3F321F' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} style={{ color: '#3F321F' }} /> : <Menu size={24} style={{ color: '#3F321F' }} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pt-6 pb-6">
            <div className="flex flex-col space-y-4 mobile-nav-menu p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="border-b border-gray-200 pb-2">
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 mb-2 uppercase text-sm rounded-full transition-all duration-300 text-bean bg-white/10 backdrop-blur-md border border-transparent hover:bg-white/20 hover:shadow-xl hover:shadow-bean/20 hover:transform hover:scale-105"
                      style={{
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)'
                      }}
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span className="flex items-center">
                        {link.icon && <link.icon size={16} className="mr-1.5" style={{ color: '#3F321F' }} />}
                        {link.name}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 mt-2 border-l border-gray-200 space-y-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block py-2 text-gray-600 hover:text-[#3F321F] text-sm"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`inline-flex items-center px-4 py-3 mb-2 uppercase text-sm rounded-full transition-all duration-300 ${location.pathname === link.path
                      ? 'text-white font-medium bg-bean/80 backdrop-blur-md shadow-2xl shadow-bean/30 transform hover:scale-105'
                      : 'text-bean bg-white/10 backdrop-blur-md border border-transparent hover:bg-white/20 hover:shadow-xl hover:shadow-bean/20 hover:transform hover:scale-105'
                      }`}
                    style={{
                      backdropFilter: location.pathname === link.path ? 'blur(12px)' : 'blur(8px)',
                      WebkitBackdropFilter: location.pathname === link.path ? 'blur(12px)' : 'blur(8px)'
                    }}
                  >
                    {link.icon && <link.icon size={16} className="mr-1.5" style={{ color: location.pathname === link.path ? 'inherit' : '#3F321F' }} />}
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

