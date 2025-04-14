
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const LatestTips = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <h2 className="heading-2 mb-2">Latest Tips & Guides</h2>
            <p className="text-muted-foreground">
              Fresh advice to help you pick the perfect produce
            </p>
          </div>
          <Button variant="link" asChild className="justify-start sm:justify-center mt-4 sm:mt-0">
            <Link to="/blog" className="flex items-center">
              View All Articles
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
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
      </div>
    </section>
  );
};

export default LatestTips;
