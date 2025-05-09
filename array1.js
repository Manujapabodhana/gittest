function sum(a,b,c){
    console.log(a+b+c);
}

const arry=[1,2,3];
const obj={one:10,two:20,three:30};

sum(...arry);
sum(...Object.values(obj));