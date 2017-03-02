import {PointInterface} from './point.interface'

export class Point implements PointInterface{

  constructor( private x:number = 0,
               private y:number = 0) { 
  }

  //Point string representation: e.g. '(12,68)'
  toString() : string;

  //Point copying
  copy() : PointInterface;

    //Point comparison(==)
    equal(otherPoint :PointInterface): boolean;

    //Point comparison(>)
    gt(otherPoint :PointInterface): boolean;
    
    //Point comparison(<)
    lt(otherPoint :PointInterface): boolean;    

    //Point comparison(>=)
    ge(otherPoint :PointInterface): boolean;

    //Point comparison(<=)
    le(otherPoint :PointInterface): boolean;

    //Point comparison(max)
    max(otherPoint :PointInterface): boolean;

    //Point comparison(min)
    min(otherPoint :PointInterface): boolean;

    //Point conversion(round)
    round(): PointInterface;

    //Point conversion(absolute)
    abs(): PointInterface;  

    //Point conversion(negative)
    neg(): PointInterface;

    //Point conversion(mirror)
    mirror(): PointInterface;   
    
    //Point conversion(floor)
    floor(): PointInterface;

    //Point conversion(ceil)
    ceil(): PointInterface;    

    //Point arithmetic(add)  
    add(other:PointInterface | number): PointInterface;  

    //Point arithmetic(subtract)  
    subtract(other:PointInterface | number): PointInterface;     

    //Point arithmetic(multiplyBy)  
    multiplyBy(other:PointInterface | number): PointInterface;

    //Point arithmetic(divideBy)  
    divideBy(other:PointInterface | number): PointInterface;     

    //Point arithmetic(floor the result of DivideBy)  
    floorDivideBy(other:PointInterface | number): PointInterface;
    
    //Point coordinates(sqrt(x^2 + y^2),(x, y) is the coordination)  
    sqrtLength(): number;   
    
    //Point coordinates(answer the angle in degrees.Right is 0, down is 90)  
    degrees(): number;       

    //Point coordinates(answer the angle in radians.Right is 0, down is 90)  
    theta(): number;    

    //Point functions(cross product, e.g. (x1*y2,x2*y1))
    crossProduct(otherPoint:PointInterface): PointInterface;
    
    //Point functions(sqrt((x1-x2)^2 + (y1-y2)^2))  
    distanceBetween(otherPoint:PointInterface): number;       

    //Point functions(direction must be 'vertical' or 'horizontal') 
    flip(direction:string, center:PointInterface): PointInterface;    

    //Point functions(move at an angle in a distance.up is 0, right is 90)  
    moveAtAngleIndistance(distance:number, angle:number): PointInterface;    

    //Point functions(scale to larger or smaller)
    scaleBy(scalePoint:PointInterface): PointInterface;
    
    //Point functions(add offset)  
    translateBy(offsetPoint:PointInterface): PointInterface;       

    //Point functions(anticlockwise rotation angle) 
    rotateBy(angle:number, centerPoint:PointInterface): PointInterface;    
  

}
