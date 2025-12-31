# SEO Implementation Guide

This document explains how to use the SEO files and components in your booking app.

## Files Created

1. **`public/robots.txt`** - Tells search engines which pages to crawl
2. **`public/sitemap.xml`** - Helps search engines understand your site structure
3. **`src/components/seo/SEO.jsx`** - React component for dynamic meta tags

## Setup Instructions

### 1. Update Domain URLs

Before deploying, update the following files with your actual domain:

#### `public/robots.txt`
```txt
Sitemap: https://yourdomain.com/sitemap.xml
```
Replace `yourdomain.com` with your actual domain.

#### `public/sitemap.xml`
Replace all instances of `https://yourdomain.com/` with your actual domain URL.

#### `index.html`
Replace all instances of `https://yourdomain.com/` with your actual domain URL in the meta tags.

### 2. Using the SEO Component

Import and use the SEO component in your pages:

```jsx
import SEO from '../../components/seo/SEO'

const YourPage = () => {
  return (
    <>
      <SEO 
        title="Your Page Title"
        description="Your page description"
        keywords="keyword1, keyword2, keyword3"
        url={window.location.href}
        image="/path-to-image.png"
      />
      {/* Your page content */}
    </>
  )
}
```

### 3. Example Usage in Pages

#### Home Page (already implemented)
```jsx
<SEO 
  title="Drop Taxi Trip - Your Trusted One Way & Drop Taxi Service"
  description="Reliable drop taxi services connecting major cities..."
  keywords="drop taxi, one way taxi, taxi booking"
  url={window.location.origin}
/>
```

#### Booking Page
```jsx
<SEO 
  title="Book Your Taxi - Drop Taxi Trip"
  description="Book your drop taxi online. Quick and easy booking process with best prices guaranteed."
  keywords="book taxi, taxi booking, online taxi booking"
  url={window.location.href}
/>
```

#### Service Page
```jsx
<SEO 
  title="Our Services - Drop Taxi Trip"
  description="We offer one-way drop taxi, round trip, airport transfers, and more."
  keywords="taxi services, drop taxi services, intercity taxi"
  url={window.location.href}
/>
```

## SEO Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Drop Taxi Trip - Your Trusted One Way & Drop Taxi Service" | Page title |
| `description` | string | Default description | Meta description |
| `keywords` | string | Default keywords | Meta keywords (comma-separated) |
| `image` | string | "/hero.png" | Open Graph image URL |
| `url` | string | `window.location.href` | Canonical URL |
| `type` | string | "website" | Open Graph type |

## Best Practices

1. **Unique Titles**: Each page should have a unique, descriptive title (50-60 characters)
2. **Descriptions**: Write compelling descriptions (150-160 characters) that include keywords
3. **Keywords**: Use relevant, natural keywords related to your content
4. **Images**: Use high-quality images for Open Graph (recommended: 1200x630px)
5. **URLs**: Always use absolute URLs for better SEO
6. **Update Sitemap**: Update `sitemap.xml` when you add new pages
7. **Last Modified**: Update the `<lastmod>` dates in `sitemap.xml` when content changes

## Testing

1. Test your meta tags using:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Google Rich Results Test](https://search.google.com/test/rich-results)

2. Verify robots.txt is accessible at: `https://yourdomain.com/robots.txt`
3. Verify sitemap.xml is accessible at: `https://yourdomain.com/sitemap.xml`

## Additional SEO Tips

1. Add structured data (JSON-LD) for better rich snippets
2. Optimize images with alt text
3. Ensure fast page load times
4. Use HTTPS
5. Create quality, original content
6. Build backlinks
7. Monitor with Google Search Console

