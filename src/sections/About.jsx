import Section from '../components/Section';
import { summary, personalInfo } from '../data/resumeData';

const About = () => {
  return (
    <Section 
      id="about" 
      title="About Me"
      className="bg-white dark:bg-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {summary}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              Location
            </h3>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {personalInfo.location}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              Email
            </h3>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-lg font-medium text-primary-600 dark:text-primary-400 hover:underline"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
