
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  ShoppingBag,
  Users,
  Package,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to Spectral Store admin panel.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          trend="up"
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <StatsCard
          title="Sales"
          value="+2,350"
          change="+15.2%"
          trend="up"
          icon={<ShoppingBag className="h-4 w-4" />}
        />
        <StatsCard
          title="Active Customers"
          value="+12,234"
          change="+5.4%"
          trend="up"
          icon={<Users className="h-4 w-4" />}
        />
        <StatsCard
          title="Inventory Value"
          value="$892,485.90"
          change="-2.3%"
          trend="down"
          icon={<Package className="h-4 w-4" />}
        />
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
                      <th className="py-3 px-4 text-right font-medium">Actions</th>
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
                      <th className="py-3 px-4 text-right font-medium">Actions</th>
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
    </AdminLayout>
  );
};

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, change, trend, icon }: StatsCardProps) => (
  <Card>
    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <div className="bg-muted p-2 rounded-md">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1 flex items-center">
        <span className={trend === "up" ? "text-green-500 flex items-center" : "text-red-500 flex items-center"}>
          {trend === "up" ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
          {change}
        </span>
        <span className="ml-1">from last month</span>
      </p>
    </CardContent>
  </Card>
);

export default AdminDashboardPage;
