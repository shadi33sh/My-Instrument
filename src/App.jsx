import { useState , createContext } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import HomePage from './Components/Routes/HomePage'
import InstrumentsPage from './Components/Routes/InstrumentsPage'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Sign from './Components/SignIn/Sign'
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register'
export const Theme = createContext()
function App() {
  const [mode , setMode] = useState(false)
      const ChangeMode = () =>{
          setMode(!mode)}
      const prop = {
        style : {
          color : mode? 'rgb(10,10,10)' : 'rgb(205,205,205)' ,
          backgroundColor : mode? 'rgb(205,205,205)' : 'rgb(10,10,10)',
          transition : '0.5s'} , 
        Image: {
          color : mode? 'rgb(10,10,10)' : 'rgb(205,205,205)' ,
          backgroundImage:mode? 'url(/public/lightmode.jpg)' : 'url(/public/Darkmode.jpg)',
          transition : '0.5s'}}
      return (   <>
  <Theme.Provider value={prop}>
       <BrowserRouter>
          <Navbar action={ChangeMode}/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/instruments' element={<InstrumentsPage/>}/>
              <Route path='/signin' element={<Sign/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
      </Theme.Provider>
    </>
  )
}
export default App

