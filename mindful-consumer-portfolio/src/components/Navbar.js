import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          Mindful Consumer
        </Link>
        
        <div className={styles.navbarMenuIcon} onClick={toggleMenu}>
          <div className={`${styles.navbarBar} ${isOpen ? styles.change : ''}`}></div>
          <div className={`${styles.navbarBar} ${isOpen ? styles.change : ''}`}></div>
          <div className={`${styles.navbarBar} ${isOpen ? styles.change : ''}`}></div>
        </div>
        
        <ul className={`${styles.navbarMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navbarItem}>
            <Link 
              href="/" 
              className={`${styles.navbarLink} ${router.pathname === '/' ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link 
              href="/about" 
              className={`${styles.navbarLink} ${router.pathname === '/about' ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link 
              href="/projects" 
              className={`${styles.navbarLink} ${router.pathname.startsWith('/projects') ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link 
              href="/contact" 
              className={`${styles.navbarLink} ${router.pathname === '/contact' ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;