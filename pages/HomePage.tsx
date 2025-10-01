import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import NewsTicker from '../components/NewsTicker';
import LiveNewsPortal from '../components/LiveNewsPortal';
import SkeletonCard from '../components/SkeletonCard';
import { CATEGORIES } from '../constants';
import { Category } from '../types';
import { useNews } from '../hooks/useNews';

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { articles, loading, error, fetchArticles } = useNews();
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  useEffect(() => {
    const category = searchParams.get('category') as Category | 'All' || 'All';
    setActiveCategory(category);
    fetchArticles(category);
  }, [searchParams, fetchArticles]);

  const handleCategoryClick = (category: Category | 'All') => {
    setActiveCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <NewsTicker />
      <main className="flex-grow container mx-auto px-4 mt-8">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            <button
              onClick={() => handleCategoryClick('All')}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${activeCategory === 'All' ? 'bg-blue-900 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${activeCategory === cat ? 'bg-blue-900 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
              </div>
            )}
            {error && (
               <div className="text-center py-10 px-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
                  <h3 className="text-xl font-bold">Oops! Something went wrong.</h3>
                  <p className="mt-2">{error}</p>
                  <button onClick={() => fetchArticles(activeCategory)} className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700">
                    Try Again
                  </button>
               </div>
            )}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
          <aside className="lg:col-span-1">
            <LiveNewsPortal />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
