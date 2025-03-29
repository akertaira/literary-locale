
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book } from '../data/books';
import { toast } from '@/components/ui/use-toast';

interface CartItem {
  book: Book;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  clearCart: () => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('bookstore-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
        setItemCount(parsedCart.reduce((acc: number, item: CartItem) => acc + item.quantity, 0));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('bookstore-cart', JSON.stringify(items));
    setItemCount(items.reduce((acc, item) => acc + item.quantity, 0));
  }, [items]);

  const addToCart = (book: Book) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.book.id === book.id);
      
      if (existingItem) {
        toast({
          title: 'Added to cart',
          description: `Increased quantity of "${book.title}" in your cart.`,
        });
        
        return prevItems.map(item => 
          item.book.id === book.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        toast({
          title: 'Added to cart',
          description: `"${book.title}" has been added to your cart.`,
        });
        
        return [...prevItems, { book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (bookId: string) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.book.id === bookId);
      
      if (itemToRemove) {
        toast({
          title: 'Removed from cart',
          description: `"${itemToRemove.book.title}" has been removed from your cart.`,
        });
      }
      
      return prevItems.filter(item => item.book.id !== bookId);
    });
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(bookId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.book.id === bookId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: 'Cart cleared',
      description: 'All items have been removed from your cart.',
    });
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      updateQuantity,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
