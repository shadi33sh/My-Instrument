import React from 'react'
import { useContext , useState} from 'react'
import './NavStyle.css'
import { Theme } from '../../App'
import { Link  } from 'react-router-dom'
import {MdDarkMode} from 'react-icons/Md';
import {MdLightMode} from 'react-icons/Md';
function Navbar({action}) {
  const [icon , setIcone] = useState(<MdLightMode/>) 
   const theme = useContext(Theme)
   const [position , setposition] = useState('100%')
   function responsev(){
     if(position == '100%'){setposition('4%')}
     else if(position == '4%'){setposition('100%')}}
     const ChangIcone = ()=>{
      if(icon.type.name == 'MdLightMode'){setIcone(<MdDarkMode/>)}
      else {setIcone(<MdLightMode/>)}
      action();}
      const resetPosition  = ()=>{
        if(position == '4%'){setposition('100%')}
      }
  return (
    <div>
    <div className='navbar' style={theme.style}>
      <div className="logo"><h1>My Instrumenst</h1></div>
      <ul style={{left : position}} className="navlist">
        <li className="navitem"><Link onClick={resetPosition} to={'/'} className='navlink' href="#"><p>Home</p></Link></li>
        <li className="navitem"><Link onClick={resetPosition} to={'/Instruments'} className='navlink' href="#"><p>Instrument</p></Link></li>
        <li className="navitem"><a onClick={resetPosition} className='navlink' href="#footer"><p>Concat Us</p></a></li>
        <li className="navitem"><Link onClick={resetPosition} to={'/signin'} className='navlink' href="#"><p>Sign in</p></Link></li>
        <li className="navitem"><button className="ChangeMode" id='ChangeMode' style={theme.style} onClick={ChangIcone}> {icon}</button></li>
      </ul>
      <button style={theme.style} onClick={responsev} className='toggle'><span><h5>_</h5></span><span><h5>_</h5></span><span><h5>_</h5></span></button>
    </div>
    </div>  
  )
}
export default Navbar