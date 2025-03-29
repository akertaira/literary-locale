
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/books';
import { BookOpen } from 'lucide-react';

const Categories: React.FC = () => {
  return (
    <Layout>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl font-semibold mb-2">Book Categories</h1>
          <p className="text-muted-foreground">
            Explore our extensive collection of books by category
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.slice(1).map((category) => (
            <div key={category} className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{category}</h3>
              <p className="text-muted-foreground mb-4">
                Explore our collection of {category.toLowerCase()} books
              </p>
              <Button asChild>
                <Link to={`/books?category=${encodeURIComponent(category)}`}>
                  Browse {category}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
