import React, { useState } from 'react';
import './LoginPopup.css';

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="login-container">
      <button className="open-login-btn" onClick={openPopup}>Login</button>

      {isOpen && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <h2>Login</h2>
            <form action="/login" method="post">
              <input type="text" placeholder="Username" name="username" required />
              <input type="password" placeholder="Password" name="password" required />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
