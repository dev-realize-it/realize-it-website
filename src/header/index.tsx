import React from "react";
import "./style/index.scss";
import { debounce } from "lodash";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const domRef = React.useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { hash } = useLocation();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries) => {
        entries.forEach((entry) => {
          if (hash === "") return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.95)
            history.push("");
        });
      }, 100),
      { threshold: 0.95 }
    );
    if (domRef.current) {
      const ref = domRef.current;
      observer.observe(domRef.current);
      return () => {
        if (ref) observer.unobserve(ref);
      };
    }
  }, [domRef, hash, history]);

  return (
    <section id="header" ref={domRef}>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Test" />
        <title>Realize-IT</title>
      </Helmet>
      <div className="header-content">
        <div />
        <div className="headers-container">
          <h2 className="header-subheader">Don't just dream...</h2>
          <h1 id="header-title" className="section-header">
            Realize IT!
          </h1>
        </div>
        <div className="mockups-container">
          <img
            alt=""
            className="mockups"
            src={require("../media/mockups-desktop-size.png")}
          />
        </div>
      </div>
    </section>
  );
};
export default Header;
