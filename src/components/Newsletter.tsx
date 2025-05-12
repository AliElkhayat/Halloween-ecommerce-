
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Get ready for spooky updates and special offers.",
        duration: 5000,
      });
      setEmail("");
      setLoading(false);
    }, 1500);
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-halloween-purple/10 dark:bg-halloween-purple/5 rounded-xl p-8 md:p-12 border border-halloween-purple/20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-halloween-purple/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-halloween-pink/20 rounded-full blur-3xl animate-float"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Ghost className="h-6 w-6 text-halloween-purple float-effect" />
              <h2 className="font-creepster text-2xl md:text-3xl text-center">Join Our Spooky Newsletter</h2>
            </div>
            
            <p className="text-center mb-6 max-w-lg mx-auto text-muted-foreground">
              Subscribe to receive updates on new products, special offers, and spooky inspiration delivered directly to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-halloween-purple bg-background"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-halloween-purple hover:bg-halloween-purple-dark text-white font-medium"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            
            <p className="text-xs text-center mt-4 text-muted-foreground">
              By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
