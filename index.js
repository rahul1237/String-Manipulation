// case 1

let string1 = 'geeksforgeeks';
var string1_len = string1.length;
var part_a = '';
var part_b = '';

for(var i=0 ; i<Math.ceil(string1_len/2) ; i++){
    part_a+=string1[i];
}

for(var i=Math.ceil(string1_len/2) ; i<string1_len ; i++){
    part_b+=string1[i];
}

var new_part_a = part_a.toUpperCase();

var changed_string = new_part_a + part_b;

console.log(changed_string);


// case 2

let string1 = 'geeksforgeeks';
var string1_len = string1.length;
var changed_string = '';

for(var i=0 ; i<Math.ceil(string1_len/2) ; i++){
    changed_string+=string1[i].toUpperCase();
}

for(var i=Math.ceil(string1_len/2) ; i<string1_len ; i++){
    changed_string+=string1[i];
}

console.log(changed_string);

// Case 3

let string1 = 'geeksforgeeks';
var string1_len = string1.length;
var half_string = Math.ceil(string1_len/2);
var part_a;
var part_b;

part_a = string1.slice(0,half_string);
var new_part_a = part_a.toUpperCase();
part_b = string1.slice(half_string,string1_len);

var changed_string = new_part_a+part_b;

console.log(changed_string);