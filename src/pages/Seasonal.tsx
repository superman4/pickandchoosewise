
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Calendar, Leaf, DollarSign, Apple, Carrot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProduceCard from "@/components/common/ProduceCard";
import { getSeasonalProduce, getCurrentSeason, Season } from "@/utils/seasonalData";
import { Helmet } from "react-helmet";

const monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const Seasonal = () => {
  const currentSeason = getCurrentSeason();
  const [selectedSeason, setSelectedSeason] = useState<Season>(currentSeason);
  const [currentMonth, setCurrentMonth] = useState<string>("");
  const seasonalProduce = getSeasonalProduce(selectedSeason);
  
  // Filter seasonal produce by category
  const fruits = seasonalProduce.filter(item => item.category === 'fruit');
  const vegetables = seasonalProduce.filter(item => item.category === 'vegetable');
  
  useEffect(() => {
    const date = new Date();
    setCurrentMonth(monthNames[date.getMonth()]);
  }, []);

  const monthsInSeason = (season: Season): string => {
    switch (season) {
      case 'winter': return 'December - February';
      case 'spring': return 'March - May';
      case 'summer': return 'June - August';
      case 'fall': return 'September - November';
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Seasonal Produce Calendar | PickPerfect.org</title>
        <meta name="description" content="Browse our seasonal produce calendar to find what fruits and vegetables are at their peak throughout the year." />
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h1 className="heading-1 mb-2">What's In Season: {currentMonth}</h1>
              <p className="text-muted-foreground text-lg">
                Discover the freshest produce available throughout the year
              </p>
            </div>
            <Badge variant="outline" className="text-base py-1 px-3 bg-primary/10">
              Current Season: <span className="font-semibold ml-1 capitalize">{selectedSeason}</span>
            </Badge>
          </div>
          
          <Card className="bg-muted/50 mb-8">
            <CardContent className="pt-6">
              <p className="text-base">
                Eating seasonally ensures you get the freshest, most flavorful produce while 
                supporting sustainable farming practices and reducing environmental impact.
              </p>
            </CardContent>
          </Card>
        </header>
        
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="heading-3">Seasonal Calendar</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mb-6">
            {(["winter", "spring", "summer", "fall"] as Season[]).map((season) => (
              <Card 
                key={season} 
                className={`cursor-pointer transition-all hover:shadow-md ${season === selectedSeason ? 'border-primary ring-2 ring-primary/20' : ''}`}
                onClick={() => setSelectedSeason(season)}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-lg capitalize mb-1">{season}</h3>
                  <p className="text-xs text-muted-foreground">{monthsInSeason(season)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Produce</TabsTrigger>
            <TabsTrigger value="fruits" className="flex items-center gap-1">
              <Apple className="h-4 w-4" /> Fruits
            </TabsTrigger>
            <TabsTrigger value="vegetables" className="flex items-center gap-1">
              <Carrot className="h-4 w-4" /> Vegetables
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <h3 className="heading-4 mb-4 capitalize">{selectedSeason} Seasonal Produce</h3>
            {seasonalProduce.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {seasonalProduce.map((item) => (
                  <ProduceCard 
                    key={item.id} 
                    produce={item} 
                    showCategory
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No produce data available for {selectedSeason}.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="fruits" className="mt-6">
            <h3 className="heading-4 mb-4 capitalize">{selectedSeason} Seasonal Fruits</h3>
            {fruits.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {fruits.map((item) => (
                  <ProduceCard 
                    key={item.id} 
                    produce={item} 
                    showCategory
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No fruits data available for {selectedSeason}.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="vegetables" className="mt-6">
            <h3 className="heading-4 mb-4 capitalize">{selectedSeason} Seasonal Vegetables</h3>
            {vegetables.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {vegetables.map((item) => (
                  <ProduceCard 
                    key={item.id} 
                    produce={item} 
                    showCategory
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No vegetables data available for {selectedSeason}.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="h-5 w-5 text-primary" />
            <h2 className="heading-3">Benefits of Eating Seasonally</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 11.889a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
                      <path d="M12 11.889v11"/>
                      <path d="M12 2.889V0"/>
                      <path d="m17 5 2-2"/>
                      <path d="M5 5 3 3"/>
                      <path d="M19 13h3"/>
                      <path d="M2 13h3"/>
                      <path d="m17 19-2 2"/>
                      <path d="m5 19-2 2"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Better Flavor</h3>
                  <p className="text-muted-foreground">Seasonal produce is harvested at peak ripeness, ensuring the best taste and texture.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Lower Cost</h3>
                  <p className="text-muted-foreground">In-season produce is more abundant and costs less to grow and transport.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.3-4.3"/>
                      <path d="M11 8v6"/>
                      <path d="M8 11h6"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Higher Nutrition</h3>
                  <p className="text-muted-foreground">Seasonal produce contains more nutrients as it's grown under optimal natural conditions.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m2 12 20 0"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Eco-Friendly</h3>
                  <p className="text-muted-foreground">Reduced transportation and storage means a lower carbon footprint.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m8 6 4-4 4 4"/>
              <path d="M12 2v10.3"/>
              <path d="m8 18-4 4 4 4"/>
              <path d="M4 22h16"/>
              <path d="m16 18 4 4-4 4"/>
              <path d="M22 22V12a2 2 0 0 0-2-2h-8"/>
            </svg>
            <h2 className="heading-3">Seasonal Shopping Tips</h2>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span>Visit farmers' markets for the freshest local seasonal produce</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span>Look for vibrant colors and firm textures when selecting produce</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span>Preserve seasonal abundance by freezing, canning, or drying</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span>Plan meals around seasonal produce for better taste and lower cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span>Try new seasonal varieties to expand your palate and nutrition</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Seasonal;
