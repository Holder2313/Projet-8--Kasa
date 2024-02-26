import { useState } from "react";
import arrow from "../assets/icons/arrowUp.svg";
import PropTypes from "prop-types";

export default function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false);

 


  return (
    <div className="collapse">
      <div className=" collapse__title" onClick={() => setIsOpen(!isOpen)}>
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
          {Array.isArray(info) ? (
            <ul>
              {info.map((item, index) => (
                <li key={index} className=" collapse__equipments">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p>{info} </p>
          )}
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
