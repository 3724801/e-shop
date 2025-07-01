import React from 'react';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  const handleShopNow = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Shop Now button clicked');
    onShopNow();
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-6">
              <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight text-white">
                Discover Your
                <span className="hero-title block text-emerald-400 mt-2">Perfect Style</span>
              </h1>
              <p className="hero-subtitle text-xl text-slate-300 max-w-lg leading-relaxed">
                Shop from thousands of premium products across t-shirts, pants, jackets, and shoes. 
                Quality guaranteed with fast shipping worldwide.
              </p>
            </div>
            
            <div className="hero-rating flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-slate-300 font-medium">4.8/5 from 10,000+ reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShopNow}
                className="hero-button group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={handleShopNow}
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                View Collection
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fashion Collection - Premium Clothing"
                  className="hero-image w-full h-96 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Multiple fallback images
                    if (target.src.includes('7679720')) {
                      target.src = "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800";
                    } else if (target.src.includes('996329')) {
                      target.src = "https://images.pexels.com/photos/1006220/pexels-photo-1006220.jpeg?auto=compress&cs=tinysrgb&w=800";
                    } else {
                      target.src = "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }
                  }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="hero-badge absolute -bottom-6 -left-6 bg-white text-slate-800 p-4 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-emerald-600">50%</div>
                <div className="text-sm font-medium">Limited Offer</div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
                <div className="text-sm font-bold">NEW</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* Features Bar */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-item flex items-center space-x-3 text-center md:text-left justify-center md:justify-start">
              <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-400/30 flex-shrink-0">
                <Truck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Free Shipping</div>
                <div className="text-sm text-slate-300">On orders over $50</div>
              </div>
            </div>
            <div className="feature-item flex items-center space-x-3 text-center md:text-left justify-center md:justify-start">
              <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-400/30 flex-shrink-0">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Secure Payment</div>
                <div className="text-sm text-slate-300">100% protected</div>
              </div>
            </div>
            <div className="feature-item flex items-center space-x-3 text-center md:text-left justify-center md:justify-start">
              <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-400/30 flex-shrink-0">
                <Headphones className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-white">24/7 Support</div>
                <div className="text-sm text-slate-300">Always here to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};