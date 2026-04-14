import { FAQS } from "@/constants/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-zinc-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest">FAQ Hub</h2>
            <h3 className="text-4xl font-bold tracking-tight">Everything You Need to Know</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              50+ detailed answers about e-waste recycling, data destruction, and compliance in Kochi.
            </p>
          </div>

          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <Input 
              className="pl-12 py-7 text-lg rounded-2xl border-zinc-200 focus:ring-green-500 bg-white"
              placeholder="Search for keywords (e.g. 'laptop', 'pickup', 'DPDP')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-2xl px-6 bg-white hover:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 leading-relaxed pb-8 text-base">
                  <div 
                    className="prose prose-zinc max-w-none"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed">
              <p className="text-zinc-500 font-medium">No FAQs found matching your search. Try different keywords.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
