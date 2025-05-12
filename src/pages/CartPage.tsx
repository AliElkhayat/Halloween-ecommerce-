
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Trash2 } from "lucide-react";

const CartPage = () => {
   const navigate = useNavigate();

  const { cartItems, cartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      navigate("/checkout")
    }, 2000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-creepster text-3xl md:text-4xl mb-2">Your Shopping Cart</h1>
      <p className="text-muted-foreground mb-8">Review the items in your cart before checkout</p>
      
      {cartItems.length === 0 ? (
        <div className="bg-background rounded-lg p-8 text-center border">
          <div className="inline-flex mx-auto items-center justify-center h-24 w-24 rounded-full bg-muted mb-6">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="font-creepster text-2xl mb-4">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any spooky items to your cart yet.
          </p>
          <Link to="/products">
            <Button className="bg-halloween-purple hover:bg-halloween-purple-dark">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg p-6 border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Cart Items ({cartItems.length})</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg p-6 border sticky top-20">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 font-semibold flex justify-between">
                  <span>Total</span>
                  <span>${(cartTotal * 1.1).toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-halloween-purple hover:bg-halloween-purple-dark mb-3"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
                {!isCheckingOut && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              
              <Link to="/products">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
