import React from "react";
import "./style/fade.css";
const FadeIn: React.FC = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isVisible) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    if (domRef.current) {
      const ref = domRef.current;
      observer.observe(domRef.current);
      return () => {
        if (ref) observer.unobserve(ref);
      };
    }
  }, [domRef, isVisible]);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeIn;
