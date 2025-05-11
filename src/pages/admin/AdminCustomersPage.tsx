
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  ArrowDown, 
  ArrowUp, 
  Edit, 
  Mail, 
  MoreHorizontal, 
  Plus, 
  Search, 
  Trash2, 
  User, 
  Users 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock customers data
const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    orders: 5,
    spending: 245.75,
    status: "Active",
    joined: "2025-01-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    orders: 3,
    spending: 124.50,
    status: "Active",
    joined: "2025-02-12"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    orders: 2,
    spending: 89.99,
    status: "Inactive",
    joined: "2024-12-05"
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    orders: 8,
    spending: 345.65,
    status: "Active",
    joined: "2024-09-22"
  },
  {
    id: 5,
    name: "Alex Brown",
    email: "alex.brown@example.com",
    orders: 1,
    spending: 44.99,
    status: "New",
    joined: "2025-05-01"
  },
  {
    id: 6,
    name: "Taylor Lee",
    email: "taylor.lee@example.com",
    orders: 4,
    spending: 198.45,
    status: "Active",
    joined: "2024-11-30"
  },
  {
    id: 7,
    name: "Jordan Davis",
    email: "jordan.davis@example.com",
    orders: 0,
    spending: 0,
    status: "New",
    joined: "2025-05-05"
  },
  {
    id: 8,
    name: "Morgan Wilson",
    email: "morgan.wilson@example.com",
    orders: 6,
    spending: 287.35,
    status: "Active",
    joined: "2024-10-15"
  }
];

const AdminCustomersPage = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDir("asc");
    }
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
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

  const handleAction = (action: string, customerId: number, customerName: string) => {
    toast({
      title: `Customer ${action}`,
      description: `${customerName} has been ${action.toLowerCase()}`,
    });
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Customers</h1>
        <p className="text-muted-foreground">Manage your customer accounts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,203</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">945</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New (This Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Returning Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Customer Management</CardTitle>
            <CardDescription>View and manage your customer base</CardDescription>
          </div>
          <Button className="bg-halloween-purple hover:bg-halloween-purple-dark">
            <Plus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                    Name
                    {sortBy === "name" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("email")}>
                    Email
                    {sortBy === "email" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer text-right" onClick={() => handleSort("orders")}>
                    Orders
                    {sortBy === "orders" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer text-right" onClick={() => handleSort("spending")}>
                    Total Spent
                    {sortBy === "spending" && (
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
                  <TableHead className="cursor-pointer" onClick={() => handleSort("joined")}>
                    Joined
                    {sortBy === "joined" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell className="text-right">{customer.orders}</TableCell>
                    <TableCell className="text-right">
                      {customer.spending > 0 ? `$${customer.spending.toFixed(2)}` : '-'}
                    </TableCell>
                    <TableCell>
                      <CustomerStatusBadge status={customer.status} />
                    </TableCell>
                    <TableCell>{customer.joined}</TableCell>
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
                          <DropdownMenuItem onClick={() => handleAction("Viewed", customer.id, customer.name)}>
                            <User className="mr-2 h-4 w-4" />
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleAction("Emailed", customer.id, customer.name)}>
                            <Mail className="mr-2 h-4 w-4" />
                            Send email
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleAction("Edited", customer.id, customer.name)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit customer
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleAction("Deleted", customer.id, customer.name)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete customer
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

const CustomerStatusBadge = ({ status }: { status: string }) => {
  let badgeClass = "";
  
  switch (status) {
    case "Active":
      badgeClass = "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      break;
    case "Inactive":
      badgeClass = "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      break;
    case "New":
      badgeClass = "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
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

export default AdminCustomersPage;
