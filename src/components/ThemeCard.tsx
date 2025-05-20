import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Theme } from '../types';

interface ThemeCardProps {
  theme: Theme;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  return (
    <div className="group h-full">
      <div className="relative h-full overflow-hidden rounded-xl transition-all duration-300 bg-white/30 backdrop-blur-md border border-white/50 hover:shadow-xl hover:bg-white/40 flex flex-col transform hover:-translate-y-1">
        {/* Theme preview image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
          <img
            src={theme.image}
            alt={theme.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {theme.featured && (
              <div className="bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Featured
              </div>
            )}
            
            {theme.isNew && (
              <div className="bg-secondary-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </div>
            )}
          </div>
        </div>

        {/* Card content */}
        <div className="flex-1 flex flex-col p-4 sm:p-6">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1">{theme.title}</h3>
              <span className="text-primary-600 font-bold whitespace-nowrap">${theme.price}</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">{theme.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {theme.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-4">
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center justify-center sm:justify-start"
            >
              Live Demo <ExternalLink size={14} className="ml-1 flex-shrink-0" />
            </a>
            <button className="flex-1 sm:flex-none bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm">
              Buy on Gumroad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;