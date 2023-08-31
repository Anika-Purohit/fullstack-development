import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const AddEmployee = () => {
  const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[gender,setGender] = useState("");
    const[age,setAge] = useState("");
  return (
    <div className='bg-yellow-100'>
    <div className='text-center text-2xl font-bold font-mono p-10'>Add Employee</div>
    <div className='grid justify-center' >
    <input className="w-96 m-3 p-7 rounded-xl" type='text' placeholder='Enter First Name' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
    <input className="w-96 m-3 p-7 rounded-xl " type='text' placeholder='Enter Last Name' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
    <input className="w-96 m-3 p-7 rounded-xl " type='text' placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input className="w-96 m-3 p-7 rounded-xl " type='text' placeholder='Enter Gender' value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
    <input className="w-96 m-3 p-7 rounded-xl " type='text' placeholder='Enter Age' value={age} onChange={(e)=>{setAge(e.target.value)}}/>
    <Link to='/'>
    <ul className='text-black inline-block font-mono font-bold text-xl p-2 border-4 border-black  m-5 rounded-lg'>BACK</ul>
    </Link>
    </div>
    </div>
  )
}

export default AddEmployee