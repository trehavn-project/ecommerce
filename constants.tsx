
import { Product, Review, ProcessStep } from './types';

export const COLORS = {
  TEAL: '#00272b',
  BROWN: '#392e27',
  BLACK: '#000000',
  OFF_WHITE: '#fcfcfc',
};

export const PRODUCTS: Product[] = [
  {
    id: 'the-horizon',
    name: 'The Horizon',
    sku: '[001]',
    price: '750.00',
    tagline: 'Temporal Sculpture',
    description: 'A dialogue between solid walnut and kinetic resin waves. Engineered for those who value every second.',
    imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'the-rift',
    name: 'The Rift',
    sku: '[002]',
    price: '2800.00',
    tagline: 'Spatial Depth',
    description: 'A frame carved by nature herself. Designed to introduce organic chaos into linear modern spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1594913366159-1832ffefc511?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'the-biophilic',
    name: 'The Biophilic',
    sku: '[003]',
    price: '1200.00',
    tagline: 'Living Architecture',
    description: 'Zero maintenance preserved moss art. A static representation of life in its most vibrant form.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'the-solenne',
    name: 'The Solenne',
    sku: '[004]',
    price: '950.00',
    tagline: 'Ancestral Bloom',
    description: 'Reclaimed Olive wood roots suspended in crystalline resin. A fragment of history for the desk.',
    imageUrl: 'https://images.unsplash.com/photo-1581781870027-346766440833?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'the-mercer',
    name: 'The Mercer',
    sku: '[005]',
    price: '3200.00',
    tagline: 'Tectonic Balance',
    description: 'Rare black walnut dining surface with a central glass river. The intersection of raw earth and mastery.',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'the-notley',
    name: 'The Notley',
    sku: '[006]',
    price: '1450.00',
    tagline: 'Vitreous Echo',
    description: 'Sand-cast glass paired with centuries-old timber. A minimal study in transparency and weight.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'the-monolith',
    name: 'The Monolith',
    sku: '[007]',
    price: '5400.00',
    tagline: 'Ancient Pillar',
    description: 'Exotic root sculpture standing as a testament to durability. Hand-polished to a museum finish.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'the-vessel',
    name: 'The Vessel',
    sku: '[008]',
    price: '650.00',
    tagline: 'Curated Void',
    description: 'Hollowed heritage oak used to hold digital or physical treasures. A sanctuary for your daily objects.',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    text: "Absolutely breathtaking. The resin clarity and wood grain are even more impressive in person. It arrived in California perfectly crated and earlier than expected.",
    author: "Sarah M.",
    location: "California, USA",
  },
  {
    id: 'r2',
    text: "I was hesitant to order art online, but the communication was flawless. This clock is the centerpiece of our new office. True artisan quality.",
    author: "James L.",
    location: "New York, USA",
  },
  {
    id: 'r3',
    text: "Sustainable luxury at its finest. The live edge mirror transformed my entryway. Highly recommend for anyone looking for unique, high-end decor.",
    author: "Emily R.",
    location: "London, UK",
  },
  {
    id: 'r4',
    text: "Der Tisch ist ein wahres Kunstwerk. Die Kombination aus Holz und Harz ist perfekt ausbalanciert. Ein Blickfang in unserem Wohnzimmer.",
    author: "Marcus K.",
    location: "Berlin, Germany",
  },
  {
    id: 'r5',
    text: "Eccellenza pura. La cura dei dettagli è maniacale. È raro trovare oggetti che trasmettano tanta storia e modernità allo stesso tempo.",
    author: "Sofia V.",
    location: "Milan, Italy",
  },
  {
    id: 'r6',
    text: "The biophilic wall art brought such a sense of peace to my studio in Sydney. The craftsmanship is world-class. Worth every penny.",
    author: "David W.",
    location: "Sydney, Australia",
  },
  {
    id: 'r7',
    text: "Un travail d'une finesse incroyable. On sent que chaque pièce a été traitée avec amour et respect pour la nature. Magnifique.",
    author: "Chloe B.",
    location: "Paris, France",
  },
  {
    id: 'r8',
    text: "木目がとても美しく、空間が格調高くなりました。職人のこだわりを感じる一品です。日本への配送も丁寧でした。",
    author: "Hiroshi T.",
    location: "Tokyo, Japan",
  },
  {
    id: 'r9',
    text: "Incredible attention to detail. The way they handle heritage timber is respectful and innovative. It looks stunning in our Toronto loft.",
    author: "Alex P.",
    location: "Toronto, Canada",
  },
  {
    id: 'r10',
    text: "The texture of the wood is so unique. You can literally feel the history in it. Excellent service and fast shipping to Spain.",
    author: "Maria G.",
    location: "Madrid, Spain",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'THE AWAKENING OF TIME-WORN WOOD',
    description: 'Each piece begins with carefully selected aged wood, carrying the marks of time in its cracks, grains, and tones. Gently cleaned and restored, the wood is prepared to breathe again and return to life.',
  },
  {
    number: '02',
    title: 'CHARACTER SHAPED BY CRAFT',
    description: 'The wood is skillfully planed and sanded to reveal its natural texture without disturbing its soul. Each step enhances its warmth, smoothness, and unique character.',
  },
  {
    number: '03',
    title: 'THE FINAL ARTISTIC TOUCH',
    description: 'Natural oils and protective finishes bring out the hidden beauty of the grain while ensuring durability. No two pieces are ever the same—each one is a timeless work of art.',
  },
];
