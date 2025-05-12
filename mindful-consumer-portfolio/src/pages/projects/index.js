import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// The correct path to the CSS module
import styles from '../../styles/Project.module.css';

const projects = [
  {
    id: 'data-visualization',
    title: 'E-commerce Growth & Impact',
    description: 'Interactive visualization showing how online shopping growth correlates with rising credit card debt.',
    image: '/images/project1.jpg',
    technologies: ['React', 'D3.js', 'CSS'],
    details: 'Explore the relationship between e-commerce growth and increasing credit card debt through interactive charts and visualizations.'
  },
  {
    id: 'ai-assistant',
    title: 'Mindful Shopping AI Assistant',
    description: 'AI-powered tool that helps you evaluate whether an online purchase aligns with your values and budget.',
    image: '/images/project2.jpg',
    technologies: ['React', 'JavaScript', 'CSS Modules'],
    details: 'Use this conversational AI assistant to make more thoughtful decisions about online purchases and reduce impulse buying.'
  },
  {
    id: 'digital-wellbeing',
    title: 'Digital Wellbeing Tracker',
    description: 'Tool to help track and visualize your online shopping habits and identify patterns for mindful consumption.',
    image: '/images/project3.jpg',
    technologies: ['React', 'Chart.js', 'LocalStorage API'],
    details: 'Track your online shopping habits and visualize patterns to develop more mindful digital consumption behaviors.'
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Mindful Digital Consumer</title>
        <meta name="description" content="Explore projects focused on mindful digital consumption and better online shopping habits." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        <section className={styles.projectsHero}>
          <div className={styles.container}>
            <h1>My Projects</h1>
            <p>Explore tools and visualizations designed to promote mindful digital consumption.</p>
          </div>
        </section>
        
        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  <div className={styles.projectImageContainer}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={400}
                      height={250}
                      className={styles.projectImage}
                    />
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className={styles.projectTech}>
                      {project.technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                    
                    <p className={styles.projectDetails}>{project.details}</p>
                    
                    <Link href={`/projects/${project.id}`} className={styles.projectButton}>
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Want to Collaborate?</h2>
            <p>I'm always interested in partnering with researchers, developers, and organizations
              focused on promoting mindful digital habits.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.projectButton}>
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