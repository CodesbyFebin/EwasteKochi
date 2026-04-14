import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { locations } from '../data/locations';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';

export default function LocationsIndex() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' }
  ];

  const locationsSchema = {
    '@type': 'WebPage',
    name: 'E-Waste Pickup Locations Kochi | 569 Service Areas | Free Collection',
    description: 'E-waste pickup locations across Kochi and Ernakulam. 569 service areas, free bulk pickup, same-day collection for corporate clients.',
    url: 'https://ewastekochi.com/locations',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Service Locations',
      numberOfItems: locations.length
    }
  };

  return (
    <>
      <Helmet>
        <title>E-Waste Pickup Locations Kochi | 569 Service Areas | Free Collection</title>
        <meta name="description" content="E-waste pickup locations across Kochi and Ernakulam. 569 service areas, free bulk pickup, same-day collection for corporate clients." />
        <meta property="og:title" content="E-Waste Pickup Locations Kochi | 569 Service Areas | Free Collection" />
        <meta property="og:description" content="E-waste pickup locations across Kochi and Ernakulam. 569 service areas, free bulk pickup, same-day collection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ewastekochi.com/locations" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ewastekochi.com/locations" />
      </Helmet>

      <Schema data={locationsSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                E-Waste Pickup Locations Kochi
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                569 service areas across Kochi and Ernakulam district. Free doorstep collection for corporate clients, same-day service available.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  to={`/locations/${location.slug}`}
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{location.displayName}</h3>
                    <span className="text-green-600 text-sm">→</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{location.description}</p>
                  <div className="text-xs text-gray-500">
                    Free corporate pickup • KSPCB authorised
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Free Corporate Pickup</h3>
                  <p className="text-blue-700">Available across all 569 locations</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-blue-700 text-sm">Items for free pickup</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">24-48</div>
                  <div className="text-blue-700 text-sm">Hours standard service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Same Day</div>
                  <div className="text-blue-700 text-sm">Urgent corporate requests</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Major Areas Served</h3>
                <div className="space-y-3">
                  {[
                    'Kakkanad IT Park',
                    'Infopark Phase 1 & 2',
                    'SmartCity Kochi',
                    'MG Road & Central Kochi',
                    'Edapally Commercial Hub',
                    'Aluva Industrial Area',
                    'Kalamassery Tech Zone',
                    'Vyttila Business District'
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Features</h3>
                <div className="space-y-3">
                  {[
                    'KSPCB Authorised Collection',
                    'Certificate of Destruction',
                    'NIST 800-88 Data Wiping',
                    'Hazardous Waste Handling',
                    'Bulk Corporate Discounts',
                    'On-site Shredding Available',
                    '24/7 Support Line',
                    'GPS-tracked Logistics'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-green-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Need E-Waste Collection in Your Area?</h3>
              <p className="mb-6 opacity-90">
                Free doorstep pickup • All 569 locations covered • Certificate included
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
      </main>
    </>
  );
}