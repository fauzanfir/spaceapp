import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ maxHeight: '100vh', overflowY: 'auto', padding: '10px' }}>
      <h2>City Search</h2>
      <input type="text" placeholder="Surabaya" />
      <button>Search</button>

      {/* Hardcoded Surabaya City Details */}
      <div className="city-details">
        <h2 className="city-name">Surabaya</h2>
        <div className="city-potential" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <p style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>HIGH POTENTIAL</p>
          <span style={{ fontSize: '32px', fontWeight: 'bold' }}>85%</span>
        </div>

        {/* Factor details with hardcoded slider values */}
        <div className="factor-details">
          {[
            { factor: 'Precipitation Rate', value: 65 },
            { factor: 'Air Temperature', value: 85 },
            { factor: 'Flood Rate', value: 40 },
            { factor: 'Humidity', value: 75 },
            { factor: 'Soil Moisture', value: 55 },
            { factor: 'Wind Speed', value: 35 },
            { factor: 'Sunlight Intensity', value: 90 },
            { factor: 'Soil pH', value: 50 },
            { factor: 'Fertilizer Usage', value: 70 },
          ].map((item, index) => (
            <div key={index} className="factor-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <p style={{ marginRight: '10px', flex: '1' }}>{item.factor}</p>
              <input
                type="range"
                min="0"
                max="100"
                value={item.value}
                readOnly
                className="slider"
                style={{ flex: '2', width: '100px' }}  // Make the slider smaller
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
