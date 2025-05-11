class squra{

    constructor(_width){

        this.width = _width;
        this.height = _width;
    }

    getArea(){
        return this.height*this.width;
    }
}

const newSquare = new squra(10);
console.log(newSquare.getArea());