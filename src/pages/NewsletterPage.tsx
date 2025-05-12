
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Ghost, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const NewsletterPage = () => {
  const [loading, setLoading] = useState(false);
  
  const form = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      marketingConsent: false,
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Successfully subscribed to our newsletter!", {
        description: "Thank you for subscribing. Check your inbox soon for spooky updates!",
      });
      form.reset();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="h-6 w-6 text-halloween-purple" />
            <h1 className="font-creepster text-4xl md:text-5xl">Subscribe to Our Newsletter</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of Halloween enthusiasts and be the first to learn about new products,
            special offers, and spooky inspiration!
          </p>
        </div>
        
        <div className="bg-halloween-purple/10 dark:bg-halloween-purple/5 rounded-xl p-8 md:p-12 border border-halloween-purple/20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-halloween-purple/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-halloween-pink/20 rounded-full blur-3xl animate-float"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Ghost className="h-8 w-8 text-halloween-purple float-effect" />
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    name="firstName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    name="lastName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  name="email"
                  control={form.control}
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email address" type="email" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  name="marketingConsent"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to receive marketing emails about products, offers, and Halloween inspiration.
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-halloween-purple hover:bg-halloween-purple-dark text-white font-medium px-8 py-2"
                    disabled={loading}
                  >
                    {loading ? "Subscribing..." : "Subscribe Now"}
                  </Button>
                </div>
                
                <p className="text-xs text-center mt-4 text-muted-foreground">
                  By subscribing, you agree to our <a href="/privacy" className="text-halloween-purple hover:underline">Privacy Policy</a> and 
                  <a href="/terms" className="text-halloween-purple hover:underline"> Terms & Conditions</a>.
                  You can unsubscribe at any time.
                </p>
              </form>
            </Form>
            
            <div className="mt-12 border-t border-halloween-purple/20 pt-6">
              <h3 className="font-creepster text-xl mb-4 text-center">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-halloween-purple/20 p-1">
                    <svg className="h-4 w-4 text-halloween-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">Early access to new Halloween products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-halloween-purple/20 p-1">
                    <svg className="h-4 w-4 text-halloween-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">Exclusive discount codes and special offers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-halloween-purple/20 p-1">
                    <svg className="h-4 w-4 text-halloween-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">DIY Halloween decoration and costume ideas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-halloween-purple/20 p-1">
                    <svg className="h-4 w-4 text-halloween-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">Seasonal content and spooky inspiration year-round</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
