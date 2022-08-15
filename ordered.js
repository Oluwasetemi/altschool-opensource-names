const fs = require("fs");
const content = fs.readFileSync("./names.txt", { encoding: "utf-8" });
const alphabeticalOrder = content.split("\n").sort();
fs.writeFileSync('sorted.txt', alphabeticalOrder.join('\n'));
