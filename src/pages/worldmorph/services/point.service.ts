import { Injectable }    from '@angular/core';
import { Point } from './point'

@Injectable()
export class PointService {

  constructor() {

   }

  create(x:number, y:number){
    return new Point(x, y);
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}