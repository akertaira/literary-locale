
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import CategoryList from '@/components/CategoryList';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedBooks />
      <CategoryList />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6">Welcome to Literary Locale</h2>
            <p className="text-muted-foreground mb-8">
              Literary Locale is a sanctuary for book lovers. Our carefully curated collection 
              spans across genres, bringing you the best of literature from around the world. 
              Whether you're seeking an engaging novel, an informative non-fiction, or a 
              heartwarming children's book, we have something special waiting for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-md text-center">
                <h3 className="font-serif text-xl font-semibold mb-3">Expert Curation</h3>
                <p className="text-muted-foreground">Hand-selected titles chosen by our team of book enthusiasts</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-md text-center">
                <h3 className="font-serif text-xl font-semibold mb-3">Quality Editions</h3>
                <p className="text-muted-foreground">Beautiful, durable books that deserve a place on your shelf</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-md text-center">
                <h3 className="font-serif text-xl font-semibold mb-3">Literary Community</h3>
                <p className="text-muted-foreground">Join like-minded readers in celebrating the written word</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
