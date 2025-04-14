
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Tell When an Avocado is Perfectly Ripe",
    excerpt: "Learn the foolproof methods to test avocado ripeness and never cut into an unripe or overripe one again.",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=600&auto=format",
    slug: "how-to-tell-when-avocado-is-perfectly-ripe",
    category: "Fruits"
  },
  {
    id: "2",
    title: "The Ultimate Guide to Seasonal Shopping",
    excerpt: "Why buying seasonal produce not only tastes better but is better for your wallet and the environment.",
    date: "April 8, 2025",
    image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=600&auto=format",
    slug: "ultimate-guide-seasonal-shopping",
    category: "Guides"
  },
  {
    id: "3",
    title: "5 Signs Your Tomatoes Are Actually Ripe",
    excerpt: "Avoid the disappointment of flavorless tomatoes with these expert tips for selecting the perfect ones.",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=600&auto=format",
    slug: "5-signs-your-tomatoes-are-actually-ripe",
    category: "Vegetables"
  }
];

const Blog = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredPosts = filter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === filter.toLowerCase());
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog & Guides | PickPerfect.org</title>
        <meta name="description" content="Learn how to select the best quality produce with our expert guides and tips." />
      </Helmet>
      
      {/* Back navigation */}
      <div className="bg-muted border-b border-border">
        <div className="container-custom py-3">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
            <Link to="/" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <header className="mb-8">
          <h1 className="heading-1 mb-2">Blog & Guides</h1>
          <p className="text-muted-foreground text-lg">
            Expert tips and advice to help you pick the perfect produce
          </p>
        </header>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All Posts
            </Button>
            <Button 
              variant={filter === "fruits" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("fruits")}
            >
              Fruits
            </Button>
            <Button 
              variant={filter === "vegetables" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("vegetables")}
            >
              Vegetables
            </Button>
            <Button 
              variant={filter === "guides" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("guides")}
            >
              Guides
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-background rounded-lg overflow-hidden shadow-sm border border-border card-hover h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs font-medium bg-background/90 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-leaf-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-medium mb-2">No posts found in this category</p>
            <p className="text-muted-foreground mb-6">Try selecting a different category</p>
            <Button onClick={() => setFilter("all")}>View All Posts</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
