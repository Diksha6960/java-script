console.log(` A)Create a class with data members `);
class bank  {
    constructor(bank_Name,location,account_number,ifsc_code,interest_rate){
        this.bank_Name = bank_Name;
        this.location = location;
        this.account_number =account_number;
        this.ifsc_code = ifsc_code;
        this.interest_rate =interest_rate 
    } 
}

const axisBank=new bank("Axis Bank","Kolhapur",3245674356,"UTIB0000141","8%");
const sbiBank=new bank("SBI Bank","Bhogawati",986674356,"SBIN0000132","8.5%");
const iciciBank=new bank("ICICI Bank","Pune",853484356,"ICICI0000211","9%");
const kotakBank=new bank("Kotak Bank","Rajaram Puri",3245674355,"KKBK0000141","8%");
const hdfcBank=new bank("HDFC Bank","Shivaji Peth",8764674356,"HDFC0000141","8.5%");
const panjabBank=new bank("Panjab Bank","Mangalvar Peth",8764674355,"PANJ0000141","8.5%");

console.log(`\nB)create objects`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);
console.log(`\nC)create map`);


console.log(`\nD)Transverse the map `);
class banks  {
    constructor(bank_Name,location,account_number,ifsc_code,interest_rate){
        this.bank_Name = bank_Name;
        this.location = location;
        this.account_number =account_number;
        this.ifsc_code = ifsc_code;
        this.interest_rate =interest_rate
    } 
}

const axisBanks=new banks("Axis Bank","Kolhapur",3245674356,"UTIB0000141","8%");
const sbiBanks=new banks("SBI Bank","Bhogawati",986674356,"SBIN0000132","8.5%");
const iciciBanks=new banks("ICICI Bank","Pune",853484356,"ICICI0000211","9%");
const kotakBanks=new banks("Kotak Bank","Rajaram Puri",3245674355,"KKBK0000141","8%");
const hdfcBanks=new banks("HDFC Bank","Shivaji Peth",8764674356,"HDFC0000141","8.5%");
const panjabBanks=new banks("Panjab Bank","Mangalvar Peth",8764674355,"PANJ0000141","8.5%");


const mapOfBank = new Map();
mapOfBank.set(3245674356,axisBank);
mapOfBank.set(986674356,sbiBank);
mapOfBank.set(853484356,iciciBank);
mapOfBank.set(3245674355,kotakBank);
mapOfBank.set(8764674356,hdfcBank);
mapOfBank.set(8764674355,panjabBank);


const keyOfMapBank = mapOfBank.keys();
console.log(keyOfMapBank);
for (const keys of keyOfMapBank) {
    const bank = mapOfBank.get(keys);
    console.log(bank.bank_Name,bank.account_number,bank.interest_rate);
    
}