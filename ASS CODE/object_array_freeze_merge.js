console.log(`1) Personal Details`);
const personal_details ={ 
    Name :" Diksha Suraj Patil",
    Native : "Kolhapur",
    Qualification : "BE Mech",
    is_married : "Yes"

}
console.log(personal_details);

console.log(`\n 2)Collage Details`);
const collage_details ={
    Name : "Filolex Academy of management and technology",
    Location :"Ratnagiri",
    University : "Mumbai"
}
console.log(collage_details);

console.log(`\n3)Merging of two objects`);
const merge = Object.assign({},personal_details,collage_details)
console.log(merge);

console.log(`\n 4) Array Freezing`);
let fred = ["Devika","Chaitali","Komal","Reeta","Divya","Renuka"]
const a = Object.freeze(fred)
console.log(a);

console.log(`\n 5)Itiration of Array`);
let frend = ["Devika","Chaitali","Komal","Reeta","Divya","Renuka"]
for (element of frend){
    console.log(element
        );
}
console.log(`\n 6)Reversing the string`);
console.log(`Given String "Codemind Technology`);
console.log(`Resulting String :'Codemind ygolonhceT'` );


