import { BLOG_POSTS } from "@/constants/content";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <main className="pt-24">
      <Helmet>
        <title>E-Waste Blog & Resources - EWaste Kochi</title>
        <meta name="description" content="Expert guides on e-waste regulations, data destruction, ITAD, and responsible recycling in Kerala." />
      </Helmet>

      {/* Hero */}
      <section className="bg-zinc-50 py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">Resources & Blog</h1>
            <p className="text-xl text-muted-foreground">
              Expert guides on e-waste regulations, data destruction, ITAD, and responsible recycling in Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="flex-[2] space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {BLOG_POSTS.map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <div className="aspect-[16/10] bg-zinc-100 rounded-3xl mb-6 overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/blog-page-${post.id}/800/500`} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold text-green-600 uppercase mb-3">
                      <span>{post.category}</span>
                      <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 font-bold text-sm">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div className="pt-12 border-t flex justify-center">
                <Button variant="outline" className="px-8 py-6 rounded-xl font-bold">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex-1 space-y-12">
              {/* Search */}
              <div className="space-y-4">
                <h4 className="font-bold uppercase text-xs tracking-widest text-muted-foreground">Search Articles</h4>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input className="pl-10 py-6 rounded-xl" placeholder="Search topics..." />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h4 className="font-bold uppercase text-xs tracking-widest text-muted-foreground">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {["Compliance", "Regulations", "Security", "ITAD", "Environment", "Buyback"].map((cat) => (
                    <Button key={cat} variant="outline" className="rounded-full text-xs font-bold px-4">
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-green-600 rounded-3xl p-8 text-white space-y-6">
                <h4 className="text-xl font-bold">Stay Updated</h4>
                <p className="text-sm text-green-50">Get the latest e-waste regulations and data security news delivered to your inbox.</p>
                <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/50 py-6" placeholder="Email Address" />
                <Button className="w-full bg-white text-green-600 hover:bg-green-50 font-bold py-6">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
