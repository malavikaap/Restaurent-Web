import React from 'react'
import Welcome from '../welcome/Welcome'
import Partner from '../Partner/Partner'
import Booking from '../Booking/Booking'
import Dishes from '../Dishes/Dishes'
import Ambience from '../ambience/Ambience'
import Delivery from '../Delivery/Delivery'

function Home() {
  return (
    <>
    <Welcome/>
    <Partner/>
    <Booking/>
    <Dishes/>
    <Ambience/>
    <Delivery/>
    </>
  )
}

export default Home
