import React from 'react'
import {Link} from 'react-router-dom'

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
      <button class="col  border border-white text-white hover:bg-white active:bg-white active:text-black hover:text-black py-2  rounded-full">Media</button>
      <button class="col  border border-white text-white hover:bg-white active:bg-white active:text-black hover:text-black py-2  rounded-full">Branding</button>
      <button class="col  border border-white text-white hover:bg-white active:bg-white active:text-black hover:text-black py-2  rounded-full">IT</button>
      </div>


    </div>

    <div className=" grid grid-cols-8">
      <div className="relative col col-start-1 col-span-8 bg-blue-900 rounded-lg mt-8 text-center h-96
                    lg:col-span-6 lg:col-start-2">
                      
      </div>
      
      <Link to="/IT" className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-white border-2 border-white rounded-full hover:bg-white hover:text-black py-2 px-5">Visit</Link>
      
    </div>

  

    </div>
      </div>
    </div>
  )
}

export default Home