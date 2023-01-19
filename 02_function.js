

function swapValues(value1,value2){
    console.log("Before Swap", "=",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap","=" ,value1,value2);
}
swapValues(1000,2000);
swapValues("Virat","Anushka");
