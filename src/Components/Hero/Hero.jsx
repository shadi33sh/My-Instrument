import React from 'react'
import './HeroStyle.css'
import { Theme } from '../../App'
import { useContext } from 'react'
function Hero() {
const theme = useContext(Theme)
  return (
    <div className='hero' style={theme.Image}>
        <div className="text" >
            <h1>Welcome To Our Website</h1> 
            <p className='paragraph'>We Help You Inter The Musical World</p>
        <button className='btn' style={theme.style}><p>Choose Your Instrument</p></button>
        </div>
    </div>
    )}
export default Hero

