import React from 'react';
import './App.css'; // We'll create this file for our styles

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Ticket Trading App</h1>
        <p>Buy, sell, and trade tickets easily!</p>
      </header>

      <main className="main">
        <div className="card-container">
          <div className="card">
            <h2>Buy Tickets</h2>
            <p>Find the tickets you want at great prices.</p>
            <button>Browse Tickets</button>
          </div>
          
          <div className="card">
            <h2>Sell Tickets</h2>
            <p>List your tickets and reach thousands of buyers.</p>
            <button>List Tickets</button>
          </div>
          
          <div className="card">
            <h2>Trade Tickets</h2>
            <p>Exchange tickets with other users securely.</p>
            <button>Start Trading</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Ticket Trading App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;