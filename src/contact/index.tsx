import React, { useRef } from "react";
import { debounce } from "lodash";
import "./style/index.scss";
import { MdEmail } from "react-icons/md";
import { isMobile, isTablet } from "react-device-detect";
import { useHistory, useLocation } from "react-router-dom";

const Contact: React.FC = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { hash } = useLocation();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries) => {
        entries.forEach((entry) => {
          if (hash === "#contact") return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9)
            history.push("#contact");
        });
      }, 200),
      {
        threshold: 0.9,
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

  const iconSize = isMobile && !isTablet ? 24 : isTablet ? 28 : 64;
  return (
    <section id="contact" ref={domRef}>
      <h1>
        Geïntresseerd of heeft u vragen? <br />
        Neem vrijblijvend contact op
      </h1>
      <div className="contact-info">
        <a className="info-row" href="mailto: info@realize-it.nl">
          <MdEmail className="icon" size={iconSize} />
          <p>info@realize-it.nl</p>
        </a>
      </div>
      <a
        type="button"
        className="btn btn-warning send-mail"
        href="mailto: info@realize-it.nl"
      >
        Contact opnemen
      </a>
    </section>
  );
};

export default Contact;
