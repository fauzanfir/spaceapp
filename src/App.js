import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="map">
        <Header />
        <Map />
      </div>
    </div>
  );
};

export default App;
