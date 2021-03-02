// case 1

// let a='geeksforgeek'
// var len = a.length
// var x
// var part_a=''
// var part_b=''

// // ceil or floor value :)
// for(x=0;x<Math.ceil(len/2);x++){
//     part_a+=a[x]
// }
// for(x=Math.ceil(len/2);x<len;x++){
//     part_b+=a[x]
// }

// a=part_a.toUpperCase()+part_b
// console.log(a);


// case 2

let a='rahula'
var i = a.length
b=''

for(j=0;j<Math.floor(i/2);j++){
    b+=a[j].toUpperCase()
}

for(j=Math.floor(i/2);j<i;j++){
    b+=a[j]
}

console.log(b);