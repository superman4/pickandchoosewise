
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProduceCard from "@/components/common/ProduceCard";
import { getVegetablesList } from "@/utils/produceData";
import { Season } from "@/utils/seasonalData";
import ProduceFilters, { FilterState, Difficulty } from "@/components/filters/ProduceFilters";

// Helper function to validate if a value is a valid Season
const isValidSeason = (value: string): value is Season => {
  return ['winter', 'spring', 'summer', 'fall'].includes(value);
};

const Vegetables = () => {
  const [filters, setFilters] = useState<FilterState>({
    difficulty: [] as Difficulty[],
    seasons: [] as Season[],
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const vegetables = getVegetablesList();
  
  // Apply filters to the vegetables list
  const filteredVegetables = vegetables.filter(vegetable => {
    // If no filters are selected, show all vegetables
    if (filters.difficulty.length === 0 && filters.seasons.length === 0) {
      return true;
    }
    
    // Apply difficulty filter
    const difficultyMatch = filters.difficulty.length === 0 || 
      filters.difficulty.includes(vegetable.difficulty as Difficulty);
    
    // Apply season filter
    const seasonMatch = filters.seasons.length === 0 || 
      vegetable.seasons.some(season => 
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
        // For seasons, validate the value is a proper Season type
        if (isValidSeason(value)) {
          const currentFilters = [...prev.seasons];
          
          if (currentFilters.includes(value)) {
            return {
              ...prev,
              seasons: currentFilters.filter(v => v !== value)
            };
          } else {
            // Create a properly typed array for type safety
            const newSeasons: Season[] = [...currentFilters];
            // Add the validated season
            newSeasons.push(value);
            
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
      difficulty: [],
      seasons: []
    });
  };
  
  // Count active filters
  const activeFiltersCount = 
    filters.difficulty.length +
    filters.seasons.length;
  
  return (
    <div className="min-h-screen bg-background">
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
          <h1 className="heading-1 mb-2">Vegetables</h1>
          <p className="text-muted-foreground text-lg">
            Learn how to select the freshest, crispest vegetables every time.
          </p>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ProduceFilters Component */}
          <ProduceFilters 
            filters={filters}
            toggleFilter={toggleFilter}
            clearFilters={clearFilters}
            showMobileFilters={showMobileFilters}
            setShowMobileFilters={setShowMobileFilters}
          />
          
          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter button */}
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
              
              {/* Active filters indicator */}
              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
            
            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredVegetables.length} {filteredVegetables.length === 1 ? 'vegetable' : 'vegetables'}
            </p>
            
            {/* Vegetables grid */}
            {filteredVegetables.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVegetables.map(vegetable => (
                  <ProduceCard key={vegetable.id} produce={{
                    id: vegetable.id,
                    name: vegetable.name,
                    category: vegetable.category,
                    seasons: vegetable.seasons,
                    image: vegetable.images.main,
                    difficulty: vegetable.difficulty,
                    slug: vegetable.slug
                  }} showCategory />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl font-medium mb-2">No vegetables match your filters</p>
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

export default Vegetables;
