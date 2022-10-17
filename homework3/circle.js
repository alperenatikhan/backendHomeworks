const pi = 3.14

const circleArea=(radius)=>{
const area = pi * radius * radius
console.log('circle area is: ',area)
}



const circleCircumference = (radius)=> {
const circumference= 2*pi*radius
console.log('circle circumference is: ',circumference)
}

module.exports =({circleArea,circleCircumference})
