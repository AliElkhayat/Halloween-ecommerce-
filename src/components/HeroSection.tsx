
import { Link } from "react-router-dom";
import { Ghost, Candy, Gamepad } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-halloween-purple/20 to-halloween-pink/20 dark:from-halloween-purple/5 dark:to-halloween-pink/5 z-0"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <Ghost className="h-8 w-8 text-halloween-purple float-effect" />
              <span className="font-creepster text-lg text-halloween-purple">Limited Time Offer</span>
            </div>
            <h1 className="font-creepster text-4xl md:text-6xl leading-tight">
              Unleash the <span className="text-halloween-purple">Spirit</span> of Halloween
              <br />All Year <span className="text-halloween-pink">Round</span>
            </h1>
            <p className="text-lg md:text-xl">
              Discover our haunting collection of Halloween decorations, costumes, and accessories that bring the spooky season to life!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="ghost-button group">
                Shop Collection
              </Link>
              <Link to="/offers" className="pumpkin-button flex items-center space-x-2">
                <Candy className="h-5 w-5" />
                <span>Special Offers</span>
              </Link>
              <Link to="/game" className="ghost-button group border-halloween-pink hover:bg-halloween-pink/10 flex items-center space-x-2">
                <Gamepad className="h-5 w-5" />
                <span>Play Skull & Bones</span>
              </Link>
            </div>

            <AnimatedText text="Spooky Deals Just For You" className="mt-8" />
            <AnimatedText text="Free Shipping On Orders $50+" className="mt-4 delay-200" />
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-halloween-purple/20 to-halloween-pink/20 dark:from-halloween-purple/10 dark:to-halloween-pink/10 rounded-full overflow-hidden shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Halloween decorations" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-card p-4 rounded-lg shadow-lg max-w-[200px] border border-halloween-purple/30 animate-fade-in">
              <div className="font-creepster text-2xl text-halloween-purple mb-2">20% OFF</div>
              <p className="text-sm">On all Halloween decorations this week!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
