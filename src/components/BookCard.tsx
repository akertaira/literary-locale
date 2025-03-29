
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Book } from '@/data/books';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="book-card group">
      <div className="aspect-[2/3] relative overflow-hidden rounded-t-lg">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full bg-white/90 text-black hover:bg-white"
              asChild
            >
              <Link to={`/book/${book.id}`}>
                <Eye className="h-4 w-4 mr-1" />
                View
              </Link>
            </Button>
            <Button 
              onClick={(e) => {
                e.preventDefault();
                addToCart(book);
              }}
              variant="accent" 
              size="sm" 
              className="w-full"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 bg-card border border-border border-t-0 rounded-b-lg">
        <Link to={`/book/${book.id}`} className="block">
          <h3 className="font-serif font-medium text-lg mb-1 line-clamp-1 group-hover:text-accent transition-colors">
            {book.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm">{book.rating}</span>
          </div>
          <span className="font-medium text-accent">${book.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
