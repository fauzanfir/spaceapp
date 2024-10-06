import React, { useState } from 'react';
import factors from '../assets/Factors.js'; 

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityData, setCityData] = useState(null);
  const [searchExecuted, setSearchExecuted] = useState(false); 

  const citiesWithPotential = {
    Jakarta: 0.85,
    Bandung: 0.65,
    Surabaya: 0.75,
    Yogyakarta: 0.60,
    Bogor: 0.60,
    Tangerang: 0.65,
    Depok: 0.72,
    Cirebon: 0.78,
    Malang: 0.76,
    Banjarmasin: 0.82,
    Sukabumi: 0.75,
    Cilegon: 0.68,
    Semarang: 0.74,
    Tasikmalaya: 0.80,
    Purbalingga: 0.76,
    Probolinggo: 0.70,
    Karawang: 0.73,
    Ciamis: 0.78,
    Cilacap: 0.72,
    Magelang: 0.75,
    Serang: 0.76,
    Jember: 0.73,
    Banjar: 0.68,
    Tegal: 0.71,
    Sukoharjo: 0.75,
  };

  const handleSearch = () => {
    setSearchExecuted(true); 
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const matchedCity = Object.keys(citiesWithPotential).find(city =>
      city.toLowerCase() === lowerCaseSearchTerm
    );

    if (matchedCity && factors[matchedCity]) {
      setCityData({
        name: matchedCity, 
        potential: (citiesWithPotential[matchedCity] * 100).toFixed(2) + '%',
        factors: factors[matchedCity],
      });
    } else {
      setCityData(null); 
    }
  };

  return (
    <div className="sidebar" style={{ maxHeight: '100vh', overflowY: 'auto', padding: '10px' }}>
      <h2>City Search</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {cityData ? (
        <div className="city-details">
          <h2 className="city-name">{cityData.name}</h2>
          <div className="city-potential" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>HIGH POTENTIAL</p>
            <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{cityData.potential}</span>
          </div>

          <div className="factor-details">
            {cityData.factors.map((item, index) => (
              <div key={index} className="factor-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <p style={{ marginRight: '10px', flex: '1' }}>{item.factor}</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={item.value}
                  readOnly
                  className="slider"
                  style={{ flex: '2', width: '100px' }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        searchExecuted && <p>Data aren't available yet.</p> 
      )}
    </div>
  );
};

export default Sidebar;
