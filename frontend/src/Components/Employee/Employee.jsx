import React from 'react';
import './Employee.css';

const Employee = () => {
  return (
    <div className="employee-container">
      <header className="head">
        <h1>Welcome, Employee</h1>
        <button className="logout-btn">Logout</button>
      </header>

      <section className="profile-section">
        <h2>Your Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Department: Finance</p>
      </section>

      <section className="expense-request-section">
        <h2>Submit New Expense</h2>
        <form className="expense-form">
          <input type="text" placeholder="Expense Title" required />
          <input type="number" placeholder="Amount" required />
          <input type="date" required />
          <textarea placeholder="Description" rows="4"></textarea>
          <button type="submit">Submit Expense</button>
        </form>
      </section>

      <section className="expense-history-section">
        <h2>Your Expense History</h2>
        <ul className='employee-ul'>
          <li>Travel - $200 - Approved</li>
          <li>Hotel Stay - $500 - Pending</li>
        </ul>
      </section>
    </div>
  );
};

export default Employee;
