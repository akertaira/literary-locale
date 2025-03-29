
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Your <span className="text-accent">Next Favorite</span> Book
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg">
              Explore our curated collection of bestsellers, classics, and hidden gems. 
              Find the perfect story that speaks to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild
                className="group"
              >
                <Link to="/books">
                  Browse Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
              >
                <Link to="/categories">
                  Explore Categories
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://source.unsplash.com/random/?bookshelf,books" 
                alt="Beautiful bookshelf" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-lg rotate-6">
              <img 
                src="https://source.unsplash.com/random/?book,reading" 
                alt="Reading book" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
