import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Mindful Consumer</h3>
            <p className={styles.footerDescription}>
              Helping you make better digital consumption choices and live more intentionally online.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Free Resources</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="https://www.fleurishcollective.com/mindful-shopping-guide/">Mindful Consumption Guide</Link></li>
              <li><Link href="https://www.nerdwallet.com/article/finance/budget-worksheet">Shopping Budget Template</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            &copy; {currentYear} Mindful Consumer. All rights reserved.
          </p>
          <div className={styles.footerSocialLinks}>
            <a href="https://github.com/hehjunlim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hehjun-lim/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;