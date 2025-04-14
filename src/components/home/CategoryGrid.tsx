
import { Link } from "react-router-dom";
import { Apple, Carrot, Utensils, LucideIcon } from "lucide-react";

interface CategoryItem {
  name: string;
  path: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  description: string;
}

const categories: CategoryItem[] = [
  {
    name: "Fruits",
    path: "/fruits",
    icon: Apple,
    color: "text-berry-600",
    bgColor: "bg-berry-100",
    description: "Learn to pick the sweetest, ripest fruits"
  },
  {
    name: "Vegetables",
    path: "/vegetables",
    icon: Carrot,
    color: "text-leaf-600",
    bgColor: "bg-leaf-100",
    description: "Find the freshest, crispest vegetables"
  },
  {
    name: "Pantry Items",
    path: "/pantry",
    icon: Utensils,
    color: "text-carrot-600",
    bgColor: "bg-carrot-100",
    description: "Select quality grains, oils, and dry goods"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="heading-2 mb-2 text-center">Browse Categories</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore our comprehensive guides organized by food type to find exactly what you need
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={category.path}
              className="group"
            >
              <div className="rounded-lg border border-border bg-white shadow-sm overflow-hidden card-hover">
                <div className={`${category.bgColor} p-6 flex flex-col items-center justify-center text-center`}>
                  <div className={`${category.color} p-3 rounded-full bg-white/80 mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{category.name}</h3>
                  <p className="text-muted-foreground mt-2">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
