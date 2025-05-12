import React from 'react';
import styles from '../styles/Features.module.css';

const Features = ({ title, features }) => {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{title}</h2>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <i className={feature.icon}></i>
              </div>
              <div className={styles.featureContent}>
                <strong>{feature.heading}:</strong> {feature.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;