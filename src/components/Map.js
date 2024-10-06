import React from 'react';
import GoogleMapReact from 'google-map-react';

// Replace with your API key
const apiKey = "AIzaSyBtQneLuT5Ky6eV2cDgJuLABX7HlNKFtok";

// Default center and zoom level
const defaultProps = {
    center: {
        lat: -7.250445, // Latitude for Java, Indonesia
        lng: 112.768845, // Longitude for Java, Indonesia
    },
    zoom: 11,
};

// Generate random heatmap data
const generateHeatmapData = () => {
    const positions = [];

    // Generate random positions with random weights
    for (let i = 0; i < 5000; i++) {
        const lat = -7.250445 + (Math.random() - 0.5) * 1; // Random latitude around Java
        const lng = 112.768845 + (Math.random() - 0.5) * 1; // Random longitude around Java
        const weight = parseFloat((Math.random()).toFixed(4)); // Random weight between 0 and 1 with 4 decimal places
        positions.push({ lat, lng, weight });
    }

    // Log generated positions for debugging
    console.log("Generated Positions:", positions);

    const options = {
        radius: 10, // Adjust radius for visibility
        opacity: 0.6, // Adjust opacity for visibility
    };

    return { positions, options }; 
};

const Map = () => {
    const heatmapData = generateHeatmapData(); // Generate heatmap data

    return (
        <div style={{ height: '93%', width: '100%'}}>
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
