# Deployment Guide for French Creek Trading Post

## Environment Variables Setup

This project requires environment variables for API keys and configuration. Here's how to set them up for different deployment environments.

### Required Environment Variables

#### Google Maps API Key
- **Variable Name**: `GOOGLE_MAPS_API_KEY` (server-side) OR `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (client-side)
- **Purpose**: Powers the interactive maps on contact and vendor pages
- **How to get it**:
  1. Go to [Google Cloud Console](https://console.cloud.google.com/)
  2. Create a new project or select existing one
  3. Enable the following APIs:
     - Maps JavaScript API
     - Static Maps API
     - Geocoding API
  4. Go to "Credentials" and create an API key
  5. Restrict the API key to your domain(s) for security

### Two Deployment Approaches

#### Approach 1: Server-Side Proxy (Recommended - More Secure)
This keeps your API key completely hidden from users and is more secure.

**Local Development Setup:**
1. Create a `.env.local` file in the project root:
```bash
GOOGLE_MAPS_API_KEY=your_actual_google_maps_api_key_here
```

**Vercel Setup:**
- Variable Name: `GOOGLE_MAPS_API_KEY` (no NEXT_PUBLIC_ prefix)
- Environment: Production, Preview, Development
- **Security benefit**: API key never exposed to client browsers

**Usage**: Use the `SecureMap` component instead of `GoogleMap`

#### Approach 2: Client-Side (Standard)
This exposes the API key to the browser but is simpler to implement.

**Local Development Setup:**
1. Create a `.env.local` file in the project root:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_google_maps_api_key_here
```

**Vercel Setup:**
- Variable Name: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` 
- Environment: Production, Preview, Development
- **Note**: API key will be visible in browser dev tools

**Usage**: Use the `GoogleMap` component

### Domain Configuration for GoDaddy Domain on Vercel

1. **In Vercel**:
   - Go to your project → Settings → Domains
   - Add your custom domain from GoDaddy
   - Vercel will provide DNS records

2. **In GoDaddy**:
   - Go to your domain's DNS management
   - Add the DNS records provided by Vercel:
     - Type: CNAME
     - Name: www (or @)
     - Value: cname.vercel-dns.com

3. **SSL Certificate**: Vercel automatically provides SSL certificates for custom domains

### Google Maps API Key Restrictions

For **Server-Side Approach**: No domain restrictions needed (server requests come from Vercel's servers)

For **Client-Side Approach**: Add these domain restrictions:
- `*.vercel.app/*` (for Vercel preview deployments)  
- `yourdomain.com/*` (your GoDaddy domain)
- `*.yourdomain.com/*` (for www subdomain)
- `localhost:*` (for local development)

### Pre-Deployment Checklist

- [ ] Google Maps API key is created and configured
- [ ] API key is added to Vercel environment variables (with correct prefix)
- [ ] Domain restrictions are set up in Google Cloud Console (if using client-side)
- [ ] Custom domain is configured in Vercel
- [ ] DNS records are updated in GoDaddy
- [ ] All pages load correctly with the custom domain
- [ ] Maps functionality works on the live site

### Security Best Practices

1. **API Key Security**:
   - **Server-side approach**: More secure, API key not exposed
   - **Client-side approach**: Set domain restrictions, monitor usage
   - Regularly rotate API keys
   - Monitor API usage in Google Cloud Console

2. **Environment Variables**:
   - Never commit `.env.local` to git
   - Use different API keys for development and production
   - Regularly audit environment variables

### Troubleshooting

**Maps not loading**:
- Check if API key is properly set in Vercel (check variable name prefix)
- Verify domain restrictions in Google Cloud Console (client-side only)
- Check browser console for API errors
- Test the API route `/api/maps/static` directly (server-side)

**Domain not working**:
- Verify DNS propagation (can take up to 24 hours)
- Check SSL certificate status in Vercel
- Ensure CNAME record is correctly configured

For support, check the Vercel documentation or Google Cloud Console help. 