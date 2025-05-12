
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";

const dummyProducts = [
  {
    id: 1,
    name: "Haunted Mansion Light",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Decorations",
    description: "Create an eerie atmosphere with this haunted mansion light that casts spooky shadows.",
  },
  {
    id: 2,
    name: "Spooky Ghost Plush",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Toys",
    description: "A cuddly ghost plush that glows in the dark, perfect for Halloween nights.",
  },
  {
    id: 3,
    name: "Pumpkin Carving Kit",
    price: 24.99,
    image: "https://plus.unsplash.com/premium_photo-1666174325391-31638c19d158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFB1bXBraW4lMjBDYXJ2aW5nJTIwS2l0fGVufDB8fDB8fHww",
    category: "Tools",
    description: "Professional-grade tools for creating the perfect jack-o'-lantern masterpiece.",
  },
  {
    id: 4,
    name: "Witch's Brew Mug",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Kitchenware",
    description: "A color-changing mug perfect for your morning coffee or evening potion.",
  }
];

export function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      image: product.image,
      quantity: quantity
    });
    // Reset quantity after adding to cart
    setQuantity(1);
  };
  
  return (
    <div 
      className="product-card flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-img w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Link to={`/products/${product.id}`} className="ghost-button">
            View Details
          </Link>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs uppercase text-halloween-purple font-medium">{product.category}</span>
        <h3 className="text-xl font-creepster mt-1 mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground flex-grow line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <div className="flex items-center mr-2 border rounded-md">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-none"
                onClick={decrementQuantity}
              >
                <Minus className="h-3 w-3" />
              </Button>
              
              <span className="w-8 text-center text-sm">{quantity}</span>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-none"
                onClick={incrementQuantity}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              className="hover:text-halloween-purple" 
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  
  useEffect(() => {
    // Simulate loading products from API
    const timer = setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-creepster text-3xl md:text-4xl text-center mb-2">Featured Products</h2>
        <p className="text-center text-muted-foreground mb-8">Discover our most popular spooky items</p>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="product-card">
                <div className="aspect-square skeleton"></div>
                <div className="p-4">
                  <div className="h-4 w-20 skeleton mb-2"></div>
                  <div className="h-6 w-40 skeleton mb-2"></div>
                  <div className="h-4 w-full skeleton mb-2"></div>
                  <div className="h-4 w-3/4 skeleton mb-2"></div>
                  <div className="flex justify-between mt-4">
                    <div className="h-6 w-16 skeleton"></div>
                    <div className="h-6 w-24 skeleton"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link to="/products" className="ghost-button inline-flex items-center">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
