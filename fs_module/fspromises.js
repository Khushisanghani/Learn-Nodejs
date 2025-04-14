const fs = require("fs");
// const fs = require("fs/promises")
const path = require("path");
const fileName = "fspromises.txt";
const filePath = path.join(__dirname,fileName);
const file = __dirname;
fs.promises
  .readdir(file)
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
// write file
fs.promises
  .writeFile(filePath,"This is fs Promises module","utf-8")
  .then(console.log("File create sucessfully"))
  .catch((err)=>console.error(err))
// read file
fs.promises
  .readFile(filePath,"utf-8")
  .then((data) => console.log(data))  
  .catch((err) => console.error(err))
// append file
fs.promises
  .appendFile(filePath,"\nThis is crud operation","utf-8")
  .then(console.log("Append file"))
  .catch((err) => console.error(err))
// delete file
fs.promises
  .unlink(filePath)
  .then(console.log("Delete file"))
  .catch((err) => console.error(err))