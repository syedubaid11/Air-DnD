import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from '../components/nav'
import data from '../components/data'
import Card from '../components/cards'


function App() {
  const map=data.map((item)=>{
    return(
      <Card 
      key={1}
      mapurl={item.googleMapsUrl}
      title={item.title}
      location= {item.location}
      startDate={item.startDate}
      endDate={item.endDate}
      image={item.image}
      description={item.description}
      
      />
    )
  })
  

  return (
    <>
    <Nav></Nav>
    {map}
    </>
    
  )
}

export default App
