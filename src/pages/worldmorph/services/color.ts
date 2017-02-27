import {ColorInterface} from './color.interface'

export class Color implements ColorInterface{

  constructor(private r:number,
              private g:number,
              private b:number,
              private a:number = 1) { 
  }


  

}
