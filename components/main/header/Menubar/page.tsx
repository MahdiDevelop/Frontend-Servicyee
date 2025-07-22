'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaRegUser, FaRegHeart, FaShoppingBag, FaBars, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState('Current Location');
  const [darkMode, setDarkMode] = useState(false);

  // Refs for dropdown containers
  const categoriesRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // Handle dark/light mode toggle
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', String(newMode));
    // Apply to document
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialMode = savedMode ? savedMode === 'true' : systemPrefersDark;
    setDarkMode(initialMode);
    
    if (initialMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Watch for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newMode = e.matches;
      setDarkMode(newMode);
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle click outside for categories dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setShowCategories(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle click outside for location dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocation(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-4 py-2 hidden md:block border-b dark:border-gray-700">
        <div className="container mx-auto flex justify-end space-x-6">
          <span className="hover:text-[#0077B6] dark:hover:text-[#48CAE4] cursor-pointer">Download App</span>
          <span className="hover:text-[#0077B6] dark:hover:text-[#48CAE4] cursor-pointer">Sell on Marketplace</span>
          <span className="hover:text-[#0077B6] dark:hover:text-[#48CAE4] cursor-pointer">English</span>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white dark:bg-gray-900 pt-2">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="hidden md:block">
            <Link href="/" className="text-2xl font-bold text-[#023E8A] dark:text-[#48CAE4] tracking-tight">
              Servicyee
            </Link>
          </div>

          {/* Search area */}
          <div className="w-full md:w-auto flex-1 max-w-3xl">
            <div className="flex w-full border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
              {/* Location dropdown */}
              <div className="relative flex-shrink-0 w-1/4 border-r border-gray-300 dark:border-gray-700" ref={locationRef}>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLocation(!showLocation);
                    setShowCategories(false);
                  }}
                >
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-[#0077B6] dark:text-[#48CAE4]" />
                    <span className="truncate">{location}</span>
                  </div>
                  <FaChevronDown className="ml-2 text-xs" />
                </button>
                {showLocation && (
                  <div className="absolute z-20 mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 max-h-96 overflow-y-auto">
                    <div className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100">Select Location</div>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        setLocation('Current Location');
                        setShowLocation(false);
                      }}
                    >
                      Current Location
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        setLocation('New York');
                        setShowLocation(false);
                      }}
                    >
                      New York
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        setLocation('Los Angeles');
                        setShowLocation(false);
                      }}
                    >
                      Los Angeles
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        setLocation('Chicago');
                        setShowLocation(false);
                      }}
                    >
                      Chicago
                    </button>
                  </div>
                )}
              </div>

              {/* Categories dropdown */}
              <div className="relative flex-shrink-0 w-1/4 border-r border-gray-300 dark:border-gray-700" ref={categoriesRef}>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCategories(!showCategories);
                    setShowLocation(false);
                  }}
                >
                  <span>All categories</span>
                  <FaChevronDown className="ml-2 text-xs" />
                </button>
                {showCategories && (
                  <div className="absolute z-20 mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 max-h-96 overflow-y-auto">
                    <div className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100">Shopping</div>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Electronics</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home & Garden</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Fashion</Link>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                    <div className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100">Services</div>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Restaurants</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Beauty & Spas</Link>
                  </div>
                )}
              </div>

              {/* Search input */}
              <div className="flex-1 flex items-center relative bg-white dark:bg-gray-800">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="I'm shopping for..."
                  className="w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 focus:outline-none"
                />
                <button className="absolute right-3 text-gray-500 dark:text-gray-400 hover:text-[#0077B6] dark:hover:text-[#48CAE4]">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-4 md:space-x-5">
            <div className="flex items-center space-x-2">
              <Switch 
                id="dark-mode-toggle" 
                checked={darkMode}
                onCheckedChange={toggleDarkMode}
              />

            </div>
            <button className="hidden md:flex flex-col items-center p-2 text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] group">
              <FaRegHeart className="text-lg mb-0.5" />
              <span className="text-xs text-gray-900 dark:text-gray-300 group-hover:text-[#0077B6] dark:group-hover:text-[#48CAE4]">Wishlist</span>
            </button>
            <Link href="/signin" className="hidden md:flex flex-col items-center p-2 text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] group">
              <FaRegUser className="text-lg mb-0.5" />
              <span className="text-xs text-gray-900 dark:text-gray-300 group-hover:text-[#0077B6] dark:group-hover:text-[#48CAE4]">Account</span>
            </Link>
            <div className="relative">
              <button className="flex flex-col items-center p-2 text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] group">
                <FaShoppingBag className="text-lg mb-0.5" />
                <span className="text-xs text-gray-900 dark:text-gray-300 group-hover:text-[#0077B6] dark:group-hover:text-[#48CAE4]">Cart</span>
              </button>
              <span className="absolute top-0 right-0 bg-[#0077B6] dark:bg-[#48CAE4] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-[#0077B6] dark:hover:text-[#48CAE4]"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop categories navigation */}
      <nav className="hidden md:block bg-white dark:bg-gray-900 border-b dark:border-gray-700 px-4 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start space-x-8 overflow-x-auto py-4 text-sm">
            <Link href="#" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Todays Deals</Link>
            <Link href="#" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Electronics</Link>
            <Link href="#" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Home & Kitchen</Link>
            <Link href="#" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Fashion</Link>
            <Link href="#" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Beauty</Link>
            <Link href="#" className="whitespace-nowrap text-gray-800 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4] font-normal">Restaurants</Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="container mx-auto px-4 py-3 space-y-4">
            <div className="font-medium text-[#023E8A] dark:text-[#48CAE4] border-b dark:border-gray-700 pb-2 text-sm">Categories</div>
            <Link href="#" className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4]">Electronics</Link>
            <Link href="#" className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4]">Home & Kitchen</Link>
            <Link href="#" className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4]">Fashion</Link>

            <div className="font-medium text-[#023E8A] dark:text-[#48CAE4] border-b dark:border-gray-700 mt-4 pb-2 text-sm">Account</div>
            <Link href="/signin" className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4]">Sign In</Link>
            <Link href="#" className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#0077B6] dark:hover:text-[#48CAE4]">Wishlist</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;