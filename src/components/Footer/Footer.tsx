import React from "react";
import "./Footer.css";

const FooterLink = [{
link_name:'Linkedin',
href:'https://www.linkedin.com/in/sneha-nahak-s3/',
},
{
link_name:'Github',
href:'https://github.com/Sneha-Nahak',
},
{
link_name:'Behance',
href:'https://www.behance.net/snehanahak',
},

];

const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-between items-center flex-wrap gap-4">
      <span className="footer-logo">
        Sneha<span className="footer-logo__dot">.</span>
      </span>

      <span className="footer-copy">
        © {new Date().getFullYear()} — Designed &amp; built with care.
      </span>
      
      <div className="flex gap-6">
        {FooterLink.map(({link_name,href}) => (
          <a key={href} href={href} className="footer-link" target="_blank">
            {link_name}
          </a>
        ))}
      </div>

    </footer>
  );
};

export default Footer;