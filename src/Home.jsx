import React from 'react'
import Navigationbar from './Navigationbar'
import Home_about from './Home_about'
import Home_top_partners from './Home_top_partners'
import Home_top_courses from './Home_top_courses'
import Home_diagram from './Home_diagram'
import Home_footer from './Home_footer'
import Course_popup from './Course_popup'
import './Home.css'

function Home() {
  return (
    <>
   
    <Navigationbar/>
    <Home_about/>
    <Home_diagram/>
    <Home_top_partners/>
    <Home_top_courses/>
    <Home_footer/>


    </>
  )
}

export default Home