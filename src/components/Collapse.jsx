import { useState } from "react";
import arrowUp from "../assets/icons/arrowUp.svg";

export default function Collapse({ title, info }) {

  const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);


  return (
    <div className="collapse">
      <div className=" collapse__title" onClick={toggle}>
        <p className="collapse__title__text">{title}</p>
        <img className={`collapse__title__icon ${isOpen ? 'collapse__title__icon--open' : ''} ` }src={arrowUp} alt="" />
      </div>

      {isOpen &&
      <div className={`collapse__info ${isOpen ? 'collapse__info--open' : ''} `}>
        <p className="collapse__info__text">{info}</p>
      </div>
      }
      
    </div>
  ); 
}
