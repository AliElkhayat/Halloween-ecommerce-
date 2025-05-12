
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Settings,
  Users,
  ShoppingBag,
  BarChart3,
  Package,
  Bell,
  Search,
  Menu,
  X,
  Home,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { toast } = useToast();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMobileNav} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 transform transition-transform duration-300 ease-in-out md:translate-x-0 border-r border-gray-200 dark:border-gray-700 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/admin" className="flex items-center">
            <span className="font-creepster text-2xl text-halloween-purple">Admin Panel</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMobileNav} className="md:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="py-4">
          <nav className="px-2 space-y-1">
            <NavItem
              to="/admin"
              icon={<BarChart3 className="mr-2 h-5 w-5" />}
              label="Dashboard"
              active={location.pathname === "/admin"}
            />
            
            <NavItem
              to="/admin/orders"
              icon={<ShoppingBag className="mr-2 h-5 w-5" />}
              label="Orders"
              active={location.pathname === "/admin/orders"}
            />
            
            <NavItem
              to="/admin/products"
              icon={<Package className="mr-2 h-5 w-5" />}
              label="Products"
              active={location.pathname === "/admin/products"}
            />
            
            <NavItem
              to="/admin/customers"
              icon={<Users className="mr-2 h-5 w-5" />}
              label="Customers"
              active={location.pathname === "/admin/customers"}
            />
            
            <NavItem
              to="/admin/analytics"
              icon={<BarChart3 className="mr-2 h-5 w-5" />}
              label="Analytics"
              active={location.pathname === "/admin/analytics"}
            />
            
            <NavItem
              to="/admin/settings"
              icon={<Settings className="mr-2 h-5 w-5" />}
              label="Settings"
              active={location.pathname === "/admin/settings"}
            />
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-halloween-purple flex items-center justify-center text-white text-sm">
                AD
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@spectralstore.com</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => {
              toast({
                title: "Logged out",
                description: "You have been logged out successfully",
              });
              // In a real app, this would trigger actual logout
            }}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={`md:pl-64 flex flex-col flex-1`}>
        {/* Top Navigation */}
        <div className="sticky top-0 z-10 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex">
                <Button variant="ghost" size="icon" onClick={toggleMobileNav} className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" asChild className="hidden md:flex">
                  <Link to="/">
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Go to store</span>
                  </Link>
                </Button>
              </div>
              
              <div className="flex-1 px-4 md:px-8">
                <div className="max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search orders, products, customers..."
                      className="pl-9"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Button variant="ghost" size="icon" onClick={() => {
                  toast({
                    title: "Notifications",
                    description: "You have no new notifications",
                  });
                }}>
                  <Bell className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const NavItem = ({ to, icon, label, active }: NavItemProps) => (
  <Button 
    variant={active ? "secondary" : "ghost"} 
    className={`w-full justify-start ${active ? 'bg-halloween-purple/10' : ''}`} 
    asChild
  >
    <Link to={to}>
      {icon}
      {label}
    </Link>
  </Button>
);

export default AdminLayout;
