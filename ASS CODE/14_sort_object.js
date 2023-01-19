class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company
    }
}
let emp_anil = new Employee(22,"Anil","IT",50000,"TCS")
let emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
let emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
let emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
let emp_monika = new Employee(77,"Monali","IT",40000,"Wipro");
let emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
let emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy"); 

console.log(`##1)Sort on ascending order according to employee ID `);
const arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
arrayOfEmployee.sort((id1,id2) => {
    return id1.emp_id > id2.emp_id ? 1 : -1;
})
arrayOfEmployee.forEach((emp) => {
    console.log(`${emp.emp_id}  ${emp.emp_name}  ${emp.emp_dept}`);
})
 
console.log(`\n##2)Sort on ascending order according to employee Department `);
const arrayOfEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
arrayOfEmployee.sort((dept1,dept2) => {
    return dept1.emp_dept > dept2.emp_dept ? 1 : -1;
})
arrayOfEmployee.forEach((emp) => {
    console.log(`${emp.emp_id}    ${emp.emp_dept}  ${emp.emp_company}`);
})

console.log(`\n##3)Sort in descending order according to employee salary  `);
const arrayOfEmployeeS = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
arrayOfEmployee.sort((sal1,sal2) => {
    return sal1.emp_salary < sal2.emp_salary ? 1 : -1;
})
arrayOfEmployee.forEach((emp) => {
    console.log(`${emp.emp_name}    ${emp.emp_salary}  ${emp.emp_company}`);
})













 