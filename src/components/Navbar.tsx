
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/books/search?q=${encodeURIComponent(searchQuery.trim())}`;
      setSearchQuery('');
      closeMenu();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-serif font-semibold">Literary Locale</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-primary-foreground hover:text-white/80 transition-colors font-medium">Home</Link>
            <Link to="/books" className="text-primary-foreground hover:text-white/80 transition-colors font-medium">Books</Link>
            <Link to="/categories" className="text-primary-foreground hover:text-white/80 transition-colors font-medium">Categories</Link>
          </nav>

          {/* Search and Cart (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search books..."
                className="w-64 pl-9 pr-4 py-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
            </form>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-primary-foreground hover:text-white/80 hover:bg-primary-foreground/10"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary py-4 px-4 border-t border-primary-foreground/10">
          <nav className="flex flex-col space-y-4 mb-4">
            <Link to="/" className="text-primary-foreground hover:text-white/80 transition-colors" onClick={closeMenu}>Home</Link>
            <Link to="/books" className="text-primary-foreground hover:text-white/80 transition-colors" onClick={closeMenu}>Books</Link>
            <Link to="/categories" className="text-primary-foreground hover:text-white/80 transition-colors" onClick={closeMenu}>Categories</Link>
          </nav>
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search books..."
              className="w-full pl-9 pr-4 py-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
            <Button type="submit" className="mt-2 w-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground">Search</Button>
          </form>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </header>
  );
};

export default Navbar;
