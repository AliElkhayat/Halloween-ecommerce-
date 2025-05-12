
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Map } from "@/components/Map";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission to alimahmoud777123@gmail.com
    console.log(`Sending form data to alimahmoud777123@gmail.com:`, formData);
    
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-creepster text-3xl md:text-5xl mb-4 text-center">Contact Us</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Have questions, suggestions, or want to share your Halloween experience with us? We'd love to hear from you!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-card rounded-lg p-6 border h-fit">
          <div className="flex items-center mb-4">
            <Ghost className="h-6 w-6 text-halloween-purple float-effect mr-2" />
            <h2 className="font-creepster text-2xl">Get in Touch</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-halloween-purple"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-halloween-purple"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-halloween-purple"
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Product Question">Product Question</option>
                <option value="Order Status">Order Status</option>
                <option value="Returns & Exchanges">Returns & Exchanges</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-halloween-purple"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <Button 
              type="submit"
              disabled={loading}
              className="w-full bg-halloween-purple hover:bg-halloween-purple-dark"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        <div>
          <div className="bg-card rounded-lg p-6 border mb-6">
            <h3 className="font-creepster text-xl mb-4">Contact Information</h3>
            
            <div className="space-y-3">
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">alimahmoud777123@gmail.com</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-medium">+1 (555) 123-4567</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">Business Hours</div>
                <div className="font-medium">Monday - Friday: 9AM - 5PM EST</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">Address</div>
                <div className="font-medium">
                  1313 Spooky Lane<br />
                  Alexandria, Egypt
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="font-creepster text-xl mb-4">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Do you ship internationally?</h4>
                <p className="text-sm text-muted-foreground">Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by location.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">What is your return policy?</h4>
                <p className="text-sm text-muted-foreground">We offer 30-day returns for most items in unused condition. Custom items are non-returnable.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">How can I track my order?</h4>
                <p className="text-sm text-muted-foreground">Once your order ships, you'll receive an email with tracking information.</p>
              </div>
              
              <div className="pt-3">
                <Button variant="outline" className="w-full ghost-button" onClick={() => window.location.href = '/faq'}>
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 max-w-5xl mx-auto">
        <h2 className="font-creepster text-2xl mb-4 text-center">Find Us</h2>
        <Map />
      </div>
    </div>
  );
};

export default ContactPage;
