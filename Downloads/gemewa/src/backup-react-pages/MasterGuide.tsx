import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const MasterGuide: React.FC = () => {
  const ewasteService = services.find(s => s.slug === 'e-waste-recycling');

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Master Guide', url: '/master-guide' }
  ];

  const guideSchema = {
    '@type': 'WebPage',
    name: 'Complete E-Waste Disposal Guide Kochi | Master Recycling Handbook',
    description: 'Comprehensive guide to e-waste disposal in Kochi. Learn what to recycle, where to go, and how the process works. Free pickup available.',
    url: 'https://ewastekochi.com/master-guide',
    mainEntity: {
      '@type': 'Guide',
      name: 'E-Waste Disposal Master Guide',
      about: {
        '@type': 'Thing',
        name: 'E-Waste Recycling',
        description: 'Complete guide to responsible electronic waste disposal'
      }
    }
  };

  const guideSections = [
    {
      title: 'What is E-Waste?',
      content: 'Electronic waste includes any discarded electronic or electrical device. From old mobile phones to industrial servers, if it runs on electricity and has a circuit board, it qualifies as e-waste.',
      icon: '🔌'
    },
    {
      title: 'Why Proper Disposal Matters',
      content: 'Improper e-waste disposal releases toxic heavy metals like lead, mercury, and cadmium into the environment. In Kerala, this contaminates our sensitive backwaters and groundwater.',
      icon: '⚠️'
    },
    {
      title: 'What We Recycle',
      content: 'Computers, laptops, mobiles, TVs, printers, UPS units, air conditioners, refrigerators, cables, and all electronic equipment. Both working and non-working items accepted.',
      icon: '♻️'
    },
    {
      title: 'The Recycling Process',
      content: 'Collection → Sorting → Dismantling → Data Destruction → Material Recovery → Refining → Reuse. Every step is documented and environmentally safe.',
      icon: '🔄'
    },
    {
      title: 'Legal Requirements',
      content: 'Under E-Waste Rules 2022, businesses must use KSPCB-authorised recyclers. Individuals should avoid informal scrap dealers for environmental protection.',
      icon: '⚖️'
    },
    {
      title: 'Data Security',
      content: 'All devices undergo NIST 800-88 certified data wiping. Physical destruction available for maximum security. Certificate of Destruction provided.',
      icon: '🔐'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Complete E-Waste Disposal Guide Kochi | Master Recycling Handbook</title>
        <meta name="description" content="Comprehensive guide to e-waste disposal in Kochi. Learn what to recycle, where to go, and how the process works. Free pickup available." />
        <meta property="og:title" content="Complete E-Waste Disposal Guide Kochi | Master Recycling Handbook" />
        <meta property="og:description" content="Comprehensive guide to e-waste disposal in Kochi. Learn what to recycle, where to go, and how the process works." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ewastekochi.com/master-guide" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/master-guide" />
      </Helmet>

      <Schema data={guideSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
                  <span className="text-4xl">📚</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Complete E-Waste Disposal Guide
                </h1>
                <p className="text-xl text-gray-600">
                  Your comprehensive handbook to responsible electronic waste recycling in Kochi
                </p>
              </div>

              {/* Guide Sections */}
              <div className="space-y-8 mb-12">
                {guideSections.map((section, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{section.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Overview */}
              {ewasteService && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Our E-Waste Recycling Service</h3>
                  <p className="text-green-800 mb-6">{ewasteService.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {ewasteService.badges.map((badge, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-green-700 font-medium">{badge}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/services/e-waste-recycling"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Learn More About Our Service →
                  </Link>
                </div>
              )}

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Link
                  to="/locations"
                  className="block p-6 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">Find Your Location</h4>
                  <p className="text-blue-700 text-sm">569 service areas in Kochi</p>
                </Link>

                <Link
                  to="/services"
                  className="block p-6 bg-purple-50 border border-purple-200 rounded-xl hover:bg-purple-100 transition-colors text-center"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h4 className="font-bold text-purple-900 mb-2">Explore Services</h4>
                  <p className="text-purple-700 text-sm">8 specialized services</p>
                </Link>

                <a
                  href="https://wa.me/917500555454"
                  className="block p-6 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors text-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h4 className="font-bold text-green-900 mb-2">Get Free Quote</h4>
                  <p className="text-green-700 text-sm">Book pickup instantly</p>
                </a>
              </div>

              <div className="bg-green-600 text-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Recycle Responsibly?</h3>
                <p className="mb-6 opacity-90">
                  Free doorstep pickup • KSPCB authorised • Certificate included
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/917500555454"
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    💬 WhatsApp Us Now
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

export default MasterGuide;