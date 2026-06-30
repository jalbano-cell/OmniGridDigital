export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "OmniGrid Digital",
  "url": "https://omnigriddigital.ca",
  "logo": "https://omnigriddigital.ca/logo.png",
  "image": "https://omnigriddigital.ca/logo.png",
  "description": "OmniGrid Digital helps home service and professional businesses across Toronto and the GTA generate more qualified leads through high-converting websites, local SEO, Google Ads, and Meta advertising.",
  "telephone": "+1-437-928-2298",
  "email": "zaink@omnigriddigital.ca",
  "areaServed": [
    { "@type": "City", "name": "Toronto", "sameAs": "https://en.wikipedia.org/wiki/Toronto" },
    { "@type": "City", "name": "Mississauga" },
    { "@type": "City", "name": "Brampton" },
    { "@type": "City", "name": "Markham" },
    { "@type": "City", "name": "Vaughan" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6205,
    "longitude": -79.5132
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design", "description": "Custom websites that convert visitors into leads" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Redesign", "description": "Modernize outdated websites to improve speed, mobile experience, and lead generation" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO", "description": "Rank higher on Google Maps and local search so nearby customers find you first" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile Optimization", "description": "Optimize your Google listing for more calls and visibility" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management", "description": "Targeted search ads that drive qualified leads" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Management", "description": "Facebook and Instagram ad campaigns for lead generation" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Design", "description": "Dedicated conversion pages that turn ad clicks into phone calls and form submissions" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Search Optimization", "description": "Prepare your business to appear in AI-powered search results and answer engines" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimization", "description": "Improve your website's ability to turn visitors into paying customers" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly Growth Management", "description": "Ongoing website updates, SEO improvements, reporting, and advertising optimization" }}
    ]
  },
  "sameAs": ["https://www.instagram.com/omnigriddigital"]
};
