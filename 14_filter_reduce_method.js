//14 filter
const arrayOfNum = [0, 20, 3, 5, 6, 10];
 const arrayFilter =arrayOfNum.filter( (currentValue, index)=> {
    return currentValue > 5; // 0
 } );
 console.log(arrayFilter);

class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

console.log("====== Filter out vehicles whose prices are greater than 200000=======");
 const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
 const arrayFilterVehicle = arrayOfVehicles.filter( (vehicle) =>{
    return vehicle.price > 200000;
 } );
 arrayFilterVehicle.forEach( (element) => {
console.log(element.company, element.price);
 } );

//Reduce method
const arrayOfNumber = [0, 2, 3, 5, 6, 8 ];
const result = arrayOfNumber.reduce( (runningTotal, value) => {
    return runningTotal + value; // 200 + 2
} );
console.log(result);

const arrayOfNumbers = [0, 2, 3, 5, 6, 8 ];
const results = arrayOfNumbers.reduce( (runningTotal, value) => {
    return runningTotal + value; // 200 + 2
} );
console.log(results);

const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// Sum of all even numbers
// Even Numbers
// Sum 
const evenNums = array.filter( value => value%2==0 );
const finalResult = evenNums.reduce((runningTotal, value) => runningTotal + value);
console.log(evenNums);
console.log(finalResult);

console.log("Chaining methods");
const resultSum = array.filter( value => value%2==0)
    .reduce((runningTotal, value) => runningTotal + value);
console.log(resultSum);