import React from "react";
import "./style/sideMenu.scss";
import { NavHashLink as Link } from "react-router-hash-link";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SideMenu: React.FC<{}> = () => {
  const { hash } = useLocation();

  const getLinkTo = (up: boolean) => {
    switch (hash) {
      case "":
        return up ? "" : "#services";
      case "#services":
        return up ? "" : "#about";
      case "#about":
        return up ? "#services" : "#contact";

      case "#contact":
        return up ? "#about" : "#contact";

      default:
        return "";
    }
  };

  const goUp = () => {
    if (hash !== "" && hash !== "#contact")
      window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <div className="side-menu-container">
      <Link to={getLinkTo(true)} smooth={true} onClick={goUp}>
        <FaAngleUp size={32} color={hash === "" ? "lightGrey" : "black"} />
      </Link>
      <div className="indicators">
        <Link
          smooth={true}
          to="/"
          isActive={() => hash === ""}
          className={`indicator ${hash === "" && "indicator-active"}`}
          onClick={() => {
            window.scrollTo({ behavior: "smooth", top: 0 });
          }}
        />
        <Link
          smooth={true}
          to="#services"
          isActive={() => hash === "#services"}
          className={`indicator ${hash === "#services" && "indicator-active"}`}
        />
        <Link
          smooth={true}
          to="#about"
          isActive={() => hash === "#about"}
          className={`indicator ${hash === "#about" && "indicator-active"}`}
        />
        <Link
          smooth={true}
          isActive={() => hash === "#contact"}
          to="#contact"
          className={`indicator ${hash === "#contact" && "indicator-active"}`}
        />
      </div>
      <Link to={getLinkTo(false)} smooth={true}>
        <FaAngleDown
          size={32}
          color={hash === "#contact" ? "lightGrey" : "black"}
        />
      </Link>
    </div>
  );
};
export default SideMenu;
