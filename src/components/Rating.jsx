import React from 'react'
import star_solid from '../assets/icons/star-solid.svg'
import star_regular from '../assets/icons/star-regular.svg'

export default function Rating() {
  return (
      <div className='rating'>
          <img className='rating__star' src={star_regular} alt="" />
          <img className='rating__star' src={star_regular} alt="" />
          <img className='rating__star' src={star_regular} alt="" />
          <img className='rating__star' src={star_regular} alt="" />
          <img className='rating__star' src={star_regular} alt="" />
    </div>
  )
}
