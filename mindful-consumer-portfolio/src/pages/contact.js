import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, you'd send the form data to your backend or a service
    // This is a simplified example
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I\'ll get back to you as soon as possible.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Head>
        <title>Contact | Mindful Digital Consumer</title>
        <meta name="description" content="Get in touch to discuss how we can work together to promote mindful digital consumption." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        <section className={styles.contactHero}>
          <div className="container">
            <h1>Let's Connect</h1>
            <p>Interested in collaborating or have questions about mindful digital consumption? I'd love to hear from you.</p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h2>Contact Information</h2>
                <p>Feel free to reach out through the form or via the contact information below.</p>
                
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>hl62@njit.edu</p>
                  </div>
                </div>
                
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>New Jersey, United States</p>
                  </div>
                </div>
                
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9am to 5pm EST</p>
                  </div>
                </div>
                
                <div className={styles.socialLinks}>
                  <a href="https://github.com/hehjunlim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/hehjun-lim/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              
              <div className={styles.contactForm}>
                <h2>Send a Message</h2>
                
                {formStatus.submitted && formStatus.success && (
                  <div className={styles.successMessage}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.formControl}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.formControl}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.formControl}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={styles.formControl}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </>
  );
}