//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

function getEmployeeNames() {
    let employeeNames = [];

    for (let i = 0; i < employees.length; i++) {
        employeeNames.push(`${employees[i].firstName} ${employees[i].lastName}`);
    }

    return employeeNames;
}


function getTotalSalary() {
    let totalSalary = 0;

    // Using a for loop to calculate the total salary
    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].Salary;
    }

    return totalSalary;
}

module.exports = {
    employees,
    getEmployeeNames,
    getTotalSalary
};

