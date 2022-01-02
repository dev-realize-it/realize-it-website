import React from "react";
import "./style/menu.css";
import { NavHashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Menu: React.FC<{}> = () => {
  const { hash } = useLocation();
  return (
    <>
      {/* <img className="logo" src={require("../../media/logo.png")} /> */}
      <ul>
        <li>
          <Link
            smooth
            activeClassName="active-nav-link"
            className="nav-link"
            isActive={() => hash === ""}
            to="/"
            onClick={() => {
              window.scrollTo({ behavior: "smooth", top: 0 });
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            to="#services"
            isActive={() => hash === "#services"}
            activeClassName="active-nav-link"
            className="nav-link"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            to="#about"
            isActive={() => hash === "#about"}
            activeClassName="active-nav-link"
            className="nav-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            isActive={() => hash === "#contact"}
            to="#contact"
            activeClassName="active-nav-link"
            className="nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
