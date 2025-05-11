class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width; // Since it's a square, height equals width
    }

    getArea() {
        return this.height * this.width; // Method
    }

    get area() {
        return this.width * this.height; // Getter
    }
}

const newSquare = new Square(10);
console.log(newSquare.getArea());   // Outputs: 100
console.log(newSquare.area);        // Also outputs: 100
