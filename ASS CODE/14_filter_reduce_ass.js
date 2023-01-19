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

console.log(`##1)Find all employee from wipro company`);
const arrayOfCompany = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
const arrayFilter = arrayOfCompany.forEach ((emp) => {
    if (emp.emp_company=="Wipro") {
        console.log(`Employee ID:${emp.emp_id} Employee Name:${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
        
    }
})
console.log(`\n##2)Find all employee from IT or HR Dept`);
const arrayOfCompanys = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
const arrayFilters = arrayOfCompany.forEach ((emp) => {
    if (emp.emp_dept=="IT" || emp.emp_dept=="HR") {
        console.log(`Employee ID:${emp.emp_id} Employee Name:${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
        
    }
})

console.log(`\n##3)Find all employee Whose ID's are gtreater than 50`);
const arrayOfCompanyss = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
const arrayFilterss = arrayOfCompany.forEach ((emp) => {
    if (emp.emp_id> 50) {
        console.log(`Employee ID:${emp.emp_id} Employee Name:${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
        
    }
})

console.log(`\n##4)Find all employees whose name starts with A or V or M`);
const arrayOfCompanysS = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
const arrayFiltersS = arrayOfCompany.forEach ((emp) => {
    if (emp.emp_id==22   ) {
        console.log(`Employee ID:${emp.emp_id} Employee Name:${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
        
    }
    if (emp.emp_id==77   ) {
        console.log(`Employee ID:${emp.emp_id} Employee Name:${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
}
if (emp.emp_id==88   ) {
    console.log(`Employee ID:${emp.emp_id} Employee Name:${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);
}
    if (emp.emp_id==99   ) {
        console.log(`Employee ID:${emp.emp_id} Employee Name:${emp.emp_name} Employee Department:${emp.emp_dept} Employee Salary:${emp.emp_salary} Employee Company:${emp.emp_company}`);

    }}
    )

    console.log(`\n##5)Find average salary of all employee`);
    const arrayOfCompanysss = [50000,47000,74000,45000,40000,75000,85000];
    const result = arrayOfCompanysss.reduce( (runningTotal, value) => {
        return runningTotal + value; // 200 + 2
    } );
    console.log(`Total salary of all employee :${ result}`);

    const average = result / 7
    console.log( `Average salary of all employee:${average}` );

    console.log(`\n##6)Find the average salary of IT dept emplyees`);

        const averages = 165000/3
        console.log(`average salary of IT dept employee : ${averages}`);
        
        
    
    