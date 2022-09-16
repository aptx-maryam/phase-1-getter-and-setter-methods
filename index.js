// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get area(){
        return Math.PI * Math.pow(this.radius, 2);
    }
    get circumference(){
        return this.diameter * Math.PI
    }
    get diameter(){
        return this.radius * 2
    }

    set area(area){
        this.radius = Math.sqrt( area / Math.PI )
    }

    set circumference(circumference){
        this.radius = circumference / ( Math.PI * 2 )
    }

    set diameter(diameter){
        this.radius = diameter/2
    }
}

const circle = new Circle(6)
console.log(circle.radius);
console.log(circle.area);
console.log(circle.circumference);

circle.diameter = 36;
console.log(circle.radius);
console.log(circle.area);
console.log(circle.circumference);

circle.circumference = 100;
console.log(circle.radius);
console.log(circle.area);
console.log(circle.circumference);

circle.area = 200;
console.log(circle.radius);
console.log(circle.area);
console.log(circle.circumference);
