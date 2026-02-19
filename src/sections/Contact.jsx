import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { FaEnvelope } from 'react-icons/fa';
import { contact, personalInfo } from '../data/resumeData';

const Contact = () => {
  return (
    <Section 
      id="contact" 
      title={contact.title}
      subtitle={contact.description}
      className="bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="mb-8">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {personalInfo.email}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {personalInfo.phone}
            </p>
          </div>

          <Button
            href={`mailto:${personalInfo.email}`}
            variant="primary"
            size="lg"
            icon={<FaEnvelope />}
            className="mb-8"
          >
            {contact.cta}
          </Button>

          <div className="flex justify-center">
            <SocialLinks
              linkedin={personalInfo.social.linkedin}
              github={personalInfo.social.github}
              email={personalInfo.email}
              phone={personalInfo.phone}
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
