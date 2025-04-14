
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduceDetailBySlug, ProduceDetail as ProduceDetailType } from "@/utils/produceData";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ProduceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [produce, setProduce] = useState<ProduceDetailType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (slug) {
      const produceData = getProduceDetailBySlug(slug);
      setProduce(produceData);
      setLoading(false);
    }
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  
  if (!produce) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Item Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the produce item you're looking for.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/fruits">Browse Fruits</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/vegetables">Browse Vegetables</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  // Format season names with first letter uppercase
  const formatSeason = (season: string) => {
    return season.charAt(0).toUpperCase() + season.slice(1);
  };
  
  // Map difficulty to a color
  const difficultyColor = () => {
    switch (produce.difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-amber-100 text-amber-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const backLink = produce.category === 'fruit' ? '/fruits' : '/vegetables';
  const categoryName = produce.category === 'fruit' ? 'Fruits' : 'Vegetables';
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{produce.name} Selection Guide | PickPerfect.org</title>
        <meta 
          name="description" 
          content={`Learn how to pick the perfect ${produce.name} every time with our expert guide on selection, ripeness indicators, and storage.`}
        />
      </Helmet>
      
      <div className="bg-muted border-b border-border">
        <div className="container-custom py-3">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
            <Link to={backLink} className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to {categoryName}
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
              <img 
                src={produce.images.main} 
                alt={produce.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-muted rounded-md overflow-hidden">
                <img
                  src={produce.images.ripe}
                  alt={`Ripe ${produce.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-muted rounded-md overflow-hidden">
                <img
                  src={produce.images.underripe}
                  alt={`Underripe ${produce.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-muted rounded-md overflow-hidden">
                <img
                  src={produce.images.overripe}
                  alt={`Overripe ${produce.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h1 className="heading-1 mb-2">{produce.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{categoryName.slice(0, -1)}</Badge>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColor()}`}>
                  {produce.difficulty.charAt(0).toUpperCase() + produce.difficulty.slice(1)} to pick
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Best seasons:</span>
                {produce.seasons.map((season) => (
                  <Badge key={season} variant="secondary">
                    {formatSeason(season)}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Tabs defaultValue="selection" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="selection">Selection</TabsTrigger>
                <TabsTrigger value="ripening">Ripening</TabsTrigger>
                <TabsTrigger value="storage">Storage</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              </TabsList>
              
              <TabsContent value="selection" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">How to Select</h3>
                    
                    {produce.selectionCriteria.visual.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Visual Indicators</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {produce.selectionCriteria.visual.map((tip, index) => (
                            <li key={index} className="text-muted-foreground">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {produce.selectionCriteria.touch.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Touch Test</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {produce.selectionCriteria.touch.map((tip, index) => (
                            <li key={index} className="text-muted-foreground">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {produce.selectionCriteria.smell.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Smell Test</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {produce.selectionCriteria.smell.map((tip, index) => (
                            <li key={index} className="text-muted-foreground">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {produce.selectionCriteria.sound.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Sound Test</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {produce.selectionCriteria.sound.map((tip, index) => (
                            <li key={index} className="text-muted-foreground">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {produce.commonIssues.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Common Issues to Avoid</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {produce.commonIssues.map((issue, index) => (
                            <li key={index} className="text-muted-foreground">{issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ripening" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Ripening Tips</h3>
                    
                    {produce.ripeningTips.speedUp.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">To Speed Up Ripening</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {produce.ripeningTips.speedUp.map((tip, index) => (
                            <li key={index} className="text-muted-foreground">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {produce.ripeningTips.slowDown.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">To Slow Down Ripening</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {produce.ripeningTips.slowDown.map((tip, index) => (
                            <li key={index} className="text-muted-foreground">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="storage" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Storage Tips</h3>
                    
                    <ul className="list-disc pl-5 space-y-1">
                      {produce.storage.map((tip, index) => (
                        <li key={index} className="text-muted-foreground">{tip}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="nutrition" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Nutritional Benefits</h3>
                    
                    <ul className="list-disc pl-5 space-y-1">
                      {produce.nutrition.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {produce.relatedItems && produce.relatedItems.length > 0 && (
          <div className="mt-12">
            <h2 className="heading-3 mb-6">Related Produce</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Would populate with related produce items */}
              {produce.relatedItems.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProduceDetail;
