import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import styles from '../styles/navbar.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/web2', label: 'Web2 Projects' },
  { href: '/web3', label: 'Web3 Projects' },
  { href: '/contact', label: 'Contact' },
];

const MainNav: React.FC = () => {
  return (
    <nav className={cn(
      'sticky top-0 z-50 w-full',
      styles.glassyNav
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Kacper Karbownik
          </Link>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;