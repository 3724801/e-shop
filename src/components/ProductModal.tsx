import React, { useState, useRef, useEffect } from 'react';
import { X, Star, ShoppingCart, Heart, Minus, Plus, Truck, Shield } from 'lucide-react';
import { Product } from '../types';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const { animateModalOpen, animateModalClose, animateButtonClick } = useGSAPAnimations();

  useEffect(() => {
    if (isOpen && modalRef.current) {
      animateModalOpen(modalRef.current);
    }
  }, [isOpen, animateModalOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (modalRef.current) {
      animateModalClose(modalRef.current, onClose);
    } else {
      onClose();
    }
  };

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      onAddToCart(product, selectedSize, selectedColor, quantity);
      handleClose();
    }
  };

  const handleButtonClick = (e: React.MouseEvent, callback?: () => void) => {
    const button = e.currentTarget as HTMLElement;
    animateButtonClick(button);
    // Immediate callback
    if (callback) callback();
  };

  return (
    <div ref={modalRef} className="fixed inset-0 z-50 overflow-y-auto" style={{ display: 'none' }}>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="modal-backdrop fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
        
        <div className="modal-content relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.images[currentImage] || product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                )}
              </div>
              
              {product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleButtonClick(e, () => setCurrentImage(index))}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        currentImage === index ? 'border-emerald-600' : 'border-slate-200'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-emerald-600 font-medium uppercase tracking-wide mb-2">
                  {product.category}
                </div>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">{product.name}</h1>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-slate-800">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-slate-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={(e) => handleButtonClick(e, () => setSelectedSize(size))}
                      className={`px-4 py-2 border rounded-lg font-medium transition-colors duration-200 ${
                        selectedSize === size
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={(e) => handleButtonClick(e, () => setSelectedColor(color))}
                      className={`px-4 py-2 border rounded-lg font-medium transition-colors duration-200 ${
                        selectedColor === color
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={(e) => handleButtonClick(e, () => setQuantity(Math.max(1, quantity - 1)))}
                    className="p-2 border rounded-lg hover:bg-slate-50 transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={(e) => handleButtonClick(e, () => setQuantity(quantity + 1))}
                    className="p-2 border rounded-lg hover:bg-slate-50 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={(e) => handleButtonClick(e, handleAddToCart)}
                  disabled={!product.inStock}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
                <button 
                  onClick={handleButtonClick}
                  className="p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-slate-600">
                  <Truck className="w-5 h-5 text-emerald-600" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-600">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>30-day return guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};