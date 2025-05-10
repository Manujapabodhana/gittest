const arr1=[1,2,3,4,5];

//let a = arr1[0];
//let b = arr1[1];

//console.log(a,b);

const[first,second,...rest_arguments] = arr1;

console.log(first);
console.log(second);
console.log(rest_arguments);