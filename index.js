var prompt = require('prompt')

let a=prompt('enter a string')
var len = a.length
var x
var part_a=''
var part_b=''
for(x=0;x<Math.floor(len/2);x++){
    part_a+=a[x]
}
for(x=Math.floor(len/2);x<len;x++){
    part_b+=a[x]
}

a=part_a.toUpperCase()+part_b
console.log(a);