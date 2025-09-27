export interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: number;
  downloads: number;
  size: string;
  developer: string;
  tags: string[];
  screenshots: string[];
  featured: boolean;
}

export const gameCategories = [
  'Todos',
  'RPG',
  'Acción',
  'Estrategia',
  'Aventura',
  'Simulación',
  'Deportes',
  'Carreras',
  'Puzzle'
];

export const mockGames: Game[] = [
  {
    id: 1,
    title: "Cyber Warriors",
    description: "Un RPG cyberpunk con combate en tiempo real y un mundo abierto lleno de secretos por descubrir.",
    category: "RPG",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    rating: 4.8,
    downloads: 125000,
    size: "2.1 GB",
    developer: "NeonStudios",
    tags: ["cyberpunk", "mundo abierto", "RPG"],
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Mystic Legends",
    description: "Aventura épica de fantasía con magia, dragones y héroes legendarios.",
    category: "Aventura",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    rating: 4.6,
    downloads: 98000,
    size: "1.8 GB",
    developer: "FantasyWorks",
    tags: ["fantasía", "aventura", "magia"],
    screenshots: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Speed Racers",
    description: "Carreras de alta velocidad con coches customizables y pistas futuristas.",
    category: "Carreras",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=400",
    rating: 4.4,
    downloads: 156000,
    size: "3.2 GB",
    developer: "RaceCore",
    tags: ["carreras", "velocidad", "customización"],
    screenshots: [
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800"
    ],
    featured: false
  },
  {
    id: 4,
    title: "Battle Arena",
    description: "Combate multijugador intenso con diferentes clases de personajes y habilidades únicas.",
    category: "Acción",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400",
    rating: 4.7,
    downloads: 203000,
    size: "1.5 GB",
    developer: "ActionForce",
    tags: ["multijugador", "combate", "competitivo"],
    screenshots: [
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800"
    ],
    featured: true
  },
  {
    id: 5,
    title: "Empire Builder",
    description: "Construye y gestiona tu propio imperio en este juego de estrategia en tiempo real.",
    category: "Estrategia",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    rating: 4.5,
    downloads: 87000,
    size: "2.8 GB",
    developer: "StrategyMasters",
    tags: ["estrategia", "construcción", "gestión"],
    screenshots: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800"
    ],
    featured: false
  },
  {
    id: 6,
    title: "Mind Puzzles",
    description: "Desafía tu mente con puzzles complejos y acertijos que requieren pensamiento creativo.",
    category: "Puzzle",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400",
    rating: 4.3,
    downloads: 64000,
    size: "0.8 GB",
    developer: "BrainGames",
    tags: ["puzzle", "lógica", "mental"],
    screenshots: [
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800"
    ],
    featured: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Gaming",
    username: "@alexgaming",
    content: "¡GameFullZ V2 es increíble! Encontré juegos que nunca habría descubierto por mi cuenta. La interfaz es súper intuitiva.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
  },
  {
    id: 2,
    name: "Luna Rodriguez",
    username: "@lunarodriguez",
    content: "Me encanta el diseño dark y las recomendaciones de IA. Siempre encuentro algo nuevo que jugar cada semana.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
  },
  {
    id: 3,
    name: "GameMaster Pro",
    username: "@gamemaster",
    content: "La comunidad es genial y los juegos son 100% legales. Por fin una plataforma confiable para gamers.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
  }
];