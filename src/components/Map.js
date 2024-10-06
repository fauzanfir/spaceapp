import React from 'react';
import GoogleMapReact from 'google-map-react';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


const defaultProps = {
    center: {
        lat: -7.250445,
        lng: 112.768845, 
    },
    zoom: 11,
};

const generateHeatmapData = () => {
    const positions = [];

    for (let i = 0; i < 5000; i++) {
        const lat = -7.250445 + (Math.random() - 0.5) * 1; 
        const lng = 112.768845 + (Math.random() - 0.5) * 1; 
        const weight = parseFloat((Math.random()).toFixed(4)); 
        positions.push({ lat, lng, weight });
    }

    console.log("Generated Positions:", positions);

    const options = {
        radius: 10, 
        opacity: 0.6,
    };

    return { positions, options }; 
};

const Map = () => {
    const heatmapData = generateHeatmapData(); 

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
            </GoogleMapReact>
        </div>
    );
};

export default Map;
