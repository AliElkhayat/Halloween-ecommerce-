
import { Ghost, Candy, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-creepster text-3xl md:text-5xl mb-4 text-center">About Spectral Store</h1>
        
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Halloween decorations" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
          </div>
          
          <div className="absolute top-4 left-4 bg-card p-2 rounded-full">
            <Ghost className="h-6 w-6 text-halloween-purple float-effect" />
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl">
            Welcome to Spectral Store – your ultimate destination for all things Halloween and spooky, available year-round.
          </p>
          
          <h2 className="font-creepster text-2xl mt-8 mb-4">Our Story</h2>
          <p>
            Founded in 2025 by  No Risk No Fun group , Spectral Store began as a small pop-up shop during the Halloween season. Our passion for creating unique, high-quality Halloween decorations and accessories quickly gained popularity, leading us to establish an online presence that serves customers throughout the year.
          </p>
          
          <div className="flex items-center justify-center space-x-6 my-8">
            <div className="text-center">
              <Ghost className="h-10 w-10 mx-auto text-halloween-purple float-effect" />
              <p className="font-semibold mt-2">Quality Products</p>
            </div>
            
            <div className="text-center">
              <Candy className="h-10 w-10 mx-auto text-halloween-orange wiggle-effect" />
              <p className="font-semibold mt-2">Creative Designs</p>
            </div>
            
            <div className="text-center">
              <Heart className="h-10 w-10 mx-auto text-halloween-pink" />
              <p className="font-semibold mt-2">Happy Customers</p>
            </div>
          </div>
          
          <h2 className="font-creepster text-2xl mt-8 mb-4">Our Mission</h2>
          <p>
            At Spectral Store, our mission is to provide high-quality, unique Halloween and spooky-themed products that help our customers celebrate the spirit of Halloween whenever they want. We believe that the joy of Halloween shouldn't be limited to just one season of the year.
          </p>
          
          <h2 className="font-creepster text-2xl mt-8 mb-4">What Makes Us Different</h2>
          <ul>
            <li>All-year availability of Halloween products</li>
            <li>Handcrafted, unique designs you won't find elsewhere</li>
            <li>Sustainable and eco-friendly manufacturing practices</li>
            <li>Exceptional customer service from fellow Halloween enthusiasts</li>
            <li>A growing community of spooky-loving customers</li>
          </ul>
          
          <h2 className="font-creepster text-2xl mt-8 mb-4">Our Team</h2>
          <p>
            Our team consists of artists, designers, and Halloween enthusiasts who are passionate about creating products that bring the Halloween spirit to life. From our designers who dream up new product concepts to our customer service representatives who ensure you have the best shopping experience, everyone at Spectral Store shares a love for all things spooky.
          </p>
          
          <div className="bg-muted/50 dark:bg-muted/20 p-6 rounded-lg my-8">
            <p className="italic">
              "We believe Halloween is more than just a holiday—it's a feeling, an atmosphere, and a celebration of creativity and imagination that deserves to be enjoyed all year round."
            </p>
            <p className="font-semibold mt-2">— The Spectral Store Team</p>
          </div>
          
          <h2 className="font-creepster text-2xl mt-8 mb-4">Join Our Community</h2>
          <p>
            We invite you to join our growing community of Halloween enthusiasts. Follow us on social media, subscribe to our newsletter, and be the first to know about new products, special offers, and spooky inspiration.
          </p>
          
          <div className="text-center mt-8">
            <p className="font-creepster text-2xl text-halloween-purple">
              Thank you for choosing Spectral Store for all your Halloween needs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
