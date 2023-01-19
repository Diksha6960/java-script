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

const arrayOfCompany = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`##1)Find out all objects from TCS using filter`);
const arrayOfFilter = arrayOfCompany.filter((emp) => {
    if (emp.emp_company=="TCS") {
     
        console.log(`Company Name = ${emp.emp_name}   Employee Name = ${emp.emp_company}`);
    }
    
})
