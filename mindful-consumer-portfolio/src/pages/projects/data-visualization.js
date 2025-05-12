import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectHeader from '../../components/ProjectHeader';
import OverconsumptionViz from '../../components/OverconsumptionViz';
import styles from '../../styles/Project.module.css';

export default function DataVisualization() {
  const projectData = {
    title: "E-commerce Growth & Credit Card Impact",
    subtitle: "Interactive data visualization showing how the rise of online shopping has affected consumer credit card debt.",
    description: "This interactive visualization explores the relationship between the growth of e-commerce and the increase in consumer credit card debt over the past two decades. By examining trends and correlations, we can better understand how online shopping has changed consumer spending habits.",
    technologies: ["React", "D3.js", "Next.js", "CSS Modules"],
    dataSources: [
      "U.S. Census Bureau",
      "Federal Reserve",
      "Consumer Financial Protection Bureau",
      "eMarketer Research"
    ],
    timeline: "Completed in Spring 2024"
  };

  return (
    <>
      <Head>
        <title>{projectData.title} | Mindful Digital Consumer</title>
        <meta name="description" content={projectData.subtitle} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        <ProjectHeader {...projectData} />
        
        <section className={styles.insightsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Key Insights</h2>
            <div className={styles.insightsGrid}>
              <div className={styles.insightCard}>
                <div className={styles.insightIcon}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>E-commerce Growth</h3>
                <p>Online shopping has grown from less than 1% of total retail in 2000 to over 16% by 2023.</p>
              </div>
              
              <div className={styles.insightCard}>
                <div className={styles.insightIcon}>
                  <i className="fas fa-credit-card"></i>
                </div>
                <h3>Credit Card Impact</h3>
                <p>Average monthly credit card spending has increased from $500 to over $5,000 as e-commerce has become more popular.</p>
              </div>
              
              <div className={styles.insightCard}>
                <div className={styles.insightIcon}>
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h3>Purchasing Frequency</h3>
                <p>Consumers now make purchases 7x more frequently than before the e-commerce boom.</p>
              </div>
              
              <div className={styles.insightCard}>
                <div className={styles.insightIcon}>
                  <i className="fas fa-virus"></i>
                </div>
                <h3>Pandemic Acceleration</h3>
                <p>COVID-19 compressed approximately five years of e-commerce growth into just a few months.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.visualizationSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Interactive Visualization</h2>
            <p className={styles.sectionDescription}>
              Explore the visualization below to see how e-commerce growth correlates with increased credit card spending.
              Click on different years to see detailed information. Hover over data points, milestones, and company markers for more insights.
            </p>
            
            <div className={styles.visualizationContainer}>
              <OverconsumptionViz />
            </div>
          </div>
        </section>
        
        <section className={styles.takeawaysSection}>
          <div className={styles.container}>
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
          <div className={styles.container}>
            <h2>Ready to Become a More Mindful Digital Consumer?</h2>
            <p>Explore my other projects to learn more strategies for conscious online spending.</p>
            <div className={styles.ctaButtons}>
              <Link href="/projects/ai-assistant" className={styles.ctaButton}>
                Explore AI Shopping Assistant
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
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