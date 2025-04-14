
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "../search/SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-leaf-600 text-2xl">🥕</span>
            <span className="font-display font-bold text-xl md:text-2xl">
              PickPerfect<span className="text-leaf-600">.org</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch}
              aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              to="/fruits" 
              className="font-medium text-foreground hover:text-leaf-700 transition-colors">
              Fruits
            </Link>
            <Link 
              to="/vegetables" 
              className="font-medium text-foreground hover:text-leaf-700 transition-colors">
              Vegetables
            </Link>
            <Link 
              to="/pantry" 
              className="font-medium text-foreground hover:text-leaf-700 transition-colors">
              Pantry Items
            </Link>
            <Link 
              to="/guides" 
              className="font-medium text-foreground hover:text-leaf-700 transition-colors">
              Guides
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-foreground hover:text-leaf-700 transition-colors">
              About
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch}
              className="ml-2"
              aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/fruits" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                onClick={() => setIsOpen(false)}>
                Fruits
              </Link>
              <Link 
                to="/vegetables" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                onClick={() => setIsOpen(false)}>
                Vegetables
              </Link>
              <Link 
                to="/pantry" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                onClick={() => setIsOpen(false)}>
                Pantry Items
              </Link>
              <Link 
                to="/guides" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                onClick={() => setIsOpen(false)}>
                Guides
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors font-medium"
                onClick={() => setIsOpen(false)}>
                About
              </Link>
            </nav>
          </div>
        )}

        {/* Search overlay */}
        {isSearchOpen && (
          <div className="py-4 animate-fade-in">
            <SearchBar onClose={toggleSearch} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
