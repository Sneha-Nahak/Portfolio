import React from "react";
import "./About.css";
import image from "../../assets/sneha_Frame.png";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-wrapper">
        {/* Row 1: Centered Heading */}
        <h3 className="about-main-heading">
          Designer by heart, <span className="italic">Developer by choice.</span>
        </h3>

        {/* Row 2: Image and Paragraph Side-by-Side */}
        <div className="about-content-row">
          <div className="about-image-wrapper">
            <img src={image} alt="Sneha" className="about-image" />
            <div className="about-image-overlay"></div>
          </div>

          <div className="about-text-frame">
            <p className="about-content__text">
              I am Sneha Nahak, a full-stack developer and designer dedicated to
              building seamless, functional web experiences. After earning my BSc
              in Physics, I completed a rigorous Full Stack Web Development
              course at Masai School (Aug 2025). Since then, I have been bridging
              the gap between design and code through diverse freelance
              projects—specializing in UI/UX design, graphic design, and frontend
              development. Whether I’m crafting modern interfaces in React or
              developing brand identities, I focus on creating responsive,
              user-centric solutions that blend technical precision with artistic
              perspective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;