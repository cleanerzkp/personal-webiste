'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import styles from '../styles/navbar.module.css';
import { ModeToggle } from './ui/toggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/web2', label: 'Web2' },
  { href: '/web3', label: 'Web3' },
  { href: '/contact', label: 'Contact' },
];

const MainNav: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>KK</Link>
      
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  styles.navLink,
                  pathname === item.href && styles.activeNavLink
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ModeToggle />
    </header>
  );
};

export default MainNav;