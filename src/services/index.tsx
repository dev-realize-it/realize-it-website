import React, { useState } from "react";
import "./style/index.scss";
import { BsGearFill } from "react-icons/bs";
import { debounce } from "lodash";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";

interface Tile {
  title: string;
  icon: Function;
  points: string[];
  meta: string;
}
const ServiceData: Tile[] = [
  {
    title: "Websites",
    icon: () => (
      <img
        alt=""
        className="service-image"
        src={require("../media/mockup-laptop.png")}
      />
    ),
    points: [
      "Op maat gemaakte websites naar uw wens",
      "Responsive web design voor de beste beleving op mobiel, tablet en desktop",
      "Complexe webapplicaties voor (interne) systemen",
    ],
    meta: "Realize-IT maakt op maat gemaakte websites, voor complexe webapplicatie voor (interne) systemen. Om processen (verder) te automatiseren naar eigen wens.",
  },
  {
    title: "Apps",
    icon: () => (
      <img
        alt=""
        className="service-image"
        src={require("../media/mockup-mobile.png")}
      />
    ),
    points: [
      "App's voor Android en/of iOS",
      "Moderne designs & gebruikersvriendelijk",
      "Integratie met bestaande systemen/websites",
    ],
    meta: "Realize-IT is specialist in het ontwikkelen van Android & iOS apps.",
  },
  {
    title: "API's",
    icon: () => (
      <div className="icon-container">
        <BsGearFill className="api-icon" color="#008df6" />
      </div>
    ),
    points: [
      "Het koppelen van bestaande en/of nieuwe systemen om uw werkprocessen te optimaliseren",
      "Websites en apps met elkaar integreren",
    ],
    meta: "Realize-IT helpt met het koppelen van bestaande en/of nieuwe systemen om uw werkprocessen te optimaliseren.",
  },
];

const Services: React.FC<{}> = () => {
  const domRef = React.useRef<HTMLDivElement>(null);
  const { hash } = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries) => {
        entries.forEach((entry) => {
          if (hash === "#services") return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6)
            history.push("#services");
        });
      }, 300),
      { threshold: 0.65 }
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
    <section id="services" ref={domRef}>
      {ServiceData.map((tile, i) => (
        <Service
          key={tile.title}
          tile={tile}
          reverse={i % 2 !== 0}
          showCase={i === 0}
        />
      ))}
    </section>
  );
};
export default Services;

const Service: React.FC<{
  tile: Tile;
  reverse: boolean;
  showCase?: boolean;
}> = ({ tile: { title, icon, points, meta }, reverse }) => {
  const [visible, setVisible] = useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  const { hash } = useLocation();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visible) {
            setVisible(true);
          }
        });
      }, 100),
      { threshold: 0.2 }
    );
    if (domRef.current) {
      const ref = domRef.current;
      observer.observe(domRef.current);
      return () => {
        if (ref) observer.unobserve(ref);
      };
    }
  }, [domRef, visible, hash]);

  const slideIn = reverse ? "left" : "right";
  return (
    <>
      <Helmet>
        <meta name={`${title} description`} content={meta} />
      </Helmet>
      <div className={`service-container ${reverse && "reverse"}`}>
        <div
          ref={domRef}
          className={`slide-${slideIn} ${visible && slideIn}-show`}
        >
          <div className={`service-content ${reverse && "reverse"}`}>
            <div className="tile-icon">{icon()}</div>
            <div className="info">
              <h2>{title}</h2>
              <p>
                {points.map((point, i) => {
                  return (
                    <span key={`${i}`}>
                      &#8226; {point} <br />
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
