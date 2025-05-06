this.name ='amoda'

const obj1 = {
    name:'john',
    normalfuntion: function(){
        console.log(this.name);
    },
    arrowfunction: ()=>{
        console.log(this.name);
    }
}

console.log(this.name);

obj1.normalfuntion();
obj1.arrowfunction();