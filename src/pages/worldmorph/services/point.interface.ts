
//Point Class

export interface PointInterface{
    //Point string representation: e.g. '(12,68)'
    toString() : string;

    //Point copying
    copy() : PointInterface;

    //Point comparison(==)
    equal(otherPoint): boolean;

    //Point comparison(>)
    gt(otherPoint): boolean;
    
    //Point comparison(<)
    lt(otherPoint): boolean;    

    //Point comparison(>=)
    ge(otherPoint): boolean;

    //Point comparison(<=)
    le(otherPoint): boolean;

    //Point comparison(max)
    max(otherPoint): boolean;

    //Point comparison(min)
    min(otherPoint): boolean;

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

      
}

export interface PointConstructor {
    new (x:number, y:number): PointInterface;
}

export interface PointServiceInterface{

    //public methods of PointService
    create(x:number, y:number): PointInterface;
}