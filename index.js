"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "nabeel ahmad rao renala";
// step 1. show in lowercase
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// step 2. show in uppercase
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
// step 3. show in titlecase 
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
