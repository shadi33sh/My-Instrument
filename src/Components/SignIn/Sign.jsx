import React, { useId } from 'react'
import { Theme } from '../../App'
import './signStyle.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
function Sign() {
    const theme = useContext(Theme) 
  return (
<div style={theme.style} className='back'>
  <div className='sign' > 
    <h1>sign in</h1>  
      <div className="form">
          <form  action="">
              <label htmlFor=""><p>Name</p></label>
              <input type="text"/>
              <label htmlFor=""><p>Password</p></label>
              <input type="text"/>
          </form>
          <button style={theme.style}>Sign In</button>
         <p style={{fontSize: '14px'}}>If You Dont Have Account <Link style={{color : 'black'}} to={'/register'} >Register Now</Link></p>
      </div>
    </div>
</div>
  )
}

export default Sign