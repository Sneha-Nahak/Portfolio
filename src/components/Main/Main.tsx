import React, { useEffect, useRef } from "react";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "../About/About";
import MouseIcon from "@mui/icons-material/Mouse";
import "./Main.css";
import Contact from "../Contact/Contact";

const Main: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mainRef.current) return;

      const rect = mainRef.current.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mainRef.current.style.setProperty("--x", `${x}px`);
      mainRef.current.style.setProperty("--y", `${y}px`);
    };

    const node = mainRef.current;
    node?.addEventListener("mousemove", handleMouseMove);

    return () => {
      node?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="main-section" ref={mainRef}>
      {/* Glow Layer */}
      <div className="cursor-glow"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <span className="hero__eyebrow">Web Developer & Designer</span>
          <h1 className="hero__heading">
            Pixels with Purpose. <br />
            Code with Intent.
          </h1>
          <div className="hero__line"></div>
        </div>
        <div className="scroll-text">
          <div className="mouse">
            <MouseIcon />
          </div>
          <p>Scroll</p>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </main>
  );
};

export default Main;