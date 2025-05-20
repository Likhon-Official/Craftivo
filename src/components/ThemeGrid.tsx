import React, { useState } from 'react';
import ThemeCard from './ThemeCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import { Theme } from '../types';
import { themeData, categories } from '../data/ThemeData';

const ThemeGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredThemes = themeData
    .filter(theme => {
      const matchesCategory = activeCategory === 'all' || theme.categoryId === activeCategory;
      const matchesSearch = searchQuery === '' || 
        theme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        theme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        theme.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

  return (
    <section id="themes" className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50/50 to-white z-0" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/3 -right-24 w-64 h-64 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-80 h-80 rounded-full bg-secondary-100/40 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500"> Premium Themes</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Browse through our collection of beautifully crafted themes for every project type. Each theme is responsive, customizable, and built with modern best practices.
          </p>
          
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8">
          {filteredThemes.map((theme: Theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No themes found matching your criteria.</p>
          </div>
        )}

        {filteredThemes.length > 0 && filteredThemes.length < themeData.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="bg-white hover:bg-gray-50 text-primary-600 font-medium px-6 py-3 rounded-lg border border-primary-200 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View All Themes
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThemeGrid;