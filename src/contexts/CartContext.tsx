
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
    
    // Calculate totals
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(total);
    
    const count = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setCartCount(count);
  }, [cartItems]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex > -1) {
        // If product exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += product.quantity;
        
        toast({
          title: "Cart updated",
          description: `${product.name} quantity increased to ${updatedItems[existingItemIndex].quantity}`,
          duration: 3000,
        });
        
        return updatedItems;
      } else {
        // If product doesn't exist, add it
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart`,
          duration: 3000,
        });
        
        return [...prevItems, product];
      }
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.id === productId);
      if (itemToRemove) {
        toast({
          title: "Removed from cart",
          description: `${itemToRemove.name} has been removed from your cart`,
          duration: 3000,
        });
      }
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      duration: 3000,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
