import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Dishes from '../pages/Dishes/Dishes'
import Booking from '../pages/Booking/Booking'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'


function LayoutRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/dishes' element={<Dishes/>}></Route>
                <Route path='/services' element={<Booking/>}></Route>
                <Route path='/aboutus' element={<About/>}></Route>
                <Route path='/*' element={<NotFound/>}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default LayoutRoutes
