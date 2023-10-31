import React from 'react'
import './instrument.css'
import { Theme } from '../../../App'
import { useContext } from 'react'
function Instrument({name , img , description , price}) {
  const theme = useContext(Theme)
  return (
    <div className='instrument'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <div className="img">
        <img src={img} alt="" />
        </div>
        <div>
        <button style={theme.style} className='btn'>view</button>
        <button style={theme.style} className='btn'>Add to cart</button>
        </div>
    </div>
  )
}
export default Instrument