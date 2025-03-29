
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedBooks } from '@/data/books';
import BookCard from './BookCard';
import { Button } from '@/components/ui/button';

const FeaturedBooks: React.FC = () => {
  const featuredBooks = getFeaturedBooks();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-2">Featured Books</h2>
            <p className="text-muted-foreground">Handpicked favorites from our collection</p>
          </div>
          <Button 
            variant="ghost"
            className="group mt-4 md:mt-0 flex items-center text-accent hover:text-accent/80 transition-colors"
            asChild
          >
            <Link to="/books">
              View all books
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredBooks.map((book, index) => (
            <div 
              key={book.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
