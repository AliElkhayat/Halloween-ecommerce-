
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CategorySection } from "@/components/CategorySection";
import { Newsletter } from "@/components/Newsletter";
import { Map } from "@/components/Map";
import { Gamepad, Video, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="font-creepster text-3xl md:text-4xl text-center mb-12">Discover More</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Game Feature */}
        <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-halloween-purple/20 hover:shadow-halloween-purple/30 transition-shadow">
          <div className="h-48 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Skull and Bones Game" 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4">
                <Gamepad className="h-8 w-8 text-halloween-pink mb-2" />
                <h3 className="text-xl font-semibold text-white">Skull & Bones Game</h3>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p className="text-muted-foreground mb-4">Challenge yourself with our Halloween-themed Tic-Tac-Toe game! Play as skulls or crossbones in this spooky twist on a classic.</p>
            <Link to="/game">
              <Button className="w-full bg-halloween-purple hover:bg-halloween-purple-dark">
                Play Now
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Videos Feature */}
        <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-halloween-purple/20 hover:shadow-halloween-purple/30 transition-shadow">
          <div className="h-48 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Halloween Videos" 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4">
                <Video className="h-8 w-8 text-halloween-pink mb-2" />
                <h3 className="text-xl font-semibold text-white">Halloween Videos</h3>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p className="text-muted-foreground mb-4">Explore our curated collection of spooky Halloween videos, tutorials, and haunted house walkthroughs.</p>
            <Link to="/videos">
              <Button className="w-full bg-halloween-purple hover:bg-halloween-purple-dark">
                Watch Videos
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Special Offers Feature */}
        <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-halloween-purple/20 hover:shadow-halloween-purple/30 transition-shadow">
          <div className="h-48 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Special Offers" 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4">
                <Tag className="h-8 w-8 text-halloween-pink mb-2" />
                <h3 className="text-xl font-semibold text-white">Special Offers</h3>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p className="text-muted-foreground mb-4">Discover our exclusive Halloween deals, limited-time offers and spooky bundles at discounted prices.</p>
            <Link to="/offers">
              <Button className="w-full bg-halloween-purple hover:bg-halloween-purple-dark">
                View Offers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <FeaturedSection />
      <CategorySection />
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-creepster text-3xl md:text-4xl text-center mb-8">Visit Our Store</h2>
        <div className="max-w-5xl mx-auto">
          <Map />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Index;
