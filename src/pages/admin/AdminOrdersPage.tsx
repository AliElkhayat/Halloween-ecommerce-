
import AdminLayout from "@/components/admin/AdminLayout";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { 
  ArrowDown, 
  ArrowUp,
  Eye, 
  MoreHorizontal, 
  Package, 
  Printer, 
  ShoppingBag, 
  Trash2, 
  X 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock orders data
const orders = [
  {
    id: "ORD-12345",
    customer: "John Doe",
    email: "john.doe@example.com",
    date: "2025-05-08",
    status: "Completed",
    total: 89.95,
    items: 3
  },
  {
    id: "ORD-67890",
    customer: "Jane Smith",
    email: "jane.smith@example.com",
    date: "2025-05-07",
    status: "Processing",
    total: 124.50,
    items: 2
  },
  {
    id: "ORD-24680",
    customer: "Mike Johnson",
    email: "mike.johnson@example.com",
    date: "2025-05-07",
    status: "Pending",
    total: 59.99,
    items: 1
  },
  {
    id: "ORD-13579",
    customer: "Sarah Williams",
    email: "sarah.williams@example.com",
    date: "2025-05-06",
    status: "Completed",
    total: 199.95,
    items: 4
  },
  {
    id: "ORD-97531",
    customer: "Alex Brown",
    email: "alex.brown@example.com",
    date: "2025-05-06",
    status: "Completed",
    total: 44.99,
    items: 1
  },
  {
    id: "ORD-35791",
    customer: "Taylor Lee",
    email: "taylor.lee@example.com",
    date: "2025-05-05",
    status: "Shipped",
    total: 129.99,
    items: 2
  },
  {
    id: "ORD-86420",
    customer: "Jordan Davis",
    email: "jordan.davis@example.com",
    date: "2025-05-05",
    status: "Processing",
    total: 76.50,
    items: 2
  },
  {
    id: "ORD-59713",
    customer: "Morgan Wilson",
    email: "morgan.wilson@example.com",
    date: "2025-05-04",
    status: "Cancelled",
    total: 149.99,
    items: 3
  },
];

const AdminOrdersPage = () => {
  const { toast } = useToast();
  const [sortBy, setSortBy] = useState<string>("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDir("asc");
    }
  };
  
  const sortedOrders = [...orders].sort((a, b) => {
    const aValue = a[sortBy as keyof typeof a];
    const bValue = b[sortBy as keyof typeof b];
    
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDir === "asc" 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue);
    }
    
    return sortDir === "asc" 
      ? Number(aValue) - Number(bValue) 
      : Number(bValue) - Number(aValue);
  });
  
  const handleAction = (action: string, orderId: string) => {
    toast({
      title: `Order ${action}`,
      description: `Order ${orderId} has been ${action.toLowerCase()}`,
    });
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Orders</h1>
        <p className="text-muted-foreground">Manage your customer orders</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,205</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <span className="text-green-500 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                +8.2%
              </span>
              <span className="ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Processing</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <span className="text-red-500 flex items-center">
                <ArrowDown className="h-3 w-3 mr-1" />
                -2.5%
              </span>
              <span className="ml-1">from last week</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cancelled</CardTitle>
            <X className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <span className="text-green-500 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                +0.5%
              </span>
              <span className="ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>View and manage all customer orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("id")}>
                    Order ID
                    {sortBy === "id" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("customer")}>
                    Customer
                    {sortBy === "customer" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
                    Date
                    {sortBy === "date" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                    Status
                    {sortBy === "status" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer text-right" onClick={() => handleSort("total")}>
                    Total
                    {sortBy === "total" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>{order.customer}</div>
                      <div className="text-xs text-muted-foreground">{order.email}</div>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <StatusBadge status={order.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <div>${order.total.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">{order.items} items</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleAction("Viewed", order.id)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleAction("Printed", order.id)}>
                            <Printer className="mr-2 h-4 w-4" />
                            Print order
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleAction("Deleted", order.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  let badgeClass = "";
  
  switch (status) {
    case "Completed":
      badgeClass = "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      break;
    case "Processing":
      badgeClass = "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      break;
    case "Pending":
      badgeClass = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      break;
    case "Shipped":
      badgeClass = "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      break;
    case "Cancelled":
      badgeClass = "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      break;
    default:
      badgeClass = "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}>
      {status}
    </span>
  );
};

export default AdminOrdersPage;
