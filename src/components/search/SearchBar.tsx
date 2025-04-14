
import { useState, useEffect, useRef } from "react";
import { X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllProduceDetails } from "@/utils/produceData";
import { ProduceDetail } from "@/utils/produceData";

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ProduceDetail[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);
  
  useEffect(() => {
    if (query.length >= 2) {
      const allProduce = getAllProduceDetails();
      const filtered = allProduce.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Full search implementation would go here
  };
  
  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative mb-4">
        <Input 
          ref={inputRef}
          type="search"
          placeholder="Search for fruits, vegetables, or guides..."
          className="pl-10 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none">
          <Search className="h-4 w-4" />
        </div>
        {onClose && (
          <Button 
            type="button" 
            variant="ghost" 
            size="sm" 
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close search</span>
          </Button>
        )}
      </form>
      
      {results.length > 0 && (
        <div className="bg-white rounded-md shadow-md border border-border overflow-hidden max-h-[300px] overflow-y-auto">
          <div className="p-2">
            <p className="text-xs font-medium text-muted-foreground mb-2 px-2">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </p>
            <ul className="space-y-1">
              {results.map(item => (
                <li key={item.id}>
                  <Link 
                    to={`/produce/${item.slug}`}
                    className="flex items-center px-2 py-2 rounded-md hover:bg-muted"
                    onClick={onClose}
                  >
                    <div className="h-10 w-10 bg-muted rounded-md overflow-hidden flex-shrink-0 mr-3">
                      <img 
                        src={item.images.main} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {query.length > 1 && results.length === 0 && (
        <div className="bg-white rounded-md shadow-md border border-border p-4 text-center">
          <p className="text-muted-foreground">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
