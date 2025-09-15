import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>🚀 Learning Platform</h1>
        <p>Prepare. Practice. Perform.</p>
      </header>

      {/* Quick Links Section */}
      <div className="quick-links">
        <Link to="/chatbot" className="card">
          🤖 Chatbot
          <p>Chat and get instant answers!</p>
        </Link>
        <Link to="/interview" className="card">
          💼 Interview Hub
          <p>Resources and mock questions.</p>
        </Link>
      </div>

      {/* Quiz Categories Section */}
      <section className="quiz-section">
        <h2>📚 Quiz Categories</h2>
        <p>Choose a category and test your skills.</p>
        <div className="quiz-grid">
          <Link to="/quiz/aptitude" className="quiz-card aptitude">
            Aptitude
          </Link>
          <Link to="/quiz/coding" className="quiz-card coding">
            Coding
          </Link>
          <Link to="/quiz/itcore" className="quiz-card itcore">
            IT Core
          </Link>
          <Link to="/quiz/engineering" className="quiz-card engineering">
            Engineering
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
