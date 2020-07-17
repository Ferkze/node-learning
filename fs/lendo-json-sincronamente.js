const fs = require('fs'); 
let rawdata = fs.readFileSync('student.json'); 
let student = JSON.parse(rawdata); 
console.log(student)
//rawdata.toJSON