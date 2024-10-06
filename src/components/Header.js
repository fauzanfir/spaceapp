import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>Crop Failure Prediction</h1>
      <div className="button-group">
        <button>Show Prediction Heatmap</button>
        <button>Q1</button>
        <button>Q2</button>
        <button>Q3</button>
        <button>Q4</button>
      </div>
    </div>
  );
};

export default Header;
