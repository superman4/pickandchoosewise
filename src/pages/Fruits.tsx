
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProduceCard from "@/components/common/ProduceCard";
import { getFruitsList } from "@/utils/produceData";
import { Season } from "@/utils/seasonalData";
import ProduceFilters, { FilterState, Difficulty } from "@/components/filters/ProduceFilters";

const isValidSeason = (value: string): value is Season => {
  return ['winter', 'spring', 'summer', 'fall'].includes(value);
};

const Fruits = () => {
  const emptyDifficulties: Difficulty[] = [];
  const emptySeasons: Season[] = [];
  
  const [filters, setFilters] = useState<FilterState>({
    difficulty: emptyDifficulties,
    seasons: emptySeasons,
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const fruits = getFruitsList();
  
  const filteredFruits = fruits.filter(fruit => {
    if (filters.difficulty.length === 0 && filters.seasons.length === 0) {
      return true;
    }
    
    const difficultyMatch = filters.difficulty.length === 0 || 
      filters.difficulty.includes(fruit.difficulty as Difficulty);
    
    const seasonMatch = filters.seasons.length === 0 || 
      fruit.seasons.some(season => 
        filters.seasons.includes(season as Season)
      );
    
    return difficultyMatch && seasonMatch;
  });
  
  const toggleFilter = (type: 'difficulty' | 'seasons', value: string) => {
    setFilters(prev => {
      if (type === 'difficulty') {
        const difficultyValue = value as Difficulty;
        const currentFilters = [...prev.difficulty];
        
        if (currentFilters.includes(difficultyValue)) {
          return {
            ...prev,
            difficulty: currentFilters.filter(v => v !== difficultyValue)
          };
        } else {
          return {
            ...prev,
            difficulty: [...currentFilters, difficultyValue]
          };
        }
      } else {
        if (isValidSeason(value)) {
          const currentFilters = [...prev.seasons];
          
          if (currentFilters.includes(value)) {
            return {
              ...prev,
              seasons: currentFilters.filter(v => v !== value)
            };
          } else {
            const newSeasons: Season[] = [...currentFilters, value];
            return {
              ...prev,
              seasons: newSeasons
            };
          }
        }
        
        return prev;
      }
    });
  };
  
  const clearFilters = () => {
    setFilters({
      difficulty: [] as Difficulty[],
      seasons: [] as Season[]
    });
  };
  
  const activeFiltersCount = 
    filters.difficulty.length +
    filters.seasons.length;
  
  return (
    <div className="min-h-screen bg-background">
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
          <h1 className="heading-1 mb-2">Fruits</h1>
          <p className="text-muted-foreground text-lg">
            Learn how to select the sweetest, ripest fruits every time.
          </p>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <ProduceFilters 
            filters={filters}
            toggleFilter={toggleFilter}
            clearFilters={clearFilters}
            showMobileFilters={showMobileFilters}
            setShowMobileFilters={setShowMobileFilters}
          />
          
          <div className="flex-1">
            <div className="lg:hidden flex justify-between mb-6">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowMobileFilters(true)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
              
              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredFruits.length} {filteredFruits.length === 1 ? 'fruit' : 'fruits'}
            </p>
            
            {filteredFruits.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFruits.map(fruit => (
                  <ProduceCard key={fruit.id} produce={{
                    id: fruit.id,
                    name: fruit.name,
                    category: fruit.category,
                    seasons: fruit.seasons,
                    image: fruit.images.main,
                    difficulty: fruit.difficulty,
                    slug: fruit.slug
                  }} showCategory />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl font-medium mb-2">No fruits match your filters</p>
                <p className="text-muted-foreground mb-6">Try adjusting your filter criteria</p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fruits;
