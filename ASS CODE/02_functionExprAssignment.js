
var d="Function Expression Assignment ";
console.log(d); 
var s="===========================================";
console.log(s);
var q="-----1-----"
console.log(q)

var square=function square(num){
var squareResult = num * num;
console.log("Square of ",num, "=", num*num);
}
square(5);
square(6);
square(25);
square(100);
var s="===========================================";
console.log(s);

var q="-----2-----"
console.log(q)
var a="calculating Area";
console.log(a);
var area=function area(num1,num2){
    var areaResult=num1*num2;
    console.log("Area of Rectagular Plot","=",areaResult,"square feet")
}
area(499,917);

var s="===========================================";
console.log(s);

 

var q="-----3-----"
console.log(q)

var e="Swap Values using Function Expression"
console.log(e)

function swapValues(value1,value2){
    console.log("Before Swap","=",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap","=", value1,value2);
}
swapValues(1000,2000);
swapValues("Virat","Anushka");

var s="===========================================";
console.log(s);


var q="-----4-----"
console.log(q)

var s="JavaScript the most popular lanluage"

console.log("Given string is",s);
console.log("Total charectors available in string","=",s.length);
console.log("Charector at index 6","=",s.charAt(6));
console.log("Charector at index 11","=",s.charAt(11));
var lengthTotal=s.length;

console.log("Charector at last index","=",s.charAt(lengthTotal-1));
console.log("Charector at First index ","=",s.charAt(0));
console.log("length of String","=",s.length);
console.log("Square of String Length","=")
square(36)
var s="===========================================";
console.log(s);


