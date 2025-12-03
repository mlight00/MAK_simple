
import React, { useState } from 'react';
import { Page, NavItem } from '../../types';
import { Menu, X, Printer } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: Page.Home },
  { label: 'Membership', page: Page.Membership },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: Page) => {
    setPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJoinClick = () => {
    window.open('https://www.medicalaesthetickorea.com/member', '_blank');
  };

  const handleLogoClick = () => {
    window.open('https://www.medicalaesthetickorea.com', '_blank');
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0A192F]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={handleLogoClick}>
            <img
              src="/logo_new.png"
              alt="MEDICAL AESTHETIC KOREA"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
