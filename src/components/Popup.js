import React from 'react';

const WelcomePopup = ({ onClose }) => {
  return (
    <div className="welcome-popup">
      <div className="popup-content">
        <h2>Welcome!</h2>
        <p>
          Do search at the sidebar to explore yield condition probabilities through the city heatmap.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WelcomePopup;
