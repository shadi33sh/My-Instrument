import React from 'react'
import { Theme } from '../../App'
import { useContext } from 'react'
import './Events.css'
import Card from '../Card/Card'
const events = [
    {title: 'musical Fastival Every June', event : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat dolore voluptatum maiores soluta excepturi.',Image:'../../../public/Instuments.jpg' },
    {title: 'musical Fastival Every June', event : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat dolore voluptatum maiores soluta excepturi.',Image:'../../../public/Instuments.jpg' },
    {title: 'musical Fastival Every June', event : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat dolore voluptatum maiores soluta excepturi.',Image:'../../../public/Instuments.jpg' },
    {title: 'musical Fastival Every June', event : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat dolore voluptatum maiores soluta excepturi.',Image:'../../../public/Instuments.jpg' },]
    console.log(events[3].event);
function Events() {
 const theme = useContext(Theme)
  return (
<div style={theme.style} className='group'>
        <h1>Events</h1>
            <div className='events'>
        {events.map((element , index) =>{
            return <Card
            name={element.title}
            description={element.event}
            img={element.Image}
            />})}
      </div>
 </div>
  )}
export default Events