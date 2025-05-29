import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Get parameters from the request
  const center = searchParams.get('center');
  const zoom = searchParams.get('zoom') || '15';
  const size = searchParams.get('size') || '600x400';
  const markers = searchParams.get('markers');
  
  if (!center) {
    return NextResponse.json({ error: 'Center parameter is required' }, { status: 400 });
  }

  // Get API key from server-side environment variable (not NEXT_PUBLIC_)
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: 'Google Maps API key not configured' }, { status: 500 });
  }

  try {
    // Build the Google Maps Static API URL
    const googleMapsUrl = new URL('https://maps.googleapis.com/maps/api/staticmap');
    googleMapsUrl.searchParams.set('center', center);
    googleMapsUrl.searchParams.set('zoom', zoom);
    googleMapsUrl.searchParams.set('size', size);
    googleMapsUrl.searchParams.set('key', apiKey);
    
    if (markers) {
      googleMapsUrl.searchParams.set('markers', markers);
    }

    // Fetch the image from Google Maps
    const response = await fetch(googleMapsUrl.toString());
    
    if (!response.ok) {
      throw new Error(`Google Maps API error: ${response.status}`);
    }

    // Get the image data
    const imageBuffer = await response.arrayBuffer();
    
    // Return the image with proper headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
    
  } catch (error) {
    console.error('Error fetching map:', error);
    return NextResponse.json({ error: 'Failed to fetch map' }, { status: 500 });
  }
} 