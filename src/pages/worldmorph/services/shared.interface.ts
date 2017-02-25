import { PointService } from './point.service'

//Color Class
export interface ColorInterface{

    //Color string representation: e.g. 'rgba(255,165,0,1)'
    toString() : string;

    //Color copying
    copy() : ColorInterface;

    //Color comparison
    equal(otherColor): boolean;

    //Color conversion (from rgb to hsv)
    toHsv(): number[];

    //Color conversion (from hsv to rgb)
    toRgb(h:number, 
          s:number,
          v:number):ColorInterface;

    //Color mixing
    mix(proportion:number, 
        otherColor:ColorInterface): ColorInterface;
    
    //Color darker based on rgb, ignore alpha
    darker(percent:number):ColorInterface;

    //Color lighter based on rgb, ignore alpha
    lighter(percent:number):ColorInterface;

    //Color darker based on hsv, ignore alpha
    hsvDarker():ColorInterface;
}

export interface ColorConstructor {
    new (r:number,
         g:number,
         b:number,
         a:number): ColorInterface;
}


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

//Node Class
export interface NodeInterface{
}

export interface NodeConstructor {
    new (parent:NodeInterface, children:NodeInterface[]): NodeInterface;
}

//Morph Class
export interface MorphInterface{
}

export interface MorphConstructor {
    new (): MorphInterface;
}

//BlinkerMorph Class
export interface BlinkerMorphInterface{
}

export interface BlinkerMorphConstructor {
    new (): BlinkerMorphInterface;
}

//CursorMorph Class
export interface CursorMorphInterface{
}

export interface CursorMorphConstructor {
    new (): CursorMorphInterface;
}

//BouncerMorph Class
export interface BouncerMorphInterface{
}

export interface BouncerMorphConstructor {
    new (): BouncerMorphInterface;
}

//BoxMorph Class
export interface BoxMorphInterface{
}

export interface BoxMorphConstructor {
    new (): BoxMorphInterface;
}

//InspectorMorph Class
export interface InspectorMorphInterface{
}

export interface InspectorMorphConstructor {
    new (): InspectorMorphInterface;
}

//MenuMorph Class
export interface MenuMorphInterface{
}

export interface MenuMorphConstructor {
    new (): MenuMorphInterface;
}

//MouseSensorMorph Class
export interface MouseSensorMorphInterface{
}

export interface MouseSensorMorphConstructor {
    new (): MouseSensorMorphInterface;
}

//SpeechBubbleMorph Class
export interface SpeechBubbleMorphInterface{
}

export interface SpeechBubbleMorphConstructor {
    new (): SpeechBubbleMorphInterface;
}

//CircleBoxMorph Class
export interface CircleBoxMorphInterface{
}

export interface CircleBoxMorphConstructor {
    new (): CircleBoxMorphInterface;
}

//SliderButtonMorph Class
export interface SliderButtonMorphInterface{
}

export interface SliderButtonMorphConstructor {
    new (): SliderButtonMorphInterface;
}

//SliderMorph Class
export interface SliderMorphInterface{
}

export interface SliderMorphConstructor {
    new (): SliderMorphInterface;
}

//ColorPaletteMorph Class
export interface ColorPaletteMorphInterface{
}

export interface ColorPaletteMorphConstructor {
    new (): ColorPaletteMorphInterface;
}

//GrayPaletteMorph Class
export interface GrayPaletteMorphInterface{
}

export interface GrayPaletteMorphConstructor {
    new (): GrayPaletteMorphInterface;
}

//ColorPickerMorph Class
export interface ColorPickerMorphInterface{
}

export interface ColorPickerMorphConstructor {
    new (): ColorPickerMorphInterface;
}

//FrameMorph Class
export interface FrameMorphInterface{
}

export interface FrameMorphConstructor {
    new (): FrameMorphInterface;
}

//ScrollFrameMorph Class
export interface ScrollFrameMorphInterface{
}

export interface ScrollFrameMorphConstructor {
    new (): ScrollFrameMorphInterface;
}

//ListMorph Class
export interface ListMorphInterface{
}

export interface ListMorphConstructor {
    new (): ListMorphInterface;
}

//StringFieldMorph Class
export interface StringFieldMorphInterface{
}

export interface StringFieldMorphConstructor {
    new (): StringFieldMorphInterface;
}

//WorldMorph Class
export interface WorldMorphInterface{
}

export interface WorldMorphConstructor {
    new (): WorldMorphInterface;
}

//HandleMorph Class
export interface HandleMorphInterface{
}

export interface HandleMorphConstructor {
    new (): HandleMorphInterface;
}

//HandMorph Class
export interface HandMorphInterface{
}

export interface HandMorphConstructor {
    new (): HandMorphInterface;
}

//PenMorph Class
export interface PenMorphInterface{
}

export interface PenMorphConstructor {
    new (): PenMorphInterface;
}

//ShadowMorph Class
export interface ShadowMorphInterface{
}

export interface ShadowMorphConstructor {
    new (): ShadowMorphInterface;
}

//StringMorph Class
export interface StringMorphInterface{
}

export interface StringMorphConstructor {
    new (): StringMorphInterface;
}

//TextMorph Class
export interface TextMorphInterface{
}

export interface TextMorphConstructor {
    new (): TextMorphInterface;
}

//TriggerMorph Class
export interface TriggerMorphInterface{
}

export interface TriggerMorphConstructor {
    new (): TriggerMorphInterface;
}

//MenuItemMorph Class
export interface MenuItemMorphInterface{
}

export interface MenuItemMorphConstructor {
    new (): MenuItemMorphInterface;
}

//Point Class
export interface PointInterface{
}

export interface PointConstructor {
    new (): PointInterface;
}

//Rectangle Class

export interface RectangleInterface{
  //public intance member and public intance methods of Rectangle Class
}

export interface RectangleConstructor {
    //constructor of Rectangle Class

    new (pointService:PointService,
         left:number,
         top:number,
         right:number,
         bottom:number): RectangleInterface;
}

export interface RectangleServiceInterface{

    //public methods of RectangleService
    create(left:number,
         top:number,
         right:number,
         bottom:number): RectangleInterface;
    
    get();

    update();

    delete();
}
