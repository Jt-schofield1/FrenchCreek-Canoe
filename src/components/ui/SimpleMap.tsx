'use client';

interface SimpleMapProps {
  address: string;
  height?: string;
  width?: string;
  zoom?: number;
  title?: string;
}

export default function SimpleMap({
  address,
  height = '400px',
  width = '100%',
  zoom = 15,
  title = 'Location Map'
}: SimpleMapProps) {
  // Encode the address for use in the URL
  const encodedAddress = encodeURIComponent(address);
  
  // Create the Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}&zoom=${zoom}`;
  
  // Alternatively, if the API key is not available, use a fallback URL
  const fallbackUrl = `https://maps.google.com/maps?q=${encodedAddress}&z=${zoom}&output=embed`;
  
  return (
    <div className="map-container" style={{ width, height, borderRadius: '8px', overflow: 'hidden' }}>
      <iframe
        title={title}
        src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? mapUrl : fallbackUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
} 