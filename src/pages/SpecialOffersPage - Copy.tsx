
import { useState, useEffect } from "react";
import { Award, Clock, ShoppingCart, ArrowRight, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

// Mock special offers data
const specialOffers = [
  {
    id: 1,
    title: "Halloween Bundle Pack",
    description: "Get our top 3 bestselling Halloween decorations at a 30% discount!",
    originalPrice: 89.97,
    salePrice: 62.98,
    discount: 30,
    image: "https://placehold.co/600x400/222222/ffffff?text=Halloween+Bundle",
    inventory: 15,
    initialInventory: 50,
    tag: "Best Value",
    badgeColor: "bg-green-500",
    expiryDate: "2025-05-31T00:00:00",
    category: "bundle",
  },
  {
    id: 2,
    title: "Premium Ghost Projection Kit",
    description: "Create realistic ghost projections with our premium kit - now 25% off",
    originalPrice: 129.99,
    salePrice: 97.49,
    discount: 25,
    image: "https://placehold.co/600x400/222222/ffffff?text=Ghost+Projection",
    inventory: 8,
    initialInventory: 30,
    tag: "Limited Stock",
    badgeColor: "bg-red-500",
    expiryDate: "2025-05-20T00:00:00",
    category: "limited",
  },
  {
    id: 3,
    title: "Animated Witch Props",
    description: "Lifesize animated witch with sounds and movement sensors",
    originalPrice: 149.99,
    salePrice: 112.49,
    discount: 25,
    image: "https://placehold.co/600x400/222222/ffffff?text=Witch+Props",
    inventory: 4,
    initialInventory: 20,
    tag: "Almost Gone",
    badgeColor: "bg-orange-500",
    expiryDate: "2025-05-15T00:00:00",
    category: "limited",
  },
  {
    id: 4,
    title: "Halloween Costume Super Sale",
    description: "All costumes 20% off - find the perfect outfit for your party!",
    originalPrice: 79.99,
    salePrice: 63.99,
    discount: 20,
    image: "https://placehold.co/600x400/222222/ffffff?text=Halloween+Costumes",
    inventory: 45,
    initialInventory: 100,
    tag: "Popular",
    badgeColor: "bg-purple-500",
    expiryDate: "2025-05-25T00:00:00",
    category: "sale",
  },
  {
    id: 5,
    title: "Fog Machine + Fog Juice Bundle",
    description: "Professional-grade fog machine with 2 gallons of premium fog juice",
    originalPrice: 159.99,
    salePrice: 119.99,
    discount: 25,
    image: "https://placehold.co/600x400/222222/ffffff?text=Fog+Machine",
    inventory: 18,
    initialInventory: 40,
    tag: "Staff Pick",
    badgeColor: "bg-blue-500",
    expiryDate: "2025-05-18T00:00:00",
    category: "bundle",
  },
  {
    id: 6,
    title: "LED Light Show System",
    description: "Create a synchronized Halloween light show with our easy-to-use system",
    originalPrice: 199.99,
    salePrice: 139.99,
    discount: 30,
    image: "https://placehold.co/600x400/222222/ffffff?text=LED+Light+Show",
    inventory: 12,
    initialInventory: 25,
    tag: "New Arrival",
    badgeColor: "bg-emerald-500",
    expiryDate: "2025-05-28T00:00:00",
    category: "new",
  },
];

// Featured deal (the best offer)
const featuredDeal = {
  id: 0,
  title: "Ultimate Halloween Home Package",
  description: "Transform your entire home with our complete Halloween package. Includes decorations for interior and exterior, lighting, sound effects, and more!",
  originalPrice: 399.99,
  salePrice: 259.99,
  discount: 35,
  image: "https://placehold.co/1200x600/222222/ffffff?text=Ultimate+Halloween+Package",
  inventory: 5,
  initialInventory: 15,
  tag: "Exclusive Offer",
  badgeColor: "bg-halloween-pink",
  expiryDate: "2025-05-14T00:00:00",
  category: "exclusive",
  features: [
    "Complete interior and exterior decoration set",
    "Automated lighting system with controller",
    "Sound effects machine with 20+ spooky sounds",
    "Fog machine with premium fog juice",
    "3 animated props (choose from witch, zombie, or ghost)",
    "LED pathway lights (set of 10)",
    "Window projection kit for ghostly effects"
  ]
};

const SpecialOffersPage = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("all");
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time left for featured deal
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(featuredDeal.expiryDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.salePrice,
      image: product.image,
      quantity: 1,
    });
    
    toast({
      title: "Item Added to Cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const filteredOffers = specialOffers.filter(offer => {
    if (activeTab === "all") return true;
    return offer.category === activeTab;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mb-8">
        <Award className="h-8 w-8 text-halloween-purple mr-2" />
        <h1 className="font-creepster text-4xl md:text-5xl">Special Offers</h1>
      </div>
      
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Discover our exclusive Halloween deals and limited-time offers. 
        Don't miss out on these spooktacular savings!
      </p>

      {/* Featured Deal */}
      <div className="bg-card rounded-lg border shadow-xl overflow-hidden mb-12 transform transition-all hover:shadow-halloween-purple/30 dark:hover:shadow-halloween-purple/10">
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <Badge className={`${featuredDeal.badgeColor} text-white px-3 py-1 text-sm font-bold animate-pulse`}>
              {featuredDeal.tag}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img 
                src={featuredDeal.image} 
                alt={featuredDeal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
                <Badge className={`${featuredDeal.badgeColor} text-white px-3 py-1 mb-2 text-sm`}>
                  {featuredDeal.tag}
                </Badge>
                <h2 className="text-white text-xl font-bold">{featuredDeal.title}</h2>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Sparkles className="h-5 w-5 text-halloween-pink mr-2" />
                <h2 className="font-semibold text-2xl">{featuredDeal.title}</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">{featuredDeal.description}</p>
              
              <div className="mb-6">
                <h3 className="font-medium text-sm mb-2">INCLUDES:</h3>
                <ul className="space-y-2">
                  {featuredDeal.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-halloween-purple mt-1.5 mr-2"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <span className="text-muted-foreground line-through text-sm">
                    ${featuredDeal.originalPrice.toFixed(2)}
                  </span>
                  <p className="text-2xl font-bold text-halloween-purple">
                    ${featuredDeal.salePrice.toFixed(2)}
                  </p>
                </div>
                <Badge className="bg-halloween-pink text-white">
                  SAVE {featuredDeal.discount}%
                </Badge>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Stock level</span>
                  <span className="font-medium">{featuredDeal.inventory} remaining</span>
                </div>
                <Progress 
                  value={(featuredDeal.inventory / featuredDeal.initialInventory) * 100} 
                  className="h-2" 
                />
                {featuredDeal.inventory <= 5 && (
                  <p className="text-red-500 text-xs flex items-center mt-1">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Low stock - order soon!
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">Offer ends in:</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-muted rounded p-2 text-center">
                    <span className="text-xl font-bold">{timeLeft.days}</span>
                    <p className="text-xs text-muted-foreground">Days</p>
                  </div>
                  <div className="bg-muted rounded p-2 text-center">
                    <span className="text-xl font-bold">{timeLeft.hours}</span>
                    <p className="text-xs text-muted-foreground">Hours</p>
                  </div>
                  <div className="bg-muted rounded p-2 text-center">
                    <span className="text-xl font-bold">{timeLeft.minutes}</span>
                    <p className="text-xs text-muted-foreground">Min</p>
                  </div>
                  <div className="bg-muted rounded p-2 text-center">
                    <span className="text-xl font-bold">{timeLeft.seconds}</span>
                    <p className="text-xs text-muted-foreground">Sec</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="flex-1 bg-halloween-pink hover:bg-halloween-pink-dark"
                  onClick={() => handleAddToCart(featuredDeal)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="flex items-center">
                  Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Special Offers Tabs */}
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Offers</TabsTrigger>
          <TabsTrigger value="bundle">Bundle Deals</TabsTrigger>
          <TabsTrigger value="limited">Limited Stock</TabsTrigger>
          <TabsTrigger value="new">New Arrivals</TabsTrigger>
          <TabsTrigger value="sale">Sale</TabsTrigger>
        </TabsList>
      </Tabs>
      
      {/* Special Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden transition-all hover:shadow-lg hover:shadow-halloween-purple/30 dark:hover:shadow-halloween-purple/10">
            <div className="relative">
              <img 
                src={offer.image} 
                alt={offer.title}
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className={`${offer.badgeColor} text-white`}>
                  {offer.tag}
                </Badge>
              </div>
              <div className="absolute top-2 left-2">
                <Badge className="bg-halloween-purple text-white">
                  SAVE {offer.discount}%
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle>{offer.title}</CardTitle>
              <CardDescription>{offer.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center mb-4">
                <span className="text-muted-foreground line-through mr-2">
                  ${offer.originalPrice.toFixed(2)}
                </span>
                <span className="text-2xl font-bold text-halloween-purple">
                  ${offer.salePrice.toFixed(2)}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>In stock</span>
                  <span>{offer.inventory} remaining</span>
                </div>
                <Progress 
                  value={(offer.inventory / offer.initialInventory) * 100} 
                  className="h-2" 
                />
                {offer.inventory <= 5 && (
                  <p className="text-red-500 text-xs flex items-center mt-1">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Low stock - order soon!
                  </p>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-2">
              <Button 
                className="flex-1"
                onClick={() => handleAddToCart(offer)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersPage;
