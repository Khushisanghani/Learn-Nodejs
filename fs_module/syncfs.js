const fs = require("fs");
const path = require("path");
const fileName = "test.txt";
const filePath = path.join(__dirname,fileName)
const WriteFile = fs.writeFileSync(
    filePath,
    "This is  fs module...",
    "utf-8"
)
console.log(WriteFile);
// read file
const readFile = fs.readFileSync(filePath,"utf-8");
// console.log(readFile.toString());
console.log(readFile);

