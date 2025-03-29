
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Literary Locale</h3>
            <p className="text-muted-foreground mb-4">
              Discover your next literary adventure with handpicked books from around the world.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/books" className="text-muted-foreground hover:text-accent transition-colors">
                  All Books
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-accent transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/books/featured" className="text-muted-foreground hover:text-accent transition-colors">
                  Featured Books
                </Link>
              </li>
              <li>
                <Link to="/books/new" className="text-muted-foreground hover:text-accent transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-accent transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-accent transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Join Our Community</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for book recommendations, special offers, and more.
            </p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Literary Locale. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="text-muted-foreground text-sm mr-2">Made with</p>
            <Heart className="h-4 w-4 text-accent animate-pulse mr-2" />
            <p className="text-muted-foreground text-sm">by Lovable</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
