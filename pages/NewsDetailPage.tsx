import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveNewsPortal from '../components/LiveNewsPortal';
import NotFoundPage from './NotFoundPage';
import { useNews } from '../hooks/useNews';

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getArticleById, articles } = useNews();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    // If articles have been loaded but this one isn't found, it's a true 404
    if (articles.length > 0) {
      return <NotFoundPage />;
    }
    // If no articles are loaded (e.g., page refresh), guide user back
    return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-500">Article not loaded</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
            This can happen if you refresh the page. Please go back to the homepage to see all news.
        </p>
        <Link
            to="/home"
            className="mt-8 px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-colors duration-200"
        >
            Go to Homepage
        </Link>
       </div>
    )
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <span className="text-sm font-semibold text-amber-500 uppercase">{article.category}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>By {article.author}</span>
              <span className="mx-2">|</span>
              <span>{formattedDate}</span>
            </div>
            <img src={article.imageUrl || 'https://picsum.photos/seed/fallback/1200/800'} alt={article.title} className="w-full rounded-lg mb-8" />
            <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>{article.description}</p>
              {article.content && <p className="mt-4">{article.content.split(' [+')[0]}</p>}
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block">
                Read full story at {article.source.name}
              </a>
            </div>
            
            {/* Comments Section */}
            <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
              <h2 className="text-2xl font-bold mb-6">Comments (3)</h2>
              <div className="space-y-6">
                {/* Comment Form */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Leave a comment</h3>
                  <textarea className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500" rows={3} placeholder="Write your comment..."></textarea>
                  <button className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800">Post Comment</button>
                </div>
                {/* Dummy Comments */}
                <div className="flex space-x-3">
                    <img className="h-10 w-10 rounded-full" src="https://picsum.photos/seed/user1/100/100" alt="User avatar" />
                    <div>
                        <p className="font-semibold">Alex Johnson</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Great article, very insightful!</p>
                    </div>
                </div>
                 <div className="flex space-x-3">
                    <img className="h-10 w-10 rounded-full" src="https://picsum.photos/seed/user2/100/100" alt="User avatar" />
                    <div>
                        <p className="font-semibold">Maria Garcia</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Thanks for sharing this. It's an important topic.</p>
                    </div>
                </div>
                 <div className="flex space-x-3">
                    <img className="h-10 w-10 rounded-full" src="https://picsum.photos/seed/user3/100/100" alt="User avatar" />
                    <div>
                        <p className="font-semibold">Chris Lee</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">I have a different perspective on this...</p>
                    </div>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <LiveNewsPortal />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
