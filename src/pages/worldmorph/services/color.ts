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
    if(otherColor &&
       this.r === otherColor.r &&
       this.g === otherColor.g &&
       this.a === otherColor.a){
        return true;
       }
    else{
      return false;
    }
  }

  

}
