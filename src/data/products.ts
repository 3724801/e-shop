import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 't-shirts',
    name: 'T-Shirts',
    description: 'Trendy and comfortable t-shirts',
    image: 'https://images.pexels.com/photos/1006220/pexels-photo-1006220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    productCount: 12
  },
  {
    id: 'pants',
    name: 'Pants',
    description: 'Stylish pants for all occasions',
    image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    productCount: 10
  },
  {
    id: 'jackets',
    name: 'Jackets',
    description: 'Practical and stylish jackets',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    productCount: 8
  },
  {
    id: 'shoes',
    name: 'Shoes',
    description: 'Comfortable and trendy shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    productCount: 14
  }
];

export const products: Product[] = [
  // T-Shirts
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    description: 'Comfortable and stylish cotton t-shirt perfect for everyday wear',
    price: 29.99,
    originalPrice: 39.99,
    category: 't-shirts',
    image: 'https://images.pexels.com/photos/1006220/pexels-photo-1006220.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1006220/pexels-photo-1006220.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Gray', 'Red'],
    rating: 4.5,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Graphic Print T-Shirt',
    description: 'Modern graphic print t-shirt with unique design',
    price: 24.99,
    originalPrice: 34.99,
    category: 't-shirts',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue'],
    rating: 4.3,
    reviews: 89,
    inStock: true,
    featured: false
  },
  {
    id: '3',
    name: 'Long Sleeve T-Shirt',
    description: 'Long sleeve t-shirt perfect for cooler weather',
    price: 34.99,
    category: 't-shirts',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy', 'Burgundy'],
    rating: 4.4,
    reviews: 67,
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Vintage Band T-Shirt',
    description: 'Retro style band t-shirt with vintage print',
    price: 27.99,
    category: 't-shirts',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'White'],
    rating: 4.2,
    reviews: 56,
    inStock: true,
    featured: false
  },

  // Pants
  {
    id: '5',
    name: 'Designer Denim Jeans',
    description: 'High-quality denim jeans with modern fit and premium finish',
    price: 89.99,
    originalPrice: 120.00,
    category: 'pants',
    image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['Dark Blue', 'Light Blue', 'Black', 'Gray'],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Casual Chino Pants',
    description: 'Comfortable casual chino pants suitable for office and outings',
    price: 59.99,
    originalPrice: 79.99,
    category: 'pants',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    rating: 4.2,
    reviews: 93,
    inStock: true,
    featured: false
  },
  {
    id: '7',
    name: 'Sports Track Pants',
    description: 'Comfortable sports pants perfect for workouts and daily activities',
    price: 39.99,
    category: 'pants',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy', 'Red'],
    rating: 4.1,
    reviews: 78,
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Formal Dress Pants',
    description: 'Elegant formal pants perfect for business and special occasions',
    price: 79.99,
    category: 'pants',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['30', '32', '34', '36', '38', '40'],
    colors: ['Black', 'Navy', 'Charcoal', 'Brown'],
    rating: 4.5,
    reviews: 112,
    inStock: true,
    featured: true
  },

  // Jackets
  {
    id: '9',
    name: 'Leather Jacket',
    description: 'Elegant genuine leather jacket for a distinctive look',
    price: 199.99,
    originalPrice: 249.99,
    category: 'jackets',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Dark Brown'],
    rating: 4.8,
    reviews: 203,
    inStock: true,
    featured: true
  },
  {
    id: '10',
    name: 'Denim Jacket',
    description: 'Classic denim jacket that suits all modern looks',
    price: 79.99,
    originalPrice: 99.99,
    category: 'jackets',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    rating: 4.4,
    reviews: 134,
    inStock: true,
    featured: false
  },
  {
    id: '11',
    name: 'Winter Puffer Jacket',
    description: 'Padded winter jacket that provides warmth and comfort in cold weather',
    price: 129.99,
    category: 'jackets',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Gray', 'Green'],
    rating: 4.6,
    reviews: 167,
    inStock: true,
    featured: true
  },
  {
    id: '12',
    name: 'Bomber Jacket',
    description: 'Stylish bomber jacket with modern design and comfortable fit',
    price: 89.99,
    originalPrice: 119.99,
    category: 'jackets',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Green', 'Navy', 'Gray'],
    rating: 4.3,
    reviews: 89,
    inStock: true,
    featured: false
  },

  // Shoes
  {
    id: '13',
    name: 'Professional Running Shoes',
    description: 'Professional running shoes with advanced cushioning technology for high performance',
    price: 149.99,
    originalPrice: 179.99,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Black/White', 'Blue/Gray', 'Red/Black'],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    featured: true
  },
  {
    id: '14',
    name: 'Casual Sneakers',
    description: 'Comfortable casual sneakers suitable for daily use',
    price: 79.99,
    originalPrice: 99.99,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    rating: 4.3,
    reviews: 189,
    inStock: true,
    featured: false
  },
  {
    id: '15',
    name: 'Formal Dress Shoes',
    description: 'Elegant formal shoes suitable for formal occasions and work',
    price: 119.99,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['Black', 'Brown', 'Dark Brown'],
    rating: 4.5,
    reviews: 145,
    inStock: true,
    featured: true
  },
  {
    id: '16',
    name: 'Canvas High-Top Shoes',
    description: 'High-top canvas shoes with modern design and various colors',
    price: 59.99,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43'],
    colors: ['White', 'Black', 'Red', 'Blue'],
    rating: 4.2,
    reviews: 98,
    inStock: true,
    featured: false
  },
  {
    id: '17',
    name: 'Hiking Boots',
    description: 'Strong waterproof hiking boots perfect for outdoor adventures',
    price: 159.99,
    originalPrice: 189.99,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Brown', 'Black', 'Tan'],
    rating: 4.7,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: '18',
    name: 'Basketball Shoes',
    description: 'High-performance basketball shoes with excellent grip and support',
    price: 139.99,
    category: 'shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Black/Red', 'White/Blue', 'Gray/Orange'],
    rating: 4.6,
    reviews: 178,
    inStock: true,
    featured: false
  }
];