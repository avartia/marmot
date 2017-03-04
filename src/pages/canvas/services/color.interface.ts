// Color Class
import {Color} from './color'

export interface ColorInterface{
    // public member variables
    r:number;

    g:number;

    b:number;

    a:number;
    // public methods

    // Color string representation: e.g. 'rgba(255,165,0,1)'
    toString() : string;

    // Color copying
    copy() : Color;

    // Color comparison
    equal(otherColor: Color): boolean;

    // Color conversion (from rgb to hsv)
    toHsv(): number[];

    // Color conversion (from hsv to rgb)
    toRgb(h:number, 
          s:number,
          v:number):Color;

    // Color mixing
    mix(proportion:number, 
        otherColor:Color): Color;
      
    // Color darker based on rgb, ignore alpha
    darker(percent:number):Color;

    // Color lighter based on rgb, ignore alpha
    lighter(percent:number):Color;

    // Color darker based on hsv, ignore alpha
    hsvDarker():Color;
}

export interface ColorConstructor {
    // constructor of Color Class

    new (r:number,
         g:number,
         b:number,
         a:number): Color;
}

export interface ColorServiceInterface{

    // public methods of ColorService
    create(r:number,
           g:number,
           b:number,
           a?:number): Color;
}