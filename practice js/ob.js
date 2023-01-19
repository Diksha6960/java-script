const baby = {
    Name : "Sharvi",
    Age : "1 year",
    Gender : "Female",
    Colour : "Fair",
    Eat : function () {
        console.log(`I love Healthy Food`  );
        
    }
}
console.log(baby);

console.log(`1)Accessing object property using .notation`);
const s = baby.Name;
console.log(s);
 console.log(`2)Accessing object property using bracket  notation`);
 const a = baby["Age"];
console.log(a);
console.log(`3)function accessing`);
 baby.Eat();
 console.log(`4)Adding Property`); 
 baby.height="2 ft";
 console.log(baby);
console.log(`5)Updating property`);
baby.Name = "Varada";
console.log(baby);
console.log(`6)deleting property`);
delete baby.Gender;
console.log(baby);
console.log(`7)Nested function `);
baby.food = {
    sweet : "Gulab jamun",
    salty : "namkin",
    Fruits : "Apple",
    add : function () {
        return this.sweet+this.salty+this.Fruits;
        console.log(add);
        
    }
}
console.log(baby);





