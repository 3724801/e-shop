import React from 'react';
import { Page } from '../types';
import { Truck, Shield, ArrowLeft, Phone, Mail, MapPin, Clock, Package, CreditCard, RefreshCw } from 'lucide-react';

interface PageContentProps {
  page: Page;
  onNavigate: (page: Page) => void;
}

export const PageContent: React.FC<PageContentProps> = ({ page, onNavigate }) => {
  const renderPageContent = () => {
    switch (page) {
      case 'about':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">About ShopHub</h1>
              <p className="text-xl text-slate-600">Your premier destination for quality products</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800">Our Story</h2>
                <p className="text-slate-600 leading-relaxed">
                  Founded in 2020, ShopHub began with a simple mission: to provide high-quality products 
                  across multiple categories while delivering exceptional customer service. We believe that 
                  shopping should be enjoyable, convenient, and trustworthy.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Today, we serve thousands of customers worldwide, offering everything from fashion and 
                  electronics to home essentials and sports gear. Our commitment to quality and customer 
                  satisfaction remains at the heart of everything we do.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-slate-600">Every product is carefully selected and tested for quality</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-slate-600">Quick and reliable delivery to your doorstep</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-slate-600">Our team is always here to help you</p>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
              <p className="text-xl text-slate-600">We'd love to hear from you</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                    <p className="text-slate-600">123 Commerce Street<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">support@shophub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Hours</h3>
                    <p className="text-slate-600">Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-slate-600">Find answers to common questions</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What is your return policy?",
                  answer: "We offer a 30-day return policy for all items in original condition. Items must be unworn, unused, and in original packaging."
                },
                {
                  question: "How long does shipping take?",
                  answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee."
                },
                {
                  question: "Do you ship internationally?",
                  answer: "Yes, we ship to most countries worldwide. International shipping times vary by location (7-14 business days)."
                },
                {
                  question: "How can I track my order?",
                  answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
                },
                {
                  question: "How do I know what size to order?",
                  answer: "Each product page includes a detailed size guide. You can also contact our customer service team for personalized sizing help."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'shipping':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Shipping Information</h1>
              <p className="text-xl text-slate-600">Everything you need to know about delivery</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Truck className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-slate-800">Free Shipping</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  Enjoy free standard shipping on all orders over $50. No minimum purchase required for premium members.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Standard delivery: 3-5 business days</li>
                  <li>• Free on orders $50+</li>
                  <li>• Tracking included</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-800">Express Shipping</h2>
                </div>
                <p className="text-slate-600 mb-4">
                  Need it fast? Choose express shipping for next-day or 2-day delivery options.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Next day: $19.99</li>
                  <li>• 2-day express: $12.99</li>
                  <li>• Order by 2PM for same-day processing</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Shipping Zones & Times</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-800">Zone</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800">Standard</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800">Express</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 text-slate-600">United States</td>
                      <td className="py-3 px-4 text-slate-600">3-5 days</td>
                      <td className="py-3 px-4 text-slate-600">1-2 days</td>
                      <td className="py-3 px-4 text-slate-600">Free over $50</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 text-slate-600">Canada</td>
                      <td className="py-3 px-4 text-slate-600">5-7 days</td>
                      <td className="py-3 px-4 text-slate-600">2-3 days</td>
                      <td className="py-3 px-4 text-slate-600">$9.99</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 text-slate-600">International</td>
                      <td className="py-3 px-4 text-slate-600">7-14 days</td>
                      <td className="py-3 px-4 text-slate-600">3-5 days</td>
                      <td className="py-3 px-4 text-slate-600">$19.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'returns':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Returns & Exchanges</h1>
              <p className="text-xl text-slate-600">Easy returns within 30 days</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <RefreshCw className="w-6 h-6 text-emerald-600" />
                <h2 className="text-xl font-semibold text-slate-800">30-Day Return Policy</h2>
              </div>
              <p className="text-slate-700">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                you can return it within 30 days for a full refund or exchange.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Return Process</h3>
                <ol className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
                    <span>Contact our customer service team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
                    <span>Receive your return authorization and label</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</span>
                    <span>Package items in original condition</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">4</span>
                    <span>Ship using provided return label</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">5</span>
                    <span>Receive refund within 5-7 business days</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Return Requirements</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Items must be in original condition</li>
                  <li>• Original packaging and tags required</li>
                  <li>• Unworn and unused items only</li>
                  <li>• Return within 30 days of delivery</li>
                  <li>• Original receipt or order number</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-4 mt-8">Non-Returnable Items</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Personalized or custom items</li>
                  <li>• Intimate apparel and swimwear</li>
                  <li>• Perishable goods</li>
                  <li>• Digital downloads</li>
                  <li>• Gift cards</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'size-guide':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Size Guide</h1>
              <p className="text-xl text-slate-600">Find your perfect fit</p>
            </div>

            <div className="space-y-12">
              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Clothing Sizes</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Size</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Chest (in)</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Waist (in)</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Hip (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-800">XS</td>
                        <td className="py-3 px-4 text-slate-600">32-34</td>
                        <td className="py-3 px-4 text-slate-600">26-28</td>
                        <td className="py-3 px-4 text-slate-600">34-36</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-800">S</td>
                        <td className="py-3 px-4 text-slate-600">34-36</td>
                        <td className="py-3 px-4 text-slate-600">28-30</td>
                        <td className="py-3 px-4 text-slate-600">36-38</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-800">M</td>
                        <td className="py-3 px-4 text-slate-600">36-38</td>
                        <td className="py-3 px-4 text-slate-600">30-32</td>
                        <td className="py-3 px-4 text-slate-600">38-40</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-800">L</td>
                        <td className="py-3 px-4 text-slate-600">38-40</td>
                        <td className="py-3 px-4 text-slate-600">32-34</td>
                        <td className="py-3 px-4 text-slate-600">40-42</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-800">XL</td>
                        <td className="py-3 px-4 text-slate-600">40-42</td>
                        <td className="py-3 px-4 text-slate-600">34-36</td>
                        <td className="py-3 px-4 text-slate-600">42-44</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Shoe Sizes</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">US Men</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">US Women</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">EU</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">UK</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-800">Length (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 text-slate-600">7</td>
                        <td className="py-3 px-4 text-slate-600">8.5</td>
                        <td className="py-3 px-4 text-slate-600">40</td>
                        <td className="py-3 px-4 text-slate-600">6</td>
                        <td className="py-3 px-4 text-slate-600">25.0</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 text-slate-600">8</td>
                        <td className="py-3 px-4 text-slate-600">9.5</td>
                        <td className="py-3 px-4 text-slate-600">41</td>
                        <td className="py-3 px-4 text-slate-600">7</td>
                        <td className="py-3 px-4 text-slate-600">25.5</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 text-slate-600">9</td>
                        <td className="py-3 px-4 text-slate-600">10.5</td>
                        <td className="py-3 px-4 text-slate-600">42</td>
                        <td className="py-3 px-4 text-slate-600">8</td>
                        <td className="py-3 px-4 text-slate-600">26.0</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 text-slate-600">10</td>
                        <td className="py-3 px-4 text-slate-600">11.5</td>
                        <td className="py-3 px-4 text-slate-600">43</td>
                        <td className="py-3 px-4 text-slate-600">9</td>
                        <td className="py-3 px-4 text-slate-600">26.5</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 text-slate-600">11</td>
                        <td className="py-3 px-4 text-slate-600">12.5</td>
                        <td className="py-3 px-4 text-slate-600">44</td>
                        <td className="py-3 px-4 text-slate-600">10</td>
                        <td className="py-3 px-4 text-slate-600">27.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 'track-order':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Track Your Order</h1>
              <p className="text-xl text-slate-600">Enter your order details below</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Order Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="e.g., SH123456789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your@email.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Track Order
                </button>
              </form>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-3">Need Help?</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Can't find your order number? Check your email confirmation or contact our support team.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                >
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
        );

      case 'help':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Help Center</h1>
              <p className="text-xl text-slate-600">How can we help you today?</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <button
                onClick={() => onNavigate('faq')}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-200 text-left"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Orders & Shipping</h3>
                <p className="text-slate-600 text-sm">Track orders, shipping info, and delivery questions</p>
              </button>

              <button
                onClick={() => onNavigate('returns')}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-200 text-left"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Returns & Exchanges</h3>
                <p className="text-slate-600 text-sm">Return policy, exchange process, and refunds</p>
              </button>

              <button
                onClick={() => onNavigate('size-guide')}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-200 text-left"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Size & Fit</h3>
                <p className="text-slate-600 text-sm">Size guides, fit information, and measurements</p>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-200 text-left"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Contact Support</h3>
                <p className="text-slate-600 text-sm">Get in touch with our customer service team</p>
              </button>

              <button
                onClick={() => onNavigate('track-order')}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-200 text-left"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Track Order</h3>
                <p className="text-slate-600 text-sm">Check the status of your recent orders</p>
              </button>

              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">24/7 Support</h3>
                <p className="text-slate-600 text-sm mb-3">Our team is always here to help</p>
                <p className="text-emerald-600 font-medium text-sm">support@shophub.com</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
        
        {renderPageContent()}
      </div>
    </div>
  );
};