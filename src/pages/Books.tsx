
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getBooksByCategory, searchBooks, categories } from '@/data/books';
import { Search } from 'lucide-react';

const Books: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || 'All');
  const [searchQuery, setSearchQuery] = useState(queryParams.get('q') || '');
  const [displayedBooks, setDisplayedBooks] = useState(getBooksByCategory(selectedCategory));

  useEffect(() => {
    if (searchQuery) {
      setDisplayedBooks(searchBooks(searchQuery));
    } else {
      setDisplayedBooks(getBooksByCategory(selectedCategory));
    }
    
    // Update URL with current filters
    const params = new URLSearchParams();
    if (selectedCategory !== 'All') params.set('category', selectedCategory);
    if (searchQuery) params.set('q', searchQuery);
    
    const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    navigate(newUrl, { replace: true });
  }, [selectedCategory, searchQuery, location.pathname, navigate]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSearchQuery('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <Layout>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl font-semibold mb-2">Explore Our Books</h1>
          <p className="text-muted-foreground">
            {searchQuery 
              ? `Search results for "${searchQuery}"` 
              : selectedCategory !== 'All' 
                ? `Browse ${selectedCategory} books` 
                : 'Browse our complete collection'}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <form onSubmit={handleSearch} className="relative w-full sm:w-auto flex-1">
              <Input
                type="text"
                placeholder="Search books..."
                className="pl-9 pr-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
          </div>
          
          {(selectedCategory !== 'All' || searchQuery) && (
            <Button variant="ghost" onClick={clearFilters} className="w-full md:w-auto">
              Clear Filters
            </Button>
          )}
        </div>
        
        {displayedBooks.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="font-serif text-xl mb-2">No books found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any books matching your search criteria.
            </p>
            <Button onClick={clearFilters}>
              Clear filters and try again
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedBooks.map(book => (
              <div key={book.id} className="animate-fade-in">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Books;
