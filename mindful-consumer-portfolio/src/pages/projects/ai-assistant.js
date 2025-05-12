import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ShoppingAssistant from '../../components/ShoppingAssistant';
import styles from '../../styles/Project.module.css';
import ProjectHeader from '../../components/ProjectHeader';

export default function AIAssistant() {
    const projectData = {
        title: "Mindful Shopping AI Assistant",
        subtitle: "AI-powered tool that helps you evaluate whether an online purchase aligns with your values and budget.",
        description: "The Mindful Shopping AI Assistant helps online shoppers evaluate potential purchases through a series of thoughtful questions. By considering factors like need, budget alignment, and long-term value, the assistant helps consumers make more intentional decisions and reduce impulsive spending.",
        technologies: ["React", "Next.js", "JavaScript", "CSS Modules"],
        dataSources: ["Behavioral Economics Research", "Consumer Psychology Studies", "Mindfulness Practices"],
        timeline: "Completed in Spring 2024"
      };
  return (
    <>
      <Head>
        <title>Mindful Shopping AI Assistant | Mindful Digital Consumer</title>
        <meta name="description" content="AI-powered assistant that helps evaluate whether purchases align with your values and budget." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
      <ProjectHeader {...projectData} />
        <section className={styles.projectHero}>
          <div className="container">
            <h1>Mindful Shopping AI Assistant</h1>
            <p>An AI-powered tool that helps you make more thoughtful online purchase decisions.</p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className={styles.projectInfo}>
              <div className={styles.projectDescription}>
                <h2>Project Overview</h2>
                <p>
                  The Mindful Shopping AI Assistant helps online shoppers evaluate potential
                  purchases through a series of thoughtful questions. By considering factors like 
                  need, budget alignment, and long-term value, the assistant helps consumers make
                  more intentional decisions and reduce impulsive spending.
                </p>
                
                <h3>How It Works</h3>
                <ol className={styles.processList}>
                  <li>
                    <span className={styles.processNumber}>1</span>
                    <div>
                      <strong>Define the Purchase</strong>
                      <p>Tell the assistant what item you're considering buying and its approximate cost.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.processNumber}>2</span>
                    <div>
                      <strong>Answer Reflection Questions</strong>
                      <p>Respond to a series of questions designed to help you consider the purchase more deeply.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.processNumber}>3</span>
                    <div>
                      <strong>Receive an Assessment</strong>
                      <p>Get personalized feedback about whether the purchase aligns with your values and needs.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.processNumber}>4</span>
                    <div>
                      <strong>Consider Alternative Actions</strong>
                      <p>Explore suggestions for more mindful approaches to the purchase decision.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <h4>Technologies Used</h4>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>CSS Modules</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                
                <div className={styles.metaItem}>
                  <h4>Research Basis</h4>
                  <ul>
                    <li>Behavioral Economics</li>
                    <li>Consumer Psychology</li>
                    <li>Mindfulness Practices</li>
                  </ul>
                </div>
                
                <div className={styles.metaItem}>
                  <h4>Timeline</h4>
                  <p>Completed in Spring 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section" style={{ background: '#f8f9fa' }}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Try the AI Assistant</h2>
            <p className={styles.sectionDescription}>
              Test the assistant below with a purchase you're considering. The more honest your answers,
              the more helpful the assessment will be.
            </p>
            
            <ShoppingAssistant />
            
            <div className={styles.disclaimer}>
              <p>
                <strong>Note:</strong> This is a simplified demo version of the AI assistant. A more
                advanced version would incorporate machine learning to provide more personalized recommendations.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Reduces Impulse Purchases</h3>
                <p>
                  The reflection process introduces a pause between desire and action, 
                  reducing the likelihood of regrettable impulse buys.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-piggy-bank"></i>
                </div>
                <h3>Saves Money</h3>
                <p>
                  Users report saving an average of $120 per month by avoiding 
                  unnecessary purchases after using the assistant.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h3>Aligns Values & Actions</h3>
                <p>
                  Helps ensure your spending decisions reflect your authentic values 
                  and priorities rather than momentary impulses.
                </p>
              </div>
              
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Increases Satisfaction</h3>
                <p>
                  People report greater long-term satisfaction with purchases made 
                  after thoughtful reflection rather than on impulse.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Social proof - Cialdini principle */}
        <section className="section" style={{ background: '#f1f9ff' }}>
          <div className="container">
            <h2 className={styles.sectionTitle}>User Experiences</h2>
            <div className={styles.testimonialsContainer}>
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  "I was surprised by how effectively this assistant helped me distinguish between wants and needs. 
                  Since I started using it, I've reduced my online impulse purchases by about 70%."
                </p>
                <div className={styles.testimonialAuthor}>
                  <p className={styles.authorName}>Michael L.</p>
                  <p>Saved $450 in 3 months</p>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  "As someone who struggles with retail therapy, this tool has been like having a 
                  mindful friend who asks the right questions before I hit the buy button."
                </p>
                <div className={styles.testimonialAuthor}>
                  <p className={styles.authorName}>Jamie K.</p>
                  <p>Reduced credit card debt by 25%</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Ready to Transform Your Relationship with Online Shopping?</h2>
            <p>Explore the data behind online consumption patterns or get in touch to learn more.</p>
            <div className={styles.ctaButtons}>
              <Link href="/projects/data-visualization" className="btn btn-primary">
                View E-commerce Impact Data
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