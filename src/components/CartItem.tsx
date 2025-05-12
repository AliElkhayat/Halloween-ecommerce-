
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);
  
  const handleRemove = () => {
    setIsRemoving(true);
    // Animation delay before actual removal
    setTimeout(() => {
      removeFromCart(item.id);
    }, 300);
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    } else {
      handleRemove();
    }
  };
  
  return (
    <div className={`flex border-b py-4 transition-all duration-300 ${isRemoving ? 'opacity-0 scale-95' : 'opacity-100'}`}>
      <div className="w-24 h-24 rounded-md overflow-hidden border">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <Link to={`/products/${item.id}`} className="font-medium hover:text-halloween-purple transition-colors">
          {item.name}
        </Link>
        <div className="text-sm text-muted-foreground mt-1">
          ${item.price.toFixed(2)} per item
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-10 text-center">{item.quantity}</span>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold mr-4">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
              onClick={handleRemove}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
