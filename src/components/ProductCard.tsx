import React, { useRef } from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onProductClick, 
  onQuickAdd 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { animateProductHover, animateButtonClick } = useGSAPAnimations();

  const handleMouseEnter = () => {
    if (cardRef.current) {
      animateProductHover(cardRef.current, true);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      animateProductHover(cardRef.current, false);
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Quick add clicked:', product.name);
    
    const button = e.currentTarget as HTMLElement;
    animateButtonClick(button);
    
    // Immediate action
    onQuickAdd(product);
  };

  const handleProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    console.log('Product clicked:', product.name);
    
    if (cardRef.current) {
      animateButtonClick(cardRef.current);
    }
    
    // Immediate action
    onProductClick(product);
  };

  // Enhanced fallback images for each category with multiple options
  const getFallbackImage = (category: string, productName: string) => {
    switch (category) {
      case 't-shirts':
        if (productName.includes('Graphic')) {
          return 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Long Sleeve')) {
          return 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Vintage')) {
          return 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800';
        }
        return 'https://images.pexels.com/photos/1006220/pexels-photo-1006220.jpeg?auto=compress&cs=tinysrgb&w=800';
      
      case 'pants':
        if (productName.includes('Denim') || productName.includes('Jeans')) {
          return 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Chino')) {
          return 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Sports') || productName.includes('Track')) {
          return 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Formal')) {
          return 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800';
        }
        return 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800';
      
      case 'jackets':
        if (productName.includes('Leather')) {
          return 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Denim')) {
          return 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Winter') || productName.includes('Puffer')) {
          return 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Bomber')) {
          return 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800';
        }
        return 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800';
      
      case 'shoes':
        if (productName.includes('Running')) {
          return 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Casual') || productName.includes('Sneakers')) {
          return 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Formal') || productName.includes('Dress')) {
          return 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Canvas') || productName.includes('High-Top')) {
          return 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Hiking') || productName.includes('Boots')) {
          return 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800';
        } else if (productName.includes('Basketball')) {
          return 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800';
        }
        return 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800';
      
      default:
        return 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
  };

  return (
    <div 
      ref={cardRef}
      className="product-card group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-200 border border-slate-100 hover:border-emerald-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-64 object-cover cursor-pointer transition-transform duration-300"
          onClick={handleProductClick}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            const fallbackImage = getFallbackImage(product.category, product.name);
            if (target.src !== fallbackImage) {
              target.src = fallbackImage;
            }
          }}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.originalPrice && (
            <span className="product-badge bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
              Sale
            </span>
          )}
          {product.featured && (
            <span className="product-badge bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button 
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110 shadow-sm"
          onClick={(e) => {
            e.stopPropagation();
            console.log('Wishlist clicked for:', product.name);
          }}
        >
          <Heart className="w-4 h-4 text-slate-600 hover:text-red-500 transition-colors duration-200" />
        </button>

        {/* Quick Add */}
        <button
          onClick={handleQuickAdd}
          className="quick-add-btn absolute bottom-3 right-3 p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 transform hover:scale-110 shadow-lg"
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4" />
        </button>

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="product-content p-4 space-y-3">
        {/* Category */}
        <div className="text-xs text-emerald-600 font-medium uppercase tracking-wide">
          {product.category.replace('-', ' ')}
        </div>

        {/* Title */}
        <h3 
          className="font-semibold text-slate-800 line-clamp-2 cursor-pointer hover:text-emerald-600 transition-colors duration-200 min-h-[2.5rem]"
          onClick={handleProductClick}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-slate-800">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Sizes Preview */}
        <div className="flex items-center space-x-1">
          <span className="text-xs text-slate-500">Sizes:</span>
          <div className="flex space-x-1">
            {product.sizes.slice(0, 3).map((size) => (
              <span key={size} className="text-xs bg-slate-100 px-2 py-1 rounded">
                {size}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-xs text-slate-500">+{product.sizes.length - 3}</span>
            )}
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            product.inStock 
              ? 'text-emerald-600 bg-emerald-50' 
              : 'text-red-500 bg-red-50'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          
          {/* Colors indicator */}
          <div className="flex space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={color}
                className="w-3 h-3 rounded-full border border-slate-300"
                style={{
                  backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                 color.toLowerCase() === 'black' ? '#000000' :
                                 color.toLowerCase() === 'red' ? '#ef4444' :
                                 color.toLowerCase() === 'blue' ? '#3b82f6' :
                                 color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                 color.toLowerCase() === 'gray' ? '#6b7280' :
                                 color.toLowerCase() === 'green' ? '#10b981' :
                                 '#94a3b8'
                }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-slate-400">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};