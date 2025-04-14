
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

interface BlogContent {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  author: string;
  content: string;
}

// This would typically come from a database or API
const blogContents: Record<string, BlogContent> = {
  "how-to-tell-when-avocado-is-perfectly-ripe": {
    id: "1",
    title: "How to Tell When an Avocado is Perfectly Ripe",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=1200&auto=format",
    category: "Fruits",
    author: "Maria Rodriguez",
    content: `
      <p>There's nothing more disappointing than cutting into an avocado that's either rock hard or brown and mushy inside. Learning how to select perfectly ripe avocados will ensure you always get that creamy, buttery texture and rich flavor that makes avocados so popular.</p>

      <h2>The Color Test</h2>
      <p>For Hass avocados (the most common variety), color is your first indicator:</p>
      <ul>
        <li><strong>Bright green</strong>: Underripe, will need several days to ripen</li>
        <li><strong>Green with dark speckles</strong>: Beginning to ripen, will be ready in 1-2 days</li>
        <li><strong>Dark green to nearly black</strong>: Likely ripe and ready to eat</li>
      </ul>
      <p>Remember that color alone isn't sufficient - always combine with the other tests below.</p>

      <h2>The Feel Test</h2>
      <p>This is the most reliable method for testing ripeness:</p>
      <ol>
        <li>Hold the avocado in the palm of your hand (don't use your fingertips, which could bruise it)</li>
        <li>Gently squeeze with your whole hand</li>
        <li>A perfectly ripe avocado will yield slightly to gentle pressure, but won't feel mushy</li>
      </ol>
      <p>If it feels hard with no give, it needs more time to ripen. If it feels very soft or mushy, it's overripe.</p>

      <h2>The Stem Test</h2>
      <p>This is a great final check before purchasing:</p>
      <ol>
        <li>Flick off the small stem nub at the top of the avocado</li>
        <li>Look at what's revealed underneath:</li>
        <ul>
          <li><strong>Green</strong>: Perfectly ripe!</li>
          <li><strong>Brown</strong>: Overripe, likely has brown spots inside</li>
          <li><strong>Stem doesn't come off easily</strong>: Underripe</li>
        </ul>
      </ol>

      <h2>How to Ripen Avocados at Home</h2>
      <p>If your avocado isn't quite ready yet:</p>
      <ul>
        <li>Place it in a paper bag with a banana or apple</li>
        <li>Close the bag and leave at room temperature</li>
        <li>Check daily for ripeness</li>
        <li>Once perfectly ripe, refrigerate to slow further ripening for 1-2 days</li>
      </ul>

      <h2>Storing Cut Avocados</h2>
      <p>If you've cut into an avocado and want to save the unused portion:</p>
      <ol>
        <li>Leave the pit in the unused half</li>
        <li>Sprinkle with lemon or lime juice</li>
        <li>Wrap tightly in plastic wrap (directly against the flesh)</li>
        <li>Refrigerate and use within 1-2 days</li>
      </ol>

      <p>With these tips, you'll never waste money on disappointing avocados again!</p>
    `
  },
  "ultimate-guide-seasonal-shopping": {
    id: "2",
    title: "The Ultimate Guide to Seasonal Shopping",
    date: "April 8, 2025",
    image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=1200&auto=format",
    category: "Guides",
    author: "James Chen",
    content: `
      <p>Seasonal shopping isn't just a trend – it's a return to how humans have eaten for thousands of years before global shipping and greenhouse growing became the norm. In this guide, we'll explore why seasonal eating matters and how to make the most of each season's bounty.</p>

      <h2>Why Buy Seasonal Produce?</h2>
      <h3>1. Better Flavor</h3>
      <p>Produce that's grown and harvested in its proper season simply tastes better. Fruits and vegetables develop more natural sugars and flavors when they grow in their ideal conditions and are picked at peak ripeness.</p>

      <h3>2. Higher Nutritional Value</h3>
      <p>Studies show that produce loses nutrients over time after harvest. Seasonal items typically spend less time in transit and storage, which helps preserve their nutritional content.</p>

      <h3>3. More Affordable</h3>
      <p>When produce is in season locally, it's more abundant and doesn't require expensive shipping from distant regions, resulting in lower prices at the market.</p>

      <h3>4. Environmental Benefits</h3>
      <p>Seasonal shopping reduces the carbon footprint associated with long-distance food transportation and energy-intensive greenhouse growing methods.</p>

      <h2>Seasonal Produce Calendar</h2>
      <p>Here's a quick overview of what's typically in season during each season:</p>

      <h3>Spring</h3>
      <ul>
        <li>Asparagus, artichokes, peas, radishes</li>
        <li>Strawberries, rhubarb, apricots</li>
        <li>Spring greens, spinach, arugula</li>
      </ul>

      <h3>Summer</h3>
      <ul>
        <li>Tomatoes, zucchini, corn, peppers, eggplant</li>
        <li>Berries, melons, stone fruits (peaches, plums, etc.)</li>
        <li>Fresh herbs, green beans</li>
      </ul>

      <h3>Fall</h3>
      <ul>
        <li>Winter squash, pumpkins, sweet potatoes</li>
        <li>Apples, pears, figs, grapes</li>
        <li>Broccoli, cauliflower, Brussels sprouts</li>
      </ul>

      <h3>Winter</h3>
      <ul>
        <li>Root vegetables (turnips, parsnips, etc.)</li>
        <li>Citrus fruits, pomegranates, persimmons</li>
        <li>Winter greens (kale, chard), cabbage</li>
      </ul>

      <h2>Tips for Successful Seasonal Shopping</h2>
      <ol>
        <li>Visit farmers' markets where vendors typically sell what's currently in season locally</li>
        <li>Learn to preserve seasonal abundance through freezing, canning, or fermenting</li>
        <li>Be flexible with your meal planning and let what's fresh inspire your cooking</li>
        <li>Develop relationships with local farmers to learn about upcoming seasonal offerings</li>
      </ol>

      <p>By embracing seasonal eating, you'll not only enjoy tastier and more nutritious food, but you'll also connect more deeply with the natural cycles of the year and the agricultural traditions of your region.</p>
    `
  },
  "5-signs-your-tomatoes-are-actually-ripe": {
    id: "3",
    title: "5 Signs Your Tomatoes Are Actually Ripe",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=1200&auto=format",
    category: "Vegetables",
    author: "Priya Sharma",
    content: `
      <p>Few things are more disappointing than a pale, mealy, flavorless tomato. Unfortunately, many tomatoes in stores are picked underripe to withstand shipping and never develop their full flavor potential. Here are the five key indicators that will help you select truly ripe, flavorful tomatoes every time.</p>

      <h2>1. Rich, Uniform Color</h2>
      <p>A truly ripe tomato should have deep, vibrant color all over, with no green patches (unless it's a variety that stays partially green when ripe). Different varieties have different colors when ripe:</p>
      <ul>
        <li>Red varieties should be deep red, not pink or orange-red</li>
        <li>Yellow tomatoes should have a golden hue</li>
        <li>Heirloom varieties can be purple, striped, or multicolored, but should still have rich, developed coloration</li>
      </ul>

      <h2>2. The Right Feel</h2>
      <p>The perfect tomato should:</p>
      <ul>
        <li>Feel heavy for its size (indicating high water content and juiciness)</li>
        <li>Yield slightly to gentle pressure - not too firm and definitely not soft</li>
        <li>Have taut, smooth skin without wrinkles</li>
      </ul>
      <p>Avoid tomatoes that feel too hard (underripe) or too soft/squishy (overripe).</p>

      <h2>3. The Smell Test</h2>
      <p>This is perhaps the most reliable indicator of flavor. A ripe tomato should:</p>
      <ul>
        <li>Have a sweet, earthy aroma at the stem end</li>
        <li>Smell distinctly "tomato-y" - this aroma comes from volatile compounds that develop only in properly ripened fruit</li>
      </ul>
      <p>If a tomato has little to no smell, it will likely have little flavor as well.</p>

      <h2>4. Stems and Texture</h2>
      <p>Look for these positive indicators:</p>
      <ul>
        <li>A slight softening at the bottom (blossom end) of the tomato</li>
        <li>If vine-ripened, the stem should be fresh-looking and green, not dried out</li>
        <li>Skin should be slightly shiny but not dull or overly glossy</li>
      </ul>

      <h2>5. Seasonal Awareness</h2>
      <p>The best tomatoes are seasonal and local:</p>
      <ul>
        <li>In most regions, peak tomato season is summer through early fall</li>
        <li>Locally grown, in-season tomatoes are picked closer to ripeness</li>
        <li>Heirloom varieties from farmers' markets or garden plots typically offer superior flavor</li>
      </ul>

      <h2>Storage Tips for Perfect Tomatoes</h2>
      <p>Once you've selected ripe tomatoes:</p>
      <ul>
        <li>Never refrigerate uncut tomatoes - cold temperatures destroy their flavor and texture</li>
        <li>Store at room temperature, stem-side down</li>
        <li>Keep them in a single layer, not stacked, to prevent bruising</li>
        <li>Use ripe tomatoes within 2-3 days for best quality</li>
      </ul>

      <p>By paying attention to these five indicators, you'll dramatically increase your chances of enjoying truly flavorful tomatoes rather than the disappointing, mealy specimens that give this wonderful fruit a bad reputation.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (slug) {
      // Simulate API fetch
      setTimeout(() => {
        const content = blogContents[slug];
        if (content) {
          setPost(content);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      }, 300);
    }
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading article...</p>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the article you're looking for.
        </p>
        <Button asChild>
          <Link to="/blog">Browse All Articles</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | PickPerfect.org</title>
        <meta name="description" content={post.title} />
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
      
      <article className="container-custom py-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-muted rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="heading-1 mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm">By {post.author}</span>
            </div>
            
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover" 
              />
            </div>
          </header>
          
          <div 
            className="prose prose-slate max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Keep Learning</h3>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link to="/blog">More Articles</Link>
              </Button>
              <Button asChild>
                <Link to={post.category === "Fruits" ? "/fruits" : "/vegetables"}>
                  Browse {post.category}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
