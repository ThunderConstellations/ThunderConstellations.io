
import React, { useState, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchItem {
  id: string;
  title: string;
  content: string;
  category: string;
  url?: string;
}

interface SearchProps {
  items: SearchItem[];
  onResultClick?: (item: SearchItem) => void;
  placeholder?: string;
  className?: string;
  showCategories?: boolean;
}

export const SearchComponent: React.FC<SearchProps> = ({
  items,
  onResultClick,
  placeholder = "Search...",
  className = '',
  showCategories = true
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return [];
    
    return items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 10); // Limit to 10 results
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredItems.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && filteredItems[selectedIndex]) {
          handleResultClick(filteredItems[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setQuery('');
        break;
    }
  };

  const handleResultClick = (item: SearchItem) => {
    onResultClick?.(item);
    setIsOpen(false);
    setQuery('');
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-cosmic-gold/30 text-cosmic-gold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cosmic-starlight/50" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-cosmic-dark/60 border border-cosmic-gold/30 rounded-xl
                   text-cosmic-starlight placeholder-cosmic-starlight/50
                   focus:outline-none focus:border-cosmic-gold focus:ring-2 focus:ring-cosmic-gold/20
                   transition-all duration-300"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-starlight/50 hover:text-cosmic-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && filteredItems.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-cosmic-dark/95 backdrop-blur-sm border border-cosmic-gold/30 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleResultClick(item)}
              className={cn(
                "p-4 cursor-pointer transition-all duration-200 border-b border-cosmic-gold/10 last:border-b-0",
                index === selectedIndex
                  ? "bg-cosmic-gold/20 border-l-4 border-l-cosmic-gold"
                  : "hover:bg-cosmic-gold/10"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-cosmic-gold text-sm mb-1 truncate">
                    {highlightMatch(item.title, query)}
                  </h4>
                  <p className="text-cosmic-starlight/80 text-xs leading-relaxed line-clamp-2">
                    {highlightMatch(item.content.substring(0, 100) + '...', query)}
                  </p>
                </div>
                {showCategories && (
                  <span className="px-2 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full whitespace-nowrap">
                    {item.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query && filteredItems.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-cosmic-dark/95 backdrop-blur-sm border border-cosmic-gold/30 rounded-xl shadow-2xl z-50 p-4">
          <p className="text-cosmic-starlight/60 text-center text-sm">
            No results found for "{query}"
          </p>
        </div>
      )}
    </div>
  );
};

// Hook for search functionality
export const useSearch = (items: SearchItem[]) => {
  const [query, setQuery] = useState('');
  
  const results = useMemo(() => {
    if (!query.trim()) return items;
    
    return items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  return {
    query,
    setQuery,
    results,
    hasResults: results.length > 0
  };
};
