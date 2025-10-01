import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        <div className="mt-4 h-6 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="mt-2 h-6 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="mt-4 h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="mt-6 flex justify-between items-center">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
