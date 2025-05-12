// This file is read-only and can't be modified, so we'll need to create a wrapper component
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";

// Since we can't edit the file directly, we'll create a custom hook to handle adding to cart
export function useProductInteractions({ product, onAddToCart, initialQuantity = 1 }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const incrementQuantity = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  const decrementQuantity = useCallback(() => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  }, []);

  const handleAddToCart = useCallback(() => {
    // Transform the product to match CartItem interface by adding the image property
    const cartItem = {
      ...product,
      image: product.images && product.images.length > 0 ? product.images[0] : '',
      quantity
    };
    onAddToCart(cartItem);
  }, [product, quantity, onAddToCart]);

  return {
    quantity,
    incrementQuantity,
    decrementQuantity,
    handleAddToCart
  };
}
