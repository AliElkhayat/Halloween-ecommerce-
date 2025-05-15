

import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Ghost, HelpCircle } from "lucide-react";

const FAQPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="h-6 w-6 text-halloween-purple" />
          <h1 className="font-creepster text-4xl md:text-5xl">Frequently Asked Questions</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to the most common questions about our products, shipping, returns and more.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-halloween-purple/20 rounded-lg bg-card px-4 shadow-sm">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-halloween-purple">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Standard shipping typically takes 3-5 business days within the continental US. 
              International shipping may take 7-14 business days depending on your location.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-halloween-purple/20 rounded-lg bg-card px-4 shadow-sm">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-halloween-purple">
              Do you offer expedited shipping?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Yes! We offer expedited shipping options at checkout. Next-day and 2-day shipping 
              are available for most items in the US.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-halloween-purple/20 rounded-lg bg-card px-4 shadow-sm">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-halloween-purple">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              We accept returns within 30 days of delivery for unused items in their original packaging. 
              Custom orders and sale items are final sale. Please see our Returns Policy page for more details.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-halloween-purple/20 rounded-lg bg-card px-4 shadow-sm">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-halloween-purple">
              Are your costumes true to size?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Our costumes generally run true to size, but we recommend checking the specific size chart 
              for each product as sizing can vary between manufacturers. If you're between sizes, 
              we generally recommend sizing up.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border border-halloween-purple/20 rounded-lg bg-card px-4 shadow-sm">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-halloween-purple">
              Do you ship internationally?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Yes, we ship to most countries worldwide. International customers may be responsible 
              for customs duties and import taxes. Shipping rates and delivery times vary by location.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border border-halloween-purple/20 rounded-lg bg-card px-4 shadow-sm">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-halloween-purple">
              How do I track my order?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Once your order ships, you'll receive a tracking number via email. You can also 
              check your order status by logging into your account on our website.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7" className="border border-halloween-purple/20 rounded-lg bg-card px-4 shadow-sm">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-halloween-purple">
              Can I change or cancel my order after it's placed?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              You can modify or cancel your order within 2 hours of placing it. Please contact our 
              customer service team immediately. Once an order has started processing, we cannot make changes.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8" className="border border-halloween-purple/20 rounded-lg bg-card px-4 shadow-sm">
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline hover:text-halloween-purple">
              Do you offer gift wrapping?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Yes! We offer Halloween-themed gift wrapping for an additional $5 per item. 
              You can select this option during checkout.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-10 p-6 bg-card rounded-lg border border-halloween-purple/20 flex items-center justify-between">
          <div className="flex items-center">
            <Ghost className="h-10 w-10 text-halloween-purple float-effect mr-4" />
            <div>
              <h3 className="font-creepster text-xl">Still have questions?</h3>
              <p className="text-muted-foreground">We're here to help with any questions you might have.</p>
            </div>
          </div>
          <a href="/contact" className="ghost-button">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
