
import { useParams, Link } from "react-router-dom";
import { Ghost, Candy, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock category data (in a real app, this would come from an API)
const categories = [
  {
    id: "decorations",
    name: "Decorations",
    description: "Transform your space into a haunted paradise with our spooky decorations collection. From ghostly figures to eerie lighting, we have everything you need to create the perfect Halloween atmosphere.",
    icon: <Ghost className="h-8 w-8 text-halloween-purple float-effect" />,
    image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    products: [
      {
        id: "1",
        name: "Haunted Mansion Decoration Set",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1509557965875-ef766d4a8a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: true
      },
      {
        id: "2",
        name: "Glowing Ghost Light",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1604014091631-37938aa8ed95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: false
      },
      {
        id: "3",
        name: "Spooky Tree Silhouette",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1572038458791-bddd890fde70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: false
      },
      {
        id: "4",
        name: "Animated Spider Web",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1633284851606-0c27c33a7dcd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        featured: true
      }
    ]
  },
  {
    id: "costumes",
    name: "Costumes",
    description: "Become your favorite character or creature with our high-quality costume collection. From classic monsters to trending pop culture references, we have sizes and styles for everyone in the family.",
    icon: <Candy className="h-8 w-8 text-halloween-orange wiggle-effect" />,
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    products: [
      {
        id: "5",
        name: "Classic Vampire Costume",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1506364464-bc4697181fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: true
      },
      {
        id: "6",
        name: "Witch Outfit Complete Set",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1596177225188-a743a7635e8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: false
      },
      {
        id: "7",
        name: "Zombie Makeup Kit",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: true
      },
      {
        id: "8",
        name: "Ghost Face Mask",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1572460418664-943f93391c12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: false
      }
    ]
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Complete your Halloween look with our spooky accessories. From haunting jewelry to creepy props, these finishing touches will take your costume or home decor to the next level.",
    icon: <Bath className="h-8 w-8 text-halloween-purple float-effect" />,
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    products: [
      {
        id: "9",
        name: "Glow-in-the-Dark Skeleton Hands",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1603830218136-efd10c701a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: true
      },
      {
        id: "10",
        name: "Spooky Sound Effects Machine",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: false
      },
      {
        id: "11",
        name: "Witch's Cauldron Fog Machine",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1604345070999-e1dc383d9e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: true
      },
      {
        id: "12",
        name: "Spider Web Candle Holder",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1634644696059-827169e2de06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        featured: false
      }
    ]
  },
];

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  // Find the category with the matching ID
  const category = categories.find((cat) => cat.id === categoryId);
  
  // If no matching category is found
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-creepster text-3xl mb-4">Category Not Found</h1>
          <p className="mb-8">The category you're looking for doesn't seem to exist.</p>
          <Link to="/products" className="text-halloween-purple hover:underline">
            View All Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4 rounded-lg backdrop-blur-sm bg-black/30 border border-halloween-purple/20">
            <div className="flex justify-center mb-2">
              {category.icon}
            </div>
            <h1 className="font-creepster text-4xl md:text-5xl text-white mb-2">{category.name}</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground">
            {category.description}
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <Link 
              key={product.id}
              to={`/products/${product.id}`} 
              className="group bg-card rounded-lg overflow-hidden border border-halloween-purple/20 shadow-sm hover:shadow-lg hover:shadow-halloween-purple/10 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.featured && (
                  <span className="absolute top-2 right-2 bg-halloween-purple text-white text-xs font-medium px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-medium mb-1 line-clamp-2 group-hover:text-halloween-purple transition-colors">
                  {product.name}
                </h3>
                <p className="font-bold text-halloween-purple">${product.price.toFixed(2)}</p>
                <Button
                  className="w-full mt-3 bg-halloween-purple hover:bg-halloween-purple-dark text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    // In a real app, this would add the product to cart
                  }}
                >
                  View Details
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
