import React, { useState, useEffect } from "react";
import "./style/burgerMenu.scss";
import { NavHashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Burger: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);
  const [overlayClass, setOverlayClass] = useState("hide");
  const { hash } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const toggleOverlay = () => {
    setOverlayClass(!open ? "fade-in" : "fade-out");
    setOpen(!open);
  };

  const goToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    toggleOverlay();
  };
  return (
    <>
      <div id={`burger-overlay`} className={overlayClass}>
        <ul>
          <li>
            <Link
              smooth
              activeClassName="active-nav-link"
              className="nav-link"
              isActive={() => hash === ""}
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
              isActive={() => hash === "#services"}
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
              isActive={() => hash === "#about"}
              className="nav-link"
              onClick={toggleOverlay}
            >
              Over Realize-IT
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              isActive={() => hash === "#contact"}
              to="#contact"
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
