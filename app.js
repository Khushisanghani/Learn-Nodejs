const {add , sub , mul , div ,PI} = require("./math");
console.log("Addition : ",add(10,5)); //common js
console.log("Subtraction :",sub(10,5));
console.log("Multiplication :",mul(10,5));
console.log("Division :",div(10,5));
console.log(PI);
globalThis.console.log("Learn Node JS");
globalThis.console.log(module);


const math = require("./math");
console.log("Addition : ",math.add(10,5)); //common js
console.log("Subtraction :",math.sub(10,5));
console.log("Multiplication :",math.mul(10,5));
console.log("Division :",math.div(10,5));