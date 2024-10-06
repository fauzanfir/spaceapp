import React from 'react';
import GoogleMapReact from 'google-map-react';

// Replace with your API key
const apiKey = "AIzaSyBtQneLuT5Ky6eV2cDgJuLABX7HlNKFtok";

// Default center and zoom level
const defaultProps = {
    center: {
        lat: -7.7956, // Latitude for Java, Indonesia
        lng: 110.3695, // Longitude for Java, Indonesia
    },
    zoom: 10,
};

// Generate random heatmap data
const generateHeatmapData = () => {
    const positions = [];

    // Generate random positions with random weights
    for (let i = 0; i < 5000; i++) {
        const lat = -7.7956 + (Math.random() - 0.5) * 100; // Random latitude around Java
        const lng = 110.3695 + (Math.random() - 0.5) * 100; // Random longitude around Java
        const weight = parseFloat((Math.random()).toFixed(4)); // Random weight between 0 and 1 with 4 decimal places
        positions.push({ lat, lng, weight });
    }

    // Log generated positions for debugging
    console.log("Generated Positions:", positions);

    const options = {
        radius: 5, // Adjust radius for visibility
        opacity: 0.6, // Adjust opacity for visibility
    };

    return { positions, options }; 
};

const Map = () => {
    const heatmapData = generateHeatmapData(); // Generate heatmap data

    return (
        <div style={{ height: '100vh', width: '90%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: apiKey,
                    libraries: ['visualization'],
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                heatmapLibrary={true} 
                heatmap={heatmapData}
            >
                {/* You can add markers or other elements here if needed */}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
