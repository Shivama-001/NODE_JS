import { read } from "fs"
import fs from "fs/promises"

//let a = await fs.readFile("hello.txt");
//console.log(a.toString())

let b = await fs.writeFile("shivama.html","<h1>hello my name is shivam kumar</h1>")
console.log(b)
let c = await fs.readFile("shivama.html")
console.log(c.toString()) 


