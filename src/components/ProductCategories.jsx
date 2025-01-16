import React from 'react';

const categories = [
  {
    title: 'Pastes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i0.wp.com/www.sprinklesandseasalt.com/wp-content/uploads/2020/01/Thai-Curries-19-scaled.jpg?fit=1707%2C2560&ssl=1',
  },
  {
    title: 'Premix',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://www.shutterstock.com/image-photo/assorted-famous-indian-pakistani-food-600nw-2138815627.jpg',
  },
  {
    title: 'Gravies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://nuty.in/cdn/shop/collections/nuty-base-gravies.jpg?v=1698571335',
  },
];

export const ProductCategories = () => {
  return (
    <section id="products" className="py-16 bg-primary-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-green mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-block bg-secondary-light-green text-primary-green font-semibold px-8 py-3 rounded-md hover:bg-secondary-light-green/90 transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    </section>
  );
};