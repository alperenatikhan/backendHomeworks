/*

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.

*/

const fs = require ('fs')

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err,data)=>{

if(err){
console,log('error')
}else{
console.log('file created')
}


})

fs.readFile('employees.json', 'utf8', (err,data)=>{

if(err){
console,log('error')
}else{
console.log(data)
}


})


fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 5000}', 'utf8', (err,data)=>{

if(err){
console,log('error')
}else{
console.log('file created')
}


})

fs.readFile('employees.json', 'utf8', (err,data)=>{

if(err){
console,log('error')
}else{
console.log('updated version:' , data)
}


})
