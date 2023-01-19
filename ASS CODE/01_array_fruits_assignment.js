console.log(`###1 . ============Creating Array============`)
const fruits_seasonal=["Banana","Orange","Appel","Mango","Water Melon"];
console.log(fruits_seasonal);
console.log(`###1 . ======First and last element of Array======`)

console.log(` First element of Array = Banana`);
console.log(`Last element of Array = Water Melon`);


console.log(`\n###2 . ======== Adding Papaya at the starting of Array=========`);

let shiftResult = fruits_seasonal.unshift("Papaya");

console.log(shiftResult,fruits_seasonal);

console.log(`\n ###3 . Removing Mango from Array`);
const fruits_seasona2=["Banana","Orange","Appel","Water Melon"];
console.log(fruits_seasona2);

console.log(`\n###4 . Adding Pineapple at the last position`);

console.log(fruits_seasonal)
 fruits_seasonal.push("Pineapple")
console.log(`After adding "Pineapple" \n ${fruits_seasonal}`);

console.log(`\n###5 . Adding  at the "Dragon Fruit " second last position`);

console.log(fruits_seasonal)
 fruits_seasonal.splice(5,0,"Dragon Fruit")
console.log(`After adding "Dragon Fruit" \n ${fruits_seasonal}`);


console.log(`\n###6 . Relacing Orange with Kiwi `);
console.log(fruits_seasonal);
 fruits_seasonal ["2"]="Kiwi";
console.log(fruits_seasonal);

console.log(`\n###7 . First 4 index values`);

console.log(fruits_seasonal);
let spliceResult = fruits_seasonal.splice(4);
console.log(spliceResult);

console.log(`\n###8 . Last 3 index values`);

console.log(fruits_seasonal);
let lastThree =fruits_seasonal.slice(fruits_seasonal.length-3)

console.log(`last Three Elements=${lastThree}`);



