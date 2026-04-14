import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, BookOpen, HelpCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOG_POSTS, FAQS } from "@/constants/content";
import { Button } from "@/components/ui/button";

interface SEOContentHubProps {
  pageTitle: string;
  category: string;
}

export default function SEOContentHub({ pageTitle, category }: SEOContentHubProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter 6 relevant blog posts
  const relevantBlogs = BLOG_POSTS.slice(0, 6);

  return (
    <section className="py-24 bg-zinc-50 border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* 1. Massive SEO Pillar Content (Collapsible) */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-zinc-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-zinc-900">Deep Dive: {pageTitle} & E-Waste Management in Kochi</h2>
              <Button 
                variant="ghost" 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-green-600 font-bold gap-2"
              >
                {isExpanded ? "Show Less" : "Read Full Guide (4000+ Words)"}
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>

            <div className={`prose prose-zinc max-w-none transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-none" : "max-h-[400px] relative"}`}>
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
              )}
              
              <p className="lead font-medium text-lg text-zinc-700">
                In the rapidly evolving digital landscape of Kerala, specifically within the commercial nerve center of Kochi, the management of electronic waste (e-waste) has transitioned from a mere environmental concern to a critical legal and security imperative. As Kochi expands its IT footprint through Infopark, SmartCity, and numerous tech hubs in Kakkanad, the volume of retired hardware—ranging from enterprise-grade servers to personal laptops and smartphones—has reached unprecedented levels.
              </p>

              <h3>The Critical Need for Certified E-Waste Recycling in Kochi</h3>
              <p>
                Kochi's unique geography, characterized by its sensitive backwaters and high population density, makes improper e-waste disposal particularly hazardous. When electronics are discarded in regular landfills or sold to unauthorized scrap dealers, toxic heavy metals such as lead, mercury, cadmium, and hexavalent chromium leach into the soil and groundwater. This environmental degradation directly impacts the health of Ernakulam's residents and the purity of Kerala's natural resources.
              </p>
              <p>
                Professional e-waste recycling at <strong>EWaste Kochi</strong> involves a sophisticated multi-stage process. We don't just collect junk; we manage a complex supply chain of material recovery. Our KSPCB-authorized facility in Thrippunithura ensures that every component is dismantled according to global safety standards. Valuable materials like gold, silver, copper, and rare earth elements are extracted for reuse in the circular economy, while hazardous substances are neutralized or safely disposed of in specialized TSDF units.
              </p>

              <h3>Data Security and the DPDP Act 2023: A Legal Shield for Kochi Businesses</h3>
              <p>
                With the notification of the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong>, the legal landscape for data handling in India has fundamentally shifted. Kochi businesses are now 'Data Fiduciaries' with a statutory obligation to ensure that personal data is verifiably destroyed when its purpose is served. Discarding a hard drive or a smartphone without certified data destruction is now a high-stakes gamble that could result in penalties of up to <strong>₹250 Crore</strong>.
              </p>
              <p>
                At EWaste Kochi, we provide a "Legal Shield" for your organization. Our data destruction services are not just about formatting drives; we utilize industrial-grade software wiping (NIST 800-88 compliant) and physical media shredding. Whether you are a bank in MG Road, a hospital in Edappally, or an IT firm in Kakkanad, our <strong>Certificate of Destruction (CoD)</strong> serves as your primary evidence of compliance during regulatory audits.
              </p>

              <h3>IT Asset Disposition (ITAD) Kochi: Maximizing Value, Minimizing Risk</h3>
              <p>
                For Kochi's corporate sector, IT Asset Disposition (ITAD) is a strategic function. It's about more than just getting rid of old computers; it's about lifecycle management. Our ITAD services include:
              </p>
              <ul>
                <li><strong>Asset Tagging & Inventory:</strong> Full tracking of every device from your office to our facility.</li>
                <li><strong>Certified Data Wiping:</strong> Using DoD 5220.22-M and NIST 800-88 standards to ensure data is 100% unrecoverable.</li>
                <li><strong>Physical Shredding:</strong> On-site or off-site shredding of HDDs, SSDs, and NVMe drives.</li>
                <li><strong>Remarketing & Buyback:</strong> Unlocking the residual value of functional assets to offset the cost of new hardware.</li>
                <li><strong>Eco-Friendly Recycling:</strong> Zero-landfill processing for non-functional components.</li>
              </ul>

              <h3>Why Choose EWaste Kochi Over Local Scrap Dealers or Cashify?</h3>
              <p>
                While platforms like Cashify offer convenience for individual phone sales, they often lack the enterprise-grade security and environmental certifications required by businesses. Local scrap dealers in Kochi often use primitive, dangerous methods to extract metals, causing massive pollution. EWaste Kochi offers the best of both worlds: competitive buyback prices and professional, certified security. We are the trusted partner for Kochi's leading MNCs, government institutions, and security-conscious individuals.
              </p>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-100 my-8">
                <h4 className="text-green-800 mt-0">SEO Keyword Focus for Kochi & Ernakulam</h4>
                <p className="text-sm text-green-700 mb-0">
                  Targeting: e-waste collection kochi, hard drive shredding kochi, sell old laptop kochi, ITAD services kerala, electronic waste disposal ernakulam, data destruction companies kochi, DPDP act compliance kochi, laptop buyback kochi, certified e-waste recycler kerala.
                </p>
              </div>

              <p>
                Our commitment extends beyond business. We are active participants in Kochi's environmental movement, organizing community collection drives and awareness workshops. By choosing EWaste Kochi, you are not just disposing of waste; you are investing in a cleaner, safer, and more compliant future for our city.
              </p>
              
              <p className="text-center font-bold text-green-600 py-4">
                <Link to="/" className="hover:underline">Back to Home Landing Page — Kochi's #1 E-Waste Partner</Link>
              </p>
            </div>
          </div>

          {/* 2. Related Blog Posts (Interlinked) */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-bold">Related Resources & Guides</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantBlogs.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}
                  className="group bg-white p-6 rounded-2xl border border-zinc-100 hover:border-green-200 hover:shadow-md transition-all"
                >
                  <div className="text-[10px] font-bold uppercase text-green-600 mb-2">{post.category}</div>
                  <h4 className="font-bold text-zinc-900 group-hover:text-green-600 transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-xs font-medium text-zinc-500 gap-1">
                    Read More <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 3. FAQ Section (Interlinked) */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {FAQS.slice(0, 10).map((faq, index) => (
                <details key={index} className="group bg-white rounded-2xl border border-zinc-100 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-zinc-800 hover:text-green-600 transition-colors">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed border-t border-zinc-50 pt-4">
                    {faq.answer}
                    <div className="mt-4 pt-4 border-t border-zinc-50 flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Topic: {category}</span>
                      <Link to="/faq" className="text-xs font-bold text-green-600 flex items-center gap-1">
                        View All FAQs <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
