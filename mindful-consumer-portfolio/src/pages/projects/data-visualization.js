import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Project.module.css';
import { OverconsumptionViz } from '../../components/OverconsumptionViz';

export default function DataVisualization() {
  return (
    <>
      <Head>
        <title>E-commerce Growth & Impact | Mindful Digital Consumer</title>
        <meta name="description" content="Interactive visualization showing the correlation between e-commerce growth and credit card debt." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        <section className={styles.projectHero}>
          <div className="container">
            <h1>E-commerce Growth & Credit Card Impact</h1>
            <p>Interactive data visualization showing how the rise of online shopping has affected consumer credit card debt.</p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className={styles.projectInfo}>
              <div className={styles.projectDescription}>
                <h2>Project Overview</h2>
                <p>
                  This interactive visualization explores the relationship between the growth of e-commerce
                  and the increase in consumer credit card debt over the past two decades. By examining trends
                  and correlations, we can better understand how online shopping has changed consumer spending habits.
                </p>
                
                <h3>Key Insights</h3>
                <ul className={styles.insightsList}>
                  <li>
                    <i className="fas fa-chart-line"></i>
                    <div>
                      <strong>E-commerce Growth:</strong> Online shopping has grown from less than 1% of total retail 
                      in 2000 to over 16% by 2023.
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-credit-card"></i>
                    <div>
                      <strong>Credit Card Impact:</strong> Average monthly credit card spending has increased 
                      from $500 to over $5,000 as e-commerce has become more popular.
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-shopping-cart"></i>
                    <div>
                      <strong>Purchasing Frequency:</strong> Consumers now make purchases 7x more frequently than 
                      before the e-commerce boom.
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-virus"></i>
                    <div>
                      <strong>Pandemic Acceleration:</strong> COVID-19 compressed approximately five years of 
                      e-commerce growth into just a few months.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <h4>Technologies Used</h4>
                  <ul>
                    <li>React</li>
                    <li>D3.js</li>
                    <li>Next.js</li>
                    <li>CSS Modules</li>
                  </ul>
                </div>
                
                <div className={styles.metaItem}>
                  <h4>Data Sources</h4>
                  <ul>
                    <li>U.S. Census Bureau</li>
                    <li>Federal Reserve</li>
                    <li>Consumer Financial Protection Bureau</li>
                    <li>eMarketer Research</li>
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
            <h2 className={styles.sectionTitle}>Interactive Visualization</h2>
            <p className={styles.sectionDescription}>
              Explore the visualization below to see how e-commerce growth correlates with increased credit card spending.
              Click on different years to see detailed information.
            </p>
            
            <div className={styles.visualizationContainer}>
              {/* Embed your existing E-commerce visualization component here */}
              <OverconsumptionViz />
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className={styles.sectionTitle}>Key Takeaways</h2>
            <div className={styles.takeawaysGrid}>
              <div className={styles.takeawayCard}>
                <div className={styles.takeawayIcon}>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Simplified Purchasing</h3>
                <p>
                  E-commerce platforms have removed friction from the buying process, 
                  leading to more frequent and impulsive purchases.
                </p>
              </div>
              
              <div className={styles.takeawayCard}>
                <div className={styles.takeawayIcon}>
                  <i className="fas fa-money-bill-wave"></i>
                </div>
                <h3>Debt Correlation</h3>
                <p>
                  The data shows a clear correlation between increased e-commerce activity 
                  and higher average credit card balances.
                </p>
              </div>
              
              <div className={styles.takeawayCard}>
                <div className={styles.takeawayIcon}>
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Psychological Factors</h3>
                <p>
                  Digital payment methods create psychological distance from money, 
                  making it easier to spend more than intended.
                </p>
              </div>
              
              <div className={styles.takeawayCard}>
                <div className={styles.takeawayIcon}>
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h3>Mindfulness Opportunity</h3>
                <p>
                  Understanding these patterns creates an opportunity for more 
                  mindful digital consumption decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Ready to Become a More Mindful Digital Consumer?</h2>
            <p>Explore my other projects to learn more strategies for conscious online spending.</p>
            <div className={styles.ctaButtons}>
              <Link href="/projects/ai-assistant" className="btn btn-primary">
                Explore AI Shopping Assistant
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