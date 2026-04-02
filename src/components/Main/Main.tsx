import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "../About/About";
import MouseIcon from "@mui/icons-material/Mouse";
import "./Main.css";
import Contact from "../Contact/Contact";

const Main: React.FC = () => {
  
  return (
    <main className="main-section" >
     

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