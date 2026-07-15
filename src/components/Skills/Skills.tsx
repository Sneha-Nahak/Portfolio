import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiNextdotjs,
  SiVercel,
  SiCss,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiGithub,
  SiNetlify,
} from "react-icons/si";
import "./Skills.css";

const skills = [
  // Core Languages
  {
    name: "JavaScript",
    sub: "Core logic",
    icon: <SiJavascript className="skill-icon" />,
  },
  {
    name: "TypeScript",
    sub: "Typed JavaScript",
    icon: <SiTypescript className="skill-icon" />,
  },

  // Frontend
  {
    name: "React js",
    sub: "UI development",
    icon: <SiReact className="skill-icon" />,
  },
  {
    name: "Next js",
    sub: "SSR & full-stack",
    icon: <SiNextdotjs className="skill-icon" />,
  },
  {
    name: "Redux",
    sub: "State management",
    icon: <SiRedux className="skill-icon" />,
  },

  // Styling
  {
    name: "HTML5",
    sub: "Semantic structure",
    icon: <SiHtml5 className="skill-icon" />,
  },
  {
    name: "CSS",
    sub: "Layouts & animations",
    icon: <SiCss className="skill-icon" />,
  },
  {
    name: "Tailwind CSS",
    sub: "Utility-first styling",
    icon: <SiTailwindcss className="skill-icon" />,
  },

  // Backend
  {
    name: "Node js",
    sub: "Backend runtime",
    icon: <SiNodedotjs className="skill-icon" />,
  },

  // Database
  {
    name: "MongoDB",
    sub: "NoSQL database",
    icon: <SiMongodb className="skill-icon" />,
  },

  // Tools & Deployment
  {
    name: "Git & GitHub",
    sub: "Version control",
    icon: <SiGithub className="skill-icon" />,
  },
  {
    name: "Vercel",
    sub: "Deployment & CI/CD",
    icon: <SiVercel className="skill-icon" />,
  },
  {
    name: "Netlify",
    sub: "Hosting & deployment",
    icon: <SiNetlify className="skill-icon" />,
  },
];


const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Communication",
  "Attention to Detail",
  "Time Management",
  "Creative Thinking",
  "Ownership",
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="about-skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Expertise</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <Card key={skill.name} className="skill-card-mui" elevation={0}>
            <CardContent className="skill-card-content">
              <Box className="skill-icon-wrapper">{skill.icon}</Box>
              <Box>
                <Typography className="skills-grid__name">
                  {skill.name}
                </Typography>
                <Typography className="skills-grid__sub">
                  {skill.sub}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Soft Skills — badge style */}
      <div className="soft-skills-section">
        <h3 className="soft-skills-title">Soft Skills</h3>
        <div className="soft-skills-container">
          {softSkills.map((skill) => (
            <span key={skill} className="soft-skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;