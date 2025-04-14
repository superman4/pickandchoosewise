
export interface ProduceDetail {
  id: string;
  name: string;
  slug: string;
  category: 'fruit' | 'vegetable' | 'herb' | 'pantryItem';
  seasons: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  images: {
    main: string;
    ripe: string;
    underripe: string;
    overripe: string;
  };
  selectionCriteria: {
    visual: string[];
    touch: string[];
    smell: string[];
    sound: string[];
  };
  commonIssues: string[];
  ripeningTips: {
    speedUp: string[];
    slowDown: string[];
  };
  storage: string[];
  nutrition: string[];
  relatedItems: string[];
}

export const produceDetails: ProduceDetail[] = [
  {
    id: '1',
    name: 'Apples',
    slug: 'apples',
    category: 'fruit',
    seasons: ['fall', 'winter'],
    difficulty: 'easy',
    images: {
      main: 'https://images.unsplash.com/photo-1606757389723-23c4a840d753?q=80&w=600&auto=format',
      ripe: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=600&auto=format',
      underripe: 'https://images.unsplash.com/photo-1634141510639-d691d86f47be?q=80&w=600&auto=format',
      overripe: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=600&auto=format',
    },
    selectionCriteria: {
      visual: [
        'Color should be vibrant and consistent for the variety',
        'No bruising or soft spots',
        'Stem should be intact and fresh-looking'
      ],
      touch: [
        'Should feel firm and heavy for its size',
        'No soft spots when gently pressed',
        'Smooth skin without wrinkles'
      ],
      smell: [
        'Fresh apples have a sweet, clean aroma',
        'Avoid apples with fermented or musty smells'
      ],
      sound: []
    },
    commonIssues: [
      'Brown spots under skin may indicate bruising',
      'Mealy texture is a sign of age or poor storage',
      'Wrinkled skin indicates dehydration and age'
    ],
    ripeningTips: {
      speedUp: ['Apples are typically sold ready to eat'],
      slowDown: [
        'Store in refrigerator',
        'Keep away from ethylene-sensitive produce',
        'Place in perforated plastic bag in crisper drawer'
      ]
    },
    storage: [
      'Refrigerate to maintain crispness',
      'Will last 3-4 weeks when properly stored',
      'Keep separate from ethylene-sensitive produce'
    ],
    nutrition: [
      'Rich in fiber and vitamin C',
      'Contains antioxidants, especially in the skin',
      'Good source of potassium'
    ],
    relatedItems: ['pears', 'quinces', 'grapes']
  },
  {
    id: '5',
    name: 'Avocados',
    slug: 'avocados',
    category: 'fruit',
    seasons: ['spring', 'summer', 'fall'],
    difficulty: 'hard',
    images: {
      main: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=600&auto=format',
      ripe: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=600&auto=format',
      underripe: 'https://images.unsplash.com/photo-1581486779657-0e70725cf79c?q=80&w=600&auto=format',
      overripe: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=600&auto=format',
    },
    selectionCriteria: {
      visual: [
        'Color varies by variety (Hass darkens when ripe)',
        'Stem end should be intact',
        'No large indentations or dark spots'
      ],
      touch: [
        'Gentle pressure should yield slight give when ripe',
        'Too soft indicates overripe',
        'Too hard indicates underripe'
      ],
      smell: [
        'Ripe avocados have a subtle, sweet aroma at the stem end',
        'Avoid avocados with a fermented smell'
      ],
      sound: []
    },
    commonIssues: [
      'Brown strings inside indicate overripeness',
      'Dark spots under skin may indicate bruising',
      'Hollow feeling when squeezed gently may indicate spoilage'
    ],
    ripeningTips: {
      speedUp: [
        'Place in paper bag with banana or apple',
        'Keep at room temperature',
        'Check daily for ripeness'
      ],
      slowDown: [
        'Refrigerate when perfectly ripe',
        'Can extend life for 2-3 days in refrigerator'
      ]
    },
    storage: [
      'Unripe: Room temperature until ripe',
      'Ripe: Refrigerate for 2-3 days',
      'Cut: Sprinkle with lemon juice and wrap tightly'
    ],
    nutrition: [
      'Rich in healthy monounsaturated fats',
      'Good source of potassium and fiber',
      'Contains vitamins K, E, C, and B6'
    ],
    relatedItems: ['limes', 'tomatoes', 'onions', 'cilantro']
  }
];

export const getProduceDetailBySlug = (slug: string): ProduceDetail | undefined => {
  return produceDetails.find(item => item.slug === slug);
};

export const getAllProduceDetails = (): ProduceDetail[] => {
  return produceDetails;
};

export const getFruitsList = (): ProduceDetail[] => {
  return produceDetails.filter(item => item.category === 'fruit');
};

export const getVegetablesList = (): ProduceDetail[] => {
  return produceDetails.filter(item => item.category === 'vegetable');
};
