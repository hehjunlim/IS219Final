import React from 'react';
import styles from '../styles/ProjectHeader.module.css';

const ProjectHeader = ({ 
  title, 
  subtitle, 
  description, 
  technologies, 
  dataSources, 
  timeline 
}) => {
  return (
    <section className={styles.projectHeader}>
      <div className={styles.projectHeaderBackground}>
        <div className={styles.projectHeaderContainer}>
          <div className={styles.projectHeaderContent}>
            <h1 className={styles.projectTitle}>{title}</h1>
            <p className={styles.projectSubtitle}>{subtitle}</p>
          </div>
        </div>
      </div>
      
      <div className={styles.projectHeaderContainer}>
        <div className={styles.projectInfoSection}>
          <div className={styles.projectOverview}>
            <h2 className={styles.projectSectionTitle}>Project Overview</h2>
            <p className={styles.projectDescription}>{description}</p>
          </div>
          
          <div className={styles.projectMetaGrid}>
            <div className={styles.projectMetaCard}>
              <div className={styles.projectMetaIcon}>
                <i className="fas fa-code"></i>
              </div>
              <h3>Technologies Used</h3>
              <ul className={styles.projectMetaList}>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className={styles.projectMetaCard}>
              <div className={styles.projectMetaIcon}>
                <i className="fas fa-database"></i>
              </div>
              <h3>Data Sources</h3>
              <ul className={styles.projectMetaList}>
                {dataSources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </div>
            
            <div className={styles.projectMetaCard}>
              <div className={styles.projectMetaIcon}>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Timeline</h3>
              <p className={styles.projectTimeline}>{timeline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;