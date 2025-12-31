import { useEffect } from 'react';

/**
 * SEO Component for managing meta tags dynamically
 * @param {Object} props - SEO configuration object
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords (comma-separated)
 * @param {string} props.image - Open Graph image URL
 * @param {string} props.url - Canonical URL
 * @param {string} props.type - Open Graph type (default: 'website')
 */
const SEO = ({
  title = 'Drop Taxi Trip - Your Trusted One Way & Drop Taxi Service',
  description = 'Reliable drop taxi services connecting major cities across Tamil Nadu, Bengaluru, and Pondicherry. Affordable, safe, and convenient intercity travel.',
  keywords = 'drop taxi, one way taxi, taxi booking, intercity taxi, Tamil Nadu taxi, Bengaluru taxi, Pondicherry taxi, taxi service, cab booking',
  image = '/hero.png',
  url,
  type = 'website'
}) => {
  useEffect(() => {
    // Get current URL if not provided
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    const imageUrl = image.startsWith('http') ? image : (typeof window !== 'undefined' ? `${window.location.origin}${image}` : image);
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Drop Taxi Trip');

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', imageUrl, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'Drop Taxi Trip', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Viewport (usually already set, but ensure it exists)
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEO;

