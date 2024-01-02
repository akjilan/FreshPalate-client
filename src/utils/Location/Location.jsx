import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    let map;

    try {
      // Check if the map container exists
      map = L.map('map').setView([26.054738168260783, 88.50514634061356], 22);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([26.054738168260783, 88.50514634061356])
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    } catch (error) {
      console.error('Error initializing the map', error);
    }

    // Clean up resources
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default MapComponent;
