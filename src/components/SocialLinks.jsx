import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialLinks = ({ linkedin, github, email, phone, className = '' }) => {
  const links = [
    { icon: FaLinkedin, href: linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaGithub, href: github, label: 'GitHub', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
    { icon: FaEnvelope, href: `mailto:${email}`, label: 'Email', color: 'hover:text-red-500' },
    { icon: FaPhone, href: `tel:${phone}`, label: 'Phone', color: 'hover:text-green-500' },
  ];
  
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : '_self'}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
          aria-label={link.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.2, y: -2 }}
          className={`text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-200 text-2xl`}
        >
          <link.icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
