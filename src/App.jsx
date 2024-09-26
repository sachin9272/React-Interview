import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian/index'
import RandomColor from './components/random color'
import StarRating from './components/star-rating'
function App() {

  return (
    <div className='App'>
      {/* Accordian Component */}
      {/* <Accordian/> */}
      
      {/* Random Color Component */}
      {/* <RandomColor/> */}

      {/* Star Rating Component */}
      <StarRating noOfStars={7}/>
    </div>
  )
}

export default App
