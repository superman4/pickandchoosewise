
import { Link } from "react-router-dom";
import { ProduceItem } from "@/utils/seasonalData";
import { Badge } from "@/components/ui/badge";

interface ProduceCardProps {
  produce: ProduceItem;
  showCategory?: boolean;
}

const ProduceCard = ({ produce, showCategory = false }: ProduceCardProps) => {
  const { name, image, difficulty, category, slug } = produce;

  const getDifficultyBadge = (level: string) => {
    switch (level) {
      case 'easy':
        return <Badge className="badge-ripe">Easy to Pick</Badge>;
      case 'medium':
        return <Badge className="badge-almost">Moderate</Badge>;
      case 'hard':
        return <Badge className="badge-unripe">Challenging</Badge>;
      default:
        return null;
    }
  };

  return (
    <Link to={`/produce/${slug}`} className="group">
      <div className="card-hover rounded-lg overflow-hidden bg-white shadow-sm border border-border">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg">{name}</h3>
            {getDifficultyBadge(difficulty)}
          </div>
          {showCategory && (
            <p className="text-muted-foreground text-sm mt-1 capitalize">{category}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProduceCard;
