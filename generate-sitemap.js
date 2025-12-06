import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import stories data using dynamic import
import('./models/stories.js').then((module) => {
  const stories = module.default;
  
  // Base URL
  const BASE_URL = 'https://nexus.com';

  // Static pages
  const staticPages = [
    '',
    '/library',
    '/stories',
    '/authors',
    '/about',
    '/membership',
    '/image-stories'
  ];

  // Generate sitemap
  function generateSitemap() {
    const urls = [];
    
    // Add static pages
    staticPages.forEach(page => {
      urls.push({
        loc: `${BASE_URL}${page}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: page === '' ? 'daily' : page === '/library' || page === '/authors' ? 'weekly' : 'monthly',
        priority: page === '' ? '1.0' : page === '/library' ? '0.9' : page === '/stories' ? '0.8' : '0.6'
      });
    });
    
    // Add story pages
    Object.keys(stories).forEach(language => {
      if (Array.isArray(stories[language])) {
        stories[language].forEach(story => {
          urls.push({
            loc: `${BASE_URL}/story/${story.id}`,
            lastmod: story.publishDate,
            changefreq: 'monthly',
            priority: '0.7'
          });
        });
      }
    });
    
    // Add language pages
    Object.keys(stories).forEach(language => {
      if (Array.isArray(stories[language]) && stories[language].length > 0) {
        urls.push({
          loc: `${BASE_URL}/language/${language}`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: '0.8'
        });
      }
    });
    
    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    // Write to file
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml);
    
    console.log(`Generated sitemap with ${urls.length} URLs`);
  }

  // Run the generator
  generateSitemap();
});