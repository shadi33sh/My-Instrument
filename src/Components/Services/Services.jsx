import React from 'react'
import './ServicesStyle.css'
import { useContext } from 'react'
import { Theme } from '../../App'
import Card from '../Card/Card'
import img from '../../../public/Darkmode.jpg'
function Services({arr}) {
   const theme =  useContext(Theme)
  return (
    <div className='services' style={theme.style}>
        <h1>Services</h1>
          <div className="cards">
           {arr.map((element,index) =>{
              return <Card key={index}
                           name= {element.name}
                           img = {element.img} 
                           description = {element.description}
              />})}
          </div>
    </div>
  )
}
export default Services