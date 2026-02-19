import { motion } from 'framer-motion';

const Avatar = ({ src, alt, size = 'lg', className = '' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-40 h-40 md:w-48 md:h-48',
    xl: 'w-56 h-56 md:w-64 md:h-64'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full rounded-full object-cover border-4 border-primary-500 dark:border-primary-400 shadow-xl"
        loading="lazy"
      />
    </motion.div>
  );
};

export default Avatar;
