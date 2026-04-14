import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const ServicesIndex: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ];

  const servicesSchema = {
    '@type': 'WebPage',
    name: 'E-Waste Services Kochi | KSPCB Authorised | Free Corporate Pickup',
    description: 'Complete e-waste services in Kochi: recycling, ITAD, data destruction, buyback. KSPCB authorised, free corporate pickup, certificate of destruction.',
    url: 'https://ewastekochi.com/services',
    mainEntity: {
      '@type': 'ItemList',
      name: 'E-Waste Services',
      numberOfItems: services.length
    }
  };

  return (
    <>
      <Helmet>
        <title>E-Waste Services Kochi | KSPCB Authorised | Free Corporate Pickup</title>
        <meta name="description" content="Complete e-waste services in Kochi: recycling, ITAD, data destruction, buyback. KSPCB authorised, free corporate pickup, certificate of destruction." />
        <meta property="og:title" content="E-Waste Services Kochi | KSPCB Authorised | Free Corporate Pickup" />
        <meta property="og:description" content="Complete e-waste services in Kochi: recycling, ITAD, data destruction, buyback." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ewastekochi.com/services" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/services" />
      </Helmet>

      <Schema data={servicesSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Professional E-Waste Services Kochi
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete electronics recycling, IT asset disposition, and data destruction services.
                KSPCB authorised with free corporate pickup across 569 locations.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service) => (
                <div key={service.slug} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">
                        {service.category === 'security' ? '🔐' :
                         service.category === 'corporate' ? '🏢' :
                         service.category === 'buyback' ? '💰' :
                         service.category === 'hazardous' ? '⚠️' : '♻️'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h2>
                      <p className="text-green-600 font-medium text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.badges && service.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.badges.slice(0, 2).map((badge, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <a
                      href="https://wa.me/917500555454"
                      className="px-4 py-2 border border-gray-300 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors text-sm"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose EWaste Kochi?
                </h2>
                <p className="text-gray-600">
                  Kerala's most trusted e-waste recycling partner with 10,000+ successful projects
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">KSPCB Authorised</h3>
                  <p className="text-gray-600 text-sm">
                    Kerala State Pollution Control Board certified
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
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Free Pickup</h3>
                  <p className="text-gray-600 text-sm">
                    Corporate clients across 569 locations
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📜</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CoD Included</h3>
                  <p className="text-gray-600 text-sm">
                    Certificate of Destruction for compliance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Free consultation • All services available • Certificate of Destruction included
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
};

export default ServicesIndex;