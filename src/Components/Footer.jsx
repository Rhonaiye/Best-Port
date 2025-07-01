import React from 'react';
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Instagram, Twitter, ExternalLink, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const FooterSection = ({ title, children }) => (
    <div className="flex flex-col space-y-3 font-prompt">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );

  const FooterLink = ({ href, icon: Icon, children, external }) => (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center font-prompt gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
    >
      {Icon && <Icon size={16} />}
      <span>{children}</span>
    </a>
  );

  return (
    <footer className="bg-[#111b21] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Section */}
          <FooterSection title="Get in Touch">
            <FooterLink 
              href="https://wa.me/+2349131215984?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20opportunity"
              icon={MessageCircle}
              external
            >
              WhatsApp
            </FooterLink>
            <FooterLink 
              href="mailto:itsrodivine@gmail.com"
              icon={Mail}
            >
              itsrodivine@gmail.com
            </FooterLink>
          </FooterSection>

          {/* Social Media Section */}
          <FooterSection title="Social Media">
            <FooterLink 
              href="https://www.instagram.com/_naiye/"
              icon={Instagram}
              external
            >
              Instagram
            </FooterLink>
          
          </FooterSection>

          {/* Links Section */}
          <FooterSection title="Quick Links">
            <Link 
              to="/blogs" 
              className="flex items-center gap-2 font-prompt text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <BookOpen size={16} />
              <span>Blog Posts</span>
            </Link>
           
          </FooterSection>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center font-prompt text-sm text-gray-400">
            © {currentYear} Rhonaiye Felix. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;