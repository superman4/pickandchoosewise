
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GuideItem {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  slug: string;
}

const guides: GuideItem[] = [
  {
    id: "1",
    title: "Seasonal Shopping Guide",
    description: "Learn what produce is in season for each month of the year and how to select the best items.",
    image: "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=600&auto=format",
    type: "shopping",
    slug: "seasonal-shopping-guide"
  },
  {
    id: "2",
    title: "Ripeness Testing Methods",
    description: "Master the art of testing fruits and vegetables for optimal ripeness using all your senses.",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=600&auto=format",
    type: "selection",
    slug: "ripeness-testing-methods"
  },
  {
    id: "3",
    title: "Storage Solutions",
    description: "The best ways to store different types of produce to maximize freshness and shelf life.",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=600&auto=format",
    type: "storage",
    slug: "storage-solutions"
  },
  {
    id: "4",
    title: "From Garden to Table",
    description: "How to harvest and prepare homegrown produce for the best flavor and nutrition.",
    image: "https://images.unsplash.com/photo-1557844352-761f2565b576?q=80&w=600&auto=format",
    type: "growing",
    slug: "garden-to-table"
  },
  {
    id: "5",
    title: "Farmers' Market Navigator",
    description: "Tips for making the most of your farmers' market trips and finding the best produce.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=600&auto=format",
    type: "shopping",
    slug: "farmers-market-navigator"
  },
  {
    id: "6",
    title: "Produce Shelf Life Reference",
    description: "A comprehensive guide to how long different fruits and vegetables stay fresh.",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=600&auto=format",
    type: "storage",
    slug: "shelf-life-reference"
  }
];

const Guides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Selection Guides | PickPerfect.org</title>
        <meta name="description" content="Comprehensive guides to help you select, store, and enjoy the best quality produce." />
      </Helmet>
      
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
          <h1 className="heading-1 mb-2">Selection Guides</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive guides to help you select and store produce like a pro
          </p>
        </header>
        
        <Tabs defaultValue="all" className="mb-12">
          <TabsList>
            <TabsTrigger value="all">All Guides</TabsTrigger>
            <TabsTrigger value="shopping">Shopping</TabsTrigger>
            <TabsTrigger value="selection">Selection</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
            <TabsTrigger value="growing">Growing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map(guide => (
                <Link key={guide.id} to={`/guides/${guide.slug}`} className="group">
                  <Card className="overflow-hidden h-full card-hover">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <div className="mb-2">
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded capitalize">
                          {guide.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-leaf-700 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {guide.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
          
          {["shopping", "selection", "storage", "growing"].map(type => (
            <TabsContent key={type} value={type} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides
                  .filter(guide => guide.type === type)
                  .map(guide => (
                    <Link key={guide.id} to={`/guides/${guide.slug}`} className="group">
                      <Card className="overflow-hidden h-full card-hover">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={guide.image} 
                            alt={guide.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="pt-6">
                          <div className="mb-2">
                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded capitalize">
                              {guide.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-leaf-700 transition-colors">
                            {guide.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {guide.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
              
              {guides.filter(guide => guide.type === type).length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No guides available for this category yet. Check back soon!
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="heading-3 mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're constantly adding new guides to help you pick the perfect produce. 
            Sign up for our newsletter to get notified when new content is added.
          </p>
          <Button asChild>
            <Link to="/#newsletter">Subscribe to Updates</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Guides;
