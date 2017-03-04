// Color Class

export interface ColorInterface{
    // public member variables
      
    // public methods

    // Color string representation: e.g. 'rgba(255,165,0,1)'
    toString() : string;

    // Color copying
    copy() : ColorInterface;

    // Color comparison
    equal(otherColor: ColorInterface): boolean;

    // Color conversion (from rgb to hsv)
    toHsv(): number[];

    // Color conversion (from hsv to rgb)
    toRgb(h:number, 
          s:number,
          v:number):ColorInterface;

    // Color mixing
    mix(proportion:number, 
        otherColor:ColorInterface): ColorInterface;
      
    // Color darker based on rgb, ignore alpha
    darker(percent:number):ColorInterface;

    // Color lighter based on rgb, ignore alpha
    lighter(percent:number):ColorInterface;

    // Color darker based on hsv, ignore alpha
    hsvDarker():ColorInterface;
}

export interface ColorConstructor {
    // constructor of Color Class

    new (r:number,
         g:number,
         b:number,
         a:number): ColorInterface;
}

export interface ColorServiceInterface{

    // public methods of ColorService
    create(r:number,
           g:number,
           b:number,
           a?:number): ColorInterface;
}