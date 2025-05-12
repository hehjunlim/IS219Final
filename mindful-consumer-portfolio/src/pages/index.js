import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Mindful Digital Consumer | Guide to Conscious Online Spending</title>
        <meta name="description" content="Learn how to become a mindful digital consumer and make better online spending decisions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className={styles.homeHero}>
          <div className="global-container">
            <div className={styles.homeHeroContent}>
              <h1 className={styles.homeHeroTitle}>Become a Mindful Digital Consumer</h1>
              <p className={styles.homeHeroDescription}>
                In a world of endless online shopping, I help people make conscious digital consumption choices
                that align with their values and budget.
              </p>
              <Link href="/projects" className="btn btn-primary">
                Explore My Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Authority Section - Cialdini principle */}
        <section className={styles.homeStatsSection}>
          <div className="global-container">
            <h2 className={styles.homeSectionTitle}>Why Mindful Consumption Matters</h2>
            <div className={styles.homeStatsGrid}>
              <div className={styles.homeStatCard}>
                <h3 className={styles.homeStatNumber}>78%</h3>
                <p className={styles.homeStatText}>of consumers regret impulsive online purchases</p>
              </div>
              <div className={styles.homeStatCard}>
                <h3 className={styles.homeStatNumber}>$5,400</h3>
                <p className={styles.homeStatText}>average annual online spending per U.S. consumer</p>
              </div>
              <div className={styles.homeStatCard}>
                <h3 className={styles.homeStatNumber}>31%</h3>
                <p className={styles.homeStatText}>growth in credit card debt due to e-commerce in the last 5 years</p>
              </div>
            </div>
            <p className={styles.homeAuthorityText}>
              My data-driven approach to understanding digital consumption patterns has helped
              hundreds of people reduce impulsive online spending and make more mindful choices.
            </p>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className={styles.homeProjectsSection}>
          <div className="global-container">
            <h2 className={styles.homeSectionTitle}>Featured Projects</h2>
            <div className={styles.homeProjectsGrid}>
              <Link href="/projects/data-visualization" className={styles.homeProjectCard}>
                <Image 
                  src="/images/project1.jpg" 
                  alt="E-commerce Growth & Impact Visualization" 
                  width={400}
                  height={200}
                  className={styles.homeProjectCardImg}
                />
                <div className={styles.homeProjectCardBody}>
                  <h3 className={styles.homeProjectCardTitle}>E-commerce Growth & Impact</h3>
                  <p className={styles.homeProjectCardText}>
                    Interactive visualization showing how online shopping growth correlates with rising credit card debt.
                  </p>
                  <span className={styles.homeProjectCardButton}>View Project</span>
                </div>
              </Link>
              
              <Link href="/projects/ai-assistant" className={styles.homeProjectCard}>
                <div className={styles.homeProjectCardBody}>
                  <h3 className={styles.homeProjectCardTitle}>Mindful Shopping AI Assistant</h3>
                  <p className={styles.homeProjectCardText}>
                    AI-powered tool that helps you evaluate whether an online purchase aligns with your values and budget.
                  </p>
                  <span className={styles.homeProjectCardButton}>View Project</span>
                </div>
              </Link>
              
              <Link href="/projects/digital-wellbeing" className={styles.homeProjectCard}>
                <div className={styles.homeProjectCardBody}>
                  <h3 className={styles.homeProjectCardTitle}>Digital Wellbeing Tracker</h3>
                  <p className={styles.homeProjectCardText}>
                    Tool to help track and visualize your online shopping habits and identify patterns for mindful consumption.
                  </p>
                  <span className={styles.homeProjectCardButton}>View Project</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof Section - Cialdini principle */}
        <Testimonials />

        {/* CTA Section */}
        <section className={styles.homeCtaSection}>
          <div className="global-container">
            <h2 className={styles.homeCtaTitle}>Ready to Transform Your Digital Consumption Habits?</h2>
            <p className={styles.homeCtaText}>
              Let's work together to create a healthier relationship with online shopping.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}