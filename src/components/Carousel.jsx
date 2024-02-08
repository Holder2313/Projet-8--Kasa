import { useState } from "react";
import arrow from "../assets/icons/arrowUp.svg";
import PropTypes from 'prop-types'



export default function Carousel({ pictures }) {
    
    const [indexPicture, setIndexPicture] = useState(0)

    if (indexPicture === -1) {
        setIndexPicture(pictures.length -1);
    }
    else if (indexPicture === pictures.length) {
        setIndexPicture(0)
    }

    
      return (
        <div className="carousel">
          <img className="carousel__img" src={pictures[indexPicture]} alt="" />
          <div className="carousel__arrows">
            <img
              onClick={() => setIndexPicture(indexPicture - 1)}
              className="carousel__arrows__icon carousel__arrows__icon--left"
              src={arrow}
              alt=""
            />
            <img
              onClick={() => setIndexPicture(indexPicture + 1)}
              className="carousel__arrows__icon carousel__arrows__icon--right"
              src={arrow}
              alt=""
            />
          </div>
          <p className="carousel__index">{`${indexPicture + 1} / ${pictures.length}`} </p>
        </div>
      );
}

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired
}