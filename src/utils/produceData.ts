
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
  },
  {
    id: '2',
    name: 'Strawberries',
    slug: 'strawberries',
    category: 'fruit',
    seasons: ['spring', 'summer'],
    difficulty: 'easy',
    images: {
      main: 'https://images.unsplash.com/photo-1624153064068-98dc33c9b092?q=80&w=600&auto=format',
      ripe: 'https://images.unsplash.com/photo-1543528176-61b239494933?q=80&w=600&auto=format',
      underripe: 'https://images.unsplash.com/photo-1613461920867-9ea115fee900?q=80&w=600&auto=format',
      overripe: 'https://images.unsplash.com/photo-1591300589776-8dae021f5708?q=80&w=600&auto=format',
    },
    selectionCriteria: {
      visual: [
        'Bright red color throughout with no white shoulders',
        'Fresh-looking green caps still attached',
        'No visible mold or soft spots'
      ],
      touch: [
        'Firm but slightly yielding to touch',
        'Dry to the touch (not damp or leaky)',
        'No indentations or squished areas'
      ],
      smell: [
        'Strong, sweet fragrance',
        'Avoid strawberries with no smell (underripe) or fermented smell (overripe)'
      ],
      sound: []
    },
    commonIssues: [
      'White shoulders indicate underripeness',
      'Mushy texture often means overripe or stored too long',
      'Mold can spread quickly through the package'
    ],
    ripeningTips: {
      speedUp: [
        'Strawberries don\'t ripen after being picked',
        'Best consumed within 1-2 days of purchase'
      ],
      slowDown: [
        'Refrigerate immediately after purchase',
        'Don\'t wash until ready to eat'
      ]
    },
    storage: [
      'Store in refrigerator in original container or on paper towel',
      'Don\'t wash until ready to eat',
      'Will keep 2-3 days if properly stored'
    ],
    nutrition: [
      'Excellent source of vitamin C',
      'Good source of fiber',
      'Contains antioxidants and folate'
    ],
    relatedItems: ['raspberries', 'blueberries', 'blackberries']
  },
  {
    id: '3',
    name: 'Broccoli',
    slug: 'broccoli',
    category: 'vegetable',
    seasons: ['fall', 'winter', 'spring'],
    difficulty: 'medium',
    images: {
      main: 'https://images.unsplash.com/photo-1614336215203-fee841f875fd?q=80&w=600&auto=format',
      ripe: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=600&auto=format',
      underripe: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=600&auto=format',
      overripe: 'https://images.unsplash.com/photo-1651033706892-ef60a92102a0?q=80&w=600&auto=format',
    },
    selectionCriteria: {
      visual: [
        'Dark green, compact floret clusters',
        'No yellowing on florets',
        'Fresh-looking, firm stalks'
      ],
      touch: [
        'Firm head with tightly packed florets',
        'Sturdy, not bendable stems',
        'Crisp texture throughout'
      ],
      smell: [
        'Mild, fresh vegetable aroma',
        'Avoid broccoli with strong or sulfurous smell'
      ],
      sound: []
    },
    commonIssues: [
      'Yellow florets indicate age and loss of nutrients',
      'Woody stems are tough and unpleasant to eat',
      'Strong smell indicates broccoli is past its prime'
    ],
    ripeningTips: {
      speedUp: ['Broccoli should be used when fresh and doesn\'t benefit from ripening'],
      slowDown: [
        'Store in refrigerator',
        'Keep unwashed until ready to use'
      ]
    },
    storage: [
      'Refrigerate in a loosely wrapped plastic bag',
      'Don\'t wash until ready to use',
      'Will keep 3-5 days if properly stored'
    ],
    nutrition: [
      'Excellent source of vitamin C and K',
      'Good source of fiber',
      'Contains antioxidants and folate'
    ],
    relatedItems: ['cauliflower', 'kale', 'brussels sprouts']
  },
  {
    id: '4',
    name: 'Tomatoes',
    slug: 'tomatoes',
    category: 'vegetable',
    seasons: ['summer', 'fall'],
    difficulty: 'medium',
    images: {
      main: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=600&auto=format',
      ripe: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=600&auto=format',
      underripe: 'https://images.unsplash.com/photo-1591164962271-255a13215afe?q=80&w=600&auto=format',
      overripe: 'https://images.unsplash.com/photo-1563032426-8d7500da493f?q=80&w=600&auto=format',
    },
    selectionCriteria: {
      visual: [
        'Rich, uniform color (varies by variety)',
        'Shiny, taut skin',
        'No cracks, bruises or soft spots'
      ],
      touch: [
        'Firm with slight give when gently squeezed',
        'Heavy for its size',
        'Smooth skin, not wrinkled'
      ],
      smell: [
        'Sweet, earthy aroma at the stem end',
        'Stronger fragrance indicates better flavor'
      ],
      sound: []
    },
    commonIssues: [
      'Hard, pale interior often indicates refrigeration or picking too early',
      'Wrinkled skin indicates age or dehydration',
      'Dark spots or mold indicate spoilage'
    ],
    ripeningTips: {
      speedUp: [
        'Store at room temperature',
        'Place in paper bag with a banana',
        'Stem side down on countertop'
      ],
      slowDown: [
        'Store in coolest part of kitchen (not refrigerator)',
        'Keep away from direct sunlight'
      ]
    },
    storage: [
      'Store at room temperature, never refrigerate uncut tomatoes',
      'Place stem-side down on countertop to preserve flavor',
      'Cut tomatoes can be refrigerated for 1-2 days'
    ],
    nutrition: [
      'Good source of vitamins A and C',
      'Contains lycopene, a powerful antioxidant',
      'Provides potassium and vitamin K'
    ],
    relatedItems: ['peppers', 'onions', 'basil', 'garlic']
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
