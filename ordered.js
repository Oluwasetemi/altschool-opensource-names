const fs = require("fs");
const content = fs.readFileSync("./names.txt", { encoding: "utf-8" });
const alphabeticalOrder = content.split("\r\n").sort();
console.log(alphabeticalOrder);


