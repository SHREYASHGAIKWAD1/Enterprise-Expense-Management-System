import React from 'react';
import './Signup.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" name="name" required />
          <input type="email" placeholder="Email Address" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default SignupPage;
