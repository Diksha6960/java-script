console.log(`Creating bank object`);
class bank  {
    constructor(bank_Name,location,account_number,ifsc_code,interest_rate){
        this.bank_Name = bank_Name;
        this.location = location;
        this.account_number =account_number;
        this.ifsc_code = ifsc_code;
        this.interest_rate =interest_rate
    } 
}

let axisBank=new bank("Axis Bank","Kolhapur",3245674356,"UTIB0000141","8%");
let sbiBank=new bank("SBI Bank","Bhogawati",986674356,"SBIN0000132","8.5%");
let iciciBank=new bank("ICICI Bank","Pune",853484356,"ICICI0000211","9%");
let kotakBank=new bank("Kotak Bank","Rajaram Puri",3245674356,"KKBK0000141","8%");
let hdfcBank=new bank("HDFC Bank","Shivaji Peth",8764674356,"HDFC0000141","8.5%");
let panjabBank=new bank("Panjab Bank","Mangalvar Peth",8764674356,"PANJ0000141","8.5%");
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);

console.log(`\n Tranverse Array `);

const arrayOfBank = [axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,panjabBank];

for (const element of arrayOfBank) {
    console.log(`${element.bank_Name} , ${element.location}`);
}
console.log(`\nFind kotak bank using for of loop`);
for (const element of arrayOfBank) {
    if (element.bank_Name == "Kotak Bank") {
        console.log(element);
    } 
}
console.log(`\n Log the details using for loop`);
for (let index = 0; index < arrayOfBank.length; index++) {
    console.log(arrayOfBank[index]);
    
}