
console.log(`-----------------Interview Result-------------------------`);
console.log(`                              `);

var tcsSelection = function(_gradScore,_hscScore,_sscScore,_candidateName)
{
if (_gradScore>=70 || _hscScore>=80 || _sscScore>=90) {
    console.log(`Congratulation ${_candidateName} You Are eligible for TCS Interview`)
    
} else {
    console.log(`Hey ${_candidateName} unfortunately You Are not eligible for TCS Interview`)
    
}
}
tcsSelection(80,86,90,"Diksha");
console.log(`                              `);
tcsSelection(70,65,55,"Dhanshree");
console.log(`                              `);
tcsSelection(60,79,88,"Sakshi")
