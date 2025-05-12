import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Benefits from '../../components/Benefits';
import Features from '../../components/Features';
import styles from '../../styles/Project.module.css';
import wellbeingStyles from '../../styles/Wellbeing.module.css';
import ProjectHeader from '../../components/ProjectHeader';

export default function DigitalWellbeing() {
  const projectData = {
    title: "Digital Wellbeing Tracker",
    subtitle: "Track and visualize your online shopping habits to promote more mindful digital consumption.",
    description: "The Digital Wellbeing Tracker helps you monitor and visualize your online shopping habits. By tracking patterns in your digital consumption, you can identify triggers, reduce impulsive spending, and develop more mindful shopping practices.",
    technologies: ["React", "Chart.js", "LocalStorage API", "CSS Modules"],
    dataSources: ["Habit Formation Psychology", "Digital Wellbeing Research", "Behavioral Economics"],
    timeline: "Completed in Winter 2024"
  };

  const wellbeingFeatures = [
    {
      icon: "fas fa-clipboard-list",
      heading: "Habit Tracking",
      description: "Log your online shopping behaviors including browsing, adding to cart, and purchase actions."
    },
    {
      icon: "fas fa-chart-line",
      heading: "Spending Visualization",
      description: "See patterns in your digital consumption and identify high-spending categories and triggers."
    },
    {
      icon: "fas fa-lightbulb",
      heading: "Mindfulness Recommendations",
      description: "Receive personalized suggestions for reducing problematic consumption patterns."
    },
    {
      icon: "fas fa-medal",
      heading: "Progress Tracking",
      description: "Monitor improvements in your spending habits over time with weekly and monthly reports."
    }
  ];

  const wellbeingBenefits = [
    {
      icon: "fas fa-eye",
      heading: "Increased Awareness",
      description: "Simply tracking your online shopping behaviors brings awareness to habits that might otherwise go unnoticed."
    },
    {
      icon: "fas fa-chart-bar",
      heading: "Pattern Recognition",
      description: "Identify times, emotions, and triggers that lead to increased online shopping and impulsive purchases."
    },
    {
      icon: "fas fa-hand-holding-usd",
      heading: "Financial Control",
      description: "Users report saving an average of 20-30% on discretionary spending after regularly using the tracker for 8 weeks."
    }
  ];

  // Simple state for the habit tracker demo
  const [habits, setHabits] = useState([
    { id: 1, name: 'Browse online stores without purpose', frequency: 5, spending: 75 },
    { id: 2, name: 'Add items to cart without purchasing', frequency: 8, spending: 0 },
    { id: 3, name: 'Purchase items on mobile apps', frequency: 3, spending: 120 },
    { id: 4, name: 'Shop after receiving marketing emails', frequency: 4, spending: 85 }
  ]);
  
  const [newHabit, setNewHabit] = useState({
    name: '',
    frequency: 0,
    spending: 0
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHabit({
      ...newHabit,
      [name]: name === 'name' ? value : Number(value)
    });
  };
  
  const handleAddHabit = (e) => {
    e.preventDefault();
    if (!newHabit.name) return;
    
    setHabits([
      ...habits,
      {
        id: habits.length + 1,
        name: newHabit.name,
        frequency: newHabit.frequency,
        spending: newHabit.spending
      }
    ]);
    
    setNewHabit({
      name: '',
      frequency: 0,
      spending: 0
    });
  };
  
  const totalWeeklySpending = habits.reduce((sum, habit) => sum + habit.spending, 0);
  const projectedAnnualSpending = totalWeeklySpending * 52;
  
  return (
    <>
      <Head>
        <title>Digital Wellbeing Tracker | Mindful Digital Consumer</title>
        <meta name="description" content="Track and visualize your online shopping habits to promote more mindful digital consumption." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        <ProjectHeader {...projectData} />
        
        <Features 
          title="Key Features"
          features={wellbeingFeatures}
        />
        
        <section className="section" style={{ background: '#f8f9fa' }}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Try the Habit Tracker Demo</h2>
            <p className={styles.sectionDescription}>
              Track your online shopping habits below. Add the behaviors you notice and their frequency and cost.
              This simplified demo gives you a taste of the full tracking tool.
            </p>
            
            <div className={wellbeingStyles.trackerContainer}>
              <div className={wellbeingStyles.trackerHeader}>
                <h3>Shopping Habits Tracker</h3>
                <p>Track your weekly online shopping behaviors</p>
              </div>
              
              <div className={wellbeingStyles.habitsTable}>
                <div className={wellbeingStyles.tableHeader}>
                  <div className={wellbeingStyles.habitName}>Shopping Behavior</div>
                  <div className={wellbeingStyles.habitFrequency}>Times per Week</div>
                  <div className={wellbeingStyles.habitSpending}>Weekly Spending ($)</div>
                </div>
                
                {habits.map((habit) => (
                  <div key={habit.id} className={wellbeingStyles.habitRow}>
                    <div className={wellbeingStyles.habitName}>{habit.name}</div>
                    <div className={wellbeingStyles.habitFrequency}>{habit.frequency}</div>
                    <div className={wellbeingStyles.habitSpending}>${habit.spending}</div>
                  </div>
                ))}
                
                <form onSubmit={handleAddHabit} className={wellbeingStyles.addHabitForm}>
                  <input
                    type="text"
                    name="name"
                    placeholder="New shopping behavior..."
                    value={newHabit.name}
                    onChange={handleInputChange}
                    className={wellbeingStyles.habitInput}
                  />
                  <input
                    type="number"
                    name="frequency"
                    placeholder="Times/week"
                    min="0"
                    value={newHabit.frequency}
                    onChange={handleInputChange}
                    className={wellbeingStyles.habitInput}
                  />
                  <input
                    type="number"
                    name="spending"
                    placeholder="$ per week"
                    min="0"
                    value={newHabit.spending}
                    onChange={handleInputChange}
                    className={wellbeingStyles.habitInput}
                  />
                  <button type="submit" className={wellbeingStyles.addButton}>
                    <i className="fas fa-plus"></i> Add
                  </button>
                </form>
              </div>
              
              <div className={wellbeingStyles.spendingSummary}>
                <div className={wellbeingStyles.summaryItem}>
                  <h4>Total Weekly Spending</h4>
                  <p className={wellbeingStyles.spendingAmount}>${totalWeeklySpending}</p>
                </div>
                <div className={wellbeingStyles.summaryItem}>
                  <h4>Projected Annual Spending</h4>
                  <p className={wellbeingStyles.spendingAmount}>${projectedAnnualSpending}</p>
                </div>
              </div>
              
              <div className={wellbeingStyles.insightPanel}>
                <h4>
                  <i className="fas fa-lightbulb"></i>
                  Mindfulness Insights
                </h4>
                <ul>
                  <li>You tend to browse online stores without purpose frequently, which can lead to unplanned purchases.</li>
                  <li>Consider setting designated "shopping times" rather than browsing throughout the day.</li>
                  <li>Mobile app purchases account for a significant portion of your spending. Try deleting shopping apps from your phone.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Benefits 
          title="Benefits of Tracking Your Digital Consumption"
          benefits={wellbeingBenefits}
        />
        
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Ready to Transform Your Digital Consumption Habits?</h2>
            <p>Explore the data behind online consumption patterns or try the AI shopping assistant.</p>
            <div className={styles.ctaButtons}>
              <Link href="/projects/data-visualization" className="btn btn-primary">
                View E-commerce Impact Data
              </Link>
              <Link href="/projects/ai-assistant" className="btn btn-secondary">
                Try the AI Assistant
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}