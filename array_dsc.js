const arr1=[1,2,3,4,5];

//let a = arr1[0];
//let b = arr1[1];

//console.log(a,b);

const[first,second,...rest_arguments] = arr1;

console.log(first);
console.log(second);
console.log(rest_arguments);

const obj1={one:10,two:20,three:30,four:40,five:50};

const{one,two,...resr_obj}=obj1;

console.log(one);
console.log(two);
console.log(resr_obj);