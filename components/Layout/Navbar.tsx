import React, { useState } from 'react';
import { Page, NavItem } from '../../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: Page.Home },
  { label: 'Insights', page: Page.Insights },
  { label: 'K-Trends', page: Page.Trends },
  { label: 'Membership', page: Page.Membership },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: Page) => {
    setPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0A192F]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => handleNav(Page.Home)}>
            <img 
              src="/logo.png" 
              alt="MEDICAL AESTHETIC KOREA" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-accent font-bold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNav(Page.Guide)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all border ${
                   currentPage === Page.Guide 
                   ? 'bg-white text-primary border-white' 
                   : 'bg-transparent border-white text-white hover:bg-white hover:text-primary'
                }`}
              >
                Access Guide
              </button>
              <button 
                 onClick={() => handleNav(Page.Membership)}
                 className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-sm text-sm font-bold shadow-lg shadow-red-900/20 transition-all"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-b border-white/10 animate-[fadeIn_0.2s_ease-out]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.page ? 'text-white bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav(Page.Guide)}
              className="block w-full text-left text-accent font-bold px-3 py-2 rounded-md text-base hover:bg-gray-700"
            >
              How to Join
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};