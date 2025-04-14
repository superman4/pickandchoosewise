import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ProduceCard from "@/components/common/ProduceCard";
import { getVegetablesList } from "@/utils/produceData";
import { Season } from "@/utils/seasonalData";

type Difficulty = 'easy' | 'medium' | 'hard';

const Vegetables = () => {
  const [filters, setFilters] = useState({
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
        const currentFilters = [...prev.difficulty];
        if (currentFilters.includes(value as Difficulty)) {
          return {
            ...prev,
            difficulty: currentFilters.filter(v => v !== value)
          };
        } else {
          return {
            ...prev,
            difficulty: [...currentFilters, value as Difficulty]
          };
        }
      } else { // type === 'seasons'
        const seasonValue = value as Season;
        const currentFilters = [...prev.seasons];
        
        if (currentFilters.includes(seasonValue)) {
          return {
            ...prev,
            seasons: currentFilters.filter(v => v !== seasonValue)
          };
        } else {
          return {
            ...prev,
            seasons: [...currentFilters, seasonValue]
          };
        }
      }
    });
  };
  
  const clearFilters = () => {
    setFilters({
      difficulty: [],
      seasons: []
    });
  };
  
  const formatFilter = (filter: string) => {
    return filter.charAt(0).toUpperCase() + filter.slice(1);
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
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8">
                      Clear
                    </Button>
                  )}
                </div>
                
                {/* Difficulty filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Difficulty</h3>
                  <div className="space-y-2">
                    {['easy', 'medium', 'hard'].map(difficulty => (
                      <div key={difficulty} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`difficulty-${difficulty}`} 
                          checked={filters.difficulty.includes(difficulty as Difficulty)}
                          onCheckedChange={() => toggleFilter('difficulty', difficulty)}
                        />
                        <Label htmlFor={`difficulty-${difficulty}`} className="text-sm">
                          {formatFilter(difficulty)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Season filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Season</h3>
                  <div className="space-y-2">
                    {(['winter', 'spring', 'summer', 'fall'] as Season[]).map(season => (
                      <div key={season} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`season-${season}`} 
                          checked={filters.seasons.includes(season)}
                          onCheckedChange={() => toggleFilter('seasons', season)}
                        />
                        <Label htmlFor={`season-${season}`} className="text-sm">
                          {formatFilter(season)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
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
      
      {/* Mobile filters */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-background z-50 lg:hidden overflow-auto">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">Filters</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowMobileFilters(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-4 space-y-8">
            {/* Difficulty filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Difficulty</h3>
              <div className="space-y-3">
                {['easy', 'medium', 'hard'].map(difficulty => (
                  <div key={difficulty} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`mobile-difficulty-${difficulty}`} 
                      checked={filters.difficulty.includes(difficulty as Difficulty)}
                      onCheckedChange={() => toggleFilter('difficulty', difficulty)}
                    />
                    <Label htmlFor={`mobile-difficulty-${difficulty}`}>
                      {formatFilter(difficulty)}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Season filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Season</h3>
              <div className="space-y-3">
                {(['winter', 'spring', 'summer', 'fall'] as Season[]).map(season => (
                  <div key={season} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`mobile-season-${season}`} 
                      checked={filters.seasons.includes(season)}
                      onCheckedChange={() => toggleFilter('seasons', season)}
                    />
                    <Label htmlFor={`mobile-season-${season}`}>
                      {formatFilter(season)}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-4 pt-4">
              {activeFiltersCount > 0 && (
                <Button variant="outline" onClick={clearFilters} className="flex-1">
                  Clear All
                </Button>
              )}
              <Button onClick={() => setShowMobileFilters(false)} className="flex-1">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vegetables;
