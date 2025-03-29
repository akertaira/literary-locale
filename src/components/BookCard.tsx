
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Book } from '@/data/books';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`} className="block">
        <div className="aspect-[2/3] relative">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="object-cover w-full h-full rounded-t-md"
          />
          <div className="book-card-overlay">
            <Button variant="secondary" size="sm" className="mb-2">
              View Details
            </Button>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/book/${book.id}`} className="block">
          <h3 className="font-serif font-medium text-lg mb-1 line-clamp-1 hover:text-accent transition-colors">
            {book.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm">{book.rating}</span>
          </div>
          <span className="font-medium">${book.price.toFixed(2)}</span>
        </div>
        <Button 
          onClick={() => addToCart(book)} 
          variant="outline" 
          size="sm" 
          className="w-full mt-3 flex items-center justify-center"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
