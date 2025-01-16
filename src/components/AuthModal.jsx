import React, { useState } from 'react';
import { X } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [accountType, setAccountType] = useState('individual');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </h2>

          {isSignUp && (
            <div className="mb-4">
              <div className="flex gap-4 mb-4">
                <button
                  className={`flex-1 py-2 px-4 rounded-md ${
                    accountType === 'individual'
                      ? 'bg-primary-green text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setAccountType('individual')}
                >
                  Individual
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-md ${
                    accountType === 'business'
                      ? 'bg-primary-green text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setAccountType('business')}
                >
                  Business
                </button>
              </div>
            </div>
          )}

          <form className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-green focus:ring-primary-green"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-green focus:ring-primary-green"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-green focus:ring-primary-green"
                required
              />
            </div>

            {isSignUp && accountType === 'business' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-green focus:ring-primary-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    GST Number (Optional)
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-green focus:ring-primary-green"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-green hover:bg-primary-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              className="text-primary-green hover:text-primary-green/90"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};