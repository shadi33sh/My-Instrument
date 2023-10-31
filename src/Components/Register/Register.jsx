import React from 'react'
import { useContext } from 'react'
import { Theme } from '../../App'
import './Register.css'
function Register() {
    const theme = useContext(Theme) 
  return (
  <div style={theme.style} className='back2'>
    <div className='Register' > 
      <h1>Register</h1>  
        <div className="form">
            <form  action="">
                <label htmlFor=""><p>Name</p></label>
                <input type="text"/>
                <label htmlFor=""><p>Email</p></label>
                <input type="text"/>
                <label htmlFor=""><p>Set Password</p></label>
                <input type="text"/>
                <label htmlFor=""><p>Repeat Password</p></label>
                <input type="text"/>
            </form>
            <button style={theme.style}>Register</button>
        </div>
      </div>
  </div>
  )
}

export default Register