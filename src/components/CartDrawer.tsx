
import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, setIsOpen }) => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  
  const totalPrice = items.reduce((total, item) => {
    return total + (item.book.price * item.quantity);
  }, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="flex flex-row justify-between items-center">
          <SheetTitle className="text-xl font-serif">Shopping Cart</SheetTitle>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>
        
        <div className="mt-8 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Button onClick={() => setIsOpen(false)}>
                Browse Books
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.book.id} className="flex space-x-4">
                  <div className="h-24 w-16 flex-shrink-0 overflow-hidden rounded">
                    <img
                      src={item.book.cover}
                      alt={item.book.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium">
                      <h3>
                        <Link 
                          to={`/book/${item.book.id}`} 
                          onClick={() => setIsOpen(false)}
                          className="hover:text-accent transition-colors"
                        >
                          {item.book.title}
                        </Link>
                      </h3>
                      <p className="ml-4">${(item.book.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.book.author}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-r-none" 
                          onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-l-none" 
                          onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeFromCart(item.book.id)}
                        className="h-8 w-8 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="mt-8">
            <Separator className="my-4" />
            <div className="flex justify-between text-base font-medium mb-4">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <SheetFooter className="flex flex-col space-y-2 sm:space-y-0">
              <Button className="w-full">
                Checkout
              </Button>
              <Button variant="outline" onClick={clearCart} className="w-full">
                Clear Cart
              </Button>
            </SheetFooter>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
