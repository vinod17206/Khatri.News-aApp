import React, { useState, useEffect } from 'react';
import { fetchTickerNews } from '../utils/api';

const NewsTicker: React.FC = () => {
  const [tickerNews, setTickerNews] = useState<string[]>([]);

  useEffect(() => {
    const getTickerNews = async () => {
      const headlines = await fetchTickerNews();
      setTickerNews(headlines);
    };
    getTickerNews();
  }, []);

  if (tickerNews.length === 0) {
    return null; // Or a loading state
  }

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
      <div className="bg-blue-900 dark:bg-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 h-10 flex items-center">
          <span className="bg-amber-500 text-blue-900 font-bold text-sm px-3 py-1 mr-4 flex-shrink-0">
            BREAKING
          </span>
          <div className="relative flex-1 h-full overflow-hidden">
            <div className="absolute whitespace-nowrap animate-scroll flex items-center h-full">
              {tickerNews.map((news, index) => (
                <span key={index} className="mx-8 text-sm">
                  {news}
                </span>
              ))}
              {tickerNews.map((news, index) => (
                <span key={`dup-${index}`} className="mx-8 text-sm">
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsTicker;
