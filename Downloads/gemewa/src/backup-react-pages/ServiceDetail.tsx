import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { locations } from '../data/locations';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

export default function ServiceDetail() {
  const { service } = useParams();
  const selectedService = services.find(svc => svc.slug === service);

  if (!selectedService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  const pageTitle = `${selectedService.name} | EWaste Kochi`;
  const pageDescription = selectedService.metaDescription ||
    `${selectedService.description} KSPCB authorised, certified recycling in Kochi.`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: selectedService.name, url: `/services/${selectedService.slug}` }
  ];

  const serviceSchema = {
    '@type': selectedService.schemaType || 'Service',
    name: selectedService.name,
    description: selectedService.description,
    areaServed: {
      '@type': 'City',
      name: 'Kochi',
    },
    provider: {
      '@type': 'Organization',
      name: 'EWaste Kochi',
    },
    ...(selectedService.price && {
      offers: {
        '@type': 'Offer',
        price: selectedService.price,
        priceCurrency: selectedService.priceCurrency || 'INR',
      }
    })
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ewastekochi.com/services/${selectedService.slug}`} />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://ewastekochi.com/services/${selectedService.slug}`} />
      </Helmet>

      <Schema data={serviceSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
                  <span className="text-3xl">
                    {selectedService.category === 'security' ? '🔐' :
                     selectedService.category === 'corporate' ? '🏢' :
                     selectedService.category === 'buyback' ? '💰' :
                     selectedService.category === 'hazardous' ? '⚠️' : '♻️'}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {selectedService.name}
                </h1>
                {selectedService.tagline && (
                  <p className="text-xl text-blue-600 font-semibold">{selectedService.tagline}</p>
                )}
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                {selectedService.longDescription && (
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>
                )}
              </div>

              {selectedService.badges && selectedService.badges.length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-green-900 mb-4">Service Certifications</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.badges.map((badge, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-green-700 font-medium">{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.price && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Pricing</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {selectedService.price} {selectedService.priceCurrency}
                  </p>
                  {selectedService.price === '0' && (
                    <p className="text-blue-700 mt-2">Free for corporate clients with 10+ devices</p>
                  )}
                </div>
              )}

              {selectedService.relatedServices && selectedService.relatedServices.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedService.relatedServices.map((relatedSlug) => {
                      const relatedService = services.find(s => s.slug === relatedSlug);
                      return relatedService ? (
                        <Link
                          key={relatedSlug}
                          to={`/services/${relatedSlug}`}
                          className="block p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-sm transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">{relatedService.name}</h4>
                          <p className="text-sm text-gray-600 line-clamp-2">{relatedService.description}</p>
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              {selectedService.faqs && selectedService.faqs.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {selectedService.faqs.slice(0, 8).map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                  <p className="text-gray-600 mb-4">
                    We provide {selectedService.name.toLowerCase()} across all of Kochi and Ernakulam district.
                  </p>
                  <div className="space-y-2">
                    {locations.slice(0, 6).map((location) => (
                      <Link
                        key={location.slug}
                        to={`/locations/${location.slug}/${selectedService.slug}`}
                        className="block text-green-600 hover:underline"
                      >
                        {location.name}
                      </Link>
                    ))}
                    <Link to="/locations" className="block text-green-600 hover:underline font-medium">
                      View all 569 locations →
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      <strong>Phone:</strong> <a href="tel:+917500555454" className="text-green-600 hover:underline">+91 7500555454</a>
                    </p>
                    <p className="text-gray-600">
                      <strong>WhatsApp:</strong> <a href="https://wa.me/917500555454" className="text-green-600 hover:underline">Chat Now</a>
                    </p>
                    <p className="text-gray-600">
                      <strong>Email:</strong> <a href="mailto:hello@ewastekochi.com" className="text-green-600 hover:underline">hello@ewastekochi.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Book Your {selectedService.name}?</h3>
                <p className="mb-6 opacity-90">
                  Professional service • KSPCB Authorised • Certificate of Destruction included
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/917500555454"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    💬 WhatsApp Us Now
                  </a>
                  <a
                    href="tel:+917500555454"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    📞 Call +91 7500555454
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}