// import {a,b} from './mymodule.js';
// import obj from './mymodule.js';
// console.log(obj)
// console.log(a,b)

const fs = require('fs');
console.log(fs);



//append method
fs.appendFile("heello.txt","hello my name is shivam kumar",(error,data)=>{
    console.log(error,data)
    console.log("file written")
})

//type--3
//fs.writeFilesync("hello2.txt","i am hello2")


//fs.writeFileSync('hello.r', 'Hello from Node.js');
// console.log("starting the file write process")


//type--4
// fs.writeFile("shivam3.txt","i am shivam kumar",(error,data)=>{
// console.log(error,data)
// console.log("file written")

// fs.readFile("shivam3.txt",(err,data)=>{
//     console.log(err,data.toString())
//      })

// })
// console.log("ending the file write process")

// const fs = require('fs');
// console.log(fs)

// // console.log("starting")
// // fs.writeFileSync('hello.text', 'Hello from Node.js');
// // console.log("ending")


// console.log("starting");

// fs.writeFile("shivam2.txt","hello my name is shivam kumar i am stident", ()=>{

//     console.log("done")


// fs.readFile("shivam2.txt",(err,data)=>{
//     console.log(err,data.toString())
//      })


// })

// console.log("ending")





// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>i am shivam kumatr </h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


