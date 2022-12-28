const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11]
console.log(arrayNumber);
console.log(`###1 . Length of given array`);
console.log(`Length of array =  ${arrayNumber.length}`)

console.log(`\n###2 . First and Last Element`)
let firstElement = arrayNumber[0]
 let lastElement = arrayNumber[arrayNumber.length-1]
console.log(`first element = ${firstElement} `);
console.log(`last element = ${lastElement}`);

console.log(`\n###3 . Log the 3rd last No`)
let s=arrayNumber[arrayNumber.length-3]
console.log(`Log the 3rd last No = ${s}`);

console.log (`\n###4 . All even no values`)
let evenNum = []
for (let index = 0; index < arrayNumber.length; index++) {
   if  ( [index] %2==0 ){evenNum=evenNum + " ," +arrayNumber[index]};

}
console.log(`All even Numbers in array = ${evenNum}`)


