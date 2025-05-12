import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Mindful Digital Consumer</title>
        <meta name="description" content="Learn about my journey to promote mindful digital consumption and conscious online spending habits." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        <section className={styles.aboutHero}>
          <div className="container">
            <h1>About Me</h1>
            <p>Passionate about the intersection of fashion, technology, and conscious consumption</p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className={styles.aboutGrid}>
              <div className={styles.aboutImage}>
                <Image 
                  src="/images/profile.jpg" 
                  alt="Profile"
                  width={400}
                  height={500}
                  className={styles.profileImg}
                />
                <div className={styles.socialLinks}>
                  <a href="https://github.com/hehjunlim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/hehjun-lim/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              
              <div className={styles.aboutContent}>
                <h2>Hi, I'm Hehjun</h2>
                <p>
                  I'm currently pursuing a BS in Web and Information Systems at NJIT. Since January 2024, 
                  I've been working as a Change Management Co-op at Johnson & Johnson.
                </p>
                <p>
                  I noticed how easy it became to overspend online – one-click purchases, endless scrolling, 
                  and targeted ads were affecting my shopping habits. This sparked my interest in understanding 
                  how e-commerce platforms influence our spending decisions.
                </p>
                <p>
                  Now I'm passionate about integrating fashion and technology to bring awareness to overconsumption. 
                  I create tools and visualizations that help people recognize patterns in their online shopping 
                  habits and make more intentional purchases.
                </p>
                
                <h3>What I Do</h3>
                <p>
                  Through my projects, I explore the psychology behind online shopping and create practical tools
                  that help people:
                </p>
                <ul className={styles.simpleList}>
                  <li>Track their spending patterns</li>
                  <li>Identify emotional shopping triggers</li>
                  <li>Make more conscious purchase decisions</li>
                  <li>Reduce impulse buying</li>
                </ul>
                
                <h3>Get in Touch</h3>
                <p>
                  If you're interested in mindful consumption, sustainable fashion tech, or just want to chat 
                  about the impact of e-commerce on our spending habits, I'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Check Out My Work</h2>
            <p>See the tools I've built to promote mindful digital consumption</p>
            <div className={styles.ctaButtons}>
              <Link href="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}