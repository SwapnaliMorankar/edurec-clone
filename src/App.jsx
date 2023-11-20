import React from 'react'
import Home from './Home'
import University from './University'
import { Route, Routes } from 'react-router-dom'
import Popup_enquiry from './Popup_enquiry'
import Course1 from './Course1'
import Course2 from './Course2'
import Course3 from './Course3'
import Course4 from './Course4'
import Course5 from './Course5'
import Course6 from './Course6'
import Course7 from './Course7'
import Course8 from './Course8'
import Support from './Support'
import About from './About'
import Inquiry_form from './Inquiry_form'








function App() {
  return (
    <>
    {/* <Inquiry_form/> */}
  
  {/* <About/> */}
   <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='university' element={ <University/>}/>
    <Route path='support' element={ <Support/>}/>
    <Route path='about' element={ <About/>}/>

    {/* cousrses********************************************************************************************************* */}
    {/* cousrses********************************************************************************************************* */}
    <Route path='dypatil' element={ <Course1/>}/>
    <Route path='manipal' element={ <Course2/>}/>
    <Route path='jain' element={ <Course3/>}/>
    <Route path='amity' element={ <Course4/>}/>
    <Route path='uttaranchal' element={ <Course5/>}/>
    <Route path='lpu' element={ <Course6/>}/>
    <Route path='mangalayatan' element={ <Course7/>}/>
    <Route path='swamivivekanand' element={ <Course8/>}/>
    
   </Routes>



    
  
    </>
    
  )
}


export default App