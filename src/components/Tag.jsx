import React from 'react'
import PropTypes from 'prop-types'

export default function Tag({ tag }) {
    
  return (
      <div>
        <p className='tag'>{tag } </p>
    </div>
  )
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired
}