import React from 'react';
import styles from '../styles/Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "The e-commerce visualization helped me understand how my online shopping was impacting my finances. I've cut my monthly online spending by 40% using these strategies.",
    name: "Sarah Johnson",
    title: "Marketing Professional"
  },
  {
    id: 2,
    text: "The AI shopping assistant has completely changed my relationship with online purchases. It's like having a mindful friend who asks all the right questions before I hit 'buy now'.",
    name: "Michael Chen",
    title: "Software Engineer"
  },
  {
    id: 3,
    text: "I was shocked to see how my credit card debt correlated with my online shopping habits. This data visualization was the wake-up call I needed.",
    name: "Jessica Rivera",
    title: "Elementary School Teacher"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What People Are Saying</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <i className="fas fa-quote-left"></i>
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>{testimonial.name}</p>
                <p className={styles.authorTitle}>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;