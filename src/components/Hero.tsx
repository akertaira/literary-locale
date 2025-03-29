
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-accent py-24 md:py-32">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/?bookstore,library')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
          Discover Your Next Favorite Book
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
          Explore our curated collection of bestsellers, classics, and hidden gems. 
          Find the perfect story that speaks to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            asChild
            className="bg-white text-accent hover:bg-white/90"
          >
            <Link to="/books">Browse Collection</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            asChild
            className="border-white text-white hover:bg-white/10"
          >
            <Link to="/categories">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Categories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
