import React from 'react';
import GoogleMapReact from 'google-map-react';

// Replace with your API key
const apiKey = "ENG ING ENG";

// Default center and zoom level
const defaultProps = {
    center: {
        lat: 37.7749, // Latitude of San Francisco
        lng: -122.4194 // Longitude of San Francisco
    },
    zoom: 10 // Increased zoom level to see the heatmap better
};

// Generate random heatmap data
const generateHeatmapData = () => {
    const positions = [];
    for (let i = 0; i < 500; i++) { // Increased number of data points
        const lat = 37.7749 + (Math.random() - 0.5) * 0.2; // Random latitude around San Francisco
        const lng = -122.4194 + (Math.random() - 0.5) * 0.2; // Random longitude around San Francisco
        positions.push({ lat, lng });
    }
    
    const options = {   
        radius: 20,   // Adjust radius for visibility
        opacity: 0.4, // Adjust opacity for visibility
    };
    
    return { positions, options }; // Return the heatmap data in the correct format
};

const Map = () => {
    const heatmapData = generateHeatmapData(); // Generate heatmap data

    return (
        <div style={{ height: '100vh', width: '100%' }}>
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
                {/* Add markers or other elements here if needed */}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
