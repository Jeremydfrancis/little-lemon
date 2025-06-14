import slideImg1 from './assets/slider-1.png';
import slideImg2 from './assets/slider-2.png';
import slideImg3 from './assets/slider-3.png';

import featureImg1 from './assets/food.svg';
import featureImg2 from './assets/chef.svg';
import featureImg3 from './assets/money.svg';
import featureImg4 from './assets/menu.svg';

import galleryImg1 from './assets/gallery-1.jpg';
import galleryImg2 from './assets/gallery-2.jpg';
import galleryImg3 from './assets/gallery-3.jpg';
import galleryImg4 from './assets/gallery-4.jpg';
import galleryImg5 from './assets/gallery-5.jpg';
import galleryImg6 from './assets/gallery-6.jpg';

import testimonialImg1 from './assets/testimonial-1.jpg';
import testimonialImg2 from './assets/testimonial-2.jpg';
import testimonialImg3 from './assets/testimonial-3.jpg';
import testimonialImg4 from './assets/testimonial-4.jpg';

import menuImg1 from './assets/menu-1.jpg';
import menuImg2 from './assets/menu-two.jpg';
import menuImg3 from './assets/menu-three.jpg';
import menuImg4 from './assets/menu-four.jpg';
import menuImg5 from './assets/menu-five.jpg';
import menuImg6 from './assets/menu-6.jpg';
import menuImg7 from './assets/menu-seven.jpg';
import menuImg8 from './assets/menu-one.jpg';

export const navLinks = ['home', 'about', 'menu', 'gallery', 'testimonials'];

export const homeSlide = [
  {
    img: slideImg1,
    title: 'Your Favorite <span> Food Gets Even </span> Better',
    description:
      'Discover vibrant Mediterranean dishes made fresh daily with local ingredients and authentic flavors.',
  },

  {
    img: slideImg2,
    title: 'Experience Authentic <span> Flavors Made Fresh </span> Daily',
    description:
      'Relax and enjoy house-made recipes inspired by classic Mediterranean cooking, served in a warm, cozy atmosphere.',
  },

  {
    img: slideImg3,
    title: 'Enjoy Our <span> Chef’s Special Dishes </span> Today',
    description:
      'Join us for lunch, dinner, or dessert — there’s always something delicious to enjoy at Little Lemon.',
  },
];



export const featureItem = [
  {
    id: 1,
    img: featureImg1,
    title: 'Fresh Testy Meals',
    description:
      'We serve fresh, local ingredients and bold flavors you will love every time.',
  },

  {
    id: 2,
    img: featureImg2,
    title: 'Experienced Chefs',
    description:
      'Our chefs have years of experience and a passion for creating delicious dishes.',
  },

  {
    id: 3,
    img: featureImg3,
    title: 'Affordable Price',
    description:
      'Enjoy delicious meals and fair prices that fit any budget.',
  },

  {
    id: 4,
    img: featureImg4,
    title: 'Daily Fresh Menu',
    description:
      'We offer a daily fresh menu that highlights seasonal ingredients and bold flavors.',
  },
];

export const gallery = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
];

export const testimonialItem = [
  {
    img: testimonialImg1,
    name: 'Aria Benson',
    description:
      'The atmosphere here is so warm and inviting. The food is always fresh and delicious, and the staff is incredibly friendly.',
    stars: 4.5,
  },

  {
    img: testimonialImg2,
    name: 'Omar Patel',
    description:
      'The food here is absolutely amazing! I love the variety and the quality of the ingredients. Every dish is a delight to the senses.',
    stars: 5,
  },

  {
    img: testimonialImg3,
    name: 'Zoe Kim',
    description:
      'I’ve been coming here for months and it never disappoints. The seasonal menu keeps things interesting.',
    stars: 4.8,
  },

  {
    img: testimonialImg4,
    name: 'Maya Rivera',
    description:
      'The flavors here remind me of home cooking but with a special twist. I always leave satisfied and happy!',
    stars: 4.4,
  },
];

export const menu = [
  {
    id: 1,
    img: menuImg1,
    category: 'Lunch',
    title: ' Grilled Lamb Chops',
    description: 'Tender lamb chops seasoned with fresh herbs and grilled to perfection.',
    price: 26.89,
    reviews: 1600,
    stars: 5,
  },

  {
    id: 2,
    img: menuImg2,
    category: 'Dinner',
    title: 'Chicken Souvlaki Wrap',
    description: 'Grilled chicken wrapped in pita bread with fresh vegetables and tzatziki sauce.',
    price: 16.99,
    reviews: 1500,
    stars: 4.9,
  },

  {
    id: 3,
    img: menuImg3,
    category: 'Dinner',
    title: 'Mediterranean Mezze Platter',
    description: 'A delightful assortment of dips, fresh vegetables, and pita bread.',
    price: 25.75,
    reviews: 1800,
    stars: 4.5,
  },

  {
    id: 4,
    img: menuImg4,
    category: 'Lunch',
    title: 'Grilled Salmon Fillet',
    description: 'Fresh salmon fillet grilled with olive oil, lemon, and Mediterranean spices.',
    price: 22.59,
    reviews: 1300,
    stars: 4.8,
  },

  {
    id: 5,
    img: menuImg5,
    category: 'Breakfast',
    title: 'Mediterranean Breakfast Plate',
    description: 'A delicious assortment of Mediterranean breakfast favorites, including olives, feta cheese, and fresh bread.',
    price: 15.45,
    reviews: 1700,
    stars: 4.4,
  },

  {
    id: 6,
    img: menuImg6,
    category: 'Fast Food',
    title: 'Shawarma Wrap',
    description: 'Tender meat wrapped in pita bread with fresh vegetables and tahini sauce.',
    price: 14.99,
    reviews: 1900,
    stars: 4.5,
  },

  {
    id: 7,
    img: menuImg7,
    category: 'Lunch',
    title: 'Chicken Gyro Plate',
    description: 'Grilled chicken served with pita bread, fresh vegetables, and tzatziki sauce.',
    price: 12.99,
    reviews: 1400,
    stars: 4.4,
  },

  {
    id: 8,
    img: menuImg8,
    category: 'Dessert',
    title: 'Baklava Slice',
    description: 'Layers of filo pastry filled with chopped nuts and sweetened with honey.',
    price: 8.59,
    reviews: 1200,
    stars: 5.0,
  },
];

export const footerLinks = ['about', 'menu', 'testimonials'];
