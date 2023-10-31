import React, {useContext} from 'react'
import './ReviewsStyle.css'
import { Link } from 'react-router-dom'
import { Theme } from '../../App'
function Reviews({Reviews}) {
    const theme = useContext(Theme)
  return (
    <div className='reviews' style={theme.style}>
      <h1>Costumer Reviews</h1>
       {Reviews.map((element, index) =>{
         return  <div key={index} className='review'>
                  <div className='flexBox'>
                    <img src={element.img} alt="" />
                    <h1>{element.name}</h1>
                    <p>{element.comment}</p>
                  </div>
                </div>
         })
       }
    </div>
  )
}

export default Reviews