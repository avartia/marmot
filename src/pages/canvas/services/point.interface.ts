import { Point } from "./point";

//Point Class


export interface PointInterface {
    
    x:number;

    y:number;
    
    //Point string representation: e.g. '(12,68)'
    toString() : string;

    //Point copying
    copy() : Point;

    //Point comparison(==)
    equal(otherPoint :Point): boolean;

    //Point comparison(>)
    gt(otherPoint :Point): boolean;
    
    //Point comparison(<)
    lt(otherPoint :Point): boolean;    

    //Point comparison(>=)
    ge(otherPoint :Point): boolean;

    //Point comparison(<=)
    le(otherPoint :Point): boolean;

    //Point comparison(max)
    max(otherPoint :Point): Point;

    //Point comparison(min)
    min(otherPoint :Point): Point;

    //Point conversion(round)
    round(): Point;

    //Point conversion(absolute)
    abs(): Point;  

    //Point conversion(negative)
    neg(): Point;

    //Point conversion(mirror)
    mirror(): Point;   
    
    //Point conversion(floor)
    floor(): Point;

    //Point conversion(ceil)
    ceil(): Point;    

    //Point arithmetic(add)  
    add(other:Point | number): Point;  

    //Point arithmetic(subtract)  
    subtract(other:Point | number): Point;     

    //Point arithmetic(multiplyBy)  
    multiplyBy(other:Point | number): Point;

    //Point arithmetic(divideBy)  
    divideBy(other:Point | number): Point;     

    //Point arithmetic(floor the result of DivideBy)  
    floorDivideBy(other:Point | number): Point;
    
    //Point coordinates(sqrt(x^2 + y^2),(x, y) is the coordination)  
    sqrtLength(): number;   
    
    //Point coordinates(answer the angle in degrees.Right is 0, down is 90)  
    degrees(): number;       

    //Point coordinates(answer the angle in radians.Right is 0, down is 90)  
    theta(): number;    

    //Point functions(cross product, e.g. (x1*y2,x2*y1))
    crossProduct(otherPoint:Point): Point;
    
    //Point functions(sqrt((x1-x2)^2 + (y1-y2)^2))  
    distanceBetween(otherPoint:Point): number;       

    //Point functions(direction must be 'vertical' or 'horizontal') 
    flip(direction:string, center:Point): Point;    

    //Point functions(move at an angle in a distance.up is 0, right is 90)  
    moveAtAngleIndistance(distance:number, angle:number): Point;    

    //Point functions(scale to larger or smaller)
    scaleBy(scalePoint:Point): Point;
    
    //Point functions(add offset)  
    translateBy(offsetPoint:Point): Point;       

    //Point functions(anticlockwise rotation angle) 
    rotateBy(angle:number, centerPoint:Point): Point;    
    
}
export interface PointServiceInterface{

    //public methods of PointService
    create(x:number, y:number): Point;
}