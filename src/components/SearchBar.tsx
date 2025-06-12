'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Command } from 'cmdk';

const searchableItems = [
  { name: 'Overview', href: '/', keywords: ['dashboard', 'home', 'main', 'overview'] },
  { name: 'Analytics', href: '/analytics', keywords: ['stats', 'metrics', 'data', 'charts'] },
  { name: 'Courses', href: '/courses', keywords: ['lessons', 'training', 'education', 'classes'] },
  { name: 'Users', href: '/users', keywords: ['members', 'students', 'people', 'accounts'] },
  { name: 'Settings', href: '/settings', keywords: ['configuration', 'preferences', 'options'] },
];

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredItems = query
    ? searchableItems.filter((item) =>
        [...item.keywords, item.name.toLowerCase()].some((keyword) =>
          keyword.includes(query.toLowerCase())
        )
      )
    : searchableItems;

  const handleSelect = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-500 hover:border-blue-500 transition-colors duration-200 shadow-sm"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
        <span className="flex-1 text-left">Search pages...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-gray-500 bg-gray-100 rounded">
          <span className="text-sm">⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setIsOpen(false)}>
          <div
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                <input
                  className="flex-1 outline-none bg-transparent text-gray-900 placeholder:text-gray-500"
                  placeholder="Search for pages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-gray-500 bg-gray-100 rounded">
                  ESC
                </kbd>
              </div>
              <div className="py-2 max-h-72 overflow-y-auto">
                {filteredItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleSelect(item.href)}
                    className="w-full px-4 py-2 text-left text-gray-900 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-500">
                      {item.keywords.slice(0, 2).join(', ')}
                    </span>
                  </button>
                ))}
                {filteredItems.length === 0 && (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No results found for "{query}"
                  </div>
                )}
              </div>
            </Command>
          </div>
        </div>
      )}
    </div>
  );
} 