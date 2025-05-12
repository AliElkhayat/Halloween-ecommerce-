
import { Link } from "react-router-dom";
import { Ghost, Heart, Facebook, Instagram, Twitter, Linkedin, Gamepad, Video, Gift, User } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-halloween-purple/10 dark:bg-halloween-purple/5 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Ghost className="h-6 w-6 text-halloween-purple float-effect" />
              <h3 className="font-creepster text-2xl text-halloween-purple">Spectral Store</h3>
            </div>
            <p className="text-sm">Your one-stop shop for all things Halloween and spooky all year round.</p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-halloween-purple transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-halloween-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-halloween-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-halloween-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-creepster text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-halloween-purple transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm hover:text-halloween-purple transition-colors">Products</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-halloween-purple transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-sm hover:text-halloween-purple transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-halloween-purple transition-colors">Contact</Link></li>
              <li><Link to="/game" className="text-sm hover:text-halloween-purple transition-colors flex items-center">
                <Gamepad className="h-4 w-4 mr-1" />Skull & Bones Game
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-creepster text-xl mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm hover:text-halloween-purple transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-halloween-purple transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-halloween-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-halloween-purple transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/offers" className="text-sm hover:text-halloween-purple transition-colors flex items-center">
                <Gift className="h-4 w-4 mr-1" />Special Offers
              </Link></li>
              <li><Link to="/videos" className="text-sm hover:text-halloween-purple transition-colors flex items-center">
                <Video className="h-4 w-4 mr-1" />Halloween Videos
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-creepster text-xl mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for spooky updates and special offers!</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background px-3 py-2 rounded-l-md border focus:outline-none focus:ring-2 focus:ring-halloween-purple w-full"
              />
              <Link to="/newsletter" className="bg-halloween-purple hover:bg-halloween-purple-dark text-white px-4 py-2 rounded-r-md transition-colors">
                Join
              </Link>
            </div>
            <ul className="mt-4 space-y-2">
              <li><Link to="/account" className="text-sm hover:text-halloween-purple transition-colors flex items-center">
                <User className="h-4 w-4 mr-1" />My Account
              </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-halloween-purple/20 mt-8 pt-6 text-center">
          <p className="text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-halloween-pink mx-1" /> by No Risk No Fun Team © {new Date().getFullYear()}
          </p>
          <p className="text-sm mt-2">
            <Link to="/shipping" className="hover:text-halloween-purple transition-colors">Shipping</Link> | 
            <Link to="/faq" className="mx-2 hover:text-halloween-purple transition-colors">FAQ</Link> | 
            <Link to="/blog" className="hover:text-halloween-purple transition-colors">Blog</Link> |
            <Link to="/game" className="mx-2 hover:text-halloween-purple transition-colors">Play Game</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
