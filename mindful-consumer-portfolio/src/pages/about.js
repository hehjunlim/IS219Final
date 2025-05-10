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
            <p>Educating and empowering people to make better online consumption choices</p>
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
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              
              <div className={styles.aboutContent}>
                <h2>My Story</h2>
                <p>
                  I've always been fascinated by the intersection of technology, psychology, and consumer behavior.
                  My journey began when I noticed my own online shopping habits changing dramatically with the rise
                  of e-commerce platforms and one-click purchasing.
                </p>
                <p>
                  What started as personal curiosity evolved into a mission to help others understand and improve their
                  relationship with digital consumption. Through data visualization and targeted tools, I work to educate
                  people about the hidden psychological triggers that e-commerce platforms use to encourage impulsive buying.
                </p>
                <p>
                  My work combines research in behavioral economics, consumer psychology, and data analysis to create
                  practical tools that empower people to make more mindful decisions about their online spending.
                </p>
                
                <h3>Education & Background</h3>
                <ul className={styles.educationList}>
                  <li>
                    <div className={styles.degree}>Bachelor of Science in Computer Science</div>
                    <div className={styles.school}>New Jersey Institute of Technology</div>
                  </li>
                  <li>
                    <div className={styles.degree}>Certificate in Data Visualization</div>
                    <div className={styles.school}>Coursera - University of Michigan</div>
                  </li>
                  <li>
                    <div className={styles.degree}>Certification in User Experience Design</div>
                    <div className={styles.school}>Interaction Design Foundation</div>
                  </li>
                </ul>
                
                <h3>Core Values</h3>
                <div className={styles.valuesGrid}>
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <h4>Awareness</h4>
                    <p>Bringing conscious attention to habitual consumption patterns</p>
                  </div>
                  
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <h4>Balance</h4>
                    <p>Finding equilibrium between convenience and mindful decision-making</p>
                  </div>
                  
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>
                      <i className="fas fa-hand-holding-heart"></i>
                    </div>
                    <h4>Empowerment</h4>
                    <p>Providing tools and knowledge for better consumption choices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section" style={{ background: '#f8f9fa' }}>
          <div className="container">
            <h2 className={styles.sectionTitle}>My Approach</h2>
            <div className={styles.approachGrid}>
              <div className={styles.approachCard}>
                <div className={styles.approachIcon}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Data-Driven Insights</h3>
                <p>
                  I leverage data visualization and analysis to uncover patterns in online consumption behavior,
                  making complex information accessible and actionable.
                </p>
              </div>
              
              <div className={styles.approachCard}>
                <div className={styles.approachIcon}>
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Psychological Understanding</h3>
                <p>
                  By understanding the psychological triggers that drive online shopping behavior, I create tools
                  that address the root causes of impulsive digital consumption.
                </p>
              </div>
              
              <div className={styles.approachCard}>
                <div className={styles.approachIcon}>
                  <i className="fas fa-tools"></i>
                </div>
                <h3>Practical Tools</h3>
                <p>
                  I focus on creating user-friendly, accessible tools that seamlessly integrate into people's
                  existing digital habits while promoting more mindful behavior.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className={styles.sectionTitle}>Mission Statement</h2>
            <div className={styles.missionBox}>
              <p>
                My mission is to empower people to take control of their digital consumption habits through
                education, awareness, and practical tools. I believe in a future where technology enhances our
                well-being rather than encouraging mindless consumption.
              </p>
              <p>
                By promoting mindful digital consumption, I aim to help people align their online spending with
                their authentic values, reduce regretted impulse purchases, and foster a healthier relationship
                with e-commerce platforms.
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Ready to Transform Your Digital Consumption Habits?</h2>
            <p>Explore my projects or get in touch to learn more about mindful online spending.</p>
            <div className={styles.ctaButtons}>
              <Link href="/projects" className="btn btn-primary">
                Explore Projects
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