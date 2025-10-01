
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="text-white">Khatri</span>
              <span className="text-amber-500">News</span>
            </h3>
            <p className="text-sm text-blue-100 dark:text-gray-400">Your daily dose of trusted news.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-amber-500 mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/home?category=World" className="hover:underline">World</Link></li>
              <li><Link to="/home?category=Politics" className="hover:underline">Politics</Link></li>
              <li><Link to="/home?category=Sports" className="hover:underline">Sports</Link></li>
              <li><Link to="/home?category=Technology" className="hover:underline">Technology</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-amber-500 mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-amber-500 mb-3">Follow Us</h4>
            {/* Icons can be added here */}
            <div className="flex space-x-4">
               <a href="#" className="hover:opacity-75">Twitter</a>
               <a href="#" className="hover:opacity-75">Facebook</a>
               <a href="#" className="hover:opacity-75">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-blue-800 dark:border-gray-700 text-center text-sm text-blue-200 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Khatri News. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
