const festival ={
    Month : "January",
    Colour : "Black",
    Activity : "Kide Riding",
    Food :{
        Starter : "Masala Papad",
        Main_Course : "Maharashtrian Thali",
        Sweet : "Puran_Poli",
         },
    Eat: function(){
        console.log(`I will eat"Til_Gudh"`);
    }
        
    }
console.log(festival);


console.log(`1) Accesing property`);
 const s = festival.Activity;
console.log(`Access property Activity : ${s} `);

console.log(`2)Adding an property`);
festival.Day = "14 Jan";
console.log(festival);

console.log(`3)Updating property `);
festival.Month ="Paush";
console.log(festival);

console.log(`4)Deleting property`);
delete festival.Day;
console.log(festival);

console.log(`5)Accessing nested property`);
const r = festival.Food.Sweet;
console.log(r);

console.log(`6)Updating nested property`);
festival.Food.Sweet = "Gajar Halwa";
console.log(festival);

console.log(`7)Deleting nested property`)
festival.Food.Starter ;
console.log(festival);

console.log(`8)Accessing function from object`);
festival.Eat();

Object.keys(festival:{});




