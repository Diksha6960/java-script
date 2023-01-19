const array_roll_numbers = [113,45,56,11,32,45,109,799,56,45]
console.log(`##1)Reverse the array`);
console.log(`Given Array`);
console.log(array_roll_numbers);
array_roll_numbers.reverse();
console.log(`Reverse Array`);
console.log(array_roll_numbers);

console.log(`\n##2)Use sort() method without custom logic`);
const array_roll_numberss = [113,45,56,11,32,45,109,799,56,45]
array_roll_numberss.sort()
console.log(array_roll_numberss);

console.log(`\n##3)Use sort() method with custom logic`);
const array_roll_numbersss = [113,45,56,11,32,45,109,799,56,45]
array_roll_numbersss.sort((a,b) =>{
     return a < b ? -1 : 1;
})
console.log(array_roll_numbersss);

console.log(`\n##4)Greatest from among`);
console.log(array_roll_numbersss);
const index = array_roll_numberss[9]
console.log(`Greatest number from array : ${index}`);

console.log(`\n##5)Smallest number  from among`);
console.log(array_roll_numbersss);
const indexs = array_roll_numberss[1]
console.log(`Smallest number from array : ${indexs}`);

console.log(`\n##6)Remove Duplicates from Array`);
const array_roll_numberS = [113,45,56,11,32,45,109,799,56,45]
console.log(`Given Array`);
console.log(array_roll_numberS);

const array_roll_num = [113,45,56,11,32,109,799]
console.log(`New Array`);
console.log(array_roll_num);



