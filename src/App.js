import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import WelcomePopup from './components/Popup';
import './index.css';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      {showPopup && <WelcomePopup onClose={handleClosePopup} />}
      <Sidebar />
      <div className="map">
        <Header />
        <Map />
      </div>
    </div>
  );
};

export default App;
