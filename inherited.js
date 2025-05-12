class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
        console.log("A person");
    }


    class programmer extends class person{

        constructor(_name,_age,_language){
            super(_name,_age);
            this.name = _name;
            this.age= _age;
            this._language;
        }

        code()[
            return `${this.name} is a ${this.age} old knws ${this.language};  `
        ]
    }
}

const john = new Person("john","18");
const meena = new programmer("meena","14","js");

programmer.code();