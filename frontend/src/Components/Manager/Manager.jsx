import React from 'react';
import './Manager.css';

const Manager = () => {
  return (
    <div className="manager-container">
      <header className="header-M">
        <h1>Welcome, Manager</h1>
        <button className="logout-btn">Logout</button>
      </header>

      <section className="requests-section">
        <h2>Employee Expense Requests</h2>
        <div className="request-card">
          <p><strong>Employee:</strong> Jane Doe</p>
          <p><strong>Expense:</strong> Office Supplies - $100</p>
          <div className="actions">
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Reject</button>
          </div>
        </div>
      </section>

      <section className="team-summary-section">
        <h2>Team Expense Summary</h2>
        <ul className='manager-ul'>
          <li>Jane Doe - $300 Approved</li>
          <li>Mike Ross - $120 Pending</li>
        </ul>
      </section>
    </div>
  );
};

export default Manager;
