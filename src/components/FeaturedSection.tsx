import React from 'react';
import { Star, Zap } from 'lucide-react';
import { Theme } from '../types';
import { themeData } from '../data/ThemeData';

const FeaturedSection: React.FC = () => {
  // Get 3 featured themes
  const featuredThemes = themeData
    .filter(theme => theme.featured)
    .slice(0, 3);

  return (
    <section className="py-16 relative">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white/20 to-blue-50/80 backdrop-blur-sm z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <Star className="text-yellow-500 mr-3" size={24} />
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Trending Themes This Week
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredThemes.map((theme: Theme, index: number) => (
            <FeaturedCard key={theme.id} theme={theme} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedCard: React.FC<{ theme: Theme; index: number }> = ({ theme, index }) => {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-xl overflow-hidden border border-white/60 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/60 group">
      <div className="relative">
        <img
          src={theme.image}
          alt={theme.title}
          className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-purple-600 rounded-full px-3 py-1 flex items-center space-x-1 text-sm font-medium">
          <Zap size={14} className="mr-1" />
          <span>#{index + 1} Trending</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{theme.title}</h3>
          <span className="text-purple-600 font-bold">${theme.price}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{theme.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < theme.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">{theme.reviewCount} reviews</span>
          </div>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;