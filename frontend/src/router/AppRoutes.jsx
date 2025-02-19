import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../layout/applayout/applayout'
import Home from '../pages/Home'
import About from '../pages/About'

// Company Management Section
import Branches from '../pages/company_management/Branches'
import BranchesForm from '../pages/company_management/BranchesForm'

const AppRoutes = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />

                {/* Company Management Routes */}
                <Route path="/company_management/branch" element={<Branches />}/>
                <Route path="/company_management/branch-add" element={<BranchesForm />}/> 
            </Route>
        </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes