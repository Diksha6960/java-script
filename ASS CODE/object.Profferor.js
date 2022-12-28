console.log(`1) All the properties of professor`);
const professor ={
 Name : "Sharvi",
 Gender : "female",
 City : "Pune",
 Age : "32",
 Experiance :" 5 years",
 Published_Articles : "20",
}
console.log(professor);
console.log(`------------------------------------------------------------------------------------------`);
console.log(`2)Including Neasted objects`);
const degrees ={
    Engineering : "csc",
    PHD :"Adv Computing",
    Masters : "Development"
}
console.log(degrees);
console.log(`------------------------------------------------------------------------------------------`);
console.log(`3)Another Nested Object`);
const certificates ={
   first: "Hacker Rank Participation",
   second:"Certificate in IFE Course",
   third:"Certificate inAdv Programming"
}
console.log(certificates);
console.log(`------------------------------------------------------------------------------------------`);
console.log(`4)Add Function`);
const professor1 =  {
    degrees :{
            Engineering : "csc",
            PHD :"Adv Computing",
            Masters : "Development",
    add : function() {
        return this.Engineering + this.PHD + this.Masters 
    }       
    }
  }
  const totalDegrees = professor1.degrees.add();
  console.log(`All degrees of professor ${totalDegrees}`);
  console.log(`------------------------------------------------------------------------------------------`);
  console.log(`5)Adding New Properties`);

professor.specilisedSubject = "Web Development"
console.log(professor);

degrees.postGraduation ="Web Development"
console.log(degrees);
console.log(`------------------------------------------------------------------------------------------`);
  console.log(`6)Modifying Current Properties`)
  professor.Age = "35"
  professor.City = "Benglor"
  console.log(professor);
  degrees.Engineering ="Information Technology"
  console.log(degrees);

  console.log(`------------------------------------------------------------------------------------------`);
  console.log(`7)Delete any one certificate`)
  delete certificates.second
  console.log(certificates);

  console.log(`------------------------------------------------------------------------------------------`);
  console.log(`8 ,9)Add new nested certificate and log on console`)
  certificates.forth = "Best web development participation"
  console.log(certificates);

  

