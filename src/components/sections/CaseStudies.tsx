import { CASE_STUDIES } from "@/constants/content";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">Case Studies</h2>
          <h3 className="text-4xl font-bold tracking-tight">Proven Results in Kochi</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-lg group">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 aspect-video md:aspect-square overflow-hidden">
                  <img 
                    src={`/assets/img/case-study-${i + 1}.webp`} 
                    alt={`Case study: ${study.title} - ${study.summary}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8 space-y-4">
                  <h4 className="text-xl font-bold">{study.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.summary}
                  </p>
                  <div className="pt-4 border-t">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div className="text-sm font-medium text-zinc-800">
                        {study.outcome}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
