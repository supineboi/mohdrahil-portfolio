// Resume Data - Update this file with your information
// To replace the profile image: Add your photo to /src/assets/images/profile.jpg
// To replace the background video: Add your video to /src/assets/Videos/profile-video.mp4

import profileImage from '../assets/images/profile.jpg';

export const personalInfo = {
  name: "Mohd Rahil Khan",
  title: "Full Stack Engineer",
  email: "khanmohdrahil44@gmail.com",
  phone: "+91 7987105532",
  location: "India",
  profileImage: profileImage,
  profileVideoEmbedUrl: "https://www.youtube.com/embed/afXCPiPcstI?autoplay=1&mute=1&loop=1&playlist=afXCPiPcstI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080",
  social: {
    linkedin: "https://linkedin.com/in/mohdrahilkhan14",
    github: "https://github.com/supineboi",
  }
};

export const summary = "Full Stack Engineer with 3+ years of experience architecting scalable SaaS systems and high-volume data workflows. Delivered production-grade third-party integrations across major marketing platforms and led seamless database migrations at scale. Strong focus on modular architecture, performance optimization, and secure authentication design.";

export const skills = {
  "Programming": [
    "JavaScript (ES6+)",
    "Python",
    "PHP"
  ],
  "Frontend": [
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Ant Design",
    "HTML5",
    "CSS3",
    "Tailwind CSS"
  ],
  "Backend": [
    "Node.js",
    "Django",
    "Drupal"
  ],
  "Databases & Caching": [
    "DynamoDB",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "MS SQL",
    "Redis",
    "Elasticsearch"
  ],
  "Cloud & APIs": [
    "AWS (EC2, ECS, S3, DynamoDB, Lambda, SNS, CloudWatch)",
    "REST APIs",
    "MFA"
  ]
};

export const experience = [
  {
    id: 1,
    position: "Associate Software Developer",
    company: "Fragmatic",
    location: "Delhi",
    duration: "Oct 2023 – Present",
    type: "Full-time",
    achievements: [
      "Architected and scaled core backend systems by building a distributed batch processing pipeline to evaluate millions of profiles for segmentation. Led end-to-end migration from MongoDB (Mongoose) to DynamoDB (Dynamoose), introducing reusable utilities, custom ORM extensions, Redis caching, and multi-tenant scope isolation.",
      "Led full-cycle third-party integrations across Meta, Google, LinkedIn, HubSpot, Klaviyo, Mailchimp, Webflow, and Constant Contact, implementing OAuth 2.0 token lifecycle handling, campaign data ingestion pipelines, and securing marketplace approvals.",
      "Engineered a modular plugin architecture separating integrations and utilities, refactored legacy Redux to Redux Toolkit, and implemented secure token-based authentication in Next.js with 2FA and centralized email templating.",
      "Delivered platform tooling including admin dashboard (organization management, AWS cost monitoring, integration configs), large-scale profile generators for stress testing, Redis-backed caching strategies, and a multi-agent chatbot using Agno framework."
    ]
  },
  {
    id: 2,
    position: "Associate Software Developer",
    company: "OpenSense Labs",
    location: "Bhopal",
    duration: "Jul 2023 - Oct 2023",
    type: "Full-time",
    achievements: [
      "Built and customized Drupal websites using theming and custom modules to deliver responsive, accessible platforms.",
      "Developed background queue jobs for reliable large-scale CSV exports with scheduled and streamed processing."
    ]
  },
  {
    id: 3,
    position: "Full Stack Engineer",
    company: "Freelance",
    location: "Bhopal",
    duration: "Oct 2022 – Jul 2023",
    type: "Freelance",
    achievements: [
      "Built and deployed a Django-based e-commerce platform for Green Diary Farm using MS SQL and secure PhonePe payment integration.",
      "Delivered an admin dashboard for invoicing, order tracking, inventory management, and reporting."
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "B.Tech – Electronics and Communication Engineering",
    institution: "University Institute of Technology, RGPV",
    location: "Bhopal",
    duration: "Jul 2019 – Jul 2023",
    description: ""
  }
];

export const contact = {
  title: "Let's Connect",
  description: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
  cta: "Get in Touch"
};
