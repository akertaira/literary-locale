
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/books';

const CategoryList: React.FC = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-semibold text-center mb-12">Browse by Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.slice(1).map((category) => (
            <Link
              key={category}
              to={`/books?category=${encodeURIComponent(category)}`}
              className="p-4 bg-card border border-border rounded-md text-center hover:border-accent hover:shadow-md transition-all duration-300"
            >
              <span className="font-medium">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
