const fs = require("fs");
const path = require("path");
const fileName = "Asycn.txt"
const filePath = path.join(__dirname,fileName);
// syntax : fs.filewrite(path,data,option,callback)
fs.writeFile(filePath,"This is fs module asynchronous","utf-8",(err) => {
    if(err){
        console.log(err);     
    }
    else{
        console.log("File has been saved");
    }
})
// read file
// data = txt file content
fs.readFile(filePath,"utf-8",(err,data) => {
    if(err){
        console.log(err);    
    }
    else{
        console.log(data);
    }
});
// append file
fs.appendFile(filePath,"\nThis is fs module asynchronous append","utf-8",(err) => {
    if(err){
        console.log(err);     
    }
    else{
        console.log("File has been saved");
    }
})
// delete file
// fs.unlink(filePath,(err) => {
//     if(err){
//         console.log(err);     
//     }
//     else{
//         console.log("File has been deleted");
// }
// })
