import React from 'react'
import { useContext } from 'react'
import { Theme } from '../../App'
import { useEffect, useState } from 'react' 
import axios from 'axios'
import  './instrument.css'
import Instrument from './instrument/instrument'
import Card from '../Card/Card'
function Instruments() {
  const [instruments , setData] = useState([])
  useEffect(() => {
    axios.get('/public/Instuments.json')
      .then(response => {
        setData(response.data);
      })},[]);
    const theme = useContext(Theme)
  return (
    <div style={theme.style} className='flexbox'>
        {instruments.map((element , index) =>{
      return <Instrument key={index} name={element.name}
         description={element.discription}
         price={element.price}
         img={element.image}/>})} 
    </div>
  )
}
export default Instruments