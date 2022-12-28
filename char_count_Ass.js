

console.log(`====================STRING NO 1==========================`)
console.log(`"I Am Learning JavaScript,The Language of Internet"`)

var sentence="I Am Learning JavaScript,The Language of Internet"
var counter = 0
for (let index = 0; index < sentence.length; index++){
var char = sentence.charAt(index);
if (char=='A' || char=='a'){
    console.log(`Total No Of A/a in Given String = ${char}` );
        counter = counter +1;
    }   
}

console.log(`====================STRING NO 2==========================`)

console.log(`"MY favourite movie is LAGGAN"`)

var sentence="MY favourite movie is LAGGAN"
var counter = 0
for (let index = 0; index < sentence.length; index++){
var char = sentence.charAt(index);
if (char=='A' || char=='a'){
    
    console.log(`Total No Of A/a in Given String = ${char}` );
        counter = counter +1;
    }   
}
