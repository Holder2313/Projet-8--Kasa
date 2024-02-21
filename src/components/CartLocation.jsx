import PropTypes from 'prop-types'

export default function CartLocation({title, img}) {

    

  return (
    <div className='cart'>
      <div className="cart__picture">
        <img className="cart__picture__img" src={img} alt="" />
          </div>
          <h3 className='cart__titre'>{title} </h3>
          
    </div>
  )
 
}
 CartLocation.propTypes = {
   title: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
 };
 