import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { pillars } from '../data/pillars';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

export default function PillarsIndex() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Knowledge Hub', url: '/pillars' }
  ];

  const pillarsSchema = {
    '@type': 'WebPage',
    name: 'E-Waste Knowledge Hub | EWaste Kochi',
    description: 'Complete guide to e-waste recycling, ITAD, data destruction, and sustainable electronics in Kochi.',
    url: 'https://ewastekochi.com/pillars',
    mainEntity: {
      '@type': 'ItemList',
      name: 'E-Waste Services',
      numberOfItems: pillars.length
    }
  };

  return (
    <>
      <Helmet>
        <title>E-Waste Knowledge Hub | Complete Guide | EWaste Kochi</title>
        <meta name="description" content="Complete guide to e-waste recycling, ITAD, data destruction, and sustainable electronics in Kochi." />
        <meta property="og:title" content="E-Waste Knowledge Hub | Complete Guide | EWaste Kochi" />
        <meta property="og:description" content="Complete guide to e-waste recycling, ITAD, data destruction, and sustainable electronics in Kochi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ewastekochi.com/pillars" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/pillars" />
      </Helmet>

      <Schema data={pillarsSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                E-Waste Knowledge Hub
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your complete guide to responsible electronics disposal, recycling, and sustainable IT lifecycle management in Kochi.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {pillars.map((pillar) => (
                <div key={pillar.slug} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">{pillar.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{pillar.name}</h2>
                      <p className="text-green-600 font-medium">{pillar.primaryKeyword}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {pillar.clusters.slice(0, 4).map((cluster) => (
                      <Link
                        key={cluster.id}
                        to={`/${pillar.slug}/${cluster.id}/`}
                        className="text-sm text-green-600 hover:underline"
                      >
                        {cluster.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      to={`/${pillar.slug}/`}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors"
                    >
                      Explore {pillar.name}
                    </Link>
                    <a
                      href="https://wa.me/917500555454"
                      className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose EWaste Kochi?
                </h2>
                <p className="text-gray-600">
                  Kerala's most trusted e-waste recycling partner with 10,000+ successful projects
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">KSPCB Authorised</h3>
                  <p className="text-gray-600 text-sm">
                    Kerala State Pollution Control Board certified for all e-waste operations
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔐</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">NIST Certified</h3>
                  <p className="text-gray-600 text-sm">
                    Data destruction compliant with international standards
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">♻️</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Zero Landfill</h3>
                  <p className="text-gray-600 text-sm">
                    100% material recovery with no environmental waste
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-600 text-white rounded-xl p-8 mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Free consultation • KSPCB Authorised • Certificate of Destruction included
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917500555454"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  💬 WhatsApp Us Now
                </a>
                <Link
                  to="/contact"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  📞 Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}