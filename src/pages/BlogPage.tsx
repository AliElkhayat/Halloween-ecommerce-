
import { Link } from "react-router-dom";
import { FileText, Clock, ArrowRight } from "lucide-react";
import { Newsletter } from "@/components/Newsletter";

const blogs = [
  {
    id: 1,
    title: "The Origins of Halloween: Ancient Traditions to Modern Celebrations",
    excerpt: "Discover how Halloween evolved from the ancient Celtic festival of Samhain to today's costume parties and trick-or-treating traditions.",
    image: "https://images.unsplash.com/photo-1540427969750-1424f2fa0af8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "October 15, 2024",
    readTime: "5 min read",
    category: "History",
    slug: "origins-of-halloween"
  },
  {
    id: 2,
    title: "DIY Halloween Decorations That Will Spook Your Neighbors",
    excerpt: "Learn how to create spine-chilling decorations for your home using common household items and a touch of creativity.",
    image: "https://images.unsplash.com/photo-1633284851606-0c27c33a7dcd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "October 18, 2024",
    readTime: "7 min read",
    category: "DIY",
    slug: "diy-halloween-decorations"
  },
  {
    id: 3,
    title: "Haunted Houses Around the World: Real Stories of Paranormal Activity",
    excerpt: "Explore the most notoriously haunted locations across the globe and the chilling stories behind their ghostly inhabitants.",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "October 22, 2024",
    readTime: "8 min read",
    category: "Paranormal",
    slug: "haunted-houses-around-the-world"
  }
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FileText className="h-6 w-6 text-halloween-purple" />
          <h1 className="font-creepster text-4xl md:text-5xl">Halloween Blog</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dive into our spooky collection of Halloween stories, DIY ideas, and seasonal inspiration.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-card rounded-lg overflow-hidden border border-halloween-purple/20 shadow-sm hover:shadow-lg hover:shadow-halloween-purple/10 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-halloween-purple text-white text-xs font-medium px-2 py-1 rounded">
                {blog.category}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {blog.readTime}
                </span>
              </div>
              
              <h2 className="font-creepster text-xl mb-3 line-clamp-2">{blog.title}</h2>
              
              <p className="text-muted-foreground mb-5 line-clamp-3">
                {blog.excerpt}
              </p>
              
              <Link to={`/blog/${blog.slug}`} className="flex items-center text-halloween-purple hover:text-halloween-purple-dark transition-colors font-medium">
                Read More 
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Want to stay updated with our latest Halloween content?</p>
        <Link to="/newsletter" className="inline-flex items-center bg-halloween-purple hover:bg-halloween-purple-dark text-white px-6 py-2 rounded-md transition-colors">
          Subscribe to Our Newsletter
        </Link>
      </div>
      
      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
};

export default BlogPage;
