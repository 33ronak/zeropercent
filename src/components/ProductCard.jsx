import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
          <span className="text-lg font-bold text-primary-green">₹{product.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-secondary-light-green text-primary-green font-semibold py-2 px-4 rounded-md hover:bg-secondary-light-green/90 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};