
import React from 'react';

const AccountIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V7a5 5 0 0 0-5-5z M9 12a3 3 0 0 1 6 0"></path>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
  </svg>
);

export default AccountIcon;
