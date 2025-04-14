
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProduceCard from "@/components/common/ProduceCard";
import { getSeasonalProduce, getCurrentSeason, Season } from "@/utils/seasonalData";
import { Helmet } from "react-helmet";

const Seasonal = () => {
  const currentSeason = getCurrentSeason();
  const [selectedSeason, setSelectedSeason] = useState<Season>(currentSeason);
  const seasonalProduce = getSeasonalProduce(selectedSeason);

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
          <h1 className="heading-1 mb-2">Seasonal Produce Calendar</h1>
          <p className="text-muted-foreground text-lg">
            Discover what's fresh and in-season throughout the year
          </p>
        </header>
        
        <Tabs defaultValue={currentSeason} onValueChange={(value) => setSelectedSeason(value as Season)}>
          <TabsList className="mb-8">
            <TabsTrigger value="spring">Spring</TabsTrigger>
            <TabsTrigger value="summer">Summer</TabsTrigger>
            <TabsTrigger value="fall">Fall</TabsTrigger>
            <TabsTrigger value="winter">Winter</TabsTrigger>
          </TabsList>

          {(["spring", "summer", "fall", "winter"] as Season[]).map((season) => (
            <TabsContent key={season} value={season} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {season === selectedSeason && 
                  seasonalProduce.map((item) => (
                    <ProduceCard 
                      key={item.id} 
                      produce={item} 
                      showCategory
                    />
                  ))}
              </div>
              
              {seasonalProduce.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No produce data available for {season.charAt(0).toUpperCase() + season.slice(1)}.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Seasonal;
