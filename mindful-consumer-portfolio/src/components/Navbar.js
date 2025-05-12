import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const projects = [
    { name: "E-commerce Growth & Impact", path: "/projects/data-visualization" },
    { name: "Mindful Shopping AI Assistant", path: "/projects/ai-assistant" },
    { name: "Digital Wellbeing Tracker", path: "/projects/digital-wellbeing" }
  ];

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
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <div
              className={`${styles.navbarLink} ${router.pathname.startsWith('/projects') ? styles.active : ''}`}
              onClick={toggleDropdown}
              style={{ cursor: 'pointer' }}
            >
              Projects
              <span className={styles.dropdownArrow}>▼</span>
            </div>
            <ul className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.show : ''}`}>
              <li>
                <Link 
                  href="/projects" 
                  className={styles.dropdownLink}
                  onClick={() => {
                    setIsOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  All Projects
                </Link>
              </li>
              {projects.map((project, index) => (
                <li key={index}>
                  <Link 
                    href={project.path} 
                    className={`${styles.dropdownLink} ${router.pathname === project.path ? styles.activeDropdown : ''}`}
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
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