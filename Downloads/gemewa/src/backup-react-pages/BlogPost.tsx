import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { blogs, getBlogBySlug, blogCategories } from '../data/blogs';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const BlogThumbnail = ({ src, alt, title }: { src: string, alt: string, title?: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    width="800"
    height="400"
    className="rounded-xl object-cover w-full h-auto mb-8 shadow-sm"
    onError={(e) => { e.currentTarget.src = '/fallback-blog.jpg'; }}
  />
);

export default function BlogPost() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600">The requested blog post could not be found.</p>
        </div>
      </div>
    );
  }

  const category = blogCategories.find(c => c.id === blog.category);

  const pageTitle = `${blog.title} | EWaste Kochi Blog`;
  const pageDescription = blog.excerpt || blog.metaDesc;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: blog.title.slice(0, 50), url: `/blog/${blog.slug}` }
  ];

  const articleSchema = {
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    author: { '@type': 'Organization', name: 'EWaste Kochi' },
    datePublished: blog.date,
    mainEntityOfPage: `https://ewastekochi.com/blog/${blog.slug}`,
    image: blog.image ? [`https://ewastekochi.com${blog.image}`] : ['https://ewastekochi.com/og-image.jpg']
  };

  // Get related posts (same category, different slug)
  const relatedPosts = blogs
    .filter(b => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://ewastekochi.com/blog/${blog.slug}`} />
        <meta property="og:image" content={blog.image ? `https://ewastekochi.com${blog.image}` : "https://ewastekochi.com/og-image.jpg"} />
        <meta property="article:published_time" content={blog.date} />
        {category && <meta property="article:section" content={category.name} />}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://ewastekochi.com/blog/${blog.slug}`} />
      </Helmet>

      <Schema data={articleSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                {category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {category.name}
                  </span>
                )}
                <time className="text-gray-500 text-sm" dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {blog.excerpt}
              </p>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">EK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">EWaste Kochi Compliance Team</div>
                  <div className="text-sm text-gray-600">E-Waste & Data Security Experts</div>
                </div>
              </div>
            </header>

            {blog.image && (
              <BlogThumbnail src={blog.image} alt={blog.altText || blog.title} title={blog.title} />
            )}

            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            {relatedPosts.length > 0 && (
              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <div
                      key={post.slug}
                      className="group cursor-pointer"
                      onClick={() => window.location.href = `/blog/${post.slug}`}
                    >
                      <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors h-full flex flex-col">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="text-sm text-green-600 font-medium">
                          Read more →
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-green-600 text-white rounded-xl p-8 mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Need Professional E-Waste Services?</h3>
              <p className="mb-6 opacity-90">
                KSPCB Authorised • Free Corporate Pickup • Certificate of Destruction
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917500555454"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  💬 WhatsApp Us Now
                </a>
                <div
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors cursor-pointer"
                  onClick={() => window.location.href = '/contact'}
                >
                  📞 Get Free Quote
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}