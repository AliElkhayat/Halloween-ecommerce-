
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Ghost, User } from "lucide-react";

export function Header() {
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Ghost className="h-8 w-8 text-halloween-purple float-effect" />
          <span className="font-creepster text-2xl md:text-3xl text-halloween-purple">
            Spectral Store
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mr-2"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg hover:text-halloween-purple transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-halloween-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          
          <Link to="/sign-in">
            <Button variant="ghost" size="icon" className="hover:text-halloween-purple">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="hover:text-halloween-purple">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-halloween-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-fade-in">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b p-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg hover:text-halloween-purple transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2 border-t">
                <ThemeToggle />
                
                <Link to="/account">
                  <Button variant="ghost" size="icon" className="hover:text-halloween-purple">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                
                <Link to="/cart" className="relative">
                  <Button variant="ghost" size="icon" className="hover:text-halloween-purple">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-halloween-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
