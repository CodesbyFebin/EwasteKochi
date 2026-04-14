import { LOCATIONS, ADDRESS, CONTACT_PHONE, CONTACT_EMAIL } from "@/constants/content";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LocationsPage() {
  return (
    <main className="pt-24">
      <Helmet>
        <title>E-Waste Pickup Locations Kochi | Free Pickup All Ernakulam Areas</title>
        <meta name="description" content="Free e-waste pickup across 52+ locations in Kochi — Kakkanad, Infopark, Edapally, Vyttila, Aluva, Kalamassery. Same-day service for corporate clients in Ernakulam." />
        <meta name="keywords" content="e-waste pickup kochi, ernakulam e-waste, kakkanad e-waste, infopark recycling, free pickup ernakulam" />
        <link rel="canonical" href="https://ewastekochi.com/locations" />
        <meta property="og:title" content="E-Waste Pickup Locations Kochi | Free Pickup All Ernakulam Areas" />
        <meta property="og:description" content="Free e-waste pickup across 52+ locations in Kochi — Kakkanad, Infopark, Edapally, Vyttila, Aluva, Kalamassery." />
        <meta property="og:url" content="https://ewastekochi.com/locations" />
        <meta property="og:image" content="https://ewastekochi.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Waste Pickup Locations Kochi | Free Pickup All Ernakulam Areas" />
        <meta name="twitter:description" content="Free e-waste pickup across 52+ locations in Kochi and Ernakulam." />
        <meta name="twitter:image" content="https://ewastekochi.com/og-image.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">Service Locations</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            We provide free door-to-door pickup across the entire Greater Kochi area and Ernakulam district.
          </p>
        </div>
      </section>

      {/* Main Facility */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[40px] border shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-12 lg:p-20 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  Main Processing Facility
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Thrippunithura Headquarters</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p className="text-muted-foreground">{ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-bold">Operating Hours</h4>
                      <p className="text-muted-foreground">Open 24/7 for Drop-offs & Corporate Support</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-muted-foreground">{CONTACT_PHONE}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl font-bold">
                    Get Directions
                  </Button>
                  <Button variant="outline" className="px-8 py-6 rounded-xl font-bold">
                    Call Facility
                  </Button>
                </div>
              </div>
              <div className="flex-1 bg-zinc-100 min-h-[400px]">
                <img 
                  src="https://picsum.photos/seed/facility-map/800/800" 
                  alt="EWaste Kochi Thrippunithura facility map and location"
                  className="w-full h-full object-cover grayscale opacity-50"
                  loading="lazy"
                  width="800"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup Areas */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">Pickup Coverage</h2>
            <h3 className="text-4xl font-bold tracking-tight">Areas We Serve in Ernakulam</h3>
            <p className="text-muted-foreground">
              We offer same-day pickup in most of these locations for corporate clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {LOCATIONS.map((loc) => (
              <Link 
                key={loc} 
                to={`/locations/${loc.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group block"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold group-hover:text-green-600 transition-colors">{loc}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-green-600 transition-colors" />
                </div>
                <div className="text-[10px] uppercase font-bold text-muted-foreground mt-2">Same-Day Available</div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-zinc-900 text-white p-12 rounded-[40px] max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">Outside Kochi?</h4>
              <p className="text-zinc-400 mb-8">
                For large corporate projects, we serve all major cities in Kerala including Thiruvananthapuram, Kozhikode, Thrissur, and Palakkad.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl font-bold">
                Request Outstation Pickup
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
