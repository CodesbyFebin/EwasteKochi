import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { pillars } from '../data/pillars';
import { blogs } from '../data/blogs';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

export default function PillarPage() {
  const { pillar, cluster } = useParams();

  const selectedPillar = pillars.find(p => p.slug === pillar);
  const selectedCluster = selectedPillar?.clusters.find(c => c.id === cluster);

  if (!selectedPillar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pillar Not Found</h1>
          <p className="text-gray-600">The requested pillar could not be found.</p>
        </div>
      </div>
    );
  }

  // Filter blogs for this pillar/cluster
  let pillarBlogs = blogs.filter(blog => {
    if (cluster) {
      // Find blogs that match this specific cluster
      return blog.pillarSlug === pillar && blog.clusterSlug === cluster;
    } else {
      // Find blogs that match this pillar
      return blog.pillarSlug === pillar;
    }
  });

  const pageTitle = cluster
    ? `${selectedCluster?.name} | ${selectedPillar.name} | EWaste Kochi`
    : `${selectedPillar.name} | EWaste Kochi`;

  const pageDescription = cluster
    ? `Complete guide to ${selectedCluster?.name.toLowerCase()} in Kochi. Professional ${selectedPillar.name.toLowerCase()} services with KSPCB authorization.`
    : selectedPillar.description;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: selectedPillar.name, url: `/${selectedPillar.slug}/` }
  ];

  if (cluster && selectedCluster) {
    breadcrumbs.push({
      name: selectedCluster.name,
      url: `/${selectedPillar.slug}/${selectedCluster.id}/`
    });
  }

  const pillarSchema = {
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: `https://ewastekochi.com/${selectedPillar.slug}/${cluster || ''}`,
    mainEntity: {
      '@type': 'ItemList',
      name: cluster ? selectedCluster.name : selectedPillar.name,
      numberOfItems: pillarBlogs.length
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ewastekochi.com/${selectedPillar.slug}/${cluster || ''}`} />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://ewastekochi.com/${selectedPillar.slug}/${cluster || ''}`} />
      </Helmet>

      <Schema data={pillarSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
                <span className="text-4xl">{selectedPillar.icon}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {cluster ? selectedCluster?.name : selectedPillar.h1}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {cluster ? `Complete guide to ${selectedCluster?.name.toLowerCase()} services in Kochi` : selectedPillar.intro}
              </p>
            </header>

            {!cluster && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {selectedPillar.clusters.map((clusterItem) => (
                  <Link
                    key={clusterItem.id}
                    to={`/${selectedPillar.slug}/${clusterItem.id}/`}
                    className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{clusterItem.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Learn about {clusterItem.keyword.toLowerCase()} in Kochi
                    </p>
                    <span className="text-green-600 font-medium text-sm">Explore →</span>
                  </Link>
                ))}
              </div>
            )}

            {pillarBlogs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {cluster ? `${selectedCluster?.name} Articles` : `${selectedPillar.name} Resources`}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pillarBlogs.map((blog) => (
                    <article key={blog.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{selectedPillar.icon}</span>
                          <span className="text-sm text-green-600 font-medium">
                            {cluster ? selectedCluster?.name : selectedPillar.name}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                          <Link
                            to={`/${selectedPillar.slug}/${cluster || blog.clusterSlug}/${blog.slug}/`}
                            className="hover:text-green-600 transition-colors"
                          >
                            {blog.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <time className="text-xs text-gray-500" dateTime={blog.date}>
                            {new Date(blog.date).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </time>
                          <Link
                            to={`/${selectedPillar.slug}/${cluster || blog.clusterSlug}/${blog.slug}/`}
                            className="text-green-600 font-medium text-sm hover:underline"
                          >
                            Read more →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-green-600 text-white rounded-xl p-8 mt-16 text-center">
              <h3 className="text-xl font-bold mb-4">
                Need {cluster ? selectedCluster?.name : selectedPillar.name} Services?
              </h3>
              <p className="mb-6 opacity-90">
                Professional service • KSPCB Authorised • Free consultation
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
      </main>
    </>
  );
}