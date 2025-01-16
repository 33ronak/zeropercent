import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { MultiSelect } from '../components/ui/MultiSelect';
import { ProductCard } from '../components/ProductCard';

const PRODUCTS = {
  Pastes: [
    {
      id: 'p1',
      name: 'Ginger Garlic Paste',
      category: 'Pastes',
      price: 149,
      image: 'https://www.dwarakaorganic.com/wp-content/uploads/2024/07/Ginger-and-Garlic-Paste-A-powerful-combination-jpg.jpg',
      description: 'Fresh and aromatic blend of ginger and garlic.'
    },
    {
      id: 'p2',
      name: 'Turmeric Paste',
      category: 'Pastes',
      price: 129,
      image: 'https://cdn.shopify.com/s/files/1/0565/5445/5127/files/10-Easy-Ways-to-Use-Turmeric-Paste-blog-turmeric-australia-buy-online-3_2048x2048.jpg?v=1674102497',
      description: 'Pure and vibrant turmeric paste for authentic flavors.'
    },
    {
      id: 'p3',
      name: 'Cumin Paste',
      category: 'Pastes',
      price: 139,
      image: 'https://i0.wp.com/flaevor.com/wp-content/uploads/2023/07/KormaCurryPaste1.jpg?resize=773%2C1024&ssl=1',
      description: 'Rich and aromatic cumin paste for perfect seasoning.'
    }
  ],
  Premixes: [
    {
      id: 'pm1',
      name: 'Biriyani Premix',
      category: 'Premixes',
      price: 199,
      image: 'https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg',
      description: 'Perfect blend of spices for authentic biriyani.'
    },
    {
      id: 'pm2',
      name: 'Shawarma Roll Premix',
      category: 'Premixes',
      price: 179,
      image: 'https://lifeloveandgoodfood.com/wp-content/uploads/2020/04/Chicken-Shawarma_09_1200x1200.jpg',
      description: 'Authentic shawarma seasoning blend.'
    }
  ],
  Gravies: [
    {
      id: 'g1',
      name: 'Butter Masala Gravy',
      category: 'Gravies',
      price: 249,
      image: 'https://www.livingsmartandhealthy.com/wp-content/uploads/2023/06/paneer-butter-masala-recipe.jpg',
      description: 'Rich and creamy butter masala base gravy.'
    },
    {
      id: 'g2',
      name: 'Lababdar Gravy',
      category: 'Gravies',
      price: 269,
      image: 'https://static.toiimg.com/thumb/60447827.cms?imgsize=703154&width=800&height=800',
      description: 'Luxurious and aromatic lababdar gravy base.'
    },
    {
      id: 'g3',
      name: 'Gravy 65',
      category: 'Gravies',
      price: 229,
      image: 'https://www.freshtohome.com/blog/wp-content/uploads/2024/07/Screenshot-2024-07-18-145353.png',
      description: 'Spicy and tangy gravy 65 base.'
    }
  ]
};

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategories([category]);
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [searchParams]);

  const categories = Object.keys(PRODUCTS);
  
  const filteredProducts = Object.entries(PRODUCTS)
    .filter(([category]) => 
      selectedCategories.length === 0 || selectedCategories.includes(category)
    )
    .flatMap(([_, products]) => products)
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-64">
            <MultiSelect
              options={categories}
              selected={selectedCategories}
              onChange={setSelectedCategories}
              placeholder="Select Categories"
            />
          </div>
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-green focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};