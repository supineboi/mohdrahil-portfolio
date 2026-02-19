import { motion } from 'framer-motion';

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-10 md:mb-12"
    >
      <div className="flex items-start gap-4 md:gap-6">
        {/* Timeline dot and line */}
        <div className="relative flex flex-col items-center">
          <div className="w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
          {index !== 2 && (
            <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-700 absolute top-4"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {data.position}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                {data.company}
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
              <p className="font-medium">{data.duration}</p>
              <p>{data.location}</p>
            </div>
          </div>

          <ul className="space-y-2 mt-4">
            {data.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex items-start"
              >
                <span className="text-primary-500 dark:text-primary-400 mr-2 mt-1.5">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
