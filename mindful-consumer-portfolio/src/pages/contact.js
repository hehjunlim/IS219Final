import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';
import globalStyles from '../styles/Project.module.css';

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
    message: '',
    loading: false
  });

  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show loading state
    setFormStatus({
      submitted: false,
      success: false,
      message: '',
      loading: true
    });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I\'ll get back to you as soon as possible.',
        loading: false
      });
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 2000);
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
        <section className={globalStyles.projectHero || styles.contactHero}>
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
                    <i className="fas fa-check-circle"></i>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={`${styles.formGroup} ${focusedField === 'name' ? styles.focused : ''}`}>
                    <label htmlFor="name" className={styles.formLabel}>
                      <i className="fas fa-user"></i>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={styles.formControl}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className={`${styles.formGroup} ${focusedField === 'email' ? styles.focused : ''}`}>
                    <label htmlFor="email" className={styles.formLabel}>
                      <i className="fas fa-envelope"></i>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={styles.formControl}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className={`${styles.formGroup} ${focusedField === 'subject' ? styles.focused : ''}`}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      <i className="fas fa-tag"></i>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={styles.formControl}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className={`${styles.formGroup} ${focusedField === 'message' ? styles.focused : ''}`}>
                    <label htmlFor="message" className={styles.formLabel}>
                      <i className="fas fa-comment-alt"></i>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={styles.formControl}
                      placeholder="Tell me about your project or question..."
                    ></textarea>
                    <div className={styles.charCount}>
                      {formData.message.length} / 500 characters
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`${styles.submitButton} ${formStatus.loading ? styles.loading : ''}`}
                    disabled={formStatus.loading}
                  >
                    {formStatus.loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className={globalStyles.ctaSection || styles.ctaSection}>
          <div className="container">
            <h2>Looking for More Information?</h2>
            <p>Explore my projects to learn more about mindful digital consumption.</p>
            <div className={globalStyles.ctaButtons || styles.ctaButtons}>
              <Link href="/projects" className={globalStyles.ctaButton || "btn btn-primary"}>
                View Projects
              </Link>
              <Link href="/" className={globalStyles.ctaSecondary || "btn btn-secondary"}>
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}