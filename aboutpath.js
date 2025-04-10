import path from  'path'    
//console.log(path)

let mypath = "PS C:\\Users\\DELL\\Desktop\\REVISEBK\\backendindex3\\hello.txt "
console.log(path.basename(mypath)) //hello.txt
console.log(path.dirname(mypath)) //PS C:\Users\DELL\Desktop\REVISEBK\backendindex3
console.log(path.extname(mypath)) //.txt
console.log(path.isAbsolute(mypath)) //true
console.log(path.join("hello.txt","shivam.txt")) //hello.txt\shivam.txt
console.log(path.resolve("hello.txt","shivam.txt")) //C:\Users\DELL\Desktop\REVISEBK\backendindex3\hello.txt\shivam.txt


