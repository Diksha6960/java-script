class Employee{
    constructor(name, id, age, city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    } 
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empSmith);
console.log(empJay);
console.log(empBill);

class Vehical{
    constructor(color,brand,type,fuel){
        this.color =  color;
        this.brand = brand;
        this.type = type;
        this.fuel = fuel}
    } 
    console.log(`1)Honda Amaze`);
let amaze = new Vehical("White","Honda","4 Wheeler","Diesel");
console.log(amaze);