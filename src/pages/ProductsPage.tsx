
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Import the dummy products from the ProductDetails component
const dummyProducts = [
  {
    id: 1,
    name: "Haunted Mansion Light",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Decorations",
    description: "Create an eerie atmosphere with this haunted mansion light that casts spooky shadows.",
  },
  {
    id: 2,
    name: "Spooky Ghost Plush",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Toys",
    description: "A cuddly ghost plush that glows in the dark, perfect for Halloween nights.",
  },
  {
    id: 3,
    name: "Pumpkin Carving Kit",
    price: 24.99,
    image: "https://plus.unsplash.com/premium_photo-1666174325391-31638c19d158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFB1bXBraW4lMjBDYXJ2aW5nJTIwS2l0fGVufDB8fDB8fHww",
    category: "Tools",
    description: "Professional-grade tools for creating the perfect jack-o'-lantern masterpiece.",
  },
  {
    id: 4,
    name: "Witch's Brew Mug",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Kitchenware",
    description: "A color-changing mug perfect for your morning coffee or evening potion.",
  },
  {
    id: 5,
    name: "Skeleton Door Wreath",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1666794583435-28c8d8bf3302?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Decorations",
    description: "Welcome visitors with this spooky skeleton wreath for your front door.",
  },
  {
    id: 6,
    name: "Bat String Lights",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1652820487304-cba4ed2f514f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Decorations",
    description: "Add a soft, spooky glow with these bat-shaped string lights.",
  },
  {
    id: 7,
    name: "Halloween Candy Bowl",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1696913832254-6e0a45bbaa97?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Kitchenware",
    description: "A festive bowl for serving treats to trick-or-treaters.",
  },
  {
    id: 8,
    name: "Witch Hat Headband",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Accessories",
    description: "Complete your costume with this stylish witch hat headband.",
  },
];

const categories = [
  "All",
  "Decorations",
  "Toys",
  "Kitchenware",
  "Accessories",
  "Tools"
];

const sortOptions = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "price-asc", label: "Price (Low to High)" },
  { value: "price-desc", label: "Price (High to Low)" }
];

const ProductsPage = () => {
  const [products, setProducts] = useState([...dummyProducts]);
  const [filteredProducts, setFilteredProducts] = useState([...dummyProducts]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  
  useEffect(() => {
    // Simulate loading products from API
    const timer = setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Filter products by category and search query
    let filtered = [...products];
    
    if (activeCategory !== "All") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    // Sort products
    switch (sortBy) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    
    setFilteredProducts(filtered);
  }, [products, activeCategory, searchQuery, sortBy]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-creepster text-3xl md:text-4xl mb-2">Our Spooky Collection</h1>
      <p className="text-muted-foreground mb-8">Browse our haunting selection of Halloween products</p>
      
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="relative flex-grow max-w-md">
          <input 
            type="search" 
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-halloween-purple"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-halloween-purple"
          >
            <option value="" disabled>Sort by</option>
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Category Filters */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 py-2">
          {categories.map(category => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-halloween-purple hover:bg-halloween-purple-dark" : ""}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Product Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="product-card">
              <div className="aspect-square skeleton"></div>
              <div className="p-4">
                <div className="h-4 w-20 skeleton mb-2"></div>
                <div className="h-6 w-40 skeleton mb-2"></div>
                <div className="h-4 w-full skeleton mb-2"></div>
                <div className="h-4 w-3/4 skeleton mb-2"></div>
                <div className="flex justify-between mt-4">
                  <div className="h-6 w-16 skeleton"></div>
                  <div className="h-6 w-24 skeleton"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="font-creepster text-2xl mb-2">No Products Found</h3>
          <p className="text-muted-foreground mb-4">
            We couldn't find any products matching your criteria.
          </p>
          <Button onClick={() => {
            setSearchQuery("");
            setActiveCategory("All");
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
