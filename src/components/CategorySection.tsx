
import { Link } from "react-router-dom";
import { Ghost, Candy, Bath } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Decorations",
    icon: <Ghost className="h-8 w-8 text-halloween-purple float-effect" />,
    description: "Transform your space with spooky decorations",
    image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    path: "/products/category/decorations",
  },
  {
    id: 2,
    name: "Costumes",
    icon: <Candy className="h-8 w-8 text-halloween-orange wiggle-effect" />,
    description: "Become your favorite character or creature",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    path: "/products/category/costumes",
  },
  {
    id: 3,
    name: "Accessories",
    icon: <Bath className="h-8 w-8 text-halloween-purple float-effect" />,
    description: "Complete your look with spooky accessories",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    path: "/products/category/accessories",
  },
];

export function CategorySection() {
  return (
    <section className="py-16 bg-muted/50 dark:bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="font-creepster text-3xl md:text-4xl text-center mb-2">Shop by Category</h2>
        <p className="text-center text-muted-foreground mb-12">Find exactly what you're looking for</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.path}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] flex items-center justify-center"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-halloween-black via-transparent to-transparent opacity-70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="bg-background/80 dark:bg-card/80 p-4 rounded-lg backdrop-blur-sm border border-halloween-purple/20 shadow-lg">
                  {category.icon}
                  <h3 className="font-creepster text-2xl mt-3 mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
