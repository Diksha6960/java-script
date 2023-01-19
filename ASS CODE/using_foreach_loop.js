console.log(`1)creating array with index value` );
const array_number=[1,-7,40,502,-77,91,0,108,89,-601];
array_number.forEach(function(value,index){
console.log(value,index)});

console.log(`2)Find possitive no and log on console`);
const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
array_numbers.forEach(function (value) {
    if (value>=1) {
       console.log(value); 
        
    }
    
})
console.log(`3)Find negative number and create new array`);
const arrayOfNegative = []
array_numbers.forEach(function (value) {
    if (value<=-1) {
        arrayOfNegative.push(value) 
    }   
})
console.log(`Array of Negative number`);
console.log(arrayOfNegative);

console.log(`4)Find even number`);
const arrayOfEven = []
array_numbers .forEach(value => {
    if (value%2==0) {
        arrayOfEven.push(value)    
    }  
});
console.log(`Array of Even Number`);
console.log(arrayOfEven);

console.log(`5)Find sum of array`);
sum=0;
array_numbers.forEach(currentValue => {
    sum+=currentValue;
});
console.log(`Sum of array is:"${sum}"`);

console.log(`6)The even positioned in array `);
evenpos=[];
array_numbers.forEach((currentValue,index) => {
    
    if( index%2==0){
        evenpos.push(currentValue)
    }
}
);

console.log(`Even positioned array are :"${evenpos}"`);