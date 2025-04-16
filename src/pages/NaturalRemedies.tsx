import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RemedyItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  activeCompounds: string[];
  therapeuticApplications: string[];
  safetyConsiderations?: string[];
}

const remedyItems: RemedyItem[] = [
  {
    id: "honey",
    name: "Honey",
    category: "Natural Sweeteners",
    description: "A natural sweetener with antimicrobial properties and distinct therapeutic benefits",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=600&auto=format",
    activeCompounds: [
      "Hydrogen peroxide",
      "Methylglyoxal (particularly in Manuka honey)",
      "Defensin-1 protein",
      "Flavonoids and phenolic acids",
      "Enzymes including glucose oxidase",
      "Oligosaccharides",
      "Royalisin peptides"
    ],
    therapeuticApplications: [
      "Wound healing support for burns and ulcers",
      "Antimicrobial properties against various bacteria",
      "Cough suppression, especially in children",
      "Gastrointestinal support",
      "Antioxidant activity",
      "Allergic response modulation",
      "Prebiotic support for gut health"
    ],
    safetyConsiderations: [
      "Not recommended for infants under 12 months due to risk of botulism",
      "Diabetes patients should account for honey's carbohydrate content",
      "Medical-grade honey should be used for wound treatment",
      "Different honey varieties have varying medicinal properties",
      "Quality varies with darker varieties typically offering higher medicinal value",
      "Store at room temperature; crystallization is natural"
    ]
  },
  {
    id: "maple-syrup",
    name: "Maple Syrup",
    category: "Natural Sweeteners",
    description: "A mineral-rich sweetener with unique antioxidant compounds",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=600&auto=format",
    activeCompounds: [
      "Quebecol (unique polyphenolic compound)",
      "Phenolic compounds including gallic acid",
      "Lignans with antioxidant effects",
      "Organic acids (succinic, fumaric, malic)",
      "Abscisic acid",
      "Essential minerals",
      "TMHPP with antiproliferative activity"
    ],
    therapeuticApplications: [
      "Antioxidant protection against free radicals",
      "Anti-inflammatory activity",
      "Antimicrobial effects against pathogens",
      "Metabolic regulation through insulin sensitivity",
      "Hepatoprotective properties",
      "Prebiotic potential",
      "Immune system support"
    ],
    safetyConsiderations: [
      "Darker grades contain higher concentrations of beneficial compounds",
      "Monitor blood sugar despite lower glycemic index",
      "Check for pure maple syrup certification",
      "Refrigerate after opening for best preservation",
      "Consider lead content from production equipment",
      "Use within recommended serving sizes"
    ]
  },
  {
    id: "stevia",
    name: "Stevia",
    category: "Natural Sweeteners",
    description: "A zero-calorie sweetener with potential metabolic benefits",
    image: "https://images.unsplash.com/photo-1628961886791-ea163da4e2d7?q=80&w=600&auto=format",
    activeCompounds: [
      "Steviol glycosides (stevioside, rebaudioside A-F)",
      "Flavonoids (apigenin, kaempferol, quercetin)",
      "Phenolic compounds",
      "Chlorophylls in less processed forms",
      "Essential oils in whole leaf preparations"
    ],
    therapeuticApplications: [
      "Blood glucose regulation without insulin impact",
      "Blood pressure modulation",
      "Dental protection against bacteria",
      "Anti-inflammatory effects",
      "Potential anticancer properties",
      "Weight management support"
    ],
    safetyConsiderations: [
      "FDA GRAS status for purified steviol glycosides only",
      "ADI established at 4 mg/kg body weight",
      "Possible allergic reactions in Asteraceae family sensitivity",
      "Heat stable up to 392°F (200°C)",
      "Taste varies by product concentration",
      "Monitor for possible medication interactions"
    ]
  },
  {
    id: "3",
    name: "Ginger",
    category: "Roots",
    description: "A spicy root with powerful digestive, anti-inflammatory and immune-boosting properties.",
    image: "https://images.unsplash.com/photo-1603431777007-20257ef10494?q=80&w=600&auto=format",
    activeCompounds: [
      "Gingerols (primary active components)",
      "Shogaols",
      "Paradols",
      "Zingerone",
      "Volatile oils including zingiberene"
    ],
    therapeuticApplications: [
      "Antiemetic effects for nausea and vomiting",
      "Digestive health support and reduced bloating",
      "Anti-inflammatory actions for pain management",
      "Immune system support",
      "Potential metabolic health benefits"
    ],
    safetyConsiderations: [
      "Generally recognized as safe in food amounts",
      "May interact with blood thinners and certain medications",
      "Available in various forms including fresh, dried, capsules and teas",
      "For nausea, doses of 1-1.5g of dried ginger are typically effective"
    ]
  },
  {
    id: "4",
    name: "Garlic",
    category: "Bulbs",
    description: "A pungent bulb with powerful antimicrobial, cardiovascular and immune-enhancing effects.",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=600&auto=format",
    activeCompounds: [
      "Allicin (formed when fresh garlic is crushed)",
      "Diallyl disulfide and diallyl trisulfide",
      "S-allyl cysteine",
      "Ajoene",
      "Flavonoids and selenium"
    ],
    therapeuticApplications: [
      "Cardiovascular protection and blood pressure regulation",
      "Antimicrobial activity against bacteria, viruses and fungi",
      "Immune system enhancement",
      "Potential cancer prevention properties",
      "Antioxidant effects"
    ],
    safetyConsiderations: [
      "May interact with blood thinners and certain medications",
      "Therapeutic doses may cause breath odor and digestive upset",
      "Aged garlic extract provides benefits with reduced side effects",
      "Typical dosage is 600-1200mg extract or 1-2 fresh cloves daily"
    ]
  },
  {
    id: "5",
    name: "Aloe Vera",
    category: "Succulents",
    description: "A succulent plant with healing gel that provides skin, digestive and immune system benefits.",
    image: "https://images.unsplash.com/photo-1596274629241-11d54cd0f025?q=80&w=600&auto=format",
    activeCompounds: [
      "Acemannan (polysaccharide)",
      "Aloin and barbaloin",
      "Salicylic acid",
      "Plant sterols",
      "Vitamins (A, C, E) and minerals"
    ],
    therapeuticApplications: [
      "Skin healing for burns, cuts and various skin conditions",
      "Digestive support for IBS and acid reflux",
      "Potential blood sugar management",
      "Oral health benefits",
      "Immune system modulation"
    ],
    safetyConsiderations: [
      "Topical aloe is generally safe for most people",
      "Aloe latex has strong laxative effects and is not recommended",
      "May interact with certain medications",
      "Quality varies significantly between commercial products"
    ]
  },
  {
    id: "6",
    name: "Peppermint",
    category: "Herbs",
    description: "A refreshing herb that provides digestive relief, headache treatment and respiratory benefits.",
    image: "https://images.unsplash.com/photo-1509913841876-b8a297b4e240?q=80&w=600&auto=format",
    activeCompounds: [
      "Menthol (primary active compound)",
      "Menthone",
      "Limonene",
      "Cineole",
      "Flavonoids and phenolic acids"
    ],
    therapeuticApplications: [
      "Digestive relief for IBS and bloating",
      "Headache treatment through topical application",
      "Respiratory benefits as decongestant and expectorant",
      "Antimicrobial activity against various bacteria",
      "Muscle pain relief through cooling analgesic effects"
    ],
    safetyConsiderations: [
      "Enteric-coated capsules recommended for IBS treatment",
      "May worsen GERD symptoms in some individuals",
      "May interact with medications metabolized by the liver",
      "Available in teas, oils, capsules and topical preparations"
    ]
  }
];

