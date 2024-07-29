'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from './ui/toggle';
import { Menu } from 'lucide-react';

const navItems = [
  // cleaner
];

const MainNav: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background/30 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors -ml-4"
            onClick={handleLogoClick} // Handle click event for logo
          >
            KK
          </Link>
          
          <nav className="hidden md:flex justify-center w-full max-w-2xl">
            <ul className="flex space-x-4">
              {/* Removed 'Home' link */}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4 -mr-4">
            <ModeToggle />
            <button
              className="md:hidden text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              {/* Removed 'Home' link */}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MainNav;