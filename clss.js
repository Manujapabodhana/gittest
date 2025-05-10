class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height; // Fixed: changed _height to height
        this.color = _color;
        console.log("new rectangle created");
    }

    getarea() {
        return this.width * this.height; // Now this.height is defined
    }
}

const newRectangle = new Rectangle(2, 5, 'red');
console.log(newRectangle.getarea()); // Output: 10
