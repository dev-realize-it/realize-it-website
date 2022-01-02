import React from "react";
import "./style/footer.scss";
import { NavHashLink as Link } from "react-router-hash-link";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info-container">
        <p>Copyright &reg; Realize-IT</p>
      </div>
      <div className="footer-info-container">
        <h3>Contact</h3>
        <a href="mailto: info@realize-it.nl">info@realize-it.nl</a>
        <a href="tel: +31621860081">+31621860081</a>
      </div>
      <div className="footer-info-container">
        <Link
          smooth
          className="bottom-nav-link"
          to="/"
          onClick={() => {
            window.scrollTo({ behavior: "smooth", top: 0 });
          }}
        >
          <h3>Terug omhoog</h3>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
