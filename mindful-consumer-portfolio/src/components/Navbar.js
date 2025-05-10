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
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Mindful Consumer
        </Link>
        
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isOpen ? styles.change : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.change : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.change : ''}`}></div>
        </div>
        
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link 
              href="/" 
              className={`${styles.navLink} ${router.pathname === '/' ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link 
              href="/about" 
              className={`${styles.navLink} ${router.pathname === '/about' ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link 
              href="/projects" 
              className={`${styles.navLink} ${router.pathname.startsWith('/projects') ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${router.pathname === '/contact' ? styles.active : ''}`}
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