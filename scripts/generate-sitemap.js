import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://wander-world-six.vercel.app';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

try {
  // Read the current sitemap
  let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');

  // Replace all instances of the old domain with the new one
  sitemap = sitemap.replace(/https?:\/\/nexus\.com/g, DOMAIN);

  // Write the updated sitemap back to file
  fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');

  console.log('✅ Sitemap updated successfully!');
  console.log(`🌐 Updated domain in sitemap to: ${DOMAIN}`);
  console.log(`📄 Sitemap location: ${SITEMAP_PATH}`);
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}
