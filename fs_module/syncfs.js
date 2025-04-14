const fs = require("fs");
const path = require("path");
const fileName = "test.txt";
const filePath = path.join(__dirname,fileName)
// syntax : const filename = fs.writeFileSync(path,data,option)
const WriteFile = fs.writeFileSync(
    filePath,
    "This is  fs module synchronous way CRUD...",
    "utf-8"
)
console.log(WriteFile);
// read file
const readFile = fs.readFileSync(filePath,"utf-8");
// console.log(readFile.toString());
console.log(readFile);
// append file 
const appendFile = fs.appendFileSync(
    filePath,
    "\nThis is  fs module...",
    "utf-8"
)
console.log(appendFile);
// rename file
const updateFile = "updatetest.txt";
const newFile = path.join(__dirname,updateFile);
const renameFile = fs.renameSync(filePath,newFile);
console.log(renameFile);

// delete file 
// const deleteFile = fs.unlinkSync(filePath);
// console.log(deleteFile);

