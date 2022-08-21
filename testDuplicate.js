/*
This file loops through the names in names.txt and prints
duplicates
*/

const fs = require("fs");

const hasDuplicates = (arr) => arr.length !== new Set(arr).size;

const findDuplicates = (list) => {
  list.sort(); // alters original array
  let ans = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i + 1]) {
      if (ans[ans.length - 1] !== list[i]) {
        ans.push(list[i]);
      }
    }
  }
  return ans;
};

const contentString = fs.readFileSync("./names.txt", { encoding: "utf-8" });

const contentArray = contentString.toLowerCase().split("\r\n");

let hasDuplicate = hasDuplicates(contentArray);
let hasDuplicateArray = findDuplicates(contentArray);
console.log(hasDuplicateArray);

console.log(hasDuplicate ? "Duplicates exist" : "No duplicate found");
