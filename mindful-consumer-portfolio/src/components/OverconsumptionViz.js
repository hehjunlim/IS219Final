import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from '../styles/OverconsumptionViz.module.css';

// This is a simplified wrapper to integrate your existing visualization

export const OverconsumptionViz = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [infoPanel, setInfoPanel] = useState(false);
  
  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setInfoPanel(true);
  };
  
  const closeInfoPanel = () => {
    setInfoPanel(false);
  };
  
  return (
    <div className={styles.vizContainer}>
      <div className={styles.vizHeader}>
        <h3>E-commerce Growth & Credit Card Impact</h3>
        <p>Interactive visualization showing the relationship between online shopping growth and credit card debt</p>
      </div>
      
      <div className={styles.chartsContainer}>
        {/* This would normally call your three visualization components */}
        <div className={styles.vizPlaceholder}>
          <div className="dashboard-container">
            {/* Market Share Chart */}
            <div className="chart-section">
              <h2 className="section-title">E-commerce Market Share Growth</h2>
              <div className="chart-container">
                <div className="chart" id="market-share-chart">
                  <p className={styles.placeholderText}>
                    Your existing E-commerce Market Share visualization would be displayed here.
                    This is where we show the dramatic rise in e-commerce as a percentage of total retail sales from 2000-2024.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Timeline Chart */}
            <div className="chart-section">
              <h2 className="section-title">E-commerce Company Timeline</h2>
              <div className="chart-container">
                <div className="chart" id="timeline-chart">
                  <p className={styles.placeholderText}>
                    Your existing Company Timeline visualization would be displayed here.
                    This shows when major e-commerce platforms were founded and key milestones in the industry's growth.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Credit Card Spending Chart */}
            <div className="chart-section">
              <h2 className="section-title">Credit Card Spending & E-commerce Impact</h2>
              <div className="chart-container">
                <div className="chart" id="credit-card-chart">
                  <p className={styles.placeholderText}>
                    Your existing Credit Card Spending visualization would be displayed here.
                    This shows the correlation between e-commerce growth and increasing consumer credit card debt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {infoPanel && (
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelHeader}>
            <h3>Year: {selectedYear}</h3>
            <button className={styles.closeButton} onClick={closeInfoPanel}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className={styles.infoPanelContent}>
            <div className={styles.infoItem}>
              <h4>E-commerce Market Share</h4>
              <p>{selectedYear ? `${(selectedYear - 2000) * 0.8}%` : '8.5%'} of total retail sales</p>
            </div>
            <div className={styles.infoItem}>
              <h4>Average Credit Card Spending</h4>
              <p>${selectedYear ? (selectedYear - 2000) * 230 + 1200 : 3820}/month</p>
            </div>
            <div className={styles.infoItem}>
              <h4>Key Events</h4>
              <p>
                {selectedYear === 2005 ? 'Amazon Prime launched' : 
                 selectedYear === 2020 ? 'COVID-19 pandemic accelerates e-commerce adoption' : 
                 'No major e-commerce milestones recorded for this year.'}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className={styles.vizActions}>
        <div className={styles.yearSelector}>
          <p>Select a year to see details:</p>
          <div className={styles.yearButtons}>
            {[2000, 2005, 2010, 2015, 2020, 2024].map(year => (
              <button
                key={year}
                className={`${styles.yearButton} ${selectedYear === year ? styles.activeYear : ''}`}
                onClick={() => handleYearSelect(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.vizFooter}>
        <p>
          <strong>Note:</strong> This is a simplified version of the visualization. 
          To see the full interactive version with animations and detailed data points, click "Explore Full Data" below.
        </p>
        <button className={styles.exploreButton}>
          Explore Full Data
        </button>
      </div>
    </div>
  );
};

export default OverconsumptionViz;