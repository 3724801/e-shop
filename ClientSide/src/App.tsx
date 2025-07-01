import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryCard } from './components/CategoryCard';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { PageContent } from './components/PageContent';
import { useCart } from './hooks/useCart';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';
import { products, categories } from './data/products';
import { Product, Page } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  // Initialize GSAP animations
  useGSAPAnimations();

  // Debug logging
  useEffect(() => {
    console.log('App state:', {
      selectedCategory,
      searchQuery,
      currentPage,
      productsCount: products.length,
      categoriesCount: categories.length
    });
  }, [selectedCategory, searchQuery, currentPage]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) {
      console.warn('No products available');
      return [];
    }

    let filtered = [...products];

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    console.log('Filtered products:', filtered.length, 'from', products.length);
    return filtered;
  }, [selectedCategory, searchQuery]);

  // Memoized featured products
  const featuredProducts = useMemo(() => {
    const featured = products.filter(product => product.featured);
    console.log('Featured products:', featured.length);
    return featured;
  }, []);

  const handleCategoryClick = useCallback((categoryId: string) => {
    console.log('Category clicked:', categoryId);
    setIsLoading(true);
    
    // Clear search when selecting category
    setSearchQuery('');
    setSelectedCategory(categoryId);
    setCurrentPage('home');
    
    // Scroll to products section after state update
    setTimeout(() => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsLoading(false);
    }, 100);
  }, []);

  const handleProductClick = useCallback((product: Product) => {
    console.log('Product clicked:', product.name);
    setSelectedProduct(product);
  }, []);

  const handleQuickAdd = useCallback((product: Product) => {
    console.log('Quick add:', product.name);
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0] || 'One Size',
      color: product.colors[0] || 'Default',
      quantity: 1,
    });
    
    // Show feedback
    const button = document.activeElement as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
  }, [addToCart]);

  const handleAddToCart = useCallback((product: Product, size: string, color: string, quantity: number) => {
    console.log('Add to cart:', product.name, size, color, quantity);
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity,
    });
  }, [addToCart]);

  const handleCheckout = useCallback(() => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  }, []);

  const handlePayment = useCallback((paymentData: any) => {
    console.log('Processing payment:', paymentData);
    
    setTimeout(() => {
      alert('Payment successful! Thank you for your order.');
      clearCart();
      setIsCheckoutOpen(false);
    }, 2000);
  }, [clearCart]);

  const handleShopNow = useCallback(() => {
    console.log('Shop now clicked');
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleNavigate = useCallback((page: Page) => {
    console.log('Navigate to:', page);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    console.log('Search query:', query);
    setSearchQuery(query);
    if (query.trim()) {
      setSelectedCategory('all');
    }
  }, []);

  // Show page content if not on home page
  if (currentPage !== 'home') {
    return <PageContent page={currentPage} onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        onCategoryClick={handleCategoryClick}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onNavigate={handleNavigate}
      />

      <Hero onShopNow={handleShopNow} />

      {/* Categories Section */}
      <section id="categories" className="categories-section py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="category-title text-3xl font-bold text-slate-800 mb-4">
              Shop by Category
            </h2>
            <p className="category-title text-slate-600 max-w-2xl mx-auto">
              Discover our curated collection across t-shirts, pants, jackets, and shoes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onCategoryClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="featured-title text-3xl font-bold text-slate-800 mb-4">
              Featured Products
            </h2>
            <p className="featured-title text-slate-600">
              Hand-picked favorites from our collection
            </p>
          </div>
          
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                  onQuickAdd={handleQuickAdd}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-500">No featured products available</p>
            </div>
          )}
        </div>
      </section>

      {/* All Products */}
      <section id="products" className="products-section py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="products-header flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                {selectedCategory === 'all' ? 'All Products' : 
                 categories.find(c => c.id === selectedCategory)?.name || 'Products'}
              </h2>
              <p className="text-slate-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryClick(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 bg-white"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              <p className="mt-2 text-slate-500">Loading products...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={`${product.id}-${selectedCategory}`}
                  product={product}
                  onProductClick={handleProductClick}
                  onQuickAdd={handleQuickAdd}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H6a1 1 0 00-1 1v1m16 0V4a1 1 0 00-1-1H6a1 1 0 00-1 1v1" />
                </svg>
              </div>
              <p className="text-slate-500 text-lg mb-4">
                No products found
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200 px-4 py-2 border border-emerald-600 rounded-lg hover:bg-emerald-50"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="footer-content space-y-4">
              <h3 className="text-xl font-bold">
                Shop<span className="text-emerald-400">Hub</span>
              </h3>
              <p className="text-slate-300">
                Your premier destination for quality products across all categories.
              </p>
            </div>
            
            <div className="footer-content">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button 
                    onClick={() => handleNavigate('about')}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('contact')}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('faq')}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('shipping')}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    Shipping
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="footer-content">
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-slate-300">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryClick(category.id)}
                      className="hover:text-white transition-colors duration-200 text-left"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-content">
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button 
                    onClick={() => handleNavigate('returns')}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    Returns
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('size-guide')}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    Size Guide
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('track-order')}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    Track Order
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('help')}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    Help Center
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2025 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={handleCheckout}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalPrice={getTotalPrice()}
        onPayment={handlePayment}
      />
    </div>
  );
}

export default App;