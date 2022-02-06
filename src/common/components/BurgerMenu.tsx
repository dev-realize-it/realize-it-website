import React, { useState, useEffect } from "react";
import "./style/burgerMenu.scss";
import { NavHashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Burger: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);
  const [overlayClass, setOverlayClass] = useState("hide");
  const { hash } = useLocation();

  const toggleOverlay = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOverlayClass(open ? "fade-in" : "fade-out");
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const goToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    toggleOverlay();
  };
  const isActive = (link: string) => () => hash === link;

  return (
    <>
      <div id={`burger-overlay`} className={overlayClass}>
        <ul>
          <li>
            <Link
              smooth
              activeClassName="active-nav-link"
              className="nav-link"
              isActive={isActive("")}
              to="/"
              onClick={goToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to="#services"
              isActive={isActive("#services")}
              activeClassName="active-nav-link"
              className="nav-link"
              onClick={toggleOverlay}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to="#about"
              isActive={isActive("#about")}
              activeClassName="active-nav-link"
              className="nav-link"
              onClick={toggleOverlay}
            >
              Over Realize-IT
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              isActive={isActive("#contact")}
              to="#contact"
              activeClassName="active-nav-link"
              className="nav-link"
              onClick={toggleOverlay}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button id="burger" onClick={toggleOverlay}>
        <div style={{ transform: `${open ? "rotate(45deg)" : "rotate(0)"}` }} />
        <div
          style={{
            transform: `${open ? "rotate(20deg)" : "rotate(0)"}`,
            opacity: open ? 0 : 1,
          }}
        />
        <div
          style={{ transform: `${open ? "rotate(-45deg)" : "rotate(0)"}` }}
        />
      </button>
    </>
  );
};

export default Burger;
