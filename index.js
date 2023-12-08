// Write your solution in this file!
const employee = {name: "Ky Burke", streetaddress: "710 Franklin Dr"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee };

    newEmployee[key] = value

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    let newEmpl = {...employee};
    
    delete newEmpl.name;
    
    return newEmpl
}

console.log(deleteFromEmployeeByKey(employee, "Ky Burke"))

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee
}