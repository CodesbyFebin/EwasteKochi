import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { faqs } from '../data/faqs';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const ITADPillarPage: React.FC = () => {
  const itadService = services.find(s => s.slug === 'itad');

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'ITAD Kochi', url: '/itad-kochi' }
  ];

  const pageSchema = {
    '@type': 'WebPage',
    name: 'ITAD Services Kochi | IT Asset Disposition | Certified & Auditable',
    description: 'Professional ITAD services in Kochi. NIST 800-88 data destruction, chain-of-custody, Certificate of Destruction for RBI and ISO audits.',
    url: 'https://ewastekochi.com/itad-kochi',
    mainEntity: {
      '@type': 'Service',
      name: 'IT Asset Disposition (ITAD)',
      description: 'End-to-end ITAD for Kochi enterprises. Asset tagging, certified data destruction, remarketing, and full chain-of-custody documentation.',
      areaServed: {
        '@type': 'City',
        name: 'Kochi',
      },
      provider: {
        '@type': 'Organization',
        name: 'EWaste Kochi',
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>ITAD Services Kochi | IT Asset Disposition | Certified & Auditable</title>
        <meta name="description" content="Professional ITAD services in Kochi. NIST 800-88 data destruction, chain-of-custody, Certificate of Destruction for RBI and ISO audits." />
        <meta property="og:title" content="ITAD Services Kochi | IT Asset Disposition | Certified & Auditable" />
        <meta property="og:description" content="Professional ITAD services in Kochi. NIST 800-88 data destruction, chain-of-custody, Certificate of Destruction for RBI and ISO audits." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ewastekochi.com/itad-kochi" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/itad-kochi" />
      </Helmet>

      <Schema data={pageSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
                  <span className="text-3xl">🔐</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  IT Asset Disposition (ITAD) in Kochi
                </h1>
                <p className="text-xl text-blue-600 font-semibold">Certified · Auditable · Compliant</p>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {itadService?.description}
                </p>

                {itadService?.longDescription && (
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {itadService.longDescription}
                    </p>
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ITAD Process</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">Asset inventory and tagging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">NIST 800-88 data destruction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">Chain-of-custody documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">Certificate of Destruction</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our ITAD?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">KSPCB authorised facility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">RBI and SEBI audit compliant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">Zero landfill guarantee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </span>
                      <span className="text-gray-700">Asset remarketing available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {itadService?.faqs && itadService.faqs.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {itadService.faqs.slice(0, 8).map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Start Your ITAD Project?</h3>
                <p className="mb-6 opacity-90">
                  Professional ITAD service • NIST certified • Certificate included
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
};

export default ITADPillarPage;