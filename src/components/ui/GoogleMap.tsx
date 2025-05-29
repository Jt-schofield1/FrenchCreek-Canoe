'use client';

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  apiKey?: string;
  height?: string;
  width?: string;
  zoom?: number;
}

export default function GoogleMap({ 
  address,
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  height = '400px',
  width = '100%',
  zoom = 15
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    // Skip if apiKey is not available or already loaded
    if (!apiKey || !mapRef.current || isScriptLoaded.current) return;

    // Create a unique ID for the script to avoid duplicates
    const scriptId = 'google-maps-script';
    if (document.getElementById(scriptId)) {
      // If script already exists, initialize the map
      initializeMap();
      return;
    }

    // Load Google Maps script
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`;
    script.async = true;
    script.defer = true;
    
    // Create a global callback function
    window.initGoogleMap = initializeMap;
    
    document.head.appendChild(script);
    isScriptLoaded.current = true;

    return () => {
      // Clean up the global callback when component unmounts
      window.initGoogleMap = undefined;
      
      // Optional: remove script if needed
      // const scriptElement = document.getElementById(scriptId);
      // if (scriptElement) document.head.removeChild(scriptElement);
    };
  }, [apiKey, address, zoom]);

  function initializeMap() {
    if (!mapRef.current) return;
    
    // Create a static map if dynamic loading fails
    const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=${zoom}&size=600x400&markers=color:red%7C${encodeURIComponent(address)}&key=${apiKey}`;
    
    try {
      // Try to create a dynamic map
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results: any, status: any) => {
        if (status === 'OK' && results && results[0] && mapRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: zoom
          });
          
          new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
        } else {
          // Fallback to static map if geocoding fails
          createStaticMap(staticMapUrl);
        }
      });
    } catch (error) {
      // Fallback to static map on error
      createStaticMap(staticMapUrl);
      console.error('Google Maps error:', error);
    }
  }

  function createStaticMap(url: string) {
    if (!mapRef.current) return;
    
    // Clear the container
    mapRef.current.innerHTML = '';
    
    // Create and append the image
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Map of ${address}`;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    mapRef.current.appendChild(img);
  }

  return (
    <div 
      ref={mapRef} 
      style={{ 
        height, 
        width,
        backgroundColor: '#f1f1f1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px'
      }}
    >
      <div style={{ color: '#666', textAlign: 'center' }}>Loading map...</div>
    </div>
  );
}

// Add this declaration to avoid TypeScript errors
declare global {
  interface Window {
    initGoogleMap: (() => void) | undefined;
    google: {
      maps: {
        Map: any;
        Geocoder: any;
        Marker: any;
      };
    };
  }
}

// Add type for google global
declare const google: {
  maps: {
    Map: any;
    Geocoder: any;
    Marker: any;
  };
}; 