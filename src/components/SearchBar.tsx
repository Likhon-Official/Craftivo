import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
    setIsExpanded(false);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div
        className={`flex items-center transition-all duration-300 ${
          isExpanded ? 'bg-white shadow-lg' : 'bg-white/50'
        } backdrop-blur-lg rounded-full border border-primary-100`}
      >
        <div className="flex-1 flex items-center">
          <Search
            size={20}
            className={`ml-4 transition-colors duration-200 ${
              isExpanded ? 'text-primary-600' : 'text-gray-400'
            }`}
          />
          <input
            type="text"
            placeholder="Search themes by name, category, or tags..."
            value={query}
            onChange={handleSearch}
            onFocus={() => setIsExpanded(true)}
            className="w-full px-4 py-3 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400"
          />
        </div>
        {query && (
          <button
            onClick={clearSearch}
            className="p-2 hover:text-primary-600 transition-colors duration-200 mr-2"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {isExpanded && query && (
        <div className="absolute inset-x-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-100 divide-y divide-gray-100 max-h-96 overflow-auto z-50">
          <div className="p-4 text-sm text-gray-500">
            Type to search themes...
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
