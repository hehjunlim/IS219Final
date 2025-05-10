import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/ShoppingAssistant.module.css';

// Demo questions that the AI assistant will ask
const assistantQuestions = [
  "What item are you considering purchasing?",
  "What is the approximate cost of this item?",
  "Do you need this item, or is it primarily a want?",
  "Have you researched alternatives or compared prices?",
  "Does this purchase align with your current budget?",
  "Will you still be happy with this purchase a month from now?",
  "How will this item improve your life?"
];

// Decision thresholds - this would normally use more complex logic
const getDecision = (answers) => {
  // Simple scoring system for demo purposes
  let score = 0;
  
  // Check if it's a need
  if (answers[2]?.toLowerCase().includes('need')) {
    score += 2;
  }
  
  // Check if research was done
  if (answers[3]?.toLowerCase().includes('yes')) {
    score += 1;
  }
  
  // Check if budget aligned
  if (answers[4]?.toLowerCase().includes('yes')) {
    score += 2;
  }
  
  // Check for long-term happiness
  if (answers[5]?.toLowerCase().includes('yes')) {
    score += 1;
  }
  
  // Generate a recommendation based on the score
  if (score >= 5) {
    return {
      recommendation: "This purchase seems aligned with your needs and values.",
      score: score,
      additionalThoughts: "It appears you've thought this through. Consider a 24-hour waiting period before finalizing your decision."
    };
  } else if (score >= 3) {
    return {
      recommendation: "This purchase may be worthwhile, but you may want to reflect further.",
      score: score,
      additionalThoughts: "Consider delaying this purchase for a week to see if it still feels important to you."
    };
  } else {
    return {
      recommendation: "This may be an impulse purchase rather than a thoughtful one.",
      score: score,
      additionalThoughts: "Try the 30-day rule: write down the item and wait 30 days before deciding if you still want to buy it."
    };
  }
};

const ShoppingAssistant = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const [currentResponse, setCurrentResponse] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [decision, setDecision] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  
  const chatContainerRef = useRef(null);

  // Add assistant's first question to chat history when component mounts
  useEffect(() => {
    setTimeout(() => {
      setChatHistory([
        { 
          sender: 'assistant', 
          message: "Hi there! I'm your Mindful Shopping Assistant. I'll help you evaluate whether a purchase aligns with your values and budget. Let's start!",
          isIntro: true
        },
        { 
          sender: 'assistant', 
          message: assistantQuestions[0]
        }
      ]);
      setIsTyping(false);
    }, 1000);
    
    setIsTyping(true);
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleInputChange = (e) => {
    setCurrentResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!currentResponse.trim()) return;
    
    // Add user's response to chat history
    setChatHistory(prev => [
      ...prev, 
      { sender: 'user', message: currentResponse }
    ]);
    
    // Store user's response
    const newResponses = [...userResponses];
    newResponses[currentQuestion] = currentResponse;
    setUserResponses(newResponses);
    
    // Clear input field
    setCurrentResponse('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Check if we've reached the end of the questions
    if (currentQuestion < assistantQuestions.length - 1) {
      // Move to next question after a delay
      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        setChatHistory(prev => [
          ...prev, 
          { sender: 'assistant', message: assistantQuestions[nextQuestion] }
        ]);
        setCurrentQuestion(nextQuestion);
        setIsTyping(false);
      }, 1000);
    } else {
      // End of questions, generate decision
      setTimeout(() => {
        const purchaseDecision = getDecision(newResponses);
        setDecision(purchaseDecision);
        
        // Add decision to chat
        setChatHistory(prev => [
          ...prev,
          { 
            sender: 'assistant', 
            message: `Thanks for sharing that information! Here's my assessment:`,
            isTransition: true
          },
          { 
            sender: 'assistant', 
            message: purchaseDecision.recommendation,
            isRecommendation: true
          },
          { 
            sender: 'assistant', 
            message: purchaseDecision.additionalThoughts 
          },
          { 
            sender: 'assistant', 
            message: "Would you like to evaluate another purchase?",
            isQuestion: true
          }
        ]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const resetAssistant = () => {
    setCurrentQuestion(0);
    setUserResponses([]);
    setCurrentResponse('');
    setDecision(null);
    setIsTyping(true);
    
    // Reset chat with initial question
    setTimeout(() => {
      setChatHistory([
        { 
          sender: 'assistant', 
          message: "Let's evaluate another purchase. What item are you considering buying?",
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className={styles.assistantContainer}>
      <div className={styles.assistantHeader}>
        <h3>
          <i className="fas fa-robot"></i>
          Mindful Shopping Assistant
        </h3>
      </div>
      
      <div className={styles.chatContainer} ref={chatContainerRef}>
        {chatHistory.map((chat, index) => (
          <div 
            key={index} 
            className={`${styles.chatBubble} ${
              chat.sender === 'assistant' 
                ? styles.assistantBubble 
                : styles.userBubble
            } ${chat.isIntro ? styles.introBubble : ''} 
              ${chat.isRecommendation ? styles.recommendationBubble : ''}`}
          >
            {chat.message}
          </div>
        ))}
        
        {isTyping && (
          <div className={`${styles.chatBubble} ${styles.assistantBubble} ${styles.typingBubble}`}>
            <span className={styles.typingDot}></span>
            <span className={styles.typingDot}></span>
            <span className={styles.typingDot}></span>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={currentResponse}
          onChange={handleInputChange}
          placeholder="Type your response..."
          className={styles.inputField}
          disabled={isTyping || decision !== null}
        />
        <button 
          type="submit" 
          className={styles.sendButton}
          disabled={isTyping || decision !== null || !currentResponse.trim()}
        >
          <i className="fas fa-paper-plane"></i>
        </button>
        
        {decision && (
          <button 
            type="button" 
            className={styles.resetButton}
            onClick={resetAssistant}
          >
            Evaluate Another Purchase
          </button>
        )}
      </form>
    </div>
  );
};

export default ShoppingAssistant;