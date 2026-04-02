import React, { useEffect, useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./Projects.css";

// Assets
import employeproductivitytracker from '../../assets/employee-productivity-tracker.png';
import nestHive from '../../assets/nestHive.png';
import flipcardGame from '../../assets/Flipcard-Game.png';
import EcoGoals from '../../assets/EcoGoals.png';
import soulartistics from '../../assets/soulartistics.png';
import resumeup from '../../assets/resume_up.png';

const useFadeIn = (delay = false) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("fade-in");
    if (delay) el.classList.add("fade-in--delay");
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
};

const projectData = [
  {
    title: 'Soulartistics - Design Portfolio Website',
    type: 'Individual Project',
    description: 'This designer portfolio website features my design and front-end development skills.',
    teckStack: 'JavaScript,CSS,ReactJS,React-Router-Dom,React-Icons,EmailJS,Github-actions,Vercel,React-Router-Hash-Link',
    image: soulartistics,
    code: 'https://github.com/Sneha-Nahak/soulartistics_website',
    live_link: 'https://soulartistics.vercel.app/'
  },
  {
    title: 'ResuMe Up - Resume Builder Website',
    type: 'Individual Project',
    description: 'This application enables users to quickly create professional résumés while focusing on content. It also highlights full-stack development and UI/UX skills.',
    teckStack: 'MERN Stack,CSS,Web Design,UI/UX,JavaScript,React JS,React-Router-Dom, React-Icons, Github-actions,Vercel',
    image: resumeup,
    code: 'https://github.com/Sneha-Nahak/ResuMeUp_Website',
    live_link: 'https://resu-me-up-website.vercel.app/'
  },
  {
    title: 'EcoGoals - Habit Tracker',
    type: 'Individual Project',
    description: 'EcoGoals is a full-stack web application designed to help users build and maintain eco-friendly habits.',
    teckStack: 'Node Js, Express Js, MongoDB, React, Tailwind CSS, React-Icons,Github-actions,Vercel,JavaScript',
    image: EcoGoals,
    code: 'https://github.com/Sneha-Nahak/EcoGoal_Platform',
    live_link: 'https://eco-goal-platform.vercel.app/'
  },
  {
    title: 'Flipcard Game',
    type: 'Group-based Project',
    description: 'A MERN stack matching game featuring timers, levels, and a global leaderboard.',
    teckStack: 'NodeJs, ExpressJs, MongoDB, React JS, Bootstrap',
    image: flipcardGame,
    code: 'https://github.com/Sneha-Nahak/Flip_Card_Game',
    live_link: 'https://flipcard-game-1-0.netlify.app/'
  },
  {
    title: 'Property Listing (NestHive)',
    type: 'Individual Project',
    description: 'A user-friendly platform to list, explore, and manage real estate properties with ease.',
    teckStack: 'React, JavaScript, HTML5, CSS, Netlify, Firebase',
    image: nestHive,
    code: 'https://github.com/Sneha-Nahak/B43_WEB_160_Web-Project-155/tree/main/nesthive',
    live_link: 'https://nest-hive.netlify.app/'
  },
  {
    title: 'Productivity Tracker',
    type: 'Group-based Project',
    description: 'A browser-based platform to track the performance and productivity levels of employees.',
    teckStack: 'JavaScript, HTML5, CSS, Netlify',
    image: employeproductivitytracker,
    code: 'https://github.com/Sneha-Nahak/Employee-Productivity-Tracker',
    live_link: 'https://employeproductivitytracker.netlify.app/',
  },
];

interface ProjectCardProps {
  project: typeof projectData[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
  const { title, type, description, teckStack, image, code, live_link } = project;
  const ref = useFadeIn();
  const tags = teckStack.split(',').map(tag => tag.trim());

  return (
    <div ref={ref} className="project-card" data-tooltip={teckStack}>
      <div className="project-card__image-container">
        <img src={image} alt={title} className="project-card__image" />
        <div className="project-card__actions">
          <a href={live_link} target="_blank" rel="noopener noreferrer" className="action-btn" aria-label="Live Demo">
            <FiExternalLink />
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer" className="action-btn" aria-label="View Code">
            <FiGithub />
          </a>
        </div>
      </div>
      
      <div className="project-card__info">
        <div className="project-card__header">
          <span className="project-card__num">{index.toString().padStart(2, '0')}</span>
          <span className="project-card__type">{type}</span>
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Selected Works</h2>
        <span className="section-count">({projectData.length.toString().padStart(2, '0')})</span>
      </div>
      
      <div className="projects__grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index + 1}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;