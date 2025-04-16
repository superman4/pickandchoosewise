
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface PantryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  selectionTips: string[];
  storageTips?: string[];
}

const pantryItems: PantryItem[] = [
  {
    id: "1",
    name: "Extra Virgin Olive Oil",
    category: "Oils",
    description: "A staple in Mediterranean cooking known for its health benefits and distinct flavor.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format",
    selectionTips: [
      "Look for oil in dark glass bottles that protect from light",
      "Check the harvest date - fresher is better",
      "Good quality oil should have a peppery finish",
      "Premium oils will list the olive varieties used"
    ],
    storageTips: [
      "Store in a cool, dark place away from heat sources",
      "Best used within 6 months after opening",
      "Keep tightly sealed to prevent oxidation",
      "Avoid storing near the stove or oven"
    ]
  },
  {
    id: "2",
    name: "Quinoa",
    category: "Grains",
    description: "A protein-rich ancient grain that cooks quickly and works in many dishes.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format",
    selectionTips: [
      "Check packaging dates for freshness",
      "Look for uniform, small grains",
      "Available in white, red, and black varieties",
      "Pre-rinsed varieties save time in preparation"
    ],
    storageTips: [
      "Store in an airtight container",
      "Keep in a cool, dry place for up to a year",
      "Can be frozen to extend shelf life",
      "Rinse before cooking to remove saponins"
    ]
  },
  {
    id: "3",
    name: "Raw Honey",
    category: "Sweeteners",
    description: "Natural sweetener with antimicrobial properties and distinct floral notes.",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=600&auto=format",
    selectionTips: [
      "Look for 'raw' and 'unfiltered' on the label",
      "Local honey often has stronger flavor profiles",
      "Crystallization is natural and indicates purity",
      "Darker honey typically has stronger flavor"
    ],
    storageTips: [
      "Store at room temperature in a tightly sealed container",
      "No need to refrigerate - honey has an indefinite shelf life",
      "If crystallized, place jar in warm water to return to liquid state",
      "Use clean utensils to prevent contamination"
    ]
  },
  {
    id: "4",
    name: "Dried Beans",
    category: "Legumes",
    description: "Versatile protein source with long shelf life and numerous culinary applications.",
    image: "https://images.unsplash.com/photo-1515543904379-3d757abe62c1?q=80&w=600&auto=format",
    selectionTips: [
      "Look for beans with uniform size and color",
      "Avoid beans with cracks or significant discoloration",
      "Fresher dried beans cook faster and more evenly",
      "Store in airtight containers for maximum shelf life"
    ],
    storageTips: [
      "Store in airtight containers in a cool, dry place",
      "Can last 1-2 years when properly stored",
      "Label containers with purchase date",
      "Older beans will require longer cooking times"
    ]
  },
  {
    id: "5",
    name: "Spices",
    category: "Spices",
    description: "Essential flavor enhancers that can transform simple dishes into culinary masterpieces.",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c4adc?q=80&w=600&auto=format",
    selectionTips: [
      "Buy whole spices when possible for longer shelf life",
      "Choose smaller quantities to ensure freshness",
      "Look for vibrant colors and strong aromas",
      "Consider toasting whole spices before grinding"
    ],
    storageTips: [
      "Store in airtight containers away from heat and light",
      "Ground spices keep for about 6 months",
      "Whole spices can last 1-2 years",
      "Label with purchase dates to track freshness"
    ]
  },
  {
    id: "6",
    name: "Nuts & Seeds",
    category: "Nuts & Seeds",
    description: "Nutrient-dense foods that add texture, flavor, and protein to many dishes.",
    image: "https://images.unsplash.com/photo-1525351159099-81893194469e?q=80&w=600&auto=format",
    selectionTips: [
      "Look for plump, uniform nuts without shriveling",
      "Avoid discolored or moldy nuts",
      "Buy raw nuts for maximum versatility",
      "Seeds should be firm and not broken"
    ],
    storageTips: [
      "Store in airtight containers in the refrigerator or freezer",
      "Nuts and seeds contain oils that can go rancid at room temperature",
      "Can last 6-12 months in the freezer",
      "Toast before using for enhanced flavor"
    ]
  }
];

const categories = ["All", "Oils", "Grains", "Sweeteners", "Legumes", "Spices", "Nuts & Seeds"];

const Pantry = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PantryItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const filteredItems = selectedCategory === "All" 
    ? pantryItems 
    : pantryItems.filter(item => item.category === selectedCategory);

  const handleItemClick = (item: PantryItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pantry Items | PickPerfect.org</title>
        <meta name="description" content="Learn how to select quality pantry staples, from oils and grains to spices and nuts." />
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
          <h1 className="heading-1 mb-2">Pantry Items</h1>
          <p className="text-muted-foreground text-lg">
            How to select quality pantry staples for your kitchen
          </p>
        </header>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Card key={item.id} className="overflow-hidden h-full">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="mb-1">
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleItemClick(item)}
                    aria-label={`More info about ${item.name}`}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <h4 className="font-medium mb-2">Selection Tips</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {item.selectionTips.map((tip, index) => (
                    <li key={index} className="text-sm text-muted-foreground">{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg mb-2">No pantry items found in this category.</p>
            <p className="text-muted-foreground mb-6">We're continually adding new items to our guide.</p>
            <Button onClick={() => setSelectedCategory("All")}>View All Pantry Items</Button>
          </div>
        )}
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedItem && (
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedItem.name}</DialogTitle>
                <DialogDescription>{selectedItem.description}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Selection Tips</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedItem.selectionTips.map((tip, index) => (
                        <li key={index} className="text-sm text-muted-foreground">{tip}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedItem.storageTips && (
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Storage Tips</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedItem.storageTips.map((tip, index) => (
                          <li key={index} className="text-sm text-muted-foreground">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
        
        <div className="mt-12 p-8 bg-muted rounded-lg text-center">
          <h2 className="heading-3 mb-3">Coming Soon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're working on expanding our pantry items guide with more categories including specialty ingredients, 
            nuts, seeds, and international pantry essentials. Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pantry;
