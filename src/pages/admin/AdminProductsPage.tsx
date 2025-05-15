
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Edit, 
  Eye, 
  MoreHorizontal, 
  Package, 
  Plus, 
  Search, 
  Trash2, 
  ArrowUp, 
  ArrowDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 1,
    name: "Haunted Mansion Decor",
    category: "Decorations",
    price: 59.99,
    stock: 45,
    status: "Active"
  },
  {
    id: 2,
    name: "Zombie Hand Ground Breaker",
    category: "Props",
    price: 39.99,
    stock: 28,
    status: "Active"
  },
  {
    id: 3,
    name: "Ghost Costume Deluxe",
    category: "Costumes",
    price: 89.99,
    stock: 52,
    status: "Active"
  },
  {
    id: 4,
    name: "Animated Witch Props",
    category: "Props",
    price: 149.99,
    stock: 15,
    status: "Low Stock"
  },
  {
    id: 5,
    name: "Skull Fog Machine",
    category: "Special Effects",
    price: 59.99,
    stock: 0,
    status: "Out of Stock"
  },
  {
    id: 6,
    name: "Pumpkin Carving Kit",
    category: "Accessories",
    price: 14.99,
    stock: 120,
    status: "Active"
  },
  {
    id: 7,
    name: "Spooky Sound Effects Player",
    category: "Audio",
    price: 29.99,
    stock: 35,
    status: "Active"
  },
  {
    id: 8,
    name: "Halloween Party Lights",
    category: "Lighting",
    price: 34.99,
    stock: 5,
    status: "Low Stock"
  },
  {
    id: 9,
    name: "Graveyard Kit",
    category: "Outdoor",
    price: 79.99,
    stock: 18,
    status: "Active"
  },
  {
    id: 10,
    name: "Spider Web Deluxe Pack",
    category: "Decorations",
    price: 19.99,
    stock: 0,
    status: "Out of Stock"
  }
];

const AdminProductsPage = () => {
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
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.status.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
  
  const handleAction = (action: string, productId: number, productName: string) => {
    toast({
      title: `Product ${action}`,
      description: `${productName} has been ${action.toLowerCase()}`,
    });
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-muted-foreground">Manage your product inventory</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Out of Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Product Management</CardTitle>
            <CardDescription>Manage your product catalog</CardDescription>
          </div>
          <Button className="bg-halloween-purple hover:bg-halloween-purple-dark">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Package className="mr-2 h-4 w-4" />
              Categories
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                    Product Name
                    {sortBy === "name" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("category")}>
                    Category
                    {sortBy === "category" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer text-right" onClick={() => handleSort("price")}>
                    Price
                    {sortBy === "price" && (
                      sortDir === "asc" ? 
                        <ArrowUp className="ml-1 h-3 w-3 inline" /> : 
                        <ArrowDown className="ml-1 h-3 w-3 inline" />
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer text-right" onClick={() => handleSort("stock")}>
                    Stock
                    {sortBy === "stock" && (
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
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{product.stock}</TableCell>
                    <TableCell>
                      <StockStatusBadge status={product.status} />
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
                          <DropdownMenuItem onClick={() => handleAction("Viewed", product.id, product.name)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleAction("Edited", product.id, product.name)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit product
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleAction("Deleted", product.id, product.name)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete product
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

const StockStatusBadge = ({ status }: { status: string }) => {
  let badgeClass = "";
  
  switch (status) {
    case "Active":
      badgeClass = "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      break;
    case "Low Stock":
      badgeClass = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      break;
    case "Out of Stock":
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

export default AdminProductsPage;
