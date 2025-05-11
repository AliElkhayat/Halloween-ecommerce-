
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

// Mock sales data
const salesData = [
  { month: "Jan", sales: 5000, orders: 125, visitors: 3200 },
  { month: "Feb", sales: 6200, orders: 148, visitors: 3800 },
  { month: "Mar", sales: 8100, orders: 187, visitors: 4200 },
  { month: "Apr", sales: 7400, orders: 170, visitors: 4100 },
  { month: "May", sales: 9800, orders: 210, visitors: 4900 },
  { month: "Jun", sales: 12000, orders: 250, visitors: 5200 },
  { month: "Jul", sales: 11500, orders: 240, visitors: 5000 },
  { month: "Aug", sales: 10200, orders: 220, visitors: 4800 },
  { month: "Sep", sales: 9300, orders: 195, visitors: 4600 },
  { month: "Oct", sales: 10500, orders: 225, visitors: 4900 },
  { month: "Nov", sales: 15000, orders: 320, visitors: 6200 },
  { month: "Dec", sales: 18500, orders: 390, visitors: 7100 },
];

// Mock category data
const categoryData = [
  { name: "Decorations", value: 35 },
  { name: "Costumes", value: 25 },
  { name: "Props", value: 20 },
  { name: "Accessories", value: 15 },
  { name: "Special Effects", value: 5 },
];

// Mock traffic sources data
const trafficSources = [
  { name: "Direct", value: 30 },
  { name: "Organic Search", value: 40 },
  { name: "Social Media", value: 15 },
  { name: "Referral", value: 10 },
  { name: "Email", value: 5 },
];

// Colors for charts
const COLORS = ["#8B5CF6", "#D946EF", "#F97316", "#0EA5E9", "#10B981"];

const AdminAnalyticsPage = () => {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Track your store's performance</p>
      </div>

      <Tabs defaultValue="sales" className="mb-8">
        <TabsList>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="mt-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>Total sales revenue over the past year</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={salesData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Revenue']}
                        labelStyle={{ color: "#333" }}
                        contentStyle={{ backgroundColor: "#fff", border: "1px solid #ddd" }}
                      />
                      <Bar dataKey="sales" fill="#8B5CF6" name="Revenue ($)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Orders vs Visitors</CardTitle>
                <CardDescription>Conversion rate analysis</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={salesData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="orders"
                        stroke="#D946EF"
                        name="Orders"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="visitors"
                        stroke="#0EA5E9"
                        name="Visitors"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your customers come from</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSources}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Traffic']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Growth Trends</CardTitle>
              <CardDescription>Year-over-year sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={salesData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [name === "sales" ? `$${value}` : value, name === "sales" ? "Revenue" : name]} />
                    <Legend />
                    <Area type="monotone" dataKey="sales" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} name="Revenue" />
                    <Area type="monotone" dataKey="orders" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.3} name="Orders" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="mt-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Product category distribution</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Selling Products</CardTitle>
                <CardDescription>Top products by sales volume</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={[
                        { name: "Haunted Mansion Decor", sales: 142 },
                        { name: "Zombie Hand Ground Breaker", sales: 98 },
                        { name: "Ghost Costume Deluxe", sales: 87 },
                        { name: "Animated Witch Props", sales: 65 },
                        { name: "Skull Fog Machine", sales: 51 },
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={150} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#8B5CF6" name="Units Sold" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Performance</CardTitle>
              <CardDescription>View trends for individual products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { month: "Jan", product1: 42, product2: 35, product3: 28 },
                      { month: "Feb", product1: 45, product2: 32, product3: 30 },
                      { month: "Mar", product1: 50, product2: 40, product3: 35 },
                      { month: "Apr", product1: 55, product2: 45, product3: 40 },
                      { month: "May", product1: 60, product2: 50, product3: 45 },
                      { month: "Jun", product1: 75, product2: 65, product3: 55 },
                    ]}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="product1" stroke="#8B5CF6" name="Haunted Mansion Decor" />
                    <Line type="monotone" dataKey="product2" stroke="#0EA5E9" name="Zombie Hand Ground Breaker" />
                    <Line type="monotone" dataKey="product3" stroke="#F97316" name="Ghost Costume Deluxe" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="mt-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
                <CardDescription>New customers over time</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { month: "Jan", customers: 125 },
                        { month: "Feb", customers: 148 },
                        { month: "Mar", customers: 187 },
                        { month: "Apr", customers: 210 },
                        { month: "May", customers: 240 },
                        { month: "Jun", customers: 265 },
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="customers"
                        stroke="#D946EF"
                        name="New Customers"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Retention</CardTitle>
                <CardDescription>Return customer rate</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { month: "Jan", new: 85, returning: 40 },
                        { month: "Feb", new: 90, returning: 58 },
                        { month: "Mar", new: 105, returning: 82 },
                        { month: "Apr", new: 120, returning: 90 },
                        { month: "May", new: 130, returning: 110 },
                        { month: "Jun", new: 150, returning: 115 },
                      ]}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="new" stackId="a" fill="#8B5CF6" name="New Customers" />
                      <Bar dataKey="returning" stackId="a" fill="#10B981" name="Returning Customers" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Customer Lifetime Value</CardTitle>
              <CardDescription>Average spending per customer over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      { period: "1 month", value: 45 },
                      { period: "3 months", value: 95 },
                      { period: "6 months", value: 158 },
                      { period: "1 year", value: 215 },
                      { period: "2 years", value: 385 },
                      { period: "3 years", value: 490 },
                    ]}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Average Lifetime Value']} />
                    <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} name="Average Customer Value" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default AdminAnalyticsPage;
