import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Loader2, Sparkles } from 'lucide-react';
import { searchCities, POPULAR_CITIES } from '../weatherService';

interface SearchBarProps {
  onSelectCity: (city: { name: string; country: string; lat: number; lon: number }) => void;
  onUseCurrentLocation: () => void;
  isLoadingLocation?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSelectCity,
  onUseCurrentLocation,
  isLoadingLocation = false,
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const results = await searchCities(query);
        setSuggestions(results);
      } catch (err) {
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item: { name: string; country: string; lat: number; lon: number }) => {
    onSelectCity(item);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-slate-400">
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin text-cyan-400" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search city, capital, or coordinates..."
          className="w-full pl-12 pr-28 py-3.5 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 rounded-2xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all shadow-lg text-sm md:text-base"
        />
        <button
          type="button"
          onClick={onUseCurrentLocation}
          disabled={isLoadingLocation}
          title="Use GPS Current Location"
          className="absolute right-2 px-3 py-1.5 bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all border border-slate-700/50"
        >
          {isLoadingLocation ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          )}
          <span className="hidden sm:inline">My Location</span>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {suggestions.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Matches Found
              </div>
              {suggestions.map((item, idx) => (
                <button
                  key={`${item.name}-${item.lat}-${idx}`}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className="w-full text-left px-4 py-2.5 hover:bg-cyan-500/10 flex items-center justify-between text-slate-200 transition-colors border-b border-slate-800/50 last:border-0"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="font-medium text-slate-100">{item.name}</span>
                      {item.admin1 && (
                        <span className="text-xs text-slate-400 ml-1.5">({item.admin1})</span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium px-2 py-0.5 rounded-full bg-slate-800">
                    {item.country}
                  </span>
                </button>
              ))}
            </div>
          ) : query.length >= 2 && !isLoading ? (
            <div className="p-4 text-center text-sm text-slate-400">
              No matching locations found for "{query}".
            </div>
          ) : (
            <div className="py-2">
              <div className="px-4 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Trending Major Cities
              </div>
              {POPULAR_CITIES.slice(0, 5).map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className="w-full text-left px-4 py-2 hover:bg-cyan-500/10 flex items-center justify-between text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400/80" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-xs text-slate-400">{item.country}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
