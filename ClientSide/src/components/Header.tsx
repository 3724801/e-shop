import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onCategoryClick: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartClick,
  onCategoryClick,
  searchQuery,
  onSearchChange,
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 't-shirts', name: 'T-Shirts' },
    { id: 'pants', name: 'Pants' },
    { id: 'jackets', name: 'Jackets' },
    { id: 'shoes', name: 'Shoes' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-slate-800 hover:text-emerald-600 transition-colors duration-200"
            >
              Shop<span className="text-emerald-600">Hub</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className="text-slate-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('about')}
              className="p-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <User className="w-6 h-6" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative p-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryClick(category.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                {category.name}
              </button>
            ))}
            
            <div className="border-t border-slate-200 pt-2 mt-2">
              <button
                onClick={() => {
                  onNavigate('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  onNavigate('help');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                Help Center
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};