import {ColorInterface} from './color.interface'

export class Color implements ColorInterface{

    constructor(private r:number,
                private g:number,
                private b:number,
                private a:number = 1) { 
      
    }

    //Color string representation: e.g. 'rgba(255,165,0,1)'
    toString() : string{
      return 'rgba(' + 
            Math.round(this.r) + ',' + 
            Math.round(this.g) + ',' + 
            Math.round(this.b) + ',' + 
            this.a + ')';
    }

    //Color copying
    copy() : Color{
      return new Color(
        this.r,
        this.g,
        this.b,
        this.a
      )
    }

    //Color comparison
    equal(otherColor: Color): boolean{
        return;
    }

    // Color conversion (from rgb to hsv)
    toHsv(): number[]{
        return;
    }

    // Color conversion (from hsv to rgb)
    toRgb(h:number, 
          s:number,
          v:number):Color{
        return;
    }

    // Color mixing
    mix(proportion:number, 
        otherColor:Color): Color{
        return;
    }
      
    // Color darker based on rgb, ignore alpha
    darker(percent:number):Color{
        return;
    }

    // Color lighter based on rgb, ignore alpha
    lighter(percent:number):Color{
        return;      
    }

    // Color darker based on hsv, ignore alpha
    hsvDarker():Color{
        return;      
    }

  

}
