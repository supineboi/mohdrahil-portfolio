import Section from '../components/Section';
import TimelineItem from '../components/TimelineItem';
import { experience } from '../data/resumeData';

const Experience = () => {
  return (
    <Section 
      id="experience" 
      title="Work Experience"
      subtitle="Professional journey and key achievements"
      className="bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {experience.map((job, index) => (
          <TimelineItem key={job.id} data={job} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
