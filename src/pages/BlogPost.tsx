
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Calendar, User, Tag } from "lucide-react";
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
  author?: string;
  content: string;
}

// Sample blog post content
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Tell When an Avocado is Perfectly Ripe",
    excerpt: "Learn the foolproof methods to test avocado ripeness and never cut into an unripe or overripe one again.",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=600&auto=format",
    slug: "how-to-tell-when-avocado-is-perfectly-ripe",
    category: "Fruits",
    author: "Maria Green",
    content: `
      <h2>The Perfect Avocado: A Visual Guide</h2>
      <p>Selecting the perfect avocado can feel like an art form. Too firm, and you'll be waiting days for it to ripen. Too soft, and you'll find brown spots inside. Here's how to get it right every time.</p>
      
      <h3>Visual Cues</h3>
      <p>The color of an avocado can vary by variety. Hass avocados, the most common type, change from bright green to a darker, almost blackish-green when ripe. The skin becomes slightly bumpy rather than smooth.</p>
      
      <h3>The Touch Test</h3>
      <p>The most reliable way to check avocado ripeness is the gentle squeeze test. Place the avocado in your palm and apply gentle pressure - don't use your fingertips as they can bruise the fruit.</p>
      <ul>
        <li><strong>Unripe:</strong> Feels hard and solid</li>
        <li><strong>Nearly Ripe:</strong> Yields slightly to gentle pressure</li>
        <li><strong>Perfectly Ripe:</strong> Yields to gentle pressure but isn't mushy</li>
        <li><strong>Overripe:</strong> Feels mushy or very soft</li>
      </ul>
      
      <h3>The Stem Check</h3>
      <p>Another useful test is to check under the stem. Gently flick off the small stem nub at the top of the avocado:</p>
      <ul>
        <li>If it comes off easily and is green underneath: Perfect ripeness</li>
        <li>If it's difficult to remove: Not yet ripe</li>
        <li>If it's brown underneath: Likely overripe</li>
      </ul>
      
      <h3>How to Ripen an Avocado Quickly</h3>
      <p>If your avocado is unripe, place it in a paper bag with a banana or apple. These fruits release ethylene gas which speeds up the ripening process. Check daily until the avocado reaches your desired ripeness.</p>
      
      <h3>How to Slow Down Ripening</h3>
      <p>Once your avocado is perfectly ripe, store it in the refrigerator. This slows down the ripening process and can extend the perfect-eating window for 2-3 days.</p>
    `
  },
  {
    id: "2",
    title: "The Ultimate Guide to Seasonal Shopping",
    excerpt: "Why buying seasonal produce not only tastes better but is better for your wallet and the environment.",
    date: "April 8, 2025",
    image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=600&auto=format",
    slug: "ultimate-guide-seasonal-shopping",
    category: "Guides",
    author: "Alex Farmer",
    content: `
      <h2>Why Shop Seasonally?</h2>
      <p>Seasonal shopping is more than just a trendy food movement - it's a practice that benefits your health, your wallet, and the environment. Here's why it makes sense to eat with the seasons:</p>
      
      <h3>Better Taste & Nutrition</h3>
      <p>Produce that's in season is harvested at its peak, resulting in more flavorful, nutrient-dense food. Out-of-season produce is often picked before it's fully ripened to withstand long shipping times, compromising both taste and nutritional value.</p>
      
      <h3>Cost Effectiveness</h3>
      <p>Seasonal produce is typically more abundant and therefore less expensive. When farmers have a surplus of an in-season item, prices drop accordingly.</p>
      
      <h3>Environmental Benefits</h3>
      <p>Buying seasonal, especially from local sources, reduces the carbon footprint associated with shipping produce long distances. In-season local produce requires less artificial heating, lighting, and preservatives.</p>
      
      <h3>Seasonal Guide by Region</h3>
      <p>While seasonality varies slightly by region, here's a general guide for the four seasons in North America:</p>
      
      <h4>Spring (March-May)</h4>
      <p>Look for: Asparagus, peas, strawberries, artichokes, new potatoes, and leafy greens like spinach and arugula.</p>
      
      <h4>Summer (June-August)</h4>
      <p>Look for: Tomatoes, corn, berries, stone fruits (peaches, plums), melons, zucchini, and peppers.</p>
      
      <h4>Fall (September-November)</h4>
      <p>Look for: Apples, pears, pumpkins, winter squash, brussels sprouts, cauliflower, and root vegetables.</p>
      
      <h4>Winter (December-February)</h4>
      <p>Look for: Citrus fruits, pomegranates, kale, collards, sweet potatoes, and storage crops like onions and garlic.</p>
      
      <h3>Getting Started</h3>
      <p>Begin by exploring your local farmers' market or subscribing to a CSA (Community Supported Agriculture) box. These are excellent ways to discover what's in season in your specific area. The PickPerfect seasonal calendar is also an excellent reference tool.</p>
    `
  },
  {
    id: "3",
    title: "5 Signs Your Tomatoes Are Actually Ripe",
    excerpt: "Avoid the disappointment of flavorless tomatoes with these expert tips for selecting the perfect ones.",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=600&auto=format",
    slug: "5-signs-your-tomatoes-are-actually-ripe",
    category: "Vegetables",
    author: "Tom Gardner",
    content: `
      <h2>How to Select the Perfect Tomato</h2>
      <p>Tomatoes might be one of the most disappointing produce items when chosen poorly. A beautiful-looking tomato can taste like nothing at all if it's not truly ripe. Here are five foolproof ways to ensure you're selecting tomatoes at their peak.</p>
      
      <h3>1. Deep, Rich Color</h3>
      <p>A ripe tomato should have deep, consistent color all over. For red tomatoes, look for a rich, uniform red rather than ones with orange or yellow patches. For other varieties, make sure the color is vibrant and even across the entire fruit.</p>
      
      <h3>2. Proper Weight</h3>
      <p>A ripe tomato should feel heavy for its size. This indicates juiciness and proper water content - critical for good flavor. Compare similar sized tomatoes by holding one in each hand - the heavier one is likely the better choice.</p>
      
      <h3>3. Slight Give When Pressed</h3>
      <p>A perfectly ripe tomato will yield slightly to gentle pressure but spring back. If it's too hard, it's underripe; if it's mushy, it's overripe. The tomato should feel firm but not rock-hard.</p>
      
      <h3>4. Sweet, Earthy Aroma</h3>
      <p>One of the most reliable indicators is the smell. A ripe tomato should have a sweet, earthy smell at the stem end. If you can't smell anything, the tomato likely won't have much flavor.</p>
      
      <h3>5. Smooth, Shiny Skin</h3>
      <p>The skin of a ripe tomato should feel smooth and have a slight sheen. Avoid tomatoes with wrinkled skin, cracks, bruises, or dark spots.</p>
      
      <h3>Varieties Matter</h3>
      <p>Different tomato varieties have different characteristics when ripe:</p>
      <ul>
        <li><strong>Heirloom tomatoes</strong> often have irregular shapes and may even have small cracks when perfectly ripe.</li>
        <li><strong>Cherry tomatoes</strong> should be plump and firm with a glossy appearance.</li>
        <li><strong>Roma tomatoes</strong> should have a deep red color and feel dense when held.</li>
        <li><strong>Beefsteak tomatoes</strong> should feel heavy and have a slightly softer texture than other varieties when ripe.</li>
      </ul>
      
      <h3>Storage Tips</h3>
      <p>Never refrigerate tomatoes! Cold temperatures destroy their flavor and texture. Instead, store them at room temperature with the stem side up to prevent bruising. Eat them within a few days of reaching peak ripeness for the best flavor experience.</p>
    `
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-muted border-b border-border">
          <div className="container-custom py-3">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
              <Link to="/blog" className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="heading-2 mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/blog">Browse All Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | PickPerfect.org</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="bg-muted border-b border-border">
        <div className="container-custom py-3">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
            <Link to="/blog" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
      
      <article className="pb-16">
        {/* Hero section */}
        <div className="relative h-[40vh] min-h-[300px] max-h-[500px] w-full overflow-hidden bg-muted">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="container-custom pb-8">
              <div className="max-w-4xl">
                <span className="inline-block px-3 py-1 bg-leaf-700 text-white text-sm font-medium rounded-md mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                  {post.author && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article content */}
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              {post.excerpt}
            </p>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Article footer */}
            <div className="border-t border-border mt-12 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Category:</span>
                  <Link 
                    to={`/blog?category=${post.category.toLowerCase()}`}
                    className="inline-flex items-center gap-1 text-leaf-700 hover:text-leaf-800"
                  >
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </Link>
                </div>
                
                <Button asChild>
                  <Link to="/blog">Read More Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
