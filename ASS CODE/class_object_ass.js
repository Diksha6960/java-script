class Vehical{
    constructor(color,brand,type,fuel){
        this.color =  color;
        this.brand = brand;
        this.type = type;
        this.fuel = fuel}
    } 
    console.log(`1)Vehical Details `);
    console.log(`1)Honda Amaze`);
let amaze = new Vehical("White","Honda","4 Wheeler","Diesel");
console.log(amaze);
console.log(`2)Ford Aspire`);
let aspire = new Vehical("Grey","Ford","4 Wheeler","Petrol");
console.log(aspire);
console.log(`Tata Nexon`);
let nexon = new Vehical("Red","Tata","4 Wheeler","Diesel")
console.log(nexon);
console.log(`Mahendra Thar`);
let thar = new Vehical("Brown","Mahendra","4 Wheeler","Petrol");
console.log(thar);

class collage{
constructor(Name,Location,Type,Univercity){
this.Name=Name;
this.Loacation=Location;
this.Type = Type;
this.Univercity = Univercity}
}
console.log(`2) Collage Details`);

let s = new collage("FAMT","Ratnagiri","Engineering collage","Mumbai");
let c = new collage ("KIT","Kolhapur","Engineering Collage","Shivaji Univercity");
let a = new collage ("Mahavir","Karad","Juniar Collage","Shivaji Univercity");
let b = new collage("DKTE","Pune","Senior Collage","Pune");
console.log(s);
console.log(c);
console.log(a);
console.log(b);
console.log(`3)Tranverce Function`);
function tranverseObject(s) {
    for (const key in s) {
        if (Object.hasOwnProperty.call(s, key)) {
            const element = s[key];
            console.log(key,element);
            
        }
    }
    
}
function tranversObject(c) {
    for (const key in c) {
        if (Object.hasOwnProperty.call(c, key)) {
            const element = c[key];
            console.log(key,element);
            
        }
    }
    
}
function tranversObject(a) {
    for (const key in a) {
        if (Object.hasOwnProperty.call(a, key)) {
            const element = a[key];
            console.log(key,element);
            
        }
    }
    
}

function tranversObject(b) {
    for (const key in b) {
        if (Object.hasOwnProperty.call(b, key)) {
            const element = b[key];
            console.log(key,element);
            
        }
    }
    
}
console.log(transversObject(s)); 