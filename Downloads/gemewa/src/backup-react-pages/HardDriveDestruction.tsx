import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const HardDriveDestruction: React.FC = () => {
  const destructionService = services.find(s => s.slug === 'hard-drive-shredding');

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Hard Drive Destruction Kochi', url: '/hard-drive-destruction-kochi' }
  ];

  const destructionSchema = {
    '@type': 'WebPage',
    name: 'Hard Drive Shredding Kochi | NIST Certified Data Destruction',
    description: 'Professional hard drive shredding in Kochi. NIST 800-88 certified, DIN 66399 compliant, 2mm particle size. Certificate of Destruction included.',
    url: 'https://ewastekochi.com/hard-drive-destruction-kochi',
    mainEntity: {
      '@type': 'Service',
      name: 'Hard Drive Shredding Service',
      description: 'Industrial-grade hard drive destruction with certified data elimination'
    }
  };

  const destructionMethods = [
    {
      method: 'Physical Shredding',
      description: 'Industrial shredder reduces drives to 2mm particles',
      icon: '⚙️',
      certified: true
    },
    {
      method: 'NIST 800-88 Wiping',
      description: 'Software-based data overwriting for reuse',
      icon: '💻',
      certified: true
    },
    {
      method: 'Degaussing',
      description: 'Magnetic field erasure for legacy drives',
      icon: '🧲',
      certified: true
    },
    {
      method: 'Drilling/Punching',
      description: 'Physical destruction for small volumes',
      icon: '🔨',
      certified: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hard Drive Shredding Kochi | NIST Certified Data Destruction</title>
        <meta name="description" content="Professional hard drive shredding in Kochi. NIST 800-88 certified, DIN 66399 compliant, 2mm particle size. Certificate of Destruction included." />
        <meta property="og:title" content="Hard Drive Shredding Kochi | NIST Certified Data Destruction" />
        <meta property="og:description" content="Professional hard drive shredding in Kochi. NIST 800-88 certified, DIN 66399 compliant, 2mm particle size." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ewastekochi.com/hard-drive-destruction-kochi" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/hard-drive-destruction-kochi" />
      </Helmet>

      <Schema data={destructionSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-2xl mb-6">
                  <span className="text-3xl">💥</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Hard Drive Shredding Kochi
                </h1>
                <p className="text-xl text-red-600 font-semibold">
                  NIST Certified • DIN 66399 Compliant • 2mm Particles
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Complete data destruction requires more than just deleting files. Our industrial hard drive shredding service in Kochi ensures your sensitive data is permanently unrecoverable through certified physical destruction.
                </p>

                {destructionService?.longDescription && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                    <p className="text-red-800 whitespace-pre-line leading-relaxed">
                      {destructionService.longDescription}
                    </p>
                  </div>
                )}
              </div>

              {/* Destruction Methods */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {destructionMethods.map((method, index) => (
                  <div key={index} className={`border rounded-xl p-6 ${
                    method.certified ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{method.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{method.method}</h3>
                    </div>
                    <p className="text-gray-600">{method.description}</p>
                    {method.certified && (
                      <span className="inline-flex items-center mt-2 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Certified Method
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Industry Certifications</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇺🇸</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">NIST 800-88</h4>
                    <p className="text-gray-600 text-sm">US Federal data sanitization standard</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇩🇪</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">DIN 66399</h4>
                    <p className="text-gray-600 text-sm">German data destruction standard</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">KSPCB</h4>
                    <p className="text-gray-600 text-sm">Kerala State Pollution Control Board</p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Destruction Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-red-600">1</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Inventory</h4>
                    <p className="text-gray-600 text-sm">Serial number logging and chain-of-custody</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-red-600">2</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Verification</h4>
                    <p className="text-gray-600 text-sm">Pre-destruction inspection and documentation</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-red-600">3</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Destruction</h4>
                    <p className="text-gray-600 text-sm">Industrial shredding to 2mm particles</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-red-600">4</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Certificate</h4>
                    <p className="text-gray-600 text-sm">Certificate of Destruction issued</p>
                  </div>
                </div>
              </div>

              {destructionService?.faqs && destructionService.faqs.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Data Destruction FAQs</h3>
                  <div className="space-y-4">
                    {destructionService.faqs.slice(0, 6).map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-red-600 text-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Complete Data Destruction Service</h3>
                <p className="mb-6 opacity-90">
                  NIST certified • Industrial shredding • Certificate included • Legal compliance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/917500555454"
                    className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    💬 Book Destruction Service
                  </a>
                  <a
                    href="tel:+917500555454"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
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

export default HardDriveDestruction;