import {ColorInterface} from './shared.interface'

export class Color implements ColorInterface{

  constructor(private r:number = 0,
              private g:number = 0,
              private b:number = 0,
              private a:number = 1) { 
  }


  

}
