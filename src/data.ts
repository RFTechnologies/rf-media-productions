import {
  Service,
  Project,
  Statistic,
  ChooseUsItem,
  ProcessStep,
  ChannelPost,
  Testimonial,
} from './types';

// Custom generated asset paths
export const ASSETS = {
  heroResort: '/src/assets/images/herobanner.jpg',
  aboutFilm: '/src/assets/images/about.jpg',
  hotelVilla: 'https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg',
  culinaryFine: '/src/assets/images/gourmet_cuisine_travel_1782315636610.jpg',
};

export const BRANDS = [
  { name: 'Foodpanda', logoText: 'foodpanda' },
  { name: 'HBL', logoText: 'HBL' },
  { name: 'Pepsi', logoText: 'PEPSI' },
  { name: 'Suzuki', logoText: 'SUZUKI' },
  { name: 'Jazz', logoText: 'jazz' },
  { name: 'Serena Hotels', logoText: 'SERENA HOTELS' },
  { name: 'PC Hotels', logoText: 'PC HOTELS' },
];

export const STATISTICS: Statistic[] = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Brands Served' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Passion Driven' },
];

export const SERVICES: Service[] = [
  {
    id: 'travel-prod',
    title: 'Travel Productions',
    description:
      'Cinematic, epic-scale travel expeditions that evoke strong wanderlust and pure emotional connection with global landscapes.',
    iconName: 'Globe',
  },
  {
    id: 'hotel-promos',
    title: 'Luxury Hotel Promotions',
    description:
      'Visually arresting films highlighting bespoke architecture, world-class luxury services, and premium guest experiences.',
    iconName: 'Hotel',
  },
  {
    id: 'resort-mktg',
    title: 'Resort Marketing',
    description:
      'Tailor-made multi-platform content campaigns capturing high-end amenities, private beaches, and pristine surroundings.',
    iconName: 'Palmtree',
  },
  {
    id: 'tourism-camp',
    title: 'Tourism Campaigns',
    description:
      'Impactful tourism board promotional materials blending rich local culture, historical heritage, and cinematic vistas.',
    iconName: 'Compass',
  },
  {
    id: 'restaurant-promos',
    title: 'Restaurant Promotions',
    description:
      'Sensory, mouth-watering visual campaigns showing the elegant soul, environment, and master culinary craft of premium venues.',
    iconName: 'Utensils',
  },
  {
    id: 'food-cinematography',
    title: 'Food Cinematography',
    description:
      'Macro-lens slow-motion captures of steam, fluid motion, textures, and artisanal precision that transform food into visual art.',
    iconName: 'Sparkles',
  },
  {
    id: 'commercial-ads',
    title: 'Commercial Advertisements',
    description:
      'Highly polished TV and social media ads combining meticulous lighting, brand strategy, and cinema-grade aesthetics.',
    iconName: 'Film',
  },
  {
    id: 'corporate-films',
    title: 'Corporate Films',
    description:
      'Narratives that translate complex business vision into inspiring human stories for investors, partners, and customers.',
    iconName: 'Briefcase',
  },
  {
    id: 'photography',
    title: 'Photography',
    description:
      'Elite editorial, architectural, interior, and food photography crafted with high-end medium format digital camera systems.',
    iconName: 'Camera',
  },
  {
    id: 'drone-cinematography',
    title: 'Drone Cinematography',
    description:
      'Breathtaking FPV and high-altitude 4K HDR aerial perspectives capturing scales and views previously inaccessible.',
    iconName: 'Tv',
  },
  {
    id: 'social-media',
    title: 'Social Media Content',
    description:
      'Highly engaging, natively formatted short-form videos (Reels, TikToks, Shorts) designed to drive viral distribution.',
    iconName: 'Instagram',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description:
      'Surgical, rhythmic post-production, Hollywood-grade color grading, sound design, and custom cinematic soundtrack licensing.',
    iconName: 'Layers',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'aman-kyoto',
    name: 'Aman Kyoto - Sanctuary of Silence',
    category: 'Hotels',
    client: 'Aman Resorts',
    location: 'Kyoto, Japan',
    year: '2025',
    description:
      'A slow-paced, atmospheric journey through the moss-covered stone pathways and secluded pavilions of Aman Kyoto.',
    thumbnail:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
    challenge:
      'Capturing the intangible spirit of Zen and stillness without feeling stagnant, relying purely on natural lighting and micro-movements.',
    solution:
      'We deployed hyper-stabilized slider rigs and high-frame-rate medium format captures during the early blue hours and misty golden mornings.',
    scope: [
      'Cinematic Production',
      'Soundscapes Design',
      '4K HDR Master Color-Grading',
      'Aerial Photography',
    ],
  },
  {
    id: 'gourmet-noma',
    name: 'The Culinary Art of Noma',
    category: 'Restaurants',
    client: 'Noma Copenhagen',
    location: 'Copenhagen, Denmark',
    year: '2025',
    description:
      'An intense, close-up macro study of local fermentation and micro-season plates designed by Chef René Redzepi.',
    thumbnail: ASSETS.culinaryFine,
    challenge:
      'To convey the intense textural depth and natural complexity of raw, seasonal ingredients through visuals alone.',
    solution:
      'Using specialized close-focus probe lenses, we captured fluid dynamics, slicing, and vapor trails at 120 FPS in custom back-lit studio setups.',
    scope: [
      'Macro food photography',
      'High-speed macro cinematography',
      'Custom sound effects (ASMR)',
      'Studio Lighting Design',
    ],
  },
  {
    id: 'iceland-aerial',
    name: 'Iceland - Whispers of the Volcano',
    category: 'Travel',
    client: 'National Geographic Adventure',
    location: 'Reykjanes Peninsula, Iceland',
    year: '2024',
    description:
      'A cinematic masterpiece using high-speed FPV drones mapping the raw volcanic fissures and black sand rivers.',
    thumbnail:
      'https://images.pexels.com/photos/20165201/pexels-photo-20165201.jpeg',
    challenge:
      'Navigating high winds, volcanic gases, and extreme magnetic interference to capture smooth, low-altitude cinematic runs.',
    solution:
      'Custom carbon-fiber FPV racing drones equipped with RED Komodo cameras, operated by world-champion aerial filmmakers.',
    scope: [
      'Custom FPV drone builds',
      'Raw RED log grading',
      'Extreme conditions logistics',
      'Original music scoring',
    ],
  },
  {
    id: 'serena-experience',
    name: 'The Serena Retreat',
    category: 'Tourism',
    client: 'Serena Hotels',
    location: 'Karakoram Range, Pakistan',
    year: '2024',
    description:
      'A comprehensive tourism campaign showcasing heritage, architecture, and luxury high-altitude hospitality.',
    thumbnail: ASSETS.hotelVilla,
    challenge:
      'Representing both the grandeur of the Karakoram peaks and the intimate, ultra-refined comfort of the guest rooms.',
    solution:
      "We produced a narrative following a couple's journey from high-mountain exploration back to fireside organic dining and luxury spa treatment.",
    scope: [
      'Promotional Narrative',
      'Social Cutdowns',
      'Bespoke drone scans',
      'Interviews & Sound bites',
    ],
  },
  {
    id: 'leica-story',
    name: 'Leica SL3 - Soul of the Lens',
    category: 'Commercial',
    client: 'Leica Camera',
    location: 'Wetzlar, Germany',
    year: '2025',
    description:
      'A brand storytelling film looking into the obsessive craftsmanship and manual glass-polishing processes in Germany.',
    thumbnail: 'https://images.pexels.com/photos/20322863/pexels-photo-20322863.jpeg',
    challenge:
      'Visualizing technical, microscopic engineering in a poetic, romantic way that targets photography purists.',
    solution:
      'We focused on the hands of the master polishers, using high-contrast black and white styling layered with luxurious golden accents.',
    scope: [
      'Product commercial storyboard',
      'Black & White Cinematography',
      'Voiceover production',
      'Orchestral audio mix',
    ],
  },
  {
    id: 'alula-heritage',
    name: 'AlUla - Oasis of the Ancients',
    category: 'Tourism',
    client: 'Royal Commission for AlUla',
    location: 'AlUla, Saudi Arabia',
    year: '2024',
    description:
      'A historical storytelling campaign capturing the rock-carved tombs and modern mirrors of Maraya Concert Hall.',
    thumbnail:
      'https://images.pexels.com/photos/6768980/pexels-photo-6768980.jpeg',
    challenge:
      'Showing the dramatic shift from 2,000-year-old Nabataean history to high-end contemporary luxury events.',
    solution:
      'We engineered smooth seamless match cuts between historic archaeological elements and reflection angles on the mirrored building.',
    scope: [
      'Full-scale production',
      'Multilingual voice-overs',
      'Time-lapse setups',
      'VIP guest interview shoots',
    ],
  },
];

export const CHOOSE_US_ITEMS: ChooseUsItem[] = [
  {
    id: 'team',
    title: 'Complete Production Team',
    description:
      'Our elite circle comprises director-level videographers, award-winning photographers, industry-expert editors, and forward-thinking social media architects working in absolute synergy.',
  },
  {
    id: 'equipment',
    title: 'Professional Equipment',
    description:
      'We capture using RED Digital Cinema and ARRI Alexa cameras, high-precision anamorphic lenses, high-end FPV/heavy-lift heavy drones, and studio-grade audio capturing systems.',
  },
  {
    id: 'delivery',
    title: 'Fast Delivery',
    description:
      'An organized production pipeline and dedicated post-production editors ensure prompt, meticulously structured delivery dates without ever compromising cinematic quality.',
  },
  {
    id: 'results',
    title: 'Results Driven',
    description:
      "We don't just shoot pretty pictures; we align our visual narratives with business goals to directly increase room reservations, restaurant covers, product sales, and global brand value.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      "We deep-dive into your brand's unique ethos, target demographic, and core visual ambitions to define the perfect conceptual direction.",
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Developing detailed storyboards, scripting, casting, location scouting, shot lists, and a pristine project execution timeline.',
  },
  {
    step: '03',
    title: 'Production',
    description:
      'Our world-class crew deploys on site, harnessing high-end camera rigs, meticulous lighting setups, and advanced drone systems.',
  },
  {
    step: '04',
    title: 'Editing',
    description:
      'Synthesizing raw footage, custom audio sound design, orchestral soundtrack syncing, and premium color grading.',
  },
  {
    step: '05',
    title: 'Delivery',
    description:
      'Handing over pristine 4K HDR master files, social-optimized vertical cuts, and organized asset packages for direct deployment.',
  },
  {
    step: '06',
    title: 'Promotion',
    description:
      'Assisting in strategic release advice, ad-campaign guidelines, and content distribution plans for absolute maximum impact.',
  },
];

export const CHANNEL_POSTS: ChannelPost[] = [
  {
    id: 'post-1',
    title: 'Chasing Light: The Wilderness of Hunza Valley',
    category: 'Travel Adventures',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    duration: '14:20',
    description:
      'An epic high-altitude trek tracking the dramatic summer sun over the glaciated peaks of Northern Pakistan.',
  },
  {
    id: 'post-2',
    title: 'Michelin Gastronomy: The Art of Salt, Smoke & Ferment',
    category: 'Food Experiences',
    image: ASSETS.culinaryFine,
    duration: '18:45',
    description:
      "Behind the heavy iron doors of Copenhagen's secret kitchens, reviewing hyper-local sustainable plates.",
  },
  {
    id: 'post-3',
    title: "Aman Tokyo: Inside the World's Best Sky Sanctuary",
    category: 'Hotel Reviews',
    image:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
    duration: '11:15',
    description:
      'An unbiased cinematic architectural tour examining the tranquil paper shoji screens and skyline onsens.',
  },
  {
    id: 'post-4',
    title: 'Nomadic Soul: 72 Hours in the Sahara Desert Dunes',
    category: 'Destination Guides',
    image:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800',
    duration: '22:10',
    description:
      'A cultural exploration of Bedouin music, night fire culinary techniques, and drone-drawn star lapses.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Yuki Tanaka',
    title: 'Director of Brand Marketing',
    company: 'Aman Group',
    review:
      'RF Media Productions did not just capture our hotel; they captured our silence. The resulting film was an exquisite artistic success, leading to a 34% increase in winter villa bookings.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 'test-2',
    name: 'Marcus Dupont',
    title: 'Executive Chef & Co-owner',
    company: "L'Atelier Restaurant Group",
    review:
      'Their high-speed food cinematography is pure sensory poetry. Watching their team focus a macro lens on our signature dessert was watching real craft meet real craft. Highly recommended.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 'test-3',
    name: 'Clara Vance',
    title: 'VP of Hospitality & Guest Experience',
    company: 'Serena Hotels',
    review:
      'The visual campaign exceeded all our expectations. They came with absolute cinematic rigs and integrated seamlessly with our operations. The footage is cinematic gold, used globally.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
  },
];