const categoriesList = ["All", "Natural Sweeteners", "Spices", "Roots", "Bulbs", "Succulents", "Herbs"];

const NaturalRemedies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<RemedyItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("compounds");
  
  const filteredItems = selectedCategory === "All" 
    ? remedyItems 
    : remedyItems.filter(item => item.category === selectedCategory);

  const handleItemClick = (item: RemedyItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Natural Remedies | PickPerfect.org</title>
        <meta name="description" content="Discover the therapeutic properties and benefits of natural remedies, from honey and turmeric to aloe vera and peppermint." />
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
          <h1 className="heading-1 mb-2">Natural Remedies</h1>
          <p className="text-muted-foreground text-lg">
            How to select and use natural remedies with medicinal properties
          </p>
        </header>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categoriesList.map(category => (
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
                
                <h4 className="font-medium mb-2">Therapeutic Applications</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {item.therapeuticApplications.slice(0, 3).map((application, index) => (
                    <li key={index} className="text-sm text-muted-foreground">{application}</li>
                  ))}
                  {item.therapeuticApplications.length > 3 && (
                    <li className="text-sm text-muted-foreground">
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-sm"
                        onClick={() => handleItemClick(item)}
                      >
                        + {item.therapeuticApplications.length - 3} more
                      </Button>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg mb-2">No natural remedies found in this category.</p>
            <p className="text-muted-foreground mb-6">We're continually adding new remedies to our guide.</p>
            <Button onClick={() => setSelectedCategory("All")}>View All Natural Remedies</Button>
          </div>
        )}
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedItem && (
            <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto">
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
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="compounds">Active Compounds</TabsTrigger>
                    <TabsTrigger value="applications">Therapeutic Uses</TabsTrigger>
                    <TabsTrigger value="safety">Safety & Usage</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="compounds" className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">Active Compounds</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedItem.activeCompounds.map((compound, index) => (
                        <li key={index} className="text-muted-foreground">{compound}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="applications" className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">Therapeutic Applications</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedItem.therapeuticApplications.map((application, index) => (
                        <li key={index} className="text-muted-foreground">{application}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="safety" className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">Safety Considerations</h3>
                    {selectedItem.safetyConsiderations && selectedItem.safetyConsiderations.length > 0 ? (
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedItem.safetyConsiderations.map((consideration, index) => (
                          <li key={index} className="text-muted-foreground">{consideration}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">Information on safety considerations not available.</p>
                    )}
                    
                    <div className="mt-4 p-3 bg-muted rounded-md">
                      <p className="text-sm text-muted-foreground">
                        <strong>Disclaimer:</strong> This information is provided for educational purposes only and is not intended to replace professional medical advice. 
                        Always consult with a healthcare provider before starting any new treatment.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </DialogContent>
          )}
        </Dialog>
        
        <div className="mt-12 p-8 bg-muted rounded-lg text-center">
          <h2 className="heading-3 mb-3">Natural Remedies Guide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our natural remedies guide provides evidence-based information on herbal and natural treatments.
            Always consult with a healthcare professional before using medicinal herbs or natural remedies, 
            especially if you have existing health conditions or are taking medications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NaturalRemedies;
