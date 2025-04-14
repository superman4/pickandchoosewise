
export type Season = 'winter' | 'spring' | 'summer' | 'fall';

export interface ProduceItem {
  id: string;
  name: string;
  category: 'fruit' | 'vegetable' | 'herb' | 'pantryItem';
  seasons: Season[];
  image: string;
  difficulty: 'easy' | 'medium' | 'hard';
  slug: string;
}

// Helper to determine current season
export const getCurrentSeason = (): Season => {
  const month = new Date().getMonth();
  
  if (month >= 2 && month <= 4) return 'spring'; // March through May
  if (month >= 5 && month <= 7) return 'summer'; // June through August
  if (month >= 8 && month <= 10) return 'fall';  // September through November
  return 'winter';                               // December through February
};

// Sample seasonal produce data
export const seasonalProduceData: ProduceItem[] = [
  {
    id: '1',
    name: 'Apples',
    category: 'fruit',
    seasons: ['fall', 'winter'],
    image: 'https://images.unsplash.com/photo-1606757389723-23c4a840d753?q=80&w=600&auto=format',
    difficulty: 'easy',
    slug: 'apples'
  },
  {
    id: '2',
    name: 'Strawberries',
    category: 'fruit',
    seasons: ['spring', 'summer'],
    image: 'https://images.unsplash.com/photo-1624153064068-98dc33c9b092?q=80&w=600&auto=format',
    difficulty: 'easy',
    slug: 'strawberries'
  },
  {
    id: '3',
    name: 'Broccoli',
    category: 'vegetable',
    seasons: ['fall', 'winter', 'spring'],
    image: 'https://images.unsplash.com/photo-1614336215203-fee841f875fd?q=80&w=600&auto=format',
    difficulty: 'medium',
    slug: 'broccoli'
  },
  {
    id: '4',
    name: 'Tomatoes',
    category: 'vegetable',
    seasons: ['summer', 'fall'],
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=600&auto=format',
    difficulty: 'medium',
    slug: 'tomatoes'
  },
  {
    id: '5',
    name: 'Avocados',
    category: 'fruit',
    seasons: ['spring', 'summer', 'fall'],
    image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=600&auto=format',
    difficulty: 'hard',
    slug: 'avocados'
  },
  {
    id: '6',
    name: 'Blueberries',
    category: 'fruit',
    seasons: ['summer'],
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600&auto=format',
    difficulty: 'easy',
    slug: 'blueberries'
  },
  {
    id: '7',
    name: 'Carrots',
    category: 'vegetable',
    seasons: ['spring', 'summer', 'fall', 'winter'],
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=600&auto=format',
    difficulty: 'easy',
    slug: 'carrots'
  },
  {
    id: '8',
    name: 'Bell Peppers',
    category: 'vegetable',
    seasons: ['summer', 'fall'],
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=600&auto=format',
    difficulty: 'medium',
    slug: 'bell-peppers'
  }
];

export const getSeasonalProduce = (season?: Season): ProduceItem[] => {
  const currentSeason = season || getCurrentSeason();
  return seasonalProduceData.filter(item => item.seasons.includes(currentSeason));
};

export const getProduceById = (id: string): ProduceItem | undefined => {
  return seasonalProduceData.find(item => item.id === id);
};

export const getProduceBySlug = (slug: string): ProduceItem | undefined => {
  return seasonalProduceData.find(item => item.slug === slug);
};
