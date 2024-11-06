import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">TicketTrade</div>
        <nav>
          <ul>
            <li><a href="#summary">Summary</a></li>
            <li><a href="#transactions">Transactions</a></li>
            <li><a href="#listings">My Listings</a></li>
            <li><Link to="/" className="logout-btn">Logout</Link></li>
          </ul>
        </nav>
      </header>

      <main className="dashboard-main">
        <section id="summary" className="dashboard-section">
          <h2>Dashboard Summary</h2>
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Active Listings</h3>
              <p className="summary-number">5</p>
            </div>
            <div className="summary-card">
              <h3>Pending Trades</h3>
              <p className="summary-number">2</p>
            </div>
            <div className="summary-card">
              <h3>Completed Transactions</h3>
              <p className="summary-number">10</p>
            </div>
          </div>
        </section>

        <section id="transactions" className="dashboard-section">
          <h2>Recent Transactions</h2>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-10-15</td>
                <td>Concert XYZ</td>
                <td>Sold</td>
                <td>$120.00</td>
              </tr>
              <tr>
                <td>2024-10-12</td>
                <td>Sports Game ABC</td>
                <td>Bought</td>
                <td>$85.00</td>
              </tr>
              <tr>
                <td>2024-10-08</td>
                <td>Theater Show 123</td>
                <td>Traded</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="listings" className="dashboard-section">
          <h2>My Listings</h2>
          <div className="listing-cards">
            <div className="listing-card">
              <h3>Concert ABC</h3>
              <p>Date: 2024-11-20</p>
              <p>Price: $100.00</p>
              <button className="edit-btn">Edit</button>
            </div>
            <div className="listing-card">
              <h3>Sports Event XYZ</h3>
              <p>Date: 2024-12-05</p>
              <p>Price: $150.00</p>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
          <button className="add-listing-btn">+ Add New Listing</button>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2024 TicketTrade. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;