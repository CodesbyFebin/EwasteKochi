import { TESTIMONIALS } from "@/constants/content";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">Testimonials</h2>
          <h3 className="text-4xl font-bold tracking-tight">Trusted by Kerala's Leaders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 space-y-6">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-600 italic leading-relaxed">
                  "{testi.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testi.name}</div>
                    <div className="text-xs text-muted-foreground">{testi.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
