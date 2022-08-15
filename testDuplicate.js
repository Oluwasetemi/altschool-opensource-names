/*
This file loops through the names in names.txt and prints
duplicates 
*/

const fs = require("fs");

const contentString = fs.readFileSync("./names.txt", { encoding: "utf-8" });

const contentArray = contentString.split("\r\n");

const contentArrayLength = contentArray.length;

let hasDuplicate = false;

for (let i = 0; i < contentArrayLength; i++) {
  if (contentArray.indexOf(contentArray[i], i + 1) !== -1 && contentArray[i].trim() !== "") {
    console.log(contentArray[i]);
    hasDuplicate = true;
  }
}

console.log(hasDuplicate ? "Duplicates exist" : "No duplicate found");
