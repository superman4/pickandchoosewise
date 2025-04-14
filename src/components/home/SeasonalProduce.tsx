
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProduceCard from "@/components/common/ProduceCard";
import { getSeasonalProduce, getCurrentSeason, ProduceItem, Season } from "@/utils/seasonalData";

const SeasonalProduce = () => {
  const currentSeason = getCurrentSeason();
  const [selectedSeason, setSelectedSeason] = useState<Season>(currentSeason);
  const [produce, setProduce] = useState<ProduceItem[]>([]);

  useEffect(() => {
    setProduce(getSeasonalProduce(selectedSeason));
  }, [selectedSeason]);

  // Convert season first letter to uppercase for display
  const formatSeason = (season: Season) => {
    return season.charAt(0).toUpperCase() + season.slice(1);
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <h2 className="heading-2 mb-2">What's in Season</h2>
            <p className="text-muted-foreground">
              The freshest produce you should be looking for right now
            </p>
          </div>
          <Button variant="link" asChild className="justify-start sm:justify-center mt-4 sm:mt-0">
            <Link to="/seasonal" className="flex items-center">
              View Full Calendar
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>

        <Tabs defaultValue={currentSeason} onValueChange={(value) => setSelectedSeason(value as Season)}>
          <TabsList className="mb-8">
            <TabsTrigger value="spring">Spring</TabsTrigger>
            <TabsTrigger value="summer">Summer</TabsTrigger>
            <TabsTrigger value="fall">Fall</TabsTrigger>
            <TabsTrigger value="winter">Winter</TabsTrigger>
          </TabsList>

          {["spring", "summer", "fall", "winter"].map((season) => (
            <TabsContent key={season} value={season} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {season === selectedSeason && 
                  produce.map((item) => (
                    <ProduceCard key={item.id} produce={item} />
                  ))}
              </div>
              
              {produce.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No produce data available for {formatSeason(selectedSeason)}.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SeasonalProduce;
