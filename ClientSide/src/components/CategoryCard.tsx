import React, { useRef } from 'react';
import { Category } from '../types';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

interface CategoryCardProps {
  category: Category;
  onCategoryClick: (categoryId: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onCategoryClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { animateCategoryHover, animateButtonClick } = useGSAPAnimations();

  const handleMouseEnter = () => {
    if (cardRef.current) {
      animateCategoryHover(cardRef.current, true);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      animateCategoryHover(cardRef.current, false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Category card clicked:', category.id);
    
    if (cardRef.current) {
      animateButtonClick(cardRef.current);
    }
    
    // Immediate action
    onCategoryClick(category.id);
  };

  // Fallback images for categories
  const getFallbackImage = (categoryId: string) => {
    switch (categoryId) {
      case 't-shirts':
        return 'https://images.pexels.com/photos/1006220/pexels-photo-1006220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
      case 'pants':
        return 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
      case 'jackets':
        return 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
      case 'shoes':
        return 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
      default:
        return 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    }
  };

  return (
    <div 
      ref={cardRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="category-card group relative overflow-hidden rounded-xl bg-white shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105 border border-slate-100"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e as any);
        }
      }}
    >
      <div className="aspect-w-16 aspect-h-10 relative">
        <img
          src={category.image}
          alt={`${category.name} - ${category.description}`}
          className="category-image w-full h-48 object-cover transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getFallbackImage(category.id);
          }}
        />
        <div className="category-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2 drop-shadow-sm">{category.name}</h3>
        <p className="text-sm text-white/90 mb-3 drop-shadow-sm">{category.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/80 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
            {category.productCount} products
          </div>
          <div className="text-xs text-white/90 font-medium">
            Shop Now →
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium opacity-90 shadow-lg">
        New
      </div>
      
      {/* Click indicator */}
      <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
    </div>
  );
};