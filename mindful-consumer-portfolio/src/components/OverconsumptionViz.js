// components/OverconsumptionViz.js
// This file contains the interactive e-commerce visualization components
// designed to integrate with your existing application structure

import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from '../styles/OverconsumptionViz.module.css';

// Market share data
const marketShareData = [
  { year: 2000, value: 0.8, salesBillions: 27.6 },
  { year: 2001, value: 1.0, salesBillions: 34.0 },
  { year: 2002, value: 1.3, salesBillions: 45.2 },
  { year: 2003, value: 1.6, salesBillions: 58.4 },
  { year: 2004, value: 2.0, salesBillions: 72.1 },
  { year: 2005, value: 2.5, salesBillions: 92.7 },
  { year: 2006, value: 2.8, salesBillions: 107.9 },
  { year: 2007, value: 3.2, salesBillions: 127.4 },
  { year: 2008, value: 3.6, salesBillions: 141.9 },
  { year: 2009, value: 3.9, salesBillions: 155.2 },
  { year: 2010, value: 4.5, salesBillions: 185.7 },
  { year: 2011, value: 5.0, salesBillions: 211.5 },
  { year: 2012, value: 5.4, salesBillions: 237.6 },
  { year: 2013, value: 5.9, salesBillions: 264.3 },
  { year: 2014, value: 6.5, salesBillions: 298.4 },
  { year: 2015, value: 7.2, salesBillions: 337.1 },
  { year: 2016, value: 8.0, salesBillions: 386.2 },
  { year: 2017, value: 9.0, salesBillions: 448.7 },
  { year: 2018, value: 9.9, salesBillions: 504.6 },
  { year: 2019, value: 11.0, salesBillions: 576.5 },
  { year: 2020, value: 16.3, salesBillions: 861.1 },
  { year: 2021, value: 15.5, salesBillions: 871.8 },
  { year: 2022, value: 15.2, salesBillions: 904.4 },
  { year: 2023, value: 15.6, salesBillions: 952.3 },
  { year: 2024, value: 16.1, salesBillions: 1004.7 }
];

// Event milestones data
const eventMilestones = [
  { 
    year: 2005, 
    label: "Amazon Prime Launch", 
    description: "Amazon introduced Prime membership with free two-day shipping.",
    impact: "Accelerated e-commerce adoption by removing shipping cost concerns."
  },
  { 
    year: 2007, 
    label: "iPhone Launch", 
    description: "Apple's iPhone created a new platform for mobile commerce.",
    impact: "Enabled shopping on-the-go and introduced app-based purchasing."
  },
  { 
    year: 2011, 
    label: "Social Commerce", 
    description: "Facebook and others integrated shopping features into social media.",
    impact: "Blurred lines between social browsing and shopping, increasing impulse purchases."
  },
  { 
    year: 2015, 
    label: "Same-Day Delivery", 
    description: "Amazon and others introduced same-day delivery in major markets.",
    impact: "Further eroded advantage of physical retail's immediate gratification."
  },
  { 
    year: 2020, 
    label: "COVID-19 Pandemic", 
    description: "Global lockdowns forced rapid adoption of online shopping.",
    impact: "Dramatic 48% year-over-year growth in e-commerce as percentage of retail sales."
  }
];

// Company founding data from the CSV
const companyData = [
  { year: 1994, name: "Amazon", color: "#9575cd", description: "Founded as an online bookstore by Jeff Bezos." },
  { year: 1995, name: "eBay", color: "#9575cd", description: "Launched as AuctionWeb, creating the first major online marketplace." },
  { year: 2000, name: "Walmart.com", color: "#9575cd", description: "Traditional retail giant Walmart launches dedicated online store." },
  { year: 2005, name: "Etsy", color: "#9575cd", description: "Marketplace for handmade and vintage items launched." },
  { year: 2006, name: "Shopify", color: "#9575cd", description: "E-commerce platform allowing anyone to create online stores easily." }
];

// Sales growth data
const salesGrowthData = [
  { year: 1995, value: 0 },
  { year: 1998, value: 1000 },
  { year: 2000, value: 5000 },
  { year: 2002, value: 10000 },
  { year: 2005, value: 15000 },
  { year: 2007, value: 25000 },
  { year: 2010, value: 35000 },
  { year: 2012, value: 50000 },
  { year: 2015, value: 70000 },
  { year: 2017, value: 110000 },
  { year: 2019, value: 160000 },
  { year: 2020, value: 200000 },
  { year: 2022, value: 260000 },
  { year: 2024, value: 300000 }
];

// Market Share Chart Component
export const MarketShareChart = ({ onYearSelect }) => {
  const chartRef = useRef(null);
  const [hoveredYear, setHoveredYear] = useState(null);
  
  useEffect(() => {
    if (chartRef.current) {
      drawMarketShareChart();
    }
    
    // Cleanup function
    return () => {
      d3.select(chartRef.current).selectAll("*").remove();
    };
  }, [hoveredYear]);
  
  const drawMarketShareChart = () => {
    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();
    
    // Set up dimensions
    const width = 800;
    const height = 400;
    const margin = { top: 70, right: 60, bottom: 70, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Create SVG
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Add tooltip div
    const tooltip = d3.select(chartRef.current)
      .append("div")
      .attr("class", styles.tooltip)
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "1px solid #ddd")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("box-shadow", "2px 2px 6px rgba(0, 0, 0, 0.3)")
      .style("pointer-events", "none")
      .style("font-size", "12px")
      .style("z-index", "1000");
    
    // Create scales
    const xScale = d3.scaleLinear()
      .domain([2000, 2024])
      .range([0, innerWidth]);
    
    const yScale = d3.scaleLinear()
      .domain([0, 18])
      .range([innerHeight, 0]);
    
    // Create line generator
    const line = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX);
    
    // Add area under the line
    const area = d3.area()
      .x(d => xScale(d.year))
      .y0(innerHeight)
      .y1(d => yScale(d.value))
      .curve(d3.curveMonotoneX);
    
    svg.append("path")
      .datum(marketShareData)
      .attr("fill", "steelblue")
      .attr("fill-opacity", 0.5)
      .attr("d", area);
    
    // Add line
    svg.append("path")
      .datum(marketShareData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2.5)
      .attr("d", line);
    
    // Add data points with interactivity
    svg.selectAll(".data-point")
      .data(marketShareData)
      .enter()
      .append("circle")
      .attr("class", "data-point")
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.value))
      .attr("r", d => d.year === hoveredYear ? 6 : 4)
      .attr("fill", d => d.year === hoveredYear ? "#ff6b6b" : "steelblue")
      .attr("stroke", d => d.year === hoveredYear ? "#ff6b6b" : "white")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        setHoveredYear(d.year);
        d3.select(this).attr("r", 7);
        
        tooltip
          .style("visibility", "visible")
          .html(`
            <strong>Year: ${d.year}</strong>
            <br>E-commerce: ${d.value.toFixed(1)}% of retail sales
            <br>Sales: $${d.salesBillions.toFixed(1)} billion
          `);
      })
      .on("mousemove", function(event) {
        tooltip
          .style("top", (event.pageY - 10) + "px")
          .style("left", (event.pageX + 10) + "px");
      })
      .on("mouseout", function() {
        setHoveredYear(null);
        d3.select(this).attr("r", 4);
        tooltip.style("visibility", "hidden");
      })
      .on("click", function(event, d) {
        if (onYearSelect) {
          onYearSelect(d.year);
        }
      });
    
    // Add event milestones
    eventMilestones.forEach(event => {
      // Filter only events within our chart range
      if (event.year >= 2000 && event.year <= 2024) {
        // Add vertical line
        svg.append("line")
          .attr("x1", xScale(event.year))
          .attr("y1", 0)
          .attr("x2", xScale(event.year))
          .attr("y2", innerHeight)
          .attr("stroke", "#ff6b6b")
          .attr("stroke-width", 1.5)
          .attr("stroke-dasharray", "5,5");
        
        // Add interactive event marker
        const isHighlighted = hoveredYear === event.year;
        
        // Add event label with staggered positioning
        const row = eventMilestones.indexOf(event) % 3;
        const labelY = -15 - row * 15;
        const horizontalOffset = [-20, 0, 20][row];
        
        svg.append("circle")
          .attr("cx", xScale(event.year))
          .attr("cy", 0)
          .attr("r", isHighlighted ? 7 : 5)
          .attr("fill", isHighlighted ? "#ff6b6b" : "#ff8a8a")
          .style("cursor", "pointer")
          .on("mouseover", function() {
            setHoveredYear(event.year);
            
            tooltip
              .style("visibility", "visible")
              .html(`
                <strong>${event.label} (${event.year})</strong>
                <br>${event.description}
                <br><em>Impact:</em> ${event.impact}
              `);
          })
          .on("mousemove", function(e) {
            tooltip
              .style("top", (e.pageY - 10) + "px")
              .style("left", (e.pageX + 10) + "px");
          })
          .on("mouseout", function() {
            setHoveredYear(null);
            tooltip.style("visibility", "hidden");
          })
          .on("click", function() {
            if (onYearSelect) {
              onYearSelect(event.year);
            }
          });
        
        svg.append("text")
          .attr("x", xScale(event.year) + horizontalOffset)
          .attr("y", labelY)
          .attr("text-anchor", "middle")
          .attr("font-size", "10px")
          .attr("fill", isHighlighted ? "#d32f2f" : "#666")
          .attr("font-weight", isHighlighted ? "bold" : "normal")
          .text(event.label)
          .style("cursor", "pointer")
          .on("mouseover", function() {
            setHoveredYear(event.year);
            
            tooltip
              .style("visibility", "visible")
              .html(`
                <strong>${event.label} (${event.year})</strong>
                <br>${event.description}
                <br><em>Impact:</em> ${event.impact}
              `);
          })
          .on("mousemove", function(e) {
            tooltip
              .style("top", (e.pageY - 10) + "px")
              .style("left", (e.pageX + 10) + "px");
          })
          .on("mouseout", function() {
            setHoveredYear(null);
            tooltip.style("visibility", "hidden");
          })
          .on("click", function() {
            if (onYearSelect) {
              onYearSelect(event.year);
            }
          });
      }
    });
    
    // Add axes
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d => `${d}`)
      .ticks(7);
    
    const yAxis = d3.axisLeft(yScale)
      .tickFormat(d => `${d}%`);
    
    svg.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(xAxis)
      .attr("font-size", "12px");
    
    svg.append("g")
      .call(yAxis)
      .attr("font-size", "12px");
    
    // Add title
    svg.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .text("E-commerce Market Share of Total Retail Sales");
    
    // Add axis labels
    svg.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", innerHeight + 45)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("Year");
    
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -innerHeight / 2)
      .attr("y", -45)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("% of Total Retail Sales");
  };
  
  return (
    <div className={styles.chartContainer}>
      <div className={styles.controls}>
        <div className={styles.infoText}>
          <p>Hover over data points and milestones to see detailed information. Click to select a year.</p>
        </div>
      </div>
      <div ref={chartRef} className={styles.chart}></div>
    </div>
  );
};

// Timeline Chart Component
export const CompanyTimelineChart = ({ onYearSelect }) => {
  const chartRef = useRef(null);
  const [hoveredYear, setHoveredYear] = useState(null);
  
  useEffect(() => {
    if (chartRef.current) {
      drawTimelineChart();
    }
    
    // Cleanup function
    return () => {
      d3.select(chartRef.current).selectAll("*").remove();
    };
  }, [hoveredYear]);
  
  const drawTimelineChart = () => {
    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();
    
    // Set up dimensions
    const width = 800;
    const height = 400;
    const margin = { top: 50, right: 60, bottom: 80, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Create SVG
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Add tooltip div
    const tooltip = d3.select(chartRef.current)
      .append("div")
      .attr("class", styles.tooltip)
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "1px solid #ddd")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("box-shadow", "2px 2px 6px rgba(0, 0, 0, 0.3)")
      .style("pointer-events", "none")
      .style("font-size", "12px")
      .style("max-width", "300px")
      .style("z-index", "1000");
    
    // Create scales
    const xScale = d3.scaleLinear()
      .domain([1994, 2024])
      .range([0, innerWidth]);
    
    const yScale = d3.scaleLinear()
      .domain([0, 320000])
      .range([innerHeight, 0]);
    
    // Create line generator
    const line = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX);
    
    // Add area under the line
    const area = d3.area()
      .x(d => xScale(d.year))
      .y0(innerHeight)
      .y1(d => yScale(d.value))
      .curve(d3.curveMonotoneX);
    
    svg.append("path")
      .datum(salesGrowthData)
      .attr("fill", "#7fbf7b")
      .attr("fill-opacity", 0.5)
      .attr("d", area);
    
    // Add line
    svg.append("path")
      .datum(salesGrowthData)
      .attr("fill", "none")
      .attr("stroke", "#2e7d32")
      .attr("stroke-width", 2.5)
      .attr("d", line);
    
    // Add interactive data points
    svg.selectAll(".sales-point")
      .data(salesGrowthData)
      .enter()
      .append("circle")
      .attr("class", "sales-point")
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.value))
      .attr("r", d => d.year === hoveredYear ? 6 : 4)
      .attr("fill", d => d.year === hoveredYear ? "#2e7d32" : "#7fbf7b")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        setHoveredYear(d.year);
        d3.select(this).attr("r", 7);
        tooltip
          .style("visibility", "visible")
          .html(`
            <strong>Year: ${d.year}</strong>
            <br>E-commerce Sales: $${(d.value/1000).toFixed(1)} billion
            ${d.year >= 2020 ? '<br><em>Pandemic accelerated growth</em>' : ''}
          `);
      })
      .on("mousemove", function(event) {
        tooltip
          .style("top", (event.pageY - 10) + "px")
          .style("left", (event.pageX + 10) + "px");
      })
      .on("mouseout", function() {
        setHoveredYear(null);
        d3.select(this).attr("r", 4);
        tooltip.style("visibility", "hidden");
      })
      .on("click", function(event, d) {
        if (onYearSelect) {
          onYearSelect(d.year);
        }
      });
    
    // Add company markers with interactive elements
    companyData.forEach((company, i) => {
      const isHighlighted = hoveredYear === company.year;
      
      // Add vertical line
      svg.append("line")
        .attr("x1", xScale(company.year))
        .attr("y1", 0)
        .attr("x2", xScale(company.year))
        .attr("y2", innerHeight)
        .attr("stroke", isHighlighted ? "#673ab7" : company.color)
        .attr("stroke-width", isHighlighted ? 2 : 1.5)
        .attr("stroke-dasharray", "5,5");
      
      // Add interactive marker
      svg.append("circle")
        .attr("cx", xScale(company.year))
        .attr("cy", 0)
        .attr("r", isHighlighted ? 7 : 5)
        .attr("fill", isHighlighted ? "#673ab7" : company.color)
        .style("cursor", "pointer")
        .on("mouseover", function(event) {
          setHoveredYear(company.year);
          tooltip
            .style("visibility", "visible")
            .html(`
              <strong>${company.name} (${company.year})</strong>
              <br>${company.description}
            `);
        })
        .on("mousemove", function(event) {
          tooltip
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function() {
          setHoveredYear(null);
          tooltip.style("visibility", "hidden");
        })
        .on("click", function() {
          if (onYearSelect) {
            onYearSelect(company.year);
          }
        });
      
      // Add company labels with improved staggered positioning
      const row = i % 3;
      const verticalOffset = -25 - row * 20;
      const horizontalShift = [-25, 0, 25][row];
      
      svg.append("text")
        .attr("x", xScale(company.year) + horizontalShift)
        .attr("y", verticalOffset)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", isHighlighted ? "#673ab7" : company.color)
        .attr("font-weight", isHighlighted ? "bold" : "normal")
        .text(`${company.name} (${company.year})`)
        .style("cursor", "pointer")
        .on("mouseover", function() {
          setHoveredYear(company.year);
          tooltip
            .style("visibility", "visible")
            .html(`
              <strong>${company.name} (${company.year})</strong>
              <br>${company.description}
            `);
        })
        .on("mousemove", function(event) {
          tooltip
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function() {
          setHoveredYear(null);
          tooltip.style("visibility", "hidden");
        })
        .on("click", function() {
          if (onYearSelect) {
            onYearSelect(company.year);
          }
        });
    });
    
    // Add phases at bottom
    const phases = [
      { start: 1994, end: 2000, label: "Early Pioneers", color: "#90caf9" },
      { start: 2000, end: 2010, label: "Growth Phase", color: "#ffcc80" },
      { start: 2010, end: 2020, label: "Mobile Revolution", color: "#a5d6a7" },
      { start: 2020, end: 2024, label: "Ubiquitous Commerce", color: "#ef9a9a" }
    ];
    
    const phaseHeight = 20;
    const phaseY = innerHeight + 40;
    
    phases.forEach(phase => {
      const phaseWidth = xScale(phase.end) - xScale(phase.start);
      const isHighlighted = hoveredYear && hoveredYear >= phase.start && hoveredYear <= phase.end;
      
      // Add interactive phase rectangle
      svg.append("rect")
        .attr("x", xScale(phase.start))
        .attr("y", phaseY)
        .attr("width", phaseWidth)
        .attr("height", phaseHeight)
        .attr("fill", isHighlighted ? d3.color(phase.color).darker(0.5) : phase.color)
        .attr("stroke", isHighlighted ? "#333" : "none")
        .attr("stroke-width", 1)
        .style("cursor", "pointer")
        .on("mouseover", function() {
          d3.select(this)
            .attr("fill", d3.color(phase.color).darker(0.5))
            .attr("stroke", "#333");
            
          tooltip
            .style("visibility", "visible")
            .html(`
              <strong>${phase.label} (${phase.start}-${phase.end})</strong>
              <br>Period of ${phase.label.toLowerCase()} in e-commerce evolution
            `);
        })
        .on("mousemove", function(event) {
          tooltip
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function() {
          if (!(hoveredYear && hoveredYear >= phase.start && hoveredYear <= phase.end)) {
            d3.select(this)
              .attr("fill", phase.color)
              .attr("stroke", "none");
          }
          
          tooltip.style("visibility", "hidden");
        });
      
      svg.append("text")
        .attr("x", xScale(phase.start) + phaseWidth / 2)
        .attr("y", phaseY + phaseHeight / 2 + 5)
        .attr("text-anchor", "middle")
        .attr("font-size", "11px")
        .attr("fill", isHighlighted ? "#000" : "#333")
        .attr("font-weight", isHighlighted ? "bold" : "normal")
        .text(phase.label)
        .style("pointer-events", "none");
    });
    
    // Add axes
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d => `${d}`)
      .ticks(8);
    
    const yAxis = d3.axisLeft(yScale)
      .tickFormat(d => d === 0 ? "0" : `${d/1000}k`);
    
    svg.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(xAxis)
      .attr("font-size", "12px");
    
    svg.append("g")
      .call(yAxis)
      .attr("font-size", "12px");
    
    // Add title
    svg.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", -35)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .text("E-commerce Company Timeline and Sales Growth");
    
    // Add axis labels
    svg.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", innerHeight + 55)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("Year");
    
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -innerHeight / 2)
      .attr("y", -45)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("Sales ($ millions)");
  };
  
  return (
    <div className={styles.chartContainer}>
      <div className={styles.controls}>
        <div className={styles.infoText}>
          <p>Interactive visualization showing company founding dates and impact on industry growth.</p>
        </div>
      </div>
      <div ref={chartRef} className={styles.chart}></div>
    </div>
  );
};

// Add the credit card spending visualization
export const CreditCardVizChart = ({ onYearSelect }) => {
  const chartRef = useRef(null);
  const [hoveredYear, setHoveredYear] = useState(null);
  
  useEffect(() => {
    if (chartRef.current) {
      drawCreditCardChart();
    }
    
    // Cleanup function
    return () => {
      d3.select(chartRef.current).selectAll("*").remove();
    };
  }, [hoveredYear]);
  
  const drawCreditCardChart = () => {
    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();
    
    // Credit card spending data (simulated correlation with e-commerce)
    const creditCardData = marketShareData.map(d => ({
      year: d.year,
      avgMonthlyBill: 500 + (d.value * 300), // Higher e-commerce % correlates with higher CC bills
      ecommercePercent: d.value * 5, // Percentage of bill that is e-commerce
      totalAnnualSpend: (500 + (d.value * 300)) * 12
    }));
    
    // Set up dimensions
    const width = 800;
    const height = 400;
    const margin = { top: 70, right: 150, bottom: 70, left: 70 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Create SVG
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Add tooltip div
    const tooltip = d3.select(chartRef.current)
      .append("div")
      .attr("class", styles.tooltip)
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "1px solid #ddd")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("box-shadow", "2px 2px 6px rgba(0, 0, 0, 0.3)")
      .style("pointer-events", "none")
      .style("font-size", "12px")
      .style("z-index", "1000");
    
    // Create scales
    const xScale = d3.scaleLinear()
      .domain([2000, 2024])
      .range([0, innerWidth]);
    
    const yScale = d3.scaleLinear()
      .domain([0, 7000])
      .range([innerHeight, 0]);
    
    const y2Scale = d3.scaleLinear()
      .domain([0, 100])
      .range([innerHeight, 0]);
    
    // Create line generators
    const billLine = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.avgMonthlyBill))
      .curve(d3.curveMonotoneX);
    
    const percentLine = d3.line()
      .x(d => xScale(d.year))
      .y(d => y2Scale(d.ecommercePercent))
      .curve(d3.curveMonotoneX);
    
    // Add bar chart for average bills
    svg.selectAll(".bill-bar")
      .data(creditCardData)
      .enter()
      .append("rect")
      .attr("class", "bill-bar")
      .attr("x", d => xScale(d.year) - 5)
      .attr("y", d => yScale(d.avgMonthlyBill))
      .attr("width", 10)
      .attr("height", d => innerHeight - yScale(d.avgMonthlyBill))
      .attr("fill", d => d.year === hoveredYear ? "#ff8f00" : "#ffb74d")
      .attr("stroke", "#f57c00")
      .attr("stroke-width", 1)
      .attr("rx", 2)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        setHoveredYear(d.year);
        d3.select(this).attr("fill", "#ff8f00");
        
        tooltip
          .style("visibility", "visible")
          .html(`
            <strong>Year: ${d.year}</strong>
            <br>Avg. Monthly CC Bill: ${d.avgMonthlyBill.toFixed(0)}
            <br>E-commerce Portion: ${d.ecommercePercent.toFixed(1)}%
            <br>Annual Spending: ${d.totalAnnualSpend.toFixed(0)}
          `);
      })
      .on("mousemove", function(event) {
        tooltip
          .style("top", (event.pageY - 10) + "px")
          .style("left", (event.pageX + 10) + "px");
      })
      .on("mouseout", function(event, d) {
        setHoveredYear(null);
        d3.select(this).attr("fill", "#ffb74d");
        tooltip.style("visibility", "hidden");
      })
      .on("click", function(event, d) {
        if (onYearSelect) {
          onYearSelect(d.year);
        }
      });
    
    // Add line for e-commerce percentage
    svg.append("path")
      .datum(creditCardData)
      .attr("fill", "none")
      .attr("stroke", "#e53935")
      .attr("stroke-width", 2.5)
      .attr("d", percentLine);
    
    // Add data points for e-commerce percentage
    svg.selectAll(".percent-point")
      .data(creditCardData)
      .enter()
      .append("circle")
      .attr("class", "percent-point")
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => y2Scale(d.ecommercePercent))
      .attr("r", d => d.year === hoveredYear ? 6 : 4)
      .attr("fill", d => d.year === hoveredYear ? "#c62828" : "#e53935")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        setHoveredYear(d.year);
        d3.select(this).attr("r", 7);
        
        tooltip
          .style("visibility", "visible")
          .html(`
            <strong>Year: ${d.year}</strong>
            <br>E-commerce: ${d.ecommercePercent.toFixed(1)}% of credit card spending
            <br>Avg. Monthly CC Bill: ${d.avgMonthlyBill.toFixed(0)}
          `);
      })
      .on("mousemove", function(event) {
        tooltip
          .style("top", (event.pageY - 10) + "px")
          .style("left", (event.pageX + 10) + "px");
      })
      .on("mouseout", function() {
        setHoveredYear(null);
        d3.select(this).attr("r", 4);
        tooltip.style("visibility", "hidden");
      })
      .on("click", function(event, d) {
        if (onYearSelect) {
          onYearSelect(d.year);
        }
      });
    
    // Add axes
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d => `${d}`)
      .ticks(7);
    
    const yAxis = d3.axisLeft(yScale)
      .tickFormat(d => `${d}`);
    
    const y2Axis = d3.axisRight(y2Scale)
      .tickFormat(d => `${d}%`);
    
    svg.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(xAxis)
      .attr("font-size", "12px");
    
    svg.append("g")
      .call(yAxis)
      .attr("font-size", "12px");
    
    svg.append("g")
      .attr("transform", `translate(${innerWidth},0)`)
      .call(y2Axis)
      .attr("font-size", "12px");
    
    // Add title
    svg.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", -35)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .text("Credit Card Spending & E-commerce Percentage");
    
    // Add axis labels
    svg.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", innerHeight + 45)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("Year");
    
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -innerHeight / 2)
      .attr("y", -45)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("Avg. Monthly Bill ($)");
    
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -innerHeight / 2)
      .attr("y", innerWidth + 45)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text("E-commerce Percentage");
    
    // Add legend
    const legend = svg.append("g")
      .attr("transform", `translate(${innerWidth - 140}, 0)`);
    
    legend.append("rect")
      .attr("x", 0)
      .attr("y", 10)
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", "#ffb74d");
    
    legend.append("text")
      .attr("x", 20)
      .attr("y", 20)
      .attr("font-size", "12px")
      .text("Avg. Monthly CC Bill");
    
    legend.append("circle")
      .attr("cx", 6)
      .attr("cy", 40)
      .attr("r", 6)
      .attr("fill", "#e53935");
    
    legend.append("text")
      .attr("x", 20)
      .attr("y", 44)
      .attr("font-size", "12px")
      .text("E-commerce % of Bill");
  };
  
  return (
    <div className={styles.chartContainer}>
      <div className={styles.controls}>
        <div className={styles.infoText}>
          <p>Relationship between rising credit card bills and increasing e-commerce spending.</p>
        </div>
      </div>
      <div ref={chartRef} className={styles.chart}></div>
    </div>
  );
};

// Main dashboard component
export const OverconsumptionViz = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [infoPanel, setInfoPanel] = useState(false);
  
  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setInfoPanel(true);
  };
  
  const handleClosePanel = () => {
    setSelectedYear(null);
    setInfoPanel(false);
  };
  
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.chartSection}>
        <h3>Market Share Growth</h3>
        <MarketShareChart onYearSelect={handleYearSelect} />
      </div>
      
      <div className={styles.chartSection}>
        <h3>Company Timeline</h3>
        <CompanyTimelineChart onYearSelect={handleYearSelect} />
      </div>
      
      <div className={styles.chartSection}>
        <h3>Credit Card Spending Impact</h3>
        <CreditCardVizChart onYearSelect={handleYearSelect} />
      </div>
      
      {infoPanel && selectedYear && (
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelHeader}>
            <h3>Details for Year: {selectedYear}</h3>
            <button className={styles.closeButton} onClick={handleClosePanel}>×</button>
          </div>
          <div className={styles.infoPanelContent}>
            {/* Market Share Data */}
            {marketShareData.find(d => d.year === selectedYear) && (
              <div className={styles.infoSection}>
                <h4>E-commerce Market Share</h4>
                <p>
                  <strong>Share of Retail:</strong> {marketShareData.find(d => d.year === selectedYear).value.toFixed(1)}%<br />
                  <strong>Sales Volume:</strong> ${marketShareData.find(d => d.year === selectedYear).salesBillions.toFixed(1)} billion
                </p>
              </div>
            )}
            
            {/* Event Data */}
            {eventMilestones.find(e => e.year === selectedYear) && (
              <div className={styles.infoSection}>
                <h4>Key Milestone</h4>
                <p>
                  <strong>{eventMilestones.find(e => e.year === selectedYear).label}</strong><br />
                  {eventMilestones.find(e => e.year === selectedYear).description}<br />
                  <em>Impact:</em> {eventMilestones.find(e => e.year === selectedYear).impact}
                </p>
              </div>
            )}
            
            {/* Company Data */}
            {companyData.find(c => c.year === selectedYear) && (
              <div className={styles.infoSection}>
                <h4>Company Founded</h4>
                <p>
                  <strong>{companyData.find(c => c.year === selectedYear).name}</strong><br />
                  {companyData.find(c => c.year === selectedYear).description}
                </p>
              </div>
            )}
            
            {/* Credit Card Data */}
            {marketShareData.find(d => d.year === selectedYear) && (
              <div className={styles.infoSection}>
                <h4>Consumer Spending Impact</h4>
                <p>
                  <strong>Avg. Monthly Credit Card Bill:</strong> ${(500 + (marketShareData.find(d => d.year === selectedYear).value * 300)).toFixed(0)}<br />
                  <strong>E-commerce Percentage of Bill:</strong> {(marketShareData.find(d => d.year === selectedYear).value * 5).toFixed(1)}%<br />
                  <strong>Annual Household Spending:</strong> ${((500 + (marketShareData.find(d => d.year === selectedYear).value * 300)) * 12).toFixed(0)}
                </p>
                <div className={styles.impactAssessment}>
                  {selectedYear >= 2020 ? (
                    <p className={styles.highImpact}>High impact on consumption patterns due to pandemic acceleration</p>
                  ) : selectedYear >= 2010 ? (
                    <p className={styles.mediumImpact}>Medium impact with mobile shopping driving impulse purchases</p>
                  ) : (
                    <p className={styles.lowImpact}>Lower impact with early e-commerce adoption</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Export the main component
export default OverconsumptionViz;