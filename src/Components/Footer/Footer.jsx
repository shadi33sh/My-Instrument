import React from 'react'
import './FooterStyle.css'
import { useContext } from 'react'
import { Theme } from '../../App'
import {BsLinkedin , BsFacebook} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri' 
import {AiFillTwitterCircle ,AiFillInstagram } from 'react-icons/ai'
import {BiSolidPhoneCall} from 'react-icons/bi'
function Footer() {
  const theme = useContext(Theme)
    return (
    <div id='footer' style={theme.style}>
    <section className="footer">
      <div className="row">
        <div className="colFlex">

        <div className="col">
          <h2>Info</h2>
          <ul className="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Compressions</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Collection</a></li>
          </ul>
        </div>
            <div className="col">
          <h2>Social Media</h2>
          <ul className="icons">
            <li><a href="#"><BsLinkedin/></a></li>
            <li><a href="#"><BsFacebook/></a></li>
            <li><a href="#"><AiFillTwitterCircle/></a></li>
            <li><a href="#"><AiFillInstagram/></a></li>
            <li><a href="#"><RiWhatsappFill/></a></li>
          </ul>
        </div>

        </div>
        <div className="col">
          <h2>Contact Us</h2>
          <p>
            Contact Our Support Team To Report an Issue Or To Get Help :
          </p>
          <form action="#">
            <input type="text" required/>
            <button type="submit">Send</button>
          </form>
          <p>Or Call US :</p>
          <p><BiSolidPhoneCall/>  00963 980 265 365</p>
        </div>
      </div>
      <p style={{opacity : '50%' , fontWeight : '100' , textAlign : 'center'}}>FrontEnd : @ShadiAlatwani</p>
    </section>
    </div>
  )
}
export default Footer