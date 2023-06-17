import React from 'react'
import {Link} from 'react-router-dom'

function ViewMedia() {
  return (
    <div className=" grid grid-cols-8">
    <div className="relative col col-start-1 col-span-8 bg-blue-900 rounded-lg mt-8 text-center h-96
                  lg:col-span-6 lg:col-start-2">
                 
    </div>
    
    <Link to="/Branding" className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md md:text-xl text-white text-center border-2 border-white rounded-full hover:bg-white hover:text-black py-2 px-5">Coming Soon</Link>
  </div>
  )
}

export default ViewMedia