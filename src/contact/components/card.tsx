import React from "react";
import "../style/card.scss";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

const infos = [
  {
    label: "info@realize-it.nl",
    icon: () => <AiFillMail color="white" size={32} />,
    href: "mailto:info@realize-it.nl",
  },
  {
    label: "+31621860081",
    icon: () => <AiFillPhone color="white" size={32} />,
    href: "tel:info@realize-it.nl",
  },
];

const ContactCard: React.FC = () => {
  return (
    <div id="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-info">
        {infos.map((info) => (
          <a>
            <ContactInfo label={info.label} icon={info.icon} href={info.href} />
          </a>
        ))}
      </div>
    </div>
  );
};

const ContactInfo: React.FC<{
  label: string;
  icon: Function;
  href: string;
}> = ({ label, icon, href }) => (
  <a className="contact-info-item" href={href}>
    <div className="contact-icon-container">{icon()}</div>
    <h2 className="contact-info-label">{label}</h2>
  </a>
);

export default ContactCard;
