import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { faqs, faqCategories } from '../data/faqs';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

const DPDPAct: React.FC = () => {
  const dpDpFaqs = faqs.filter(f => f.category === 'compliance');

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'DPDP Act Kochi', url: '/dpdp-act-kochi' }
  ];

  const dpDpSchema = {
    '@type': 'WebPage',
    name: 'DPDP Act 2023 Compliance Kochi | Data Protection Law Guide',
    description: 'Complete guide to Digital Personal Data Protection Act 2023 in Kochi. Learn compliance requirements, data destruction obligations, and audit preparation.',
    url: 'https://ewastekochi.com/dpdp-act-kochi',
    mainEntity: {
      '@type': 'Article',
      headline: 'DPDP Act 2023 Compliance Guide for Kochi Businesses',
      about: {
        '@type': 'Thing',
        name: 'Digital Personal Data Protection Act 2023',
        description: 'India\'s comprehensive data protection law'
      }
    }
  };

  const compliancePoints = [
    {
      title: 'Data Destruction Obligations',
      description: 'When personal data is no longer needed, businesses must ensure it is irreversibly destroyed.',
      icon: '🗑️'
    },
    {
      title: 'NIST 800-88 Compliance',
      description: 'Data sanitization must follow internationally recognized standards for permanent destruction.',
      icon: '🔐'
    },
    {
      title: 'Audit Trail Requirements',
      description: 'Maintain documented evidence of data destruction for regulatory audits and legal compliance.',
      icon: '📋'
    },
    {
      title: 'Certificate of Destruction',
      description: 'Legal proof that data has been permanently destroyed beyond recovery.',
      icon: '📜'
    }
  ];

  return (
    <>
      <Helmet>
        <title>DPDP Act 2023 Compliance Kochi | Data Protection Law Guide</title>
        <meta name="description" content="Complete guide to Digital Personal Data Protection Act 2023 in Kochi. Learn compliance requirements, data destruction obligations, and audit preparation." />
        <meta property="og:title" content="DPDP Act 2023 Compliance Kochi | Data Protection Law Guide" />
        <meta property="og:description" content="Complete guide to Digital Personal Data Protection Act 2023 in Kochi. Learn compliance requirements, data destruction obligations, and audit preparation." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ewastekochi.com/dpdp-act-kochi" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/dpdp-act-kochi" />
      </Helmet>

      <Schema data={dpDpSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  DPDP Act 2023 Compliance Guide
                </h1>
                <p className="text-xl text-blue-600 font-semibold">
                  Digital Personal Data Protection Act 2023
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  India's Digital Personal Data Protection Act 2023 establishes comprehensive requirements for how businesses handle personal data, including strict obligations for data destruction when information is no longer needed.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Key Compliance Requirement</h3>
                  <p className="text-blue-800">
                    "Personal data shall be permanently and irreversibly erased or destroyed when it is no longer needed for the purpose for which it was collected or processed."
                  </p>
                  <p className="text-blue-700 text-sm mt-2">— Section 9, Digital Personal Data Protection Act 2023</p>
                </div>
              </div>

              {/* Compliance Points */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {compliancePoints.map((point, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{point.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
                    </div>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                ))}
              </div>

              {/* Our DPDP Services */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-green-900 mb-4">Our DPDP Act Compliance Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <span className="text-green-700">NIST 800-88 certified data destruction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <span className="text-green-700">Certificate of Destruction for audit compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <span className="text-green-700">Complete chain-of-custody documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <span className="text-green-700">Legal compliance with all Indian regulations</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services/data-destruction"
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors"
                  >
                    View Data Destruction Services
                  </Link>
                  <Link
                    to="/services/itad"
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                  >
                    ITAD Compliance Solutions
                  </Link>
                </div>
              </div>

              {/* FAQs */}
              {dpDpFaqs.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">DPDP Act Compliance FAQs</h3>
                  <div className="space-y-4">
                    {dpDpFaqs.slice(0, 6).map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ensure DPDP Act Compliance Today</h3>
                <p className="mb-6 opacity-90">
                  Certified data destruction • Legal compliance • Audit-ready documentation
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

export default DPDPAct;