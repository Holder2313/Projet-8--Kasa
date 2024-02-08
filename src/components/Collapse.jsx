import { useState } from "react";
import arrow from "../assets/icons/arrowUp.svg";
import PropTypes from 'prop-types'

export default function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false);
  const collapseToggle = () => setIsOpen(!isOpen);

  
  return (
    <div className="collapse">
      <div className=" collapse__title" onClick={collapseToggle}>
        <p className="collapse__title__text">{title}</p>
        <img
          className={`collapse__title__icon ${
            isOpen ? "collapse__title__icon--open" : ""
          } `}
          src={arrow}
          alt=""
        />
      </div>

      {isOpen && (
        <div
          className={`collapse__info ${isOpen ? "collapse__info--open" : ""} `}
        >
          <p className="collapse__info__text">{info}</p>
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};