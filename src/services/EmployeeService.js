import axios from 'axios';

const EMPLOYEE_DATA_URL ="http://localhost:8080/api/v1/employees";

// axios does the job of postman client
class EmployeeService{
getEmployee(){
    return axios.get(EMPLOYEE_DATA_URL);
}
createEmployee(employee){
    return axios.post(EMPLOYEE_DATA_URL);
}
deleteEmployee(employeeId){
    return axios.delete(EMPLOYEE_DATA_URL +'/' + employeeId);
}
updateEmployee(employeeId,employee){
    return axios.post(EMPLOYEE_DATA_URL + '/' + employeeId)
}
getEmployeeById(employeeId){
    return axios.get(EMPLOYEE_DATA_URL + '/' +employeeId)
}
}
// exporting the object of the class 
export default new EmployeeService()