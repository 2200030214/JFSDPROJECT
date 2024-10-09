import React from 'react';
import './style.css'; 
import './style1.css'
import '../App.js'

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Constitution Compass</h1>
          <p>Learn about the Indian Constitution - its framework, fundamental rights, and duties as a citizen of India.</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section">
        <h2>Explore the Indian Constitution</h2>
        <p>
          Constitution Compass aims to educate citizens about the Indian Constitution in a comprehensive and interactive way.
          Dive into the fundamental rights, duties, and framework that shape our democracy. Engage with content created by
          educators and legal experts, and become an informed citizen today.
        </p>
      </section>

      {/* Website Features Section */}
      <section className="website-features-section">
        <h2>What We Offer</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Comprehensive Learning</h3>
            <p>
              Get detailed explanations of different parts of the Indian Constitution, including the Preamble, Fundamental Rights,
              Directive Principles, and Amendments.
            </p>
          </div>
          <div className="feature-card">
            <h3>Interactive Content</h3>
            <p>
              Participate in discussions, quizzes, and interactive sessions to deepen your understanding of the Constitution.
            </p>
          </div>
          <div className="feature-card">
            <h3>Expert Insights</h3>
            <p>
              Access insights from legal experts and educators that simplify complex legal concepts for everyone.
            </p>
          </div>
          <div className="feature-card">
            <h3>Community Engagement</h3>
            <p>
              Join our community of learners and discuss constitutional issues, share knowledge, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>Join Constitution Compass and empower yourself with knowledge of your rights and duties as an Indian citizen.</p>
        {/* <button className="cta-button">Login Now</button> */}
      </section>
    </div>
  );
}