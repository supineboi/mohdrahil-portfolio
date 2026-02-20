import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { personalInfo, summary } from '../data/resumeData';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.5)' }}>
          <iframe
            src={personalInfo.profileVideoEmbedUrl}
            className="absolute pointer-events-none"
            style={{ 
              width: '100%',
              height: '84%',
              border: 'none'
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Portfolio Video for resume"
          />
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <Avatar 
            src={personalInfo.profileImage} 
            alt={personalInfo.name}
            size="xl"
          />
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary-300 font-semibold mb-6 drop-shadow-lg">
            {personalInfo.title}
          </p>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
        >
          {summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Button
            href="/mohdrahil-portfolio/resume.pdf"
            download
            variant="primary"
            size="lg"
            icon={<FaDownload />}
          >
            Download Resume
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            icon={<FaEnvelope />}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <SocialLinks
            linkedin={personalInfo.social.linkedin}
            github={personalInfo.social.github}
            email={personalInfo.email}
            phone={personalInfo.phone}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
