//commonjs and ecmaScript Moduls
// import {a,b,c} from './mymodule.js'
// import {default as obj} from './mymodule.js'
// console.log(a,b,c)
// console.log(obj)
const a = require('./mymodule.js')
console.log(a)

// //const { createServer } = require('node:http');
// import { createServer } from 'node:http';
// //import { createServer } from 'http'; // for browser
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>i am shivam</h1>')
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
