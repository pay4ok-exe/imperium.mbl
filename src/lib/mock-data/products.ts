export interface Product {
    id: string;
    name: string;
    nameKz: string;
    description: string;
    descriptionKz: string;
    price: number;
    discount?: number;
    images: string[];
    colors: ProductColor[];
    category: string;
    inStock: boolean;
    featured: boolean;
    rating: number;
    reviewsCount: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    material: string;
    materialKz: string;
  }
  
  export interface ProductColor {
    id: string;
    name: string;
    nameKz: string;
    hexCode: string;
    image?: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    nameKz: string;
    slug: string;
    description: string;
    descriptionKz: string;
    image: string;
    productsCount: number;
  }
  
  export const categories: Category[] = [
    {
      id: '1',
      name: 'Диваны',
      nameKz: 'Диваннар',
      slug: 'sofas',
      description: 'Элегантные и удобные диваны для современного дома',
      descriptionKz: 'Қазіргі заманғы үйге арналған сәнді және ыңғайлы диваннар',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      productsCount: 15,
    },
    {
      id: '2',
      name: 'Стулья',
      nameKz: 'Орындықтар',
      slug: 'chairs',
      description: 'Стильные стулья и кресла для любого интерьера',
      descriptionKz: 'Кез келген интерьерге арналған сәнді орындықтар мен креслолар',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop',
      productsCount: 22,
    },
    {
      id: '3',
      name: 'Столы',
      nameKz: 'Үстелдер',
      slug: 'tables',
      description: 'Качественные столы из натуральных материалов',
      descriptionKz: 'Табиғи материалдардан жасалған сапалы үстелдер',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
      productsCount: 12,
    },
    {
      id: '4',
      name: 'Шкафы',
      nameKz: 'Шкафтар',
      slug: 'wardrobes',
      description: 'Просторные шкафы для хранения вещей',
      descriptionKz: 'Заттарды сақтауға арналған кең шкафтар',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      productsCount: 8,
    },
  ];
  
  export const colors: ProductColor[] = [
    { id: '1', name: 'Теплый коричневый', nameKz: 'Жылы қоңыр', hexCode: '#B8935F' },
    { id: '2', name: 'Кремовый', nameKz: 'Кремді', hexCode: '#F8EEE0' },
    { id: '3', name: 'Песочный', nameKz: 'Құмды', hexCode: '#D9C7A8' },
    { id: '4', name: 'Графитовый', nameKz: 'Графитті', hexCode: '#5C5C5A' },
    { id: '5', name: 'Молочный', nameKz: 'Сүтті', hexCode: '#FAFAF9' },
    { id: '6', name: 'Терракотовый', nameKz: 'Терракотты', hexCode: '#D4823D' },
  ];
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'Диван "Императорский комфорт"',
      nameKz: 'Диван "Император жайлылығы"',
      description: 'Роскошный трехместный диван с премиальной обивкой и ортопедическими подушками. Идеален для создания уютной атмосферы в гостиной.',
      descriptionKz: 'Премиум жаймасы мен ортопедиялық жастықтары бар сәнді үш орындық диван. Қонақ бөлмеде жайлы атмосфера жасауға өте жарамды.',
      price: 125990,
      discount: 20,
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
      ],
      colors: [colors[0], colors[1], colors[2]],
      category: 'sofas',
      inStock: true,
      featured: true,
      rating: 4.9,
      reviewsCount: 47,
      dimensions: { width: 220, height: 85, depth: 95 },
      material: 'Итальянская кожа премиум',
      materialKz: 'Премиум итальян терісі',
    },
    {
      id: '2',
      name: 'Кресло "Элегант Про"',
      nameKz: 'Кресло "Элегант Про"',
      description: 'Современное кресло с эргономичным дизайном и высококачественной обивкой. Прекрасно дополнит любой интерьер.',
      descriptionKz: 'Эргономикалық дизайны мен жоғары сапалы жаймасы бар заманауи кресло. Кез келген интерьерді керемет толықтырады.',
      price: 45990,
      images: [
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      ],
      colors: [colors[0], colors[3], colors[5]],
      category: 'chairs',
      inStock: true,
      featured: true,
      rating: 4.7,
      reviewsCount: 32,
      dimensions: { width: 75, height: 105, depth: 80 },
      material: 'Велюр премиум',
      materialKz: 'Премиум велюр',
    },
    {
      id: '3',
      name: 'Стол "Династия"',
      nameKz: 'Үстел "Династия"',
      description: 'Изысканный обеденный стол из массива дуба с уникальной текстурой. Рассчитан на 6-8 персон.',
      descriptionKz: 'Ерекше текстурасы бар емен ағашынан жасалған сәнді ас ішу үстелі. 6-8 адамға арналған.',
      price: 89990,
      discount: 15,
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
      ],
      colors: [colors[0], colors[2]],
      category: 'tables',
      inStock: true,
      featured: true,
      rating: 4.8,
      reviewsCount: 28,
      dimensions: { width: 180, height: 75, depth: 100 },
      material: 'Массив дуба',
      materialKz: 'Емен ағаш массиві',
    },
    {
      id: '4',
      name: 'Диван-кровать "Трансформер"',
      nameKz: 'Диван-төсек "Трансформер"',
      description: 'Многофункциональный диван с механизмом трансформации в двуспальную кровать. Встроенные ящики для белья.',
      descriptionKz: 'Екі орындық төсекке айналатын трансформация механизмі бар көпфункционалды диван. Төсек-көрпе үшін ұшпелген жәшіктері бар.',
      price: 98990,
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      ],
      colors: [colors[1], colors[2], colors[3]],
      category: 'sofas',
      inStock: true,
      featured: false,
      rating: 4.6,
      reviewsCount: 19,
      dimensions: { width: 200, height: 80, depth: 90 },
      material: 'Микрофибра',
      materialKz: 'Микрофибра',
    },
    {
      id: '5',
      name: 'Барный стул "Модерн"',
      nameKz: 'Бар орындығы "Модерн"',
      description: 'Стильный барный стул с регулируемой высотой и поворотным механизмом. Хромированная основа.',
      descriptionKz: 'Реттелетін биіктігі мен айналмалы механизмі бар сәнді бар орындығы. Хромталған негізі.',
      price: 28990,
      images: [
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
      ],
      colors: [colors[3], colors[4], colors[5]],
      category: 'chairs',
      inStock: true,
      featured: false,
      rating: 4.5,
      reviewsCount: 15,
      dimensions: { width: 45, height: 110, depth: 45 },
      material: 'Экокожа + хром',
      materialKz: 'Экотері + хром',
    },
    {
      id: '6',
      name: 'Журнальный столик "Минимал"',
      nameKz: 'Журнал үстелі "Минимал"',
      description: 'Элегантный журнальный столик с стеклянной столешницей и деревянными ножками.',
      descriptionKz: 'Шыны үсті мен ағаш аяқтары бар сәнді журнал үстелі.',
      price: 35990,
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      ],
      colors: [colors[0], colors[2]],
      category: 'tables',
      inStock: true,
      featured: true,
      rating: 4.4,
      reviewsCount: 12,
      dimensions: { width: 120, height: 45, depth: 60 },
      material: 'Стекло + дуб',
      materialKz: 'Шыны + емен',
    },
  ];
  
  export const featuredProducts = products.filter(product => product.featured);
  
  // Данные для отзывов
  export const testimonials = [
    {
      id: '1',
      name: 'Анна Смирнова',
      nameKz: 'Анна Смирнова',
      text: 'Прекрасное качество мебели! Диван служит уже два года, как новый.',
      textKz: 'Жиһаздың керемет сапасы! Диван екі жыл қызмет етті, жаңадай.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2ad?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: '2',
      name: 'Максим Петров',
      nameKz: 'Максим Петров',
      text: 'Отличный сервис и быстрая доставка. Мебель превзошла ожидания!',
      textKz: 'Тамаша қызмет және жылдам жеткізу. Жиһаз күткеннен де жақсы болды!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: '3',
      name: 'Елена Кузнецова',
      nameKz: 'Елена Кузнецова',
      text: 'Заказывали целый комплект для гостиной. Все идеально подошло!',
      textKz: 'Қонақ бөлмесіне толық жиынтық тапсырыс бердік. Бәрі тамаша сәйкес келді!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ];
  