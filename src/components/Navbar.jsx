import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './ui/Logo';
import { AuthModal } from './AuthModal';
import { Cart } from './Cart';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0 });
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { 
      label: 'Home',
      onClick: handleHomeClick
    },
    { 
      label: 'About Us',
      onClick: handleAboutClick
    },
    { 
      label: 'Contact Us',
      onClick: () => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      label: 'Products',
      onClick: () => {
        navigate('/products');
        window.scrollTo({ top: 0 });
      }
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-primary-green hover:text-primary-orange focus:outline-none bg-secondary-light-green/20"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Logo */}
            <div 
              className="flex-shrink-0 ml-4 md:ml-0 cursor-pointer"
              onClick={handleHomeClick}
            >
              <Logo />
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex md:ml-8 space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-gray-700 hover:text-primary-green font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center ml-auto space-x-4">
              <button 
                className="text-gray-700 hover:text-primary-green transition-colors"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <User className="h-6 w-6" />
              </button>
              <button 
                className="text-gray-700 hover:text-primary-green transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 transform md:hidden bg-white w-64 shadow-lg transition-transform duration-300 ease-in-out z-50",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div onClick={handleHomeClick}>
                <Logo />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-primary-green hover:text-primary-orange focus:outline-none bg-secondary-light-green/20"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left py-2 text-base font-medium text-gray-700 hover:text-primary-green hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={[]}
        onUpdateQuantity={() => {}}
      />
    </>
  );
};