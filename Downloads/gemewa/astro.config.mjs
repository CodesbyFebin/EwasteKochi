import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import compressor from 'astro-compressor';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://ewastekochi.com',
  output: 'static',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover' // preload on hover for ultra-fast navigation
  },
  compressHTML: true,
  build: {
    format: 'directory',
    concurrency: 4,
    inlineStylesheets: 'auto',
    assets: '_assets' // clean asset directory for better CDN caching
  },
  vite: {
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 5000,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['lucide-react']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react']
    }
  },
  integrations: [sitemap({
    filter: page => !page.includes('/admin') && !page.includes('/draft') && !page.includes('404') && !page.includes('/thank-you'),
    serialize(item) {
      // Set priority and changefreq based on high-authority content hierarchy
      if (item.url === 'https://ewastekochi.com/') {
        item.changefreq = 'daily';
        item.priority = 1.0;
      } else if (item.url.includes('/locations/')) {
        item.changefreq = 'weekly';
        item.priority = 0.9;
      } else if (item.url.includes('/services/')) {
        item.changefreq = 'weekly';
        item.priority = 0.8;
      } else if (item.url.includes('/e-waste/') || item.url.includes('/itad/') || item.url.includes('/buyback/') || item.url.includes('/data-destruction/')) {
        // High-authority pillars and clusters
        item.changefreq = 'daily';
        item.priority = 0.85;
      } else if (item.url.includes('/blog/')) {
        item.changefreq = 'weekly';
        item.priority = 0.7;
      } else if (item.url.includes('/sell-electronics-kochi') || item.url.includes('/hard-drive-destruction-kochi')) {
        item.changefreq = 'daily';
        item.priority = 0.95;
      } else if (item.url.match(/\/[a-z0-9-]+\/?(laptop|phone|macbook|iphone|samsung)/i)) {
        // Sharded model pages - preserve crawl budget
        item.changefreq = 'monthly';
        item.priority = 0.5;
      } else {
        item.changefreq = 'monthly';
        item.priority = 0.4;
      }
      return item;
    },
    customPages: ['https://ewastekochi.com/sitemap-images.xml']
  }), tailwind({
    applyBaseStyles: false // base styles are managed in src/index.css
  }), react(), mdx(), compressor({
    brotli: true,
    gzip: true
  }), robotsTxt({
    policy: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/draft', '/api', '/search', '/thank-you'],
      crawlDelay: 1
    }, {
      userAgent: 'Googlebot',
      allow: '/',
      disallow: ['/admin', '/draft', '/api'],
      crawlDelay: 0.5
    }, {
      userAgent: 'Bingbot',
      allow: '/',
      disallow: ['/admin', '/draft'],
      crawlDelay: 1
    }],
    sitemap: 'https://ewastekochi.com/sitemap-index.xml',
    host: 'https://ewastekochi.com'
  })]
});