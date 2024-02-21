import PropTypes from "prop-types";
import star_solid from "../assets/icons/star-solid.svg";
import star_regular from "../assets/icons/star-regular.svg";

export default function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (v, index) =>
    index < rating ? star_solid : star_regular
  );

  return ( 
    <div className="rating">
      {stars.map((star, index) => (
        <img src={star} key={index} className="rating__star" alt={`Etoile ${index + 1}`} />
      ))} 
    </div>
  );
} 

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
