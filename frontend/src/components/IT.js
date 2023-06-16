import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Education from './Education'
import Entrepreneurship from './Entrepreneurship'
import LifestyleServices from './LifestyleServices'

function IT() {
  return (
    <>
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-500 to-indigo-900 h-40 md:h-52 w-screen">

    <p className="text-3xl text-white text-center p-5
                  md:text-6xl
                                ">SOFTWARE SOLUTIONS</p>

    <div className=" grid grid-cols-3 gap-x-2 mt-4 mx-2
                     md:col-span-3 md:gap-x-3 md:mx-4 md:mt-7
                     lg:col-start-2 lg:col-span-2 lg:grid-cols-5">
    <Link to="/IT/education" className="col lg:col-start-2 col-span-1 text-sm md:text-xl lg:text-2xl text-white font-light border border-white rounded-full hover:bg-white hover:text-black text-center p-1">Education</Link>
    <Link to="/IT/entrepreneurship" className="col  col-span-1 text-sm md:text-xl lg:text-2xl text-white font-light border border-white rounded-full hover:bg-white hover:text-black text-center p-1">Entreprenurship </Link>
    <Link to="/IT/lifestyleservices" className="col col-span-1 text-sm md:text-xl lg:text-2xl text-white font-light border border-white rounded-full hover:bg-white hover:text-black text-center p-1"> Lifestyle Services</Link>
    </div>

    </div>

    <Routes>
    <Route path="/" element={<Education/>}/>
   <Route path="/education" element={<Education/>}/>
   <Route path="/entrepreneurship" element={<Entrepreneurship/>}/>
   <Route path="/lifestyleservices" element={<LifestyleServices/>}/>
   </Routes>

    </>
  )
}

export default IT