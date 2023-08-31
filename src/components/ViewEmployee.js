import React from 'react'
import { Link } from 'react-router-dom'
const ViewEmployee = () => {
  return (
    <div className='bg-yellow-100'>
    <div className="text-center text-2xl font-bold font-mono p-10"> ViewEmployee </div>
    <Link to='/'>
    <ul className='text-black inline-block font-mono font-bold text-xl p-2 border-4 border-black  m-5 rounded-lg'>BACK</ul>
    </Link>
    </div>
  )
}

export default ViewEmployee