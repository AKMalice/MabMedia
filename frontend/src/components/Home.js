import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import ViewMedia from './ViewMedia'
import ViewIT from './ViewIT'
import ViewBranding from './ViewBranding'

function Home() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-500 to-indigo-900 h-96 w-screen">
         <p className="text-3xl font-sans px-10 pt-10 text-white text-center
                    md:text-7xl md:text-left
                    lg:text-8xl lg:text-left">MAB MEDIA GROUP</p>

      <p className="text-md font-thin font-sans pt-3 text-center text-white
                    md:text-xl md:text-left md:px-11
                    lg:text-2xl lg:text-left md:px-11">Events, Promotional Gifts & Software Solutions</p>
      
      <div className="grid grid-cols-8">
    <div className=" col-start-2 col-span-6 bg-gray-100 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-xl p-5 h-full mt-10 ">

    <div className="grid 
                    md:grid-cols-3
                    lg:grid-cols-4">
      <div className="col bg-gradient-to-l from-sky-500 to-indigo-900 rounded-full text-center p-2 grid grid-cols-3 gap-x-2
                    md:col-span-3 md:gap-x-4
                    lg:col-start-2 lg:col-span-2">
      <Link to="/Home/view-Media" class="col  border border-white text-white hover:bg-white active:bg-white active:text-black hover:text-black py-2  rounded-full">Media</Link>
      <Link to="/Home/view-Branding" class="col  border border-white text-white hover:bg-white active:bg-white active:text-black hover:text-black py-2  rounded-full">Branding</Link>
      <Link to = "/Home/view-IT" class="col  border border-white text-white hover:bg-white active:bg-white active:text-black hover:text-black py-2  rounded-full">IT</Link>
      </div>
    </div>

    <Routes>
      <Route path="/" element={<ViewMedia/>}/>
      <Route path="/view-Media" element={<ViewMedia/>}/>
      <Route path="/view-Branding" element={<ViewBranding/>}/>
      <Route path="/view-IT" element={<ViewIT/>}/>
    </Routes>

  

    </div>
      </div>
    </div>
  )
}

export default Home