class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }
}

class Shape extends Array {}

class Rectangle extends Adapter{
    constructor(lines) {
        lines.forEach(this.push(line));
    }
}


class LineToPointAdapter {

    constructor(line) {
        let point1 = line.point1;
        let point2 = line.point2;
        if(point1.x - point2.x === 0) {
            for(let i = point1.y; i <= point2.y; i++) {
                this.push(new Point(point1.x, i));
            }
        } else {
            for(let i = point1.y; i <= point2.y; i++) {
                this.push(new Point(i, point1.y));
            }
        }
    }


}