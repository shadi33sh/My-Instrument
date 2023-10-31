import React from 'react'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Reviews from '../Reviews/Reviews'
import Events from '../Events/Events'
const reviews = [
    {name : 'Mohammed' , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personOne.jpg'},
    {name : 'Tameem'   , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personFour.jpg'},
    {name : 'Rami'     , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personOne.jpg'},
    {name : 'Shadi'    , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personOne.jpg'},
    {name : 'Fadi'     , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personFour.jpg'},
    {name : 'Hadi'     , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personFour.jpg'},
    {name : 'Nour'     , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personFour.jpg'},
    {name : 'khaldoon' , comment : ' Lorem, ipsum dolor sit amet consectetur adipisicing que dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personFour.jpg'},
    {name : 'Dema'     , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personTow.jpg'},
    {name : 'Koumay'   , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personOne.jpg'},
    {name : 'Rema'     , comment : 'ue dolor reprehenderit doloribus, ipsam architecto, iure tempora est, rem vero eveniet? Debitis nam magni quos dicta? Esse et aut dolor excepturi iure minima dolores distinctio fugiat qui corporis maiores amet totam at quam molestiae doloribus voluptate fuga vero impedit, ea praesentium laborum consectetur.' , img : './../public/persons/personThree.jpg'},  ] 
 const service=[
    {name : "All Types Of Instuments", description : "High quality string, wind ,Percussion and electric instruments, including delivery service" , img :'../../public/image2.jpg'},
    {name : "Electrical Music Divices", description : "High quality Divces For Better Performance while Playing" , img :'../../public/image.jpg'},
    {name : "Recording Music Tracks", description : "High quality Recording With Spacielists And training" , img :'../../public/image1.jpg'}]
function HomePage() {
  return (
    <div>
         <Hero/>
          <Services arr = {service}/>
          <Events/>
          <Reviews Reviews={reviews}/>  
    </div>
  )
}
export default HomePage