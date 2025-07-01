import React, { useRef, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  totalPrice: number;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
  onCheckout,
}) => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { animateCartOpen, animateCartClose, animateButtonClick } = useGSAPAnimations();

  useEffect(() => {
    if (isOpen && cartRef.current) {
      animateCartOpen(cartRef.current);
    }
  }, [isOpen, animateCartOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (cartRef.current) {
      animateCartClose(cartRef.current, onClose);
    } else {
      onClose();
    }
  };

  const handleButtonClick = (e: React.MouseEvent, callback: () => void) => {
    const button = e.currentTarget as HTMLElement;
    animateButtonClick(button);
    // Immediate callback without delay
    callback();
  };

  return (
    <div ref={cartRef} className="fixed inset-0 z-50 overflow-hidden" style={{ display: 'none' }}>
      <div className="cart-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="cart-panel absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Shopping Cart ({cartItems.length})</span>
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-slate-400">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4 bg-slate-50 rounded-lg p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium text-slate-800 line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="text-sm text-slate-500">
                        {item.size} • {item.color}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => handleButtonClick(e, () => onUpdateQuantity(item.id, item.quantity - 1))}
                            className="p-1 hover:bg-white rounded transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={(e) => handleButtonClick(e, () => onUpdateQuantity(item.id, item.quantity + 1))}
                            className="p-1 hover:bg-white rounded transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={(e) => handleButtonClick(e, () => onRemoveItem(item.id))}
                            className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={(e) => handleButtonClick(e, onCheckout)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Proceed to Checkout
              </button>
              <p className="text-xs text-slate-500 text-center">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};