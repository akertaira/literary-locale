
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/books';
import { ArrowRight } from 'lucide-react';

const CategoryList: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">Browse by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.slice(1).map((category, index) => (
            <Link
              key={category}
              to={`/books?category=${encodeURIComponent(category)}`}
              className="group p-6 bg-card border border-border rounded-lg text-center hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-serif text-lg font-medium mb-2">{category}</span>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-accent text-sm">
                Explore <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
