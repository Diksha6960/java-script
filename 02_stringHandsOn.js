var s="   Hey you are doing good,keep it up       ";
console.log(s);
  
console.log("Length of string ","=",s.length);
var de="-------------------------------------";
 console.log(de);
console.log("Removing Extra Spaces","=",s.trim());
var de="-------------------------------------";
 console.log(de);

console.log("Lenght After Removing Extra Spaces","=",s.trim().length);
var de="-------------------------------------";
 console.log(de);

console.log("No Of Spaces Removed","=",s.length- s.trim().length);
var de="-------------------------------------";
 console.log(de);


console.log("First and Last Charector","=",s.charAt(3),s.charAt(35));
var de="-------------------------------------";
 console.log(de);

console.log("Index of word good","=",s.search("good"));
var de="-------------------------------------";
 console.log(de);

console.log("Substring using substring","=",s.substring(25,36));
var de="-------------------------------------";
 console.log(de);

console.log("Substring using slice","=",s.slice(25,35));
var de="-------------------------------------";
 console.log(de);

console.log("Is string stars with word Hey","=",s.includes("Hey"));
var de="-------------------------------------";
 console.log(de);

console.log("Is string ends with word up","=",s.includes("up"));

