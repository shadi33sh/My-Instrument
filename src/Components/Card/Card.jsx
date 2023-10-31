import React from 'react'
import './CardStyle.css'
function Card({name , img , description}) {
  return (
    <div className='card'>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="img">
            <img src={img} alt="" />
        </div>
    </div>
  )
}
export default Card