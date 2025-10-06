
import { useParams } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useProductInteractions } from "@/components/ProductDetails";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Mock product data (in a real app, this would come from an API)
const mockProduct = {
  id: "1",
  name: "Haunted Mansion Decoration",
  description: "Transform your home into a haunted mansion with this spooky decoration set. Includes ghostly figures, cobwebs, and eerie lighting effects.",
  price: 49.99,
  category: "Decorations",
  images: [
  stock: 10,
  featured: true
};

export function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [product, setProduct] = useState(mockProduct);
  const [activeImage, setActiveImage] = useState(0);

  // In a real app, we would fetch product data based on the ID
  // For now, we'll use mock data
  useEffect(() => {
    // Mock API call
    console.log(`Fetching product with ID: ${id}`);
    // In a real app, fetch the product data here
  }, [id]);

  const { quantity, incrementQuantity, decrementQuantity, handleAddToCart } = 
    useProductInteractions({
      product,
      onAddToCart: (item) => {
        addToCart(item);
        toast({
          title: "Added to cart",
          description: `${item.name} (${item.quantity}) has been added to your cart.`,
        });
      },
      initialQuantity: 1
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-halloween-orange/5 rounded-lg overflow-hidden">
            {product.images && product.images.length > 0 && (
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          {/* Thumbnail Gallery */}
          {product.images && product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square w-16 rounded-md overflow-hidden border-2 ${
                    activeImage === index ? "border-halloween-purple" : "border-transparent"
                  }`}
                >
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="font-creepster text-3xl md:text-4xl">{product.name}</h1>
          <p className="text-2xl font-bold text-halloween-purple">${product.price}</p>
          <p className="text-muted-foreground">{product.description}</p>
          
          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center">
              <Button
                onClick={decrementQuantity}
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-r-none"
              >
                -
              </Button>
              <div className="h-8 w-12 flex items-center justify-center border-y">
                {quantity}
              </div>
              <Button
                onClick={incrementQuantity}
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-l-none"
              >
                +
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
              {product.stock} available
            </span>
          </div>
          
          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full bg-halloween-purple hover:bg-halloween-purple-dark"
          >
            Add to Cart
          </Button>
          
          {/* Additional Product Info */}
          <div className="pt-6 border-t border-border">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Category: {product.category}</li>
              <li>Item #: {product.id}</li>
              <li>Premium quality Halloween decoration</li>
              <li>Perfect for Halloween parties and home decor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
