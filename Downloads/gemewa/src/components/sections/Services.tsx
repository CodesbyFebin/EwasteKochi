import { SERVICES } from "@/constants/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Database, Settings, Laptop, Smartphone, Factory } from "lucide-react";

const iconMap: Record<string, any> = {
  Building2,
  Database,
  Settings,
  Laptop,
  Smartphone,
  Factory,
  ArrowRight,
};

export default function Services() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">Our Services</h2>
          <h3 className="text-4xl font-bold tracking-tight">Complete E-Waste & ITAD Solutions in Kochi</h3>
          <p className="text-muted-foreground">
            From single hard drive shredding to full enterprise ITAD programs — Kerala's most comprehensive certified e-waste service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                id={service.id}
                className="group hover:shadow-xl transition-all duration-300 border-none shadow-sm scroll-mt-24"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="text-[10px] font-bold uppercase px-2 py-1 bg-zinc-100 rounded-md text-zinc-600">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {(service.price || service.timeline) && (
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px] font-bold uppercase tracking-wider">
                      <div className="text-green-600">{service.price}</div>
                      <div className="text-zinc-400">{service.timeline}</div>
                    </div>
                  )}
                  <a 
                    href={`#${service.id}`}
                    className="inline-flex items-center text-sm font-bold text-green-600 hover:text-green-700 group-hover:translate-x-1 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
