import axios from 'axios';

const EMPLOYEE_DATA_URL ="http://localhost:7777/api/v1/employees";

class EmployeeService{
getEmployees(){
    return axios.get(EMPLOYEE_DATA_URL);
}
}
// exporting the object of the class 
export default new EmployeeService()