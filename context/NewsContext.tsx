import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { Article, Category } from '../types';
import { fetchNews } from '../utils/api';

interface NewsContextType {
  articles: Article[];
  loading: boolean;
  error: string | null;
  fetchArticles: (category: Category | 'All') => Promise<void>;
  getArticleById: (id: string) => Article | undefined;
}

export const NewsContext = createContext<NewsContextType | undefined>(undefined);

interface NewsProviderProps {
  children: ReactNode;
}

export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = useCallback(async (category: Category | 'All') => {
    setLoading(true);
    setError(null);
    try {
      const fetchedArticles = await fetchNews(category);
      setArticles(fetchedArticles);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const getArticleById = (id: string): Article | undefined => {
    return articles.find(article => article.id === id);
  }

  return (
    <NewsContext.Provider value={{ articles, loading, error, fetchArticles, getArticleById }}>
      {children}
    </NewsContext.Provider>
  );
};
