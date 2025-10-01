import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <Link to={`/article/${article.id}`} className="flex flex-col flex-grow">
        <img className="w-full h-48 object-cover" src={article.imageUrl || 'https://picsum.photos/seed/fallback/800/600'} alt={article.title} />
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-xs font-semibold text-amber-500 uppercase">{article.category}</span>
          <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {article.title}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">
            {article.description}
          </p>
          <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
             <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
             <span className="text-blue-900 dark:text-blue-400 font-semibold text-sm hover:underline">Read More &rarr;</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
