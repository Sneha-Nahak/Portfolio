import React from "react";
import  { useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./styles/theme.css";

const App: React.FC = () => {

    const mainRef = useRef<HTMLDivElement>(null);
  
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
    <div className="portfolio-container" ref={mainRef}>
      {/* Glow Layer */}
      <div className="cursor-glow"></div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;