import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>City Search</h2>
      <input type="text" placeholder="Enter city name..." />
      <button>Search</button>
      {/* Add other sidebar elements as needed */}
    </div>
  );
};

export default Sidebar;
