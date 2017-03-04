import {PointInterface} from './point.interface'

export class Point implements PointInterface{

    constructor(private x:number = 0,
                private y:number = 0) { 
    }

    //Point string representation: e.g. '(12,68)'
    toString() : string{
        return;
    }

    //Point copying
    copy() : Point{
        return;
    }

    //Point comparison(==)
    equal(otherPoint :Point): boolean{
        return;
    }

    //Point comparison(>)
    gt(otherPoint :Point): boolean{
        return;
    }
    
    //Point comparison(<)
    lt(otherPoint :Point): boolean{
        return;
    }  

    //Point comparison(>=)
    ge(otherPoint :Point): boolean{
        return;
    }

    //Point comparison(<=)
    le(otherPoint :Point): boolean{
        return;
    }

    //Point comparison(max)
    max(otherPoint :Point): boolean{
        return;
    }

    //Point comparison(min)
    min(otherPoint :Point): boolean{
        return;
    }

    //Point conversion(round)
    round(): Point{
        return;
    }

    //Point conversion(absolute)
    abs(): Point{
        return;
    }

    //Point conversion(negative)
    neg(): Point{
        return;
    }

    //Point conversion(mirror)
    mirror(): Point{
        return;
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
    add(other:Point | number): Point{
        return;
    }  

    //Point arithmetic(subtract)  
    subtract(other:Point | number): Point{
        return;
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
    floorDivideBy(other:Point | number): Point{
        return;
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
        return;
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
