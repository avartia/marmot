import { PointInterface } from './point.interface'
import { radians } from './shared.function'

export class Point implements PointInterface{

    constructor(public x:number = 0,
                public y:number = 0) { 
    }

    //Point string representation: e.g. '(12,68)'
    toString() : string{
        return;
    }

    //Point copying
    copy() : Point{
        return new Point(this.x, this.y);
    }

    //Point comparison(==)
    equal(otherPoint :Point): boolean{
        if(!otherPoint){
            return false;
        }
        else if(this.x === otherPoint.x && this.y === otherPoint.y){
            return true;
        }
        else{
            return false;
        }
    }

    //Point comparison(>)
    gt(otherPoint :Point): boolean{
        if(!otherPoint){
            return false;
        }
        else if(this.x > otherPoint.x && this.y > otherPoint.y){
            return true;
        }
        else{
            return false;
        }
    }
    
    //Point comparison(<)
    lt(otherPoint :Point): boolean{
        if(!otherPoint){
            return false;
        }
        else if(this.x < otherPoint.x && this.y < otherPoint.y){
            return true;
        }
        else{
            return false;
        }
    }  

    //Point comparison(>=)
    ge(otherPoint :Point): boolean{
        if(!otherPoint){
            return false;
        }
        else if(this.x >= otherPoint.x && this.y >= otherPoint.y){
            return true;
        }
        else{
            return false;
        }
    }

    //Point comparison(<=)
    le(otherPoint :Point): boolean{
        if(!otherPoint){
            return false;
        }
        else if(this.x <= otherPoint.x && this.y <= otherPoint.y){
            return true;
        }
        else{
            return false;
        }
    }

    //Point comparison(max)
    max(otherPoint :Point): Point{
        if(!otherPoint){
            return this;
        }
        else{
            return new Point(Math.max(this.x, otherPoint.x), Math.max(this.y, otherPoint.y));
        }
    }

    //Point comparison(min)
    min(otherPoint :Point): Point{
        if(!otherPoint){
            return this;
        }
        else{
            return new Point(Math.min(this.x, otherPoint.x), Math.min(this.y, otherPoint.y));
        }
    }

    //Point conversion(round)
    round(): Point{
        return new Point(Math.round(this.x), Math.round(this.y));
    }

    //Point conversion(absolute)
    abs(): Point{
        return new Point(Math.abs(this.x), Math.abs(this.y));
    }

    //Point conversion(negative)
    neg(): Point{
        return new Point(-this.x, -this.y);
    }

    //Point conversion(mirror)
    mirror(): Point{
        return new Point(this.y, this.x);
    }   
    
    //Point conversion(floor)
    floor(): Point{
        return;
    }

    //Point conversion(ceil)
    ceil(): Point{
        return;
    }    

    //Point arithmetic(add)  
    add(other:Point | number = null): Point{
        if (other instanceof Point) {
            return new Point(this.x + other.x, this.y + other.y);
        } else if(isNaN(other) === false){
            return new Point(this.x + other, this.y + other);
        } else{
            return this;
        }
    }  

    //Point arithmetic(subtract)  
    subtract(other:Point | number = null): Point{
        if (other instanceof Point) {
            return new Point(this.x - other.x, this.y - other.y);
        } else if(isNaN(other) === false){
            return new Point(this.x - other, this.y - other);
        } else{
            return this;
        }
    }   

    //Point arithmetic(multiplyBy)  
    multiplyBy(other:Point | number): Point{
        return;
    }

    //Point arithmetic(divideBy)  
    divideBy(other:Point | number): Point{
        return;
    }    

    //Point arithmetic(floor the result of DivideBy)  
    floorDivideBy(other:Point | number = null): Point{
        if(other instanceof Point){
            return new Point(Math.floor(this.x / other.x),
                             Math.floor(this.y / other.y)); 
        }
        else if(isNaN(other) === false){
            if(other === 0){
                throw Error('Dividing by zero is wrong!');
            }else{
                return new Point(Math.floor(this.x / other),
                                 Math.floor(this.y / other));
            } 
        } else{
            return this;
        }
    }
    
    //Point coordinates(sqrt(x^2 + y^2),(x, y) is the coordination)  
    sqrtLength(): number{
        return;
    }   
    
    //Point coordinates(answer the angle in degrees.Right is 0, down is 90)  
    degrees(): number{
        return;
    }      

    //Point coordinates(answer the angle in radians.Right is 0, down is 90)  
    theta(): number{
        return;
    }    

    //Point functions(cross product, e.g. (x1*y2,x2*y1))
    crossProduct(otherPoint:Point): Point{
        return;
    }
    
    //Point functions(sqrt((x1-x2)^2 + (y1-y2)^2))  
    distanceBetween(otherPoint:Point): number{
        return;
    }      

    //Point functions(direction must be 'vertical' or 'horizontal') 
    flip(direction:string, center:Point): Point{
        return;
    }

    //Point functions(move at an angle in a distance.up is 0, right is 90)  
    moveAtAngleIndistance(distance:number, angle:number): Point{
        let degree = angle;
        let x:number;
        let y:number;
        while(degree > 360){
            degree -= 360;
        }
        while(degree < 0){
            degree += 360;
        }
        x = Math.sin(radians(degree + Math.PI / 2)) * distance;
        y = - Math.cos(radians(degree + Math.PI / 2)) * distance;
        return new Point(this.x + x, this.y + y);

    }    

    //Point functions(scale to larger or smaller)
    scaleBy(scalePoint:Point): Point{
        return;
    }
    
    //Point functions(add offset)  
    translateBy(offsetPoint:Point): Point{
        return;
    }       

    //Point functions(anticlockwise rotation angle) 
    rotateBy(angle:number, centerPoint:Point): Point{
        return;
    }   
  

}
