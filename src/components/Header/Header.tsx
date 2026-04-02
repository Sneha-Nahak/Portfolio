import React, { useEffect, useState } from "react";
import "./Header.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const RESUME_PATH = "/Sneha_Nahak_Web_Development.pdf";

const handleResume = () => {
  // 1. Open in new tab
  window.open(RESUME_PATH, "_blank", "noopener,noreferrer");

  // 2. Simultaneously trigger download
  const a = document.createElement("a");
  a.href = RESUME_PATH;
  a.download = "Sneha_Nahak_Web_Development.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`header-nav fixed top-0 left-0 right-0 z-50 flex justify-between items-center${
          scrolled ? " header-nav--scrolled" : ""
        }`}
      >
        {/* Logo */}
        <a href="#" className="header-logo">
          Sneha<span className="header-logo__dot">.</span>
        </a>

        {/* Right side — all nav items + always-visible Hire Me */}
        <div className="header-right">

          {/* These links are hidden on mobile */}
          <div className="header-links">
            {["About", "Skills", "Projects"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="header-link">
                {item}
              </a>
            ))}

            {/* Resume — opens new tab + downloads */}
            <button className="header-link header-link--resume" onClick={handleResume}>
              Resume
            </button>
          </div>

          {/* Hamburger — visible only on mobile, sits left of Hire Me */}
          <button
            className="header-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <RiMenu3Line size={24} />
          </button>

          {/* Always visible on all screen sizes */}
          <a href="#contact" className="header-cta text-[10px] sm:text-[11px] md:text-xs 
             px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
             whitespace-nowrap">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>

            {/* Close button */}
            <button
              className="mobile-menu__close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <RiCloseLine size={28} />
            </button>

            {/* Nav links */}
            <nav className="mobile-menu__links">
              {["About", "Skills", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-menu__link"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}

              <button
                className="mobile-menu__link mobile-menu__link--resume"
                onClick={() => {
                  handleResume();
                  closeMenu();
                }}
              >
                Resume
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;