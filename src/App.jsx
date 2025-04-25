import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
   <>
   <Navbar/>
     <Routes>
     <Route path='/' element='' />
     </Routes>
   </>
  )
}

export default App