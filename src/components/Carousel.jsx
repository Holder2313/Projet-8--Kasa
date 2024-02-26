import { useEffect, useState } from "react";
import arrow from "../assets/icons/arrowUp.svg";
import PropTypes from "prop-types";
import Loader from "./Loader";


export default function Carousel({ pictures }) {
  const [indexPicture, setIndexPicture] = useState(0);

  useEffect(() => {
    if (pictures.length > 1) {
      if (indexPicture === -1) {
        setIndexPicture(pictures.length -1 );
      } else if (indexPicture === pictures.length) {
        setIndexPicture(0);
      }
    } else {
      setIndexPicture(0)
    }
  }, [indexPicture])

    
  

  return (
    <div className="carousel">
      <img className="carousel__img" src={pictures[indexPicture]} alt="" />

      {pictures.length > 1 && (
        <>
          <div className="carousel__arrows">
            <img
              onClick={() => setIndexPicture(indexPicture - 1)}
              className="carousel__arrows__icon carousel__arrows__icon--left"
              src={arrow}
              alt="left arrow"
            />
            <img
              onClick={() => setIndexPicture(indexPicture + 1)}
              className="carousel__arrows__icon carousel__arrows__icon--right"
              src={arrow}
              alt="right arrow"
            />
          </div>

          <p className="carousel__index">
            {`${indexPicture + 1} / ${pictures.length}`}
          </p>
        </>
      )}
    </div>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
};
