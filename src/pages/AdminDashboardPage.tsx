
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Users,
  ShoppingBag,
  TrendingUp,
  Package,
  BarChart3,
  Bell,
  Search,
  Menu,
  X,
  Home,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Mock data
const recentOrders = [
  { id: "ORD-12345", customer: "John Doe", date: "2025-05-06", total: 89.95, status: "Completed" },
  { id: "ORD-67890", customer: "Jane Smith", date: "2025-05-05", total: 124.50, status: "Processing" },
  { id: "ORD-24680", customer: "Mike Johnson", date: "2025-05-05", total: 59.99, status: "Pending" },
  { id: "ORD-13579", customer: "Sarah Williams", date: "2025-05-04", total: 199.95, status: "Completed" },
  { id: "ORD-97531", customer: "Alex Brown", date: "2025-05-04", total: 44.99, status: "Completed" },
];

const topProducts = [
  { name: "Haunted Mansion Decor", sold: 142, revenue: 8519.58 },
  { name: "Zombie Hand Ground Breaker", sold: 98, revenue: 3862.02 },
  { name: "Ghost Costume Deluxe", sold: 87, revenue: 7829.13 },
  { name: "Animated Witch Props", sold: 65, revenue: 9747.35 },
  { name: "Skull Fog Machine", sold: 51, revenue: 3059.49 },
];

const AdminDashboardPage = () => {
  const { toast } = useToast();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/admin">
                <BarChart3 className="mr-2 h-5 w-5" />
                Dashboard
              </Link>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/admin/orders">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Orders
              </Link>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/admin/products">
                <Package className="mr-2 h-5 w-5" />
                Products
              </Link>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/admin/customers">
                <Users className="mr-2 h-5 w-5" />
                Customers
              </Link>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/admin/analytics">
                <TrendingUp className="mr-2 h-5 w-5" />
                Analytics
              </Link>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/admin/settings">
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Link>
            </Button>
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
              setTimeout(() => {
                window.location.href = "/";
              }, 1500);
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
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to Spectral Store admin panel.</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <span className="text-green-500 mr-1">+20.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <span className="text-green-500 mr-1">+15.2%</span> from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <span className="text-green-500 mr-1">+5.4%</span> from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Inventory Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$892,485.90</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <span className="text-red-500 mr-1">-2.3%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="orders" className="mb-8">
            <TabsList>
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="products">Top Products</TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    Displaying the 5 most recent orders.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 px-4 text-left font-medium">Order ID</th>
                          <th className="py-3 px-4 text-left font-medium">Customer</th>
                          <th className="py-3 px-4 text-left font-medium">Date</th>
                          <th className="py-3 px-4 text-left font-medium">Total</th>
                          <th className="py-3 px-4 text-left font-medium">Status</th>
                          <th className="py-3 px-4 text-left font-medium sr-only">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order) => (
                          <tr key={order.id} className="border-b">
                            <td className="py-3 px-4">{order.id}</td>
                            <td className="py-3 px-4">{order.customer}</td>
                            <td className="py-3 px-4">{order.date}</td>
                            <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  order.status === "Completed"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                    : order.status === "Processing"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                                }`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="products" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>
                    Your best selling products this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 px-4 text-left font-medium">Product Name</th>
                          <th className="py-3 px-4 text-left font-medium">Units Sold</th>
                          <th className="py-3 px-4 text-left font-medium">Revenue</th>
                          <th className="py-3 px-4 text-left font-medium sr-only">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topProducts.map((product, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4">{product.name}</td>
                            <td className="py-3 px-4">{product.sold}</td>
                            <td className="py-3 px-4">${product.revenue.toFixed(2)}</td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
