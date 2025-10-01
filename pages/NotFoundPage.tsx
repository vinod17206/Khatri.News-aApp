
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl md:text-9xl font-extrabold text-blue-900 dark:text-blue-500">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">Page Not Found</p>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/home"
        className="mt-8 px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-colors duration-200"
      >
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
