
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { getBookById } from '@/data/books';
import { useCart } from '@/context/CartContext';
import { Star, Calendar, BookOpen, Building, BookText, ShoppingCart, ArrowLeft, Heart } from 'lucide-react';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const book = id ? getBookById(id) : null;
  
  useEffect(() => {
    if (!book) {
      navigate('/books', { replace: true });
    }
  }, [book, navigate]);
  
  if (!book) {
    return null;
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Books
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[2/3] bg-muted rounded-lg overflow-hidden">
            <img 
              src={book.cover} 
              alt={book.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="font-serif text-3xl font-semibold mb-2">{book.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">by {book.author}</p>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="font-medium">{book.rating}</span>
                <span className="text-muted-foreground ml-1">rating</span>
              </div>
              <span className="text-2xl font-bold">${book.price.toFixed(2)}</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="leading-relaxed">{book.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">Publication Date</p>
                  <p className="text-muted-foreground">{book.publicationDate}</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">Pages</p>
                  <p className="text-muted-foreground">{book.pages}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">Publisher</p>
                  <p className="text-muted-foreground">{book.publisher}</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookText className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="font-medium">ISBN</p>
                  <p className="text-muted-foreground">{book.isbn}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => addToCart(book)} 
                className="flex-1 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 flex items-center justify-center"
              >
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
