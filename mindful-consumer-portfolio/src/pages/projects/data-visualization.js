import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectHeader from '../../components/ProjectHeader';
import OverconsumptionViz from '../../components/OverconsumptionViz';
import Benefits from '../../components/Benefits';
import Features from '../../components/Features';
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

  const visualizationFeatures = [
    {
      icon: "fas fa-chart-line",
      heading: "Interactive Timeline",
      description: "Explore 20 years of e-commerce growth alongside consumer credit card debt trends."
    },
    {
      icon: "fas fa-mouse-pointer",
      heading: "Hover Insights",
      description: "Reveal detailed information about specific data points, milestones, and key events."
    },
    {
      icon: "fas fa-sync",
      heading: "Real-Time Correlation",
      description: "See how changes in e-commerce adoption directly impact consumer debt patterns."
    },
    {
      icon: "fas fa-landmark",
      heading: "Historical Milestones",
      description: "Discover how major companies and events shaped the online shopping landscape."
    }
  ];

  const keyTakeaways = [
    {
      icon: "fas fa-chart-line",
      heading: "E-Commerce Growth",
      description: "Online shopping has grown from less than 1% of total retail in 2000 to over 16% by 2023."
    },
    {
      icon: "fas fa-money-bill-wave",
      heading: "Debt Correlation",
      description: "The data shows a clear correlation between increased e-commerce activity and higher average credit card balances."
    },
    {
      icon: "fas fa-shopping-cart",
      heading: "Purchasing Frequency",
      description: "Consumers now make purchases 7x more frequently than before the e-commerce boom."
    }
  ];

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
        
        <Features 
          title="Visualization Features"
          features={visualizationFeatures}
        />
        
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
        
        <Benefits 
          title="Key Takeaways"
          benefits={keyTakeaways}
        />
        
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