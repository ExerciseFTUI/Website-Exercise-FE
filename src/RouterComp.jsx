import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import OurTeam from './components/get-to-know/OurTeam'
import Since from './components/get-to-know/Since'
import GetToKnow from './pages/GetToKnow'
import NavBar from './components/Navbar'
import PastProject from './pages/PastProject'
import OurProject from './components/past-project/OurProject'

const RouterComp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/get-to-know' element={
                <GetToKnow>
                    <Since />
                    <OurTeam />
                </GetToKnow>
            } />

            <Route path='/past-project' element={
              <PastProject>
                <OurProject />
              </PastProject>
            } />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterComp