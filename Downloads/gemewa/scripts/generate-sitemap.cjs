const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://ewastekochi.com';
const today = new Date().toISOString().split('T')[0];
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const DATA_DIR = path.resolve(__dirname, '../src/data');

/**
 * Data Sources for 10,000+ SEO Pages
 * We load from the actual JSON files to ensure sitemap accuracy
 */
const BLOG_PARTS = Array.from({ length: 10 }, (_, i) => `blogPosts_part${i + 1}.json`);
const MEGA_CONTENT_PARTS = Array.from({ length: 12 }, (_, i) => `megaContent_part${i + 1}.json`);
const SPECIAL_MEGA_FILES = ['megaContent_services.json'];

let urls = [];
let addedUrls = new Set();
let sitemapFiles = {};

function addUrl(category, loc, lastmod = today, changefreq = 'weekly', priority = '0.7') {
  if (!addedUrls.has(loc)) {
    addedUrls.add(loc);
    if (!sitemapFiles[category]) sitemapFiles[category] = [];
    sitemapFiles[category].push({ loc, lastmod, changefreq, priority });
  }
}

console.log('🚀 Starting Sitemap Generation for EWaste Kochi Authority Catalog...');

// 1. Core Pages (Priority 1.0)
[
  { loc: '/', priority: '1.0', changefreq: 'daily' },
  { loc: '/services', priority: '0.9' },
  { loc: '/locations', priority: '0.9' },
  { loc: '/blog', priority: '0.8', changefreq: 'daily' },
  { loc: '/about', priority: '0.7' },
  { loc: '/contact', priority: '0.8' },
  { loc: '/pickup', priority: '0.9' },
  { loc: '/faq', priority: '0.7' },
  { loc: '/itad', priority: '0.9' },
  { loc: '/data-destruction-kochi', priority: '0.9' },
  { loc: '/sell-electronics-kochi', priority: '0.9' },
  { loc: '/cashify-comparison', priority: '0.8' },
  { loc: '/dpdp-act-kochi', priority: '0.8' },
  { loc: '/impact', priority: '0.7' },
  { loc: '/privacy-policy', priority: '0.3' }
].forEach(p => addUrl('main', `${SITE_URL}${p.loc}`, today, p.changefreq || 'weekly', p.priority));

// 2. High-Authority Blog Posts (10,000+ Items)
console.log('📖 Processing Blog Posts catalog...');
BLOG_PARTS.forEach(file => {
  const filePath = path.join(DATA_DIR, file);
  if (fs.existsSync(filePath)) {
    try {
      const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      posts.forEach(post => {
        // Priority based on presence of long content
        const priority = post.content && post.content.length > 3000 ? '0.8' : '0.6';
        addUrl('blog', `${SITE_URL}/blog/${post.slug}`, post.dateModified || post.date || today, 'monthly', priority);
      });
      console.log(` ✅ Loaded ${posts.length} blogs from ${file}`);
    } catch (e) {
      console.error(` ❌ Error parsing ${file}:`, e.message);
    }
  }
});

// 3. Mega Content Pages (Dynamic Cluster SEO)
console.log('🏗️ Processing Mega Content clusters (Locations, Services, ITAD)...');
[...MEGA_CONTENT_PARTS, ...SPECIAL_MEGA_FILES].forEach(file => {
  const filePath = path.join(DATA_DIR, file);
  if (fs.existsSync(filePath)) {
    try {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      Object.keys(content).forEach(slug => {
        // Determine category based on slug patterns
        let category = 'dynamic';
        if (slug.includes('location') || slug.includes('kochi') || slug.includes('ernakulam')) category = 'locations';
        if (slug.includes('service') || slug.includes('recycling')) category = 'services';
        if (slug.includes('itad') || slug.includes('destruction')) category = 'enterprise';

        addUrl(category, `${SITE_URL}/${slug}`, today, 'weekly', '0.7');
      });
      console.log(` ✅ Loaded ${Object.keys(content).length} SEO pages from ${file}`);
    } catch (e) {
      console.error(` ❌ Error parsing ${file}:`, e.message);
    }
  }
});

// 4. Fallback loops for safety (if JSONs are missing certain key targets)
// This ensures baseline SEO even if catalog files change
const backupLocations = ['kakkanad', 'infopark', 'edappally', 'vyttila', 'kochi'];
const backupServices = ['itad', 'data-destruction', 'laptop-buyback', 'e-waste-recycling'];

backupLocations.forEach(loc => {
    addUrl('main', `${SITE_URL}/locations/${loc}`, today, 'weekly', '0.8');
    backupServices.forEach(svc => {
        addUrl('services', `${SITE_URL}/${svc}/${loc}`, today, 'weekly', '0.7');
    });
});

// Write Sitemaps
console.log('💾 Writing Sitemap XML files...');

let indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

Object.entries(sitemapFiles).forEach(([category, catUrls]) => {
  const fileName = `sitemap_${category}.xml`;
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  catUrls.forEach(url => {
    xml += `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>\n`;
  });
  
  xml += '</urlset>';
  fs.writeFileSync(path.join(PUBLIC_DIR, fileName), xml);
  
  indexXml += `  <sitemap>
    <loc>${SITE_URL}/${fileName}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>\n`;
});

indexXml += '</sitemapindex>';

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap_index.xml'), indexXml);
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), indexXml);

console.log(`✨ DONE! Generated total ${addedUrls.size} URLs across ${Object.keys(sitemapFiles).length} sitemap files.`);