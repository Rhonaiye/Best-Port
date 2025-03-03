import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-inherit pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name Section */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                <span className="text-blue-950 font-prompt font-bold text-lg">RF</span>
              </div>
              <span className="text-blue-400 font-prompt font-semibold text-lg hidden sm:block">
                Rhonaiye Felix
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 mr-10">
            <a href="/" className="text-blue-400 font-prompt hover:text-white transition-colors">
              Home
            </a>
            
            <a href="/Blogs" className="text-blue-400 font-prompt hover:text-white transition-colors">
              Blog
            </a>
           
          </nav>

          {/* Mobile Menu Button */}
         
        </div>
      </div>
    </header>
  );
};

export default Header;