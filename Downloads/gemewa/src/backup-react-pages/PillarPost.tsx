import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { pillars } from '../data/pillars';
import { blogs } from '../data/blogs';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

export default function PillarPost() {
  const { pillar, cluster, post } = useParams();

  const selectedPillar = pillars.find(p => p.slug === pillar);
  const selectedCluster = selectedPillar?.clusters.find(c => c.id === cluster);
  const blogPost = blogs.find(b => b.slug === post);

  if (!selectedPillar || !selectedCluster || !blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <p className="text-gray-600">The requested content could not be found.</p>
        </div>
      </div>
    );
  }

  const pageTitle = `${blogPost.title} | EWaste Kochi`;
  const pageDescription = blogPost.metaDesc || blogPost.excerpt;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: selectedPillar.name, url: `/${selectedPillar.slug}/` },
    { name: selectedCluster.name, url: `/${selectedPillar.slug}/${selectedCluster.id}/` },
    { name: blogPost.title.slice(0, 50), url: `/${selectedPillar.slug}/${selectedCluster.id}/${blogPost.slug}/` }
  ];

  const articleSchema = {
    '@type': 'Article',
    headline: blogPost.title,
    description: blogPost.metaDesc,
    author: {
      '@type': 'Organization',
      name: 'EWaste Kochi',
      url: 'https://ewastekochi.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'EWaste Kochi',
      logo: { '@type': 'ImageObject', url: 'https://ewastekochi.com/assets/images/logo.webp' }
    },
    dateModified: blogPost.dateModified,
    mainEntityOfPage: `https://ewastekochi.com/${selectedPillar.slug}/${selectedCluster.id}/${blogPost.slug}/`
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://ewastekochi.com/${selectedPillar.slug}/${selectedCluster.id}/${blogPost.slug}/`} />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://ewastekochi.com/${selectedPillar.slug}/${selectedCluster.id}/${blogPost.slug}/`} />
      </Helmet>

      <Schema data={articleSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {selectedPillar.icon} {selectedPillar.name}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {selectedCluster.name}
                </span>
                <time className="text-gray-500 text-sm" dateTime={blogPost.dateModified}>
                  {new Date(blogPost.dateModified).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {blogPost.h1 || blogPost.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {blogPost.metaDesc || blogPost.excerpt}
              </p>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">EK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">EWaste Kochi Team</div>
                  <div className="text-sm text-gray-600">E-Waste & Sustainability Experts</div>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            <div className="bg-green-600 text-white rounded-xl p-8 mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Book Your E-Waste Pickup in {blogPost.city || 'Kochi'}?</h3>
              <p className="mb-6 opacity-90">
                Free doorstep collection • KSPCB Authorised • Certificate of Destruction included
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917500555454"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href="tel:+917500555454"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}