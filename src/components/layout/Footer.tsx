import React from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    // Changed bg-gray-100 to bg-gray-200 for a more visible light gray background.
    <footer className="bg-gray-200 border-t border-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Company Info */}
          <div>
            <img
              src="/images/footer_new_tree.png"
              alt="Footer Image"
              className="w-full h-auto"
            />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/data-analytics" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Data & Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/advisory-services" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/services/consulting-services" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link to="/services/business-intelligence" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services/application-development" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Application Development
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/clients" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Products</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Trainings</a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Social Impact</a>
              </li>
            </ul>
          </div>

          {/* Addresses */}
          {/* Aligned addresses and flags using flexbox */}
          <div className="space-y-8">
            {/* United States */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-start space-x-3">UNITED STATES</h3>
              <div className="flex items-start space-x-3">
                {/* Adjusted flag size */}
                <img src='https://www.beaninfosys.com/img/usa.png' height={40} width={60} style={{ minWidth: '70px' }} />
                {/* Increased text color for better visibility against light gray background */}
                <span className="text-gray-700 text-xs text-left">
                  8751 Collin Mckinney Pkwy #201
                  Mckinney, TX, USA 75070
                </span>
              </div>
            </div>

            {/* India */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-start space-x-3">INDIA</h3>
              <div className="flex items-start space-x-3">
                {/* Adjusted flag size */}
                <img src="https://www.beaninfosys.com/img/india.png" height={40} width={60} style={{ minWidth: '70px' }} />
                {/* Increased text color for better visibility against light gray background and formatted text for alignment */}
                <span className="text-gray-700 text-xs text-left">
                  Workafella, Western Aqua 5th Floor #Suite 139,5th Floor, Whitefield's,Hitech City,Hyderabad, Telangana India 500081
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Adjusted border-t color to match the new background */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bean Infosystems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;