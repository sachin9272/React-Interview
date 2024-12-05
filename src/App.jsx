import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian/index'
import RandomColor from './components/random color'
import StarRating from './components/star-rating'
import LoadMoreData from './components/load-more-data'
import Countdown from './components/countdown-timer/countdown'
import Scroll from './components/scroll-to-particular/Scroll'
function App() {

  return (
    <div className='App'>
      {/* Accordian Component */}
      {/* <Accordian/> */}
      
      {/* Random Color Component */}
      {/* <RandomColor/> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={7}/> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* Scroll to a particular section */}
      <Scroll/>
    </div>
  )
}

export default App
