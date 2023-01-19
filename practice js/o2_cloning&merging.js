const student = {
    Name : "Soham",
    Native : "kolhapur"
}
console.log(student);
student.Class = "12th"
console.log(student);

//frezing object
Object.freeze(student)
student.bike ="Pulsar"

//freezing array
let num =[2,5,7,9]
console.log(num);
Object.freeze[num]
num.push[3]

//cloning of object
const emp={
    Name : "sunil",
    Salary : "50k"
}
const cloned_emp = Object.assign({},emp);
console.log(cloned_emp);

//merge an object

const emp_sunil ={
    Name : "sunil",
    Salary : "50k"
}
const emp_address = {
    city :" kolhapur",
    pin :411660 
}
const merge_emp = Object.assign({},emp_sunil,emp_address)
console.log(merge_emp);