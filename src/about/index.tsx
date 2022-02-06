import { debounce } from "lodash";
import * as React from "react";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import "./style/index.scss";

const About: React.FC = () => {
  const domRef = React.useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { hash } = useLocation();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries) => {
        entries.forEach((entry) => {
          if (hash === "#about") return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8)
            history.push("#about");
        });
      }, 300),
      {
        threshold: 0.8,
      }
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
    <>
      <Helmet>
        <meta
          name="about"
          content="Realize-IT focust op web, App en API developement"
        />
      </Helmet>
      <section id="about" ref={domRef}>
        <h1>Over Realize-IT</h1>

        <div className="info">
          <p>
            Realize-IT is een onderneming die met de nieuwste technologieën de
            gewenste resultaten oplevert. Door goed overleg worden de wensen in
            kaart gebracht. Op basis van deze wensen wordt er een roadmap
            opgesteld en een MVP gerealiseerd. Tijdens het ontwikkelproces zal
            perodiek met u overlegd worden, zodat het ontwikkelproces niet
            alleen vóór u wordt gedaan maar ook mét u.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;
