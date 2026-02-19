import { FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm flex items-center justify-center gap-2 mb-2">
          Built with <FaHeart className="text-blue-500" /> using React, Vite & Tailwind CSS
        </p>
        <p className="text-sm">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
