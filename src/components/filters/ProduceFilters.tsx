
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Season } from "@/utils/seasonalData";

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface FilterState {
  difficulty: Difficulty[];
  seasons: Season[];
}

interface ProduceFiltersProps {
  filters: FilterState;
  toggleFilter: (type: 'difficulty' | 'seasons', value: string) => void;
  clearFilters: () => void;
  showMobileFilters: boolean;
  setShowMobileFilters: (show: boolean) => void;
}

export const ProduceFilters: React.FC<ProduceFiltersProps> = ({
  filters,
  toggleFilter,
  clearFilters,
  showMobileFilters,
  setShowMobileFilters
}) => {
  // Format filter text for display
  const formatFilter = (filter: string) => {
    return filter.charAt(0).toUpperCase() + filter.slice(1);
  };

  // Count active filters
  const activeFiltersCount = 
    filters.difficulty.length +
    filters.seasons.length;
  
  // Define valid seasons array with proper typing
  const validSeasons: readonly Season[] = ['winter', 'spring', 'summer', 'fall'] as const;
  
  return (
    <>
      {/* Desktop Filters */}
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
                {(['easy', 'medium', 'hard'] as const).map(difficulty => (
                  <div key={difficulty} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`difficulty-${difficulty}`} 
                      checked={filters.difficulty.includes(difficulty)}
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
                {validSeasons.map(season => (
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

      {/* Mobile Filters Modal */}
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
                {(['easy', 'medium', 'hard'] as const).map(difficulty => (
                  <div key={difficulty} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`mobile-difficulty-${difficulty}`} 
                      checked={filters.difficulty.includes(difficulty)}
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
                {validSeasons.map(season => (
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
    </>
  );
};

export default ProduceFilters;
