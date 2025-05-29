'use client';

import { useState, useEffect } from 'react';

interface SecureMapProps {
  address: string;
  height?: string;
  width?: string;
  zoom?: number;
  title?: string;
}

export default function SecureMap({ 
  address,
  height = '400px',
  width = '100%',
  zoom = 15,
  title = 'Map'
}: SecureMapProps) {
  const [mapSrc, setMapSrc] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadMap = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Create the API URL for our secure endpoint
        const params = new URLSearchParams({
          center: address,
          zoom: zoom.toString(),
          size: '600x400',
          markers: `color:red|${address}`
        });
        
        const apiUrl = `/api/maps/static?${params.toString()}`;
        
        // Test if the API endpoint works
        const response = await fetch(apiUrl);
        
        if (response.ok) {
          setMapSrc(apiUrl);
        } else {
          throw new Error('Failed to load map');
        }
        
      } catch (err) {
        console.error('Map loading error:', err);
        setError('Failed to load map');
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      loadMap();
    }
  }, [address, zoom]);

  if (loading) {
    return (
      <div 
        style={{ 
          height, 
          width,
          backgroundColor: '#f1f1f1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px'
        }}
      >
        <div style={{ color: '#666', textAlign: 'center' }}>Loading map...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        style={{ 
          height, 
          width,
          backgroundColor: '#f9f9f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          border: '1px solid #e0e0e0'
        }}
      >
        <div style={{ color: '#999', textAlign: 'center' }}>
          <div>📍</div>
          <div style={{ marginTop: '8px', fontSize: '14px' }}>{address}</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      style={{ 
        height, 
        width,
        overflow: 'hidden',
        borderRadius: '4px',
        position: 'relative'
      }}
    >
      <img 
        src={mapSrc}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        onError={() => setError('Failed to load map image')}
      />
    </div>
  );
} 