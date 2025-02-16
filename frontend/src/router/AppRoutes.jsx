import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../layout/applayout/applayout'
import Home from '../pages/Home'
import About from '../pages/About'

const AppRoutes = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />  {/* Default Route (Home) */}
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
       
   </BrowserRouter>
  )
}

export default AppRoutes