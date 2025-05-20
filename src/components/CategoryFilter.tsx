import React from 'react';
import { ThemeCategory } from '../types';

interface CategoryFilterProps {
  categories: ThemeCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 sm:py-8">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-white/70 backdrop-blur-md hover:bg-white/90 text-gray-700 hover:text-gray-900 border border-gray-100'
          }`}
        >
          All Themes
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-primary-600 text-white'
                : 'bg-white/70 backdrop-blur-md hover:bg-white/90 text-gray-700 hover:text-gray-900 border border-gray-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;