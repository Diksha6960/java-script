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

console.log(`##1)Find out TCS employee and there details`);
const arrayOfCompany = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
arrayOfCompany.forEach((emp) => {
    if (emp.emp_company== "TCS") {
        console.log(emp.emp_id,emp.emp_name,emp.emp_dept,emp.emp_salary,emp.emp_company);
        
    }
})

console.log(`\n##2)find the employee with salary greater or equal to 50000`);
arrayOfCompany.forEach ((emp) =>{
if (emp.emp_salary>=50000) {
    console.log(emp.emp_id,emp.emp_name,emp.emp_dept,emp.emp_salary,emp.emp_company);
    
}
})

console.log(`\n##3)Find sum of salary`);
sum=0;
arrayOfCompany.forEach((sumOfSal)=> {
    sum = sum + sumOfSal.emp_salary
})
console.log(`sum of salary is : "${sum}"`);

console.log(`\n##4)Find the average salary`);

let length = arrayOfCompany.length
let average = sum/length
console.log(`Average of salary : ${average}`);

console.log(`\n##5)Find IT OR HR department employee whose salary >= 75000`);
arrayOfCompany.forEach((dept) => {
    if ((dept.emp_dept=="IT"|| dept.emp_dept=="HR")&& dept.emp_salary>=75000 ){
        console.log(dept.emp_id,dept.emp_name,dept.emp_dept,dept.emp_salary,dept.emp_company);
        
    }
})