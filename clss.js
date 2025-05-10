class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height; 
        this.color = _color;
        console.log("new rectangle created");
    }

    getarea() {
        return this.width * this.height; 
    }
}

const newRectangle = new Rectangle(2, 5, 'red');
console.log(newRectangle.getarea()); 
