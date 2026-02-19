import { motion } from 'framer-motion';
import Section from '../components/Section';
import { education } from '../data/resumeData';

const Education = () => {
  return (
    <Section 
      id="education" 
      title="Education"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {edu.degree}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-2">
              {edu.institution}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 dark:text-gray-400">
              <p className="font-medium">{edu.duration}</p>
              <p>{edu.location}</p>
            </div>
            {edu.description && (
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {edu.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
