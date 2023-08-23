import React from 'react'

const ListEmployeeComponent = () => {
  return (
    <div>
    <span>Employees List</span>   
    <table>
        <tr>
           <th>Employee First Name</th> 
           <th>Employee Last Name</th> 
           <th>Employee Email Id</th> 
           <th>Employee Age</th> 
           <th>Employee Gender</th> 
           <th>Actions</th> 
           <tbody>
            {/* recievedEmployee.map(
                e =>
                (
                <tr key = {e.id}>
                   <td>{e.firstName}</td> 
                   <td>{e.lastName}</td> 
                   <td>{e.emailId}</td> 
                   <td>{e.age}</td> 
                   <td>{e.gender}</td> 
                </tr>    
                )
            ) */}
           </tbody>
        </tr>
    </table> 
    </div>
  )
}

export default ListEmployeeComponent