import React from 'react'
import './style1.css'
export default function About() 
{
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>About Constitution Compass</h1>
          <p>Empowering Citizens with Knowledge of the Constitution</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section">
        <h2>Our Purpose</h2>
        <p>
          Constitution Compass is an initiative to bring awareness about the Indian Constitution to all citizens.
          Understanding the Constitution is the first step towards becoming an informed and responsible citizen. 
          Our platform is dedicated to providing in-depth resources and interactive tools to explore and learn about our Constitution.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Features of Constitution Compass</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Interactive Learning</h3>
            <p>Engage with quizzes, videos, and discussions to deepen your understanding of constitutional principles.</p>
          </div>
          <div className="feature-card">
            <h3>Expert Guidance</h3>
            <p>Get insights from legal experts and educators who simplify complex legal concepts for better understanding.</p>
          </div>
          <div className="feature-card">
            <h3>Community Participation</h3>
            <p>Participate in discussions, ask questions, and be part of a community of informed citizens.</p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          To create an informed citizenry that not only knows their rights but also understands the importance of their duties.
          We envision a society where every citizen is well-versed with the democratic values enshrined in the Indian Constitution.
        </p>
      </section>
    </div>
  );
}
