import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {
  const[employees,setEmployees] = useState([])
  useEffect(()=> { getEmployee(); },[])
  
  const getEmployee = () => {
    EmployeeService.getEmployee().then((response) => {
        setEmployees(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}

const deleteEmployee = (employeeId) => {
   EmployeeService.deleteEmployee(employeeId).then((response) =>{
    getEmployee();

   }).catch(error =>{
       console.log(error);
   })
    
}
  return (
    <div className='bg-yellow-100'>
    <div className='text-center text-2xl font-bold font-mono p-10'>Employees List</div>   
    <table className='font-mono '>
        <tr className=''>
           <th className='p-5 '>Employee First Name</th> 
           <th className='p-5'>Employee Last Name</th> 
           <th className='p-5'>Employee Email Id</th> 
           <th className='p-5'>Employee Age</th> 
           <th className='p-5'>Employee Gender</th> 
           <th className='p-5'>Actions</th> 
           <tbody>
            {employees.map(
                (e) =>
                
                <tr key = {e.id}>
                   <td>{e.firstName}</td> 
                   <td>{e.lastName}</td> 
                   <td>{e.emailId}</td> 
                   <td>{e.age}</td> 
                   <td>{e.gender}</td> 
          <td>   
          <Link to='/add'>
         <ul className='text-black inline-block font-mono font-bold text-xl p-2 border-4 border-black  m-5 rounded-lg'>ADD</ul>
         </Link>
         <Link to='/update'>
         <ul className='text-black inline-block font-mono font-bold text-xl p-2 border-4 border-black  m-5 rounded-lg'>UPDATE</ul>
         </Link>
         <Link to='/view'>
         <ul className='text-black inline-block font-mono font-bold text-xl p-2 border-4 border-black  m-5 rounded-lg'>VIEW</ul>
         </Link>
         </td>
         </tr>
          )
          }
           </tbody>
        </tr>
    </table> 
    </div>
  )
}

export default ListEmployeeComponent