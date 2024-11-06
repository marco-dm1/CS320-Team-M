import React from 'react';
import './App.css';

const LandingPage = () => {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <div className="logo">TicketTrade</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Revolutionize Your Ticket Experience</h1>
          <p>Buy, sell, and trade tickets with ease and confidence</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <main className="main">
        <section id="features" className="features">
          <h2>Why Choose TicketTrade?</h2>
          <div className="card-container">
            <div className="card">
              <i className="icon-buy"></i>
              <h3>Easy Buying</h3>
              <p>Find and purchase tickets for your favorite events in just a few clicks.</p>
            </div>
            <div className="card">
              <i className="icon-sell"></i>
              <h3>Quick Selling</h3>
              <p>List your tickets and reach thousands of potential buyers instantly.</p>
            </div>
            <div className="card">
              <i className="icon-trade"></i>
              <h3>Secure Trading</h3>
              <p>Exchange tickets with other users through our safe and reliable platform.</p>
            </div>
          </div>
        </section>
        
        <section id="testimonial" className="testimonial">
          <blockquote>
            "TicketTrade made it incredibly easy for me to sell my concert tickets when I couldn't attend. Highly recommended!"
          </blockquote>
          - Sarah M., Satisfied User
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>TicketTrade is your go-to platform for all ticket-related transactions.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
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
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login/Signup</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;