import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const LandingPage = () => (
  <div className="app">
    <header className="header">
      <nav>
        <div className="logo">TicketTrading</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><Link to="/login" className="nav-cta">Login / Sign Up</Link></li>
        </ul>
      </nav>
    </header>

    <main className="main">
    <section className="hero" id="home">
        <div className="hero-content">
          <h1>Your Gateway to Unforgettable Events</h1>
          <p>Buy, sell, and trade tickets seamlessly on our secure platform</p>
          <Link to="/login" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why Choose TicketTrade?</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-icon">🎟️</div>
            <h3>Easy Buying</h3>
            <p>Find and purchase tickets for your favorite events in just a few clicks.</p>
          </div>
          <div className="card">
            <div className="card-icon">💰</div>
            <h3>Quick Selling</h3>
            <p>List your tickets and reach thousands of potential buyers instantly.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔄</div>
            <h3>Secure Trading</h3>
            <p>Exchange tickets with other users through our safe and reliable platform.</p>
          </div>
        </div>
      </section>
      
      <section id="testimonial" className="testimonial">
        <div className="testimonial-content">
          <blockquote>
            "TicketTrade revolutionized how I buy and sell tickets. It's user-friendly, secure, and saved me time and money!"
          </blockquote>
          <p>- Sarah M., Satisfied User</p>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About TicketTrade</h4>
          <p>Your go-to platform for all ticket-related transactions.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
            <li><Link to="/login">Login / Sign Up</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@tickettrade.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TicketTrade. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default LandingPage;