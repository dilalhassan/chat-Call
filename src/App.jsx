import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Zegocould from './Zegocould'
import VideoRoom from './VideoRoom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Zegocould />} />
      <Route path='/room/:id' element ={<VideoRoom />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App