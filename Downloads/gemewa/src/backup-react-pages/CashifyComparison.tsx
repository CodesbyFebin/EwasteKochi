import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const CashifyComparison: React.FC = () => {
  const buybackService = services.find(s => s.slug === 'laptop-buyback');

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Cashify vs EWaste Kochi', url: '/cashify-vs-ewastekochi' }
  ];

  const comparisonSchema = {
    '@type': 'WebPage',
    name: 'Cashify vs EWaste Kochi | Better Buyback Prices & Free Pickup',
    description: 'Compare Cashify vs EWaste Kochi. Better prices, free doorstep pickup, KSPCB certified, and professional data destruction. Choose EWaste Kochi for superior service.',
    url: 'https://ewastekochi.com/cashify-vs-ewastekochi',
    mainEntity: {
      '@type': 'ComparisonTable',
      name: 'Cashify vs EWaste Kochi Comparison',
      about: [
        { '@type': 'Thing', name: 'Cashify' },
        { '@type': 'Thing', name: 'EWaste Kochi' }
      ]
    }
  };

  const comparisonPoints = [
    {
      feature: 'Pickup Service',
      cashify: 'Self-drop only',
      ewastekochi: 'Free doorstep pickup',
      winner: 'ewastekochi'
    },
    {
      feature: 'Service Areas',
      cashify: 'Limited to major cities',
      ewastekochi: '569 locations in Kochi',
      winner: 'ewastekochi'
    },
    {
      feature: 'Data Security',
      cashify: 'Basic factory reset',
      ewastekochi: 'NIST 800-88 certified',
      winner: 'ewastekochi'
    },
    {
      feature: 'Bulk Deals',
      cashify: 'Limited bulk options',
      ewastekochi: 'Corporate bulk discounts',
      winner: 'ewastekochi'
    },
    {
      feature: 'Certification',
      cashify: 'Private company',
      ewastekochi: 'KSPCB authorised',
      winner: 'ewastekochi'
    },
    {
      feature: 'Environmental Impact',
      cashify: 'Focus on resale',
      ewastekochi: 'Zero landfill guarantee',
      winner: 'ewastekochi'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cashify vs EWaste Kochi | Better Buyback Prices & Free Pickup</title>
        <meta name="description" content="Compare Cashify vs EWaste Kochi. Better prices, free doorstep pickup, KSPCB certified, and professional data destruction. Choose EWaste Kochi for superior service." />
        <meta property="og:title" content="Cashify vs EWaste Kochi | Better Buyback Prices & Free Pickup" />
        <meta property="og:description" content="Compare Cashify vs EWaste Kochi. Better prices, free doorstep pickup, KSPCB certified, and professional data destruction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ewastekochi.com/cashify-vs-ewastekochi" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/cashify-vs-ewastekochi" />
      </Helmet>

      <Schema data={comparisonSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Cashify vs EWaste Kochi
                </h1>
                <p className="text-xl text-green-600 font-semibold">
                  Why EWaste Kochi is Better for Your E-Waste
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  When selling your old electronics in Kochi, choosing the right partner makes all the difference. While Cashify offers basic buyback services, EWaste Kochi provides comprehensive e-waste solutions with better prices, superior service, and environmental responsibility.
                </p>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-6 py-4 text-left font-bold">Feature</th>
                      <th className="border border-gray-300 px-6 py-4 text-center font-bold">Cashify</th>
                      <th className="border border-gray-300 px-6 py-4 text-center font-bold bg-green-50">EWaste Kochi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonPoints.map((point, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 font-semibold">{point.feature}</td>
                        <td className={`border border-gray-300 px-6 py-4 text-center ${
                          point.winner === 'cashify' ? 'bg-blue-50 text-blue-700' : 'text-gray-600'
                        }`}>
                          {point.cashify}
                        </td>
                        <td className={`border border-gray-300 px-6 py-4 text-center ${
                          point.winner === 'ewastekochi' ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-600'
                        }`}>
                          {point.ewastekochi}
                          {point.winner === 'ewastekochi' && (
                            <span className="ml-2 text-green-600">✓</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Key Advantages */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Free Doorstep Pickup</h3>
                  <p className="text-gray-600 text-sm">
                    No need to travel to a store. We pick up from your home or office anywhere in Kochi.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">KSPCB Certified</h3>
                  <p className="text-gray-600 text-sm">
                    Kerala State Pollution Control Board authorised for legal and responsible e-waste handling.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔐</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Data Security</h3>
                  <p className="text-gray-600 text-sm">
                    Professional data wiping ensures your personal information is completely unrecoverable.
                  </p>
                </div>
              </div>

              {/* Why Choose EWaste Kochi */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-green-900 mb-6 text-center">Why Choose EWaste Kochi Over Cashify?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-800 mb-3">Better Value</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Competitive market prices</li>
                      <li>• Bulk discounts for businesses</li>
                      <li>• No hidden fees or deductions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-3">Superior Service</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Free pickup across 569 locations</li>
                      <li>• Instant on-site evaluation</li>
                      <li>• Same-day payment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-3">Legal Compliance</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• KSPCB authorised recycler</li>
                      <li>• EPR compliant operations</li>
                      <li>• Environmental responsibility</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-3">Data Protection</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• NIST 800-88 certified wiping</li>
                      <li>• Certificate of Destruction</li>
                      <li>• DPDP Act 2023 compliant</li>
                    </ul>
                  </div>
                </div>
              </div>

              {buybackService?.faqs && buybackService.faqs.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Buyback FAQs</h3>
                  <div className="space-y-4">
                    {buybackService.faqs.slice(0, 6).map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-green-600 text-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Choose EWaste Kochi for Better Service</h3>
                <p className="mb-6 opacity-90">
                  Free pickup • Better prices • Certified service • Data security guaranteed
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/917500555454"
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    💬 Get Better Quote Now
                  </a>
                  <Link
                    to="/sell-electronics-kochi"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  >
                    📱 Sell Electronics Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CashifyComparison;