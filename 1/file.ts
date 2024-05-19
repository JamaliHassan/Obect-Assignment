// Employee Data

type Employee = {
    name: string,
    department: string,
    role:  "Manager" | "Engineer" | "Intern",
    contacts? : {
        email: string,
        contactNo: number ,
    },
    skills?: string
}

let employee: Employee = {
    name: "Osama",
    department: "Petroleum & Natural Gas",
    role: "Engineer",
    contacts: {
        email: "ABC.123@mail.com",
        contactNo: 921111171
    },
  
}
console.log(employee);

console.log(employee.department, employee.role , employee.contacts);

