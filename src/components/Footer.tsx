import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 mr-2 text-yellow-400" />
              <span className="font-bold text-xl">Humanity Public School</span>
            </div>
            <p className="text-gray-300 mb-4">
              Nurturing minds, building character, and inspiring excellence since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
              <li><Link to="/faculty" className="text-gray-300 hover:text-white">Faculty</Link></li>
              <li><Link to="/student-life" className="text-gray-300 hover:text-white">Student Life</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>181133 Bassi-Kalan Bari-Brahmana samba</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+917051578157</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>hpsbsk@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">School Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 8:00 AM - 3:30 PM</li>
              <li>Saturday: 8:00 AM - 3:30 PM</li>
              <li>Sunday: Closed</li>
              <li>Office Hours: 9:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Humanity Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;