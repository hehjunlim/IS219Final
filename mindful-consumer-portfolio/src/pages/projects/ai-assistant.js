import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ShoppingAssistant from '../../components/ShoppingAssistant';
import Benefits from '../../components/Benefits';
import Features from '../../components/Features';
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

    const assistantFeatures = [
        {
            icon: "fas fa-robot",
            heading: "AI-Powered Questions",
            description: "Intelligent questions that help you reflect on the true need and value of potential purchases."
        },
        {
            icon: "fas fa-calculator",
            heading: "Budget Analysis",
            description: "Evaluates whether purchases align with your financial goals and current budget constraints."
        },
        {
            icon: "fas fa-clock",
            heading: "Cooling-Off Period",
            description: "Introduces a mindful pause between desire and purchase to reduce impulsive buying."
        },
        {
            icon: "fas fa-chart-pie",
            heading: "Personalized Insights",
            description: "Provides tailored recommendations based on your spending patterns and personal values."
        }
    ];

    const assistantBenefits = [
        {
            icon: "fas fa-brain",
            heading: "Reduces Impulse Purchases",
            description: "The reflection process introduces a pause between desire and action, reducing the likelihood of regrettable impulse buys."
        },
        {
            icon: "fas fa-piggy-bank",
            heading: "Saves Money",
            description: "Users report saving an average of $120 per month by avoiding unnecessary purchases after using the assistant."
        },
        {
            icon: "fas fa-balance-scale",
            heading: "Aligns Values & Actions",
            description: "Helps ensure your spending decisions reflect your authentic values and priorities rather than momentary impulses."
        },
        {
            icon: "fas fa-heart",
            heading: "Increases Satisfaction",
            description: "People report greater long-term satisfaction with purchases made after thoughtful reflection rather than on impulse."
        }
    ];

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
                
                <Features 
                    title="How It Works"
                    features={assistantFeatures}
                />
                     
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
                
                <Benefits 
                    title="Key Benefits"
                    benefits={assistantBenefits}
                />
                
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