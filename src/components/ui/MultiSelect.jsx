import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export const MultiSelect = ({ options, selected, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    const newSelected = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-green focus:border-transparent"
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-700">
            {selected.length > 0 ? `${selected.length} selected` : placeholder}
          </span>
          <ChevronDown className={cn(
            "h-5 w-5 text-gray-400 transition-transform",
            isOpen && "transform rotate-180"
          )} />
        </div>
      </button>

      {/* Selected Tags */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map(item => (
            <span
              key={item}
              className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-primary-green text-white"
            >
              {item}
              <button
                onClick={() => toggleOption(item)}
                className="ml-1 hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="py-1">
            {options.map(option => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className={cn(
                  "w-full px-4 py-2 text-left hover:bg-gray-100",
                  selected.includes(option) && "bg-gray-50"
                )}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => {}}
                    className="h-4 w-4 text-primary-green border-gray-300 rounded focus:ring-primary-green"
                  />
                  <span className="ml-2">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};