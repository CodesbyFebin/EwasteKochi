import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const SellElectronics: React.FC = () => {
  const buybackService = services.find(s => s.slug === 'laptop-buyback');

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Sell Electronics Kochi', url: '/sell-electronics-kochi' }
  ];

  const sellSchema = {
    '@type': 'WebPage',
    name: 'Sell Old Electronics Kochi | Best Buyback Prices | Free Pickup',
    description: 'Sell your old laptops, mobiles, and electronics in Kochi. Best market prices, free doorstep evaluation, instant payment. All brands accepted.',
    url: 'https://ewastekochi.com/sell-electronics-kochi',
    mainEntity: {
      '@type': 'BuyAction',
      name: 'Electronics Buyback Service',
      description: 'Sell old electronics at best market prices with free pickup'
    }
  };

  const sellOptions = [
    {
      device: 'Laptops & Notebooks',
      priceRange: '₹2,000 - ₹80,000',
      description: 'All brands: Dell, HP, Lenovo, Apple MacBook, ASUS, Acer',
      icon: '💻'
    },
    {
      device: 'Mobile Phones',
      priceRange: '₹500 - ₹35,000',
      description: 'iPhone, Samsung, OnePlus, Xiaomi, Google Pixel, all Android phones',
      icon: '📱'
    },
    {
      device: 'Tablets & iPads',
      priceRange: '₹1,000 - ₹25,000',
      description: 'iPad, Samsung Tab, Amazon Kindle, Surface Pro',
      icon: '📱'
    },
    {
      device: 'Desktop Computers',
      priceRange: '₹3,000 - ₹25,000',
      description: 'Gaming PCs, workstations, office desktops, all-in-one systems',
      icon: '🖥️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sell Old Electronics Kochi | Best Buyback Prices | Free Pickup</title>
        <meta name="description" content="Sell your old laptops, mobiles, and electronics in Kochi. Best market prices, free doorstep evaluation, instant payment. All brands accepted." />
        <meta property="og:title" content="Sell Old Electronics Kochi | Best Buyback Prices | Free Pickup" />
        <meta property="og:description" content="Sell your old laptops, mobiles, and electronics in Kochi. Best market prices, free doorstep evaluation, instant payment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ewastekochi.com/sell-electronics-kochi" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/sell-electronics-kochi" />
      </Helmet>

      <Schema data={sellSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
                  <span className="text-3xl">💰</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sell Your Old Electronics in Kochi
                </h1>
                <p className="text-xl text-green-600 font-semibold">
                  Best Market Prices • Free Pickup • Instant Payment
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Turn your old electronics into cash! We buy laptops, mobiles, tablets, and computers at the best market prices in Kochi. Free doorstep evaluation, instant payment, and professional data wiping included.
                </p>
              </div>

              {/* Sell Options */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {sellOptions.map((option, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{option.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{option.device}</h3>
                        <p className="text-green-600 font-semibold">{option.priceRange}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">How It Works</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📞</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Contact Us</h4>
                    <p className="text-gray-600 text-sm">WhatsApp or call for free evaluation</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚚</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Free Pickup</h4>
                    <p className="text-gray-600 text-sm">We collect from your doorstep</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Evaluation</h4>
                    <p className="text-gray-600 text-sm">On-site assessment and fair pricing</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Instant Payment</h4>
                    <p className="text-gray-600 text-sm">Cash or bank transfer on the spot</p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔐</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900">Your Data is Safe</h3>
                    <p className="text-green-700">NIST 800-88 certified data destruction included</p>
                  </div>
                </div>
                <p className="text-green-800 mb-4">
                  Before any device changes hands, we perform professional data wiping to ensure your personal information is completely unrecoverable.
                </p>
                <Link
                  to="/services/data-destruction"
                  className="text-green-600 font-medium hover:underline"
                >
                  Learn about our data destruction process →
                </Link>
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
                <h3 className="text-xl font-bold mb-4">Ready to Sell Your Electronics?</h3>
                <p className="mb-6 opacity-90">
                  Best prices • Free pickup • Instant payment • Data security guaranteed
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/917500555454"
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    💬 Get Free Evaluation
                  </a>
                  <a
                    href="tel:+917500555454"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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

export default SellElectronics;