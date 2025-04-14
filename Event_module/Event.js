// impoet EventEmitter class
const EventEmitter = require("events");
// create insttance 
const emitter = new EventEmitter();
// addeventlisner
emitter.on("greet" , () => {
    console.log("Hello World");
})
// trigger
emitter.emit("greet");
// pass argument
emitter.on("greet",(username,prof) => {
    console.log(`Hello ${username},${prof}`);
})
emitter.emit("greet","Learning Nodejs","Full stack Developer")
// object
emitter.on("greet",(args)=>{
    console.log(`Hello My name is ${args.name}.I am Learning ${args.lang}.`);
})
emitter.emit("greet",{name : "Khushi" , lang : "Nodejs"})