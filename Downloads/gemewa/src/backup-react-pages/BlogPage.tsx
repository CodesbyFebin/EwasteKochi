import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogs, getRecentBlogs, blogCategories } from '../data/blogs';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

// ============================================
// 50+ Keyword Cluster (Internal Linking Goldmine)
// ============================================
const KEYWORD_CLUSTERS = [
  { text: "Hard Drive Shredding Kochi", url: "/hard-drive-destruction-kochi" },
  { text: "Data Destruction Services", url: "/hard-drive-destruction-kochi" },
  { text: "ITAD for Infopark Companies", url: "/services" },
  { text: "DPDP Act Compliance Guide", url: "/dpdp-act-kochi" },
  { text: "Sell Old Laptop Edappally", url: "/sell-electronics-kochi" },
  { text: "Laptop Buyback Kakkanad", url: "/sell-electronics-kochi" },
  { text: "Server Disposal Kochi", url: "/server-disposal-kochi" },
  { text: "Certificate of Destruction", url: "/data-sanitization-certificate" },
  { text: "EPR Compliance Kerala", url: "/epr-compliance-kerala" },
  { text: "NIST 800-88 Wiping", url: "/data-sanitization-certificate" },
  { text: "DoD 5220.22-M Shredding", url: "/hard-drive-destruction-kochi" },
  { text: "SSD Destruction", url: "/hard-drive-destruction-kochi" },
  { text: "MacBook Resale Value", url: "/sell-electronics-kochi" },
  { text: "Corporate ITAD Program", url: "/services" },
  { text: "IT Asset Disposition", url: "/services" },
  { text: "Battery Recycling Kochi", url: "/blog/where-to-recycle-batteries-kochi-safely" },
  { text: "UPS Recycling", url: "/services" },
  { text: "Printer Disposal", url: "/services" },
  { text: "Medical Equipment Recycling", url: "/services" },
  { text: "Bank ITAD Services", url: "/services" },
  { text: "Infopark E-waste Pickup", url: "/locations/kakkanad-itad-services" },
  { text: "Kakkanad ITAD", url: "/locations/kakkanad-itad-services" },
  { text: "Edappally Laptop Buyback", url: "/locations/edappally-laptop-buyback" },
  { text: "Vyttila E-waste Collection", url: "/locations/vyttila-e-waste-pickup" },
  { text: "Aluva Electronic Recycling", url: "/locations/aluva-electronic-recycling" },
  { text: "Kalamassery Industrial Waste", url: "/locations/kalamassery-industrial-e-waste" },
  { text: "Cashify vs EWaste Kochi", url: "/cashify-vs-ewastekochi" },
  { text: "Best Buyback Price Kochi", url: "/sell-electronics-kochi" },
  { text: "Free E-waste Pickup", url: "/services" },
  { text: "Same-day Data Destruction", url: "/hard-drive-destruction-kochi" },
  { text: "On-site Hard Drive Shredding", url: "/hard-drive-destruction-kochi" },
  { text: "NABH Compliance Hospital", url: "/dpdp-act-kochi" },
  { text: "KSPCB Authorized Recycler", url: "/certifications" },
  { text: "ISO 14001 Certified", url: "/certifications" },
  { text: "ISO 27001 Data Security", url: "/certifications" },
  { text: "Green Certificate Kerala", url: "/certifications" },
  { text: "Asset Remarketing Kochi", url: "/services" },
  { text: "Data Sanitization Report", url: "/data-sanitization-certificate" },
  { text: "GDPR Compliant Destruction", url: "/dpdp-act-kochi" },
  { text: "Zero Landfill Recycling", url: "/services" },
  { text: "Urban Mining Kerala", url: "/blog" },
  { text: "Right to Repair E-waste", url: "/blog" },
  { text: "E-waste Rules 2022 Kerala", url: "/blog/e-waste-rules-2022-kerala-complete-guide" },
  { text: "Laptop Disposal Certificate", url: "/data-sanitization-certificate" },
  { text: "Bulk IT Asset Pickup", url: "/services" },
  { text: "Startup ITAD Program", url: "/services" },
  { text: "School E-waste Drive", url: "/contact" },
];

const BlogThumbnail = ({ src, alt, title }: { src: string; alt: string; title?: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    width="400"
    height="300"
    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    onError={(e) => { e.currentTarget.src = '/fallback-blog.jpg'; }}
  />
);

const BlogPage: React.FC = () => {
  const recentBlogs = useMemo(() => getRecentBlogs(20), []);
  const categories = blogCategories;
  const [email, setEmail] = useState('');

  // Get 6 most popular (or just first 6 recent) for sidebar widget
  const popularPosts = recentBlogs.slice(0, 6);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ];

  // Enhanced structured data: Blog + ItemList for posts
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'EWaste Kochi Blog',
    description: 'Latest news, guides, and insights on e-waste recycling, ITAD, data destruction, and sustainable electronics in Kochi.',
    url: 'https://ewastekochi.com/blog',
    blogPost: recentBlogs.slice(0, 10).map(blog => ({
      '@type': 'BlogPosting',
      headline: blog.title,
      url: `https://ewastekochi.com/blog/${blog.slug}`,
      datePublished: blog.date,
    }))
  };

  // ItemList schema for the list of posts (helps Google understand pagination)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EWaste Kochi Blog Posts',
    numberOfItems: recentBlogs.length,
    itemListElement: recentBlogs.slice(0, 20).map((blog, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `https://ewastekochi.com/blog/${blog.slug}`,
    })),
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter signup (e.g., fetch POST to /api/subscribe)
    console.log('Subscribe:', email);
    alert('Thanks for subscribing! We’ll send updates to ' + email);
    setEmail('');
  };

  return (
    <>
      <Helmet>
        <title>EWaste Kochi Blog | E-Waste Recycling & ITAD Guides in Kerala</title>
        <meta name="description" content="Expert insights on e-waste recycling, ITAD, data destruction, and DPDP Act compliance. Latest guides for Kochi businesses and individuals." />
        <meta name="keywords" content="e-waste blog, ITAD guides, data destruction tips, DPDP Act Kerala, sell laptop Kochi, hard drive shredding" />
        <link rel="canonical" href="https://ewastekochi.com/blog" />
        <meta property="og:title" content="EWaste Kochi Blog – Your E-Waste Knowledge Hub" />
        <meta property="og:description" content="Get the latest e-waste recycling guides, compliance updates, and ITAD insights for Kochi and Kerala." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ewastekochi.com/blog" />
        <meta property="og:image" content="https://ewastekochi.com/og-blog.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EWaste Kochi Blog" />
        <meta name="twitter:description" content="Expert e-waste and ITAD guides for Kochi." />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kochi" />
      </Helmet>

      <Schema data={blogSchema} />
      <Schema data={itemListSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                EWaste Kochi Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Expert insights on e-waste recycling, ITAD, data destruction, and sustainable electronics in Kochi and Kerala.
              </p>
            </header>

            {/* Two-column layout: main content + sidebar */}
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main content */}
              <div className="flex-1">
                {/* Categories */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse by Category</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/pillars/${category.id}`}
                        className="block p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg transition-all text-center"
                      >
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">{category.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Featured Posts */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentBlogs.map((blog) => {
                      const category = categories.find(c => c.id === blog.category);
                      return (
                        <article key={blog.slug} className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                          {blog.image && (
                            <Link to={`/blog/${blog.slug}`} className="block overflow-hidden">
                              <BlogThumbnail src={blog.image} alt={blog.altText || blog.title} title={blog.title} />
                            </Link>
                          )}
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 mb-3">
                              {category && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  {category.name}
                                </span>
                              )}
                              <time className="text-xs text-gray-500 dark:text-gray-400" dateTime={blog.date}>
                                {new Date(blog.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                              </time>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                              <Link to={`/blog/${blog.slug}`} className="hover:text-green-600 transition-colors">
                                {blog.title}
                              </Link>
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                              {blog.excerpt}
                            </p>
                            
                            <div className="mt-auto pt-4">
                              <Link
                                to={`/blog/${blog.slug}`}
                                className="text-green-600 font-medium text-sm hover:underline inline-block"
                              >
                                Read more →
                              </Link>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sidebar – SEO goldmine */}
              <aside className="lg:w-80 space-y-8">
                {/* Popular Posts Widget */}
                <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🔥 Popular Reads</h3>
                  <ul className="space-y-3">
                    {popularPosts.map((post) => (
                      <li key={post.slug}>
                        <Link to={`/blog/${post.slug}`} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition block">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Keyword Cluster (Tag Cloud) */}
                <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🔍 Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {KEYWORD_CLUSTERS.slice(0, 30).map((kw, idx) => (
                      <a
                        key={idx}
                        href={kw.url}
                        className="inline-block px-3 py-1 text-xs bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-700 transition"
                      >
                        {kw.text}
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link to="/services" className="text-sm text-green-600 hover:underline">View all services →</Link>
                  </div>
                </div>

                {/* CTA: Free Quote */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border border-green-100 dark:border-green-800/30 p-6 text-center">
                  <h3 className="text-lg font-bold text-green-900 dark:text-green-400 mb-2">Need to recycle e-waste?</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Get a free quote and same‑day pickup across Kochi.</p>
                  <a
                    href="https://wa.me/917500555454?text=Hi%2C%20I%20need%20a%20free%20quote%20for%20e-waste%20disposal"
                    target="_blank"
                    rel="noopener"
                    className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    💬 WhatsApp Now
                  </a>
                </div>
              </aside>
            </div>

            {/* Newsletter Signup – SEO & Lead Gen */}
            <div className="mt-16 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-4">
                Stay Updated with E-Waste News
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-6">
                Get the latest guides, compliance updates, and recycling tips delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:text-white"
                />
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-green-600 dark:text-green-400 mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;