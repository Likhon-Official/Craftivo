import { Theme, ThemeCategory } from '../types';

export const categories: ThemeCategory[] = [
  { id: 'landing', name: 'Landing Pages' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'dashboard', name: 'Dashboards' },
  { id: 'portfolio', name: 'Portfolios' },
  { id: 'blog', name: 'Blogs' }
];

export const themeData: Theme[] = [
  {
    id: '1',
    title: 'GlassMorph Pro',
    description: 'A premium landing page template with stunning glassmorphism effects, perfect for SaaS and tech companies.',
    price: 79,
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    isNew: false,
    rating: 5,
    reviewCount: 124,
    tags: ['Landing Page', 'SaaS', 'Tech'],
    categoryId: 'landing'
  },
  {
    id: '2',
    title: 'NeoCommerce',
    description: 'A modern e-commerce theme with sleek product cards and smooth checkout experience.',
    price: 89,
    image: 'https://images.pexels.com/photos/6956893/pexels-photo-6956893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    isNew: false,
    rating: 4,
    reviewCount: 78,
    tags: ['E-commerce', 'Shop', 'Retail'],
    categoryId: 'ecommerce'
  },
  {
    id: '3',
    title: 'DashGlass',
    description: 'An elegant admin dashboard with beautiful data visualization and intuitive navigation.',
    price: 99,
    image: 'https://images.pexels.com/photos/7172437/pexels-photo-7172437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    isNew: true,
    rating: 5,
    reviewCount: 56,
    tags: ['Dashboard', 'Admin', 'Analytics'],
    categoryId: 'dashboard'
  },
  {
    id: '4',
    title: 'CreativePortfolio',
    description: 'Showcase your work with this creative portfolio template, perfect for designers and photographers.',
    price: 69,
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    isNew: true,
    rating: 4,
    reviewCount: 42,
    tags: ['Portfolio', 'Creative', 'Design'],
    categoryId: 'portfolio'
  },
  {
    id: '5',
    title: 'BlogMaster',
    description: 'A minimalist blog template with focus on readability and content presentation.',
    price: 59,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    isNew: false,
    rating: 4,
    reviewCount: 37,
    tags: ['Blog', 'Content', 'Minimal'],
    categoryId: 'blog'
  },
  {
    id: '6',
    title: 'StartupLaunch',
    description: 'The perfect landing page for startups and product launches with conversion-focused design.',
    price: 79,
    image: 'https://images.pexels.com/photos/7214824/pexels-photo-7214824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    isNew: true,
    rating: 5,
    reviewCount: 28,
    tags: ['Landing Page', 'Startup', 'Launch'],
    categoryId: 'landing'
  },
  {
    id: '7',
    title: 'LuxuryStore',
    description: 'An elegant e-commerce template for luxury and high-end products with beautiful product showcases.',
    price: 99,
    image: 'https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    isNew: false,
    rating: 5,
    reviewCount: 19,
    tags: ['E-commerce', 'Luxury', 'Premium'],
    categoryId: 'ecommerce'
  },
  {
    id: '8',
    title: 'AnalyticsPro',
    description: 'A comprehensive dashboard template with advanced data visualization and real-time updates.',
    price: 109,
    image: 'https://images.pexels.com/photos/5912596/pexels-photo-5912596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    isNew: false,
    rating: 4,
    reviewCount: 31,
    tags: ['Dashboard', 'Analytics', 'Data'],
    categoryId: 'dashboard'
  },
  {
    id: '9',
    title: 'CreativeShowcase',
    description: 'A bold portfolio template for creatives who want to make a statement with their work.',
    price: 69,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    isNew: false,
    rating: 4,
    reviewCount: 24,
    tags: ['Portfolio', 'Creative', 'Showcase'],
    categoryId: 'portfolio'
  }
];