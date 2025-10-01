
import React from 'react';

const LiveNewsPortal: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sticky top-20">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
        Live News Portal
      </h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="rounded-md"
          src="https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1&mute=1&loop=1&playlist=9Auq9mYxFEE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Live coverage of breaking news and events from around the world.
      </p>
    </div>
  );
};

export default LiveNewsPortal;
