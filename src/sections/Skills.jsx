import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/resumeData';

const Skills = () => {
  return (
    <Section 
      id="skills" 
      title="Skills & Technologies"
      subtitle="Technologies and tools I work with"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="space-y-10 max-w-4xl mx-auto">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillList.map((skill, index) => (
                <SkillBadge 
                  key={skill} 
                  skill={skill} 
                  index={categoryIndex * 10 + index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
