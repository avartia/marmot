import { Injectable }    from '@angular/core';

import {Point} from './point'
import {PointConstructor, PointInterface} from './shared.interface'
@Injectable()
export class PointService{

  constructor() {

   }

  create(x:number, y:number): Point{
    return this.createPoint(Point, x, y) as Point;
  }

  private createPoint(pointConstructor: PointConstructor, x: number, y: number): PointInterface {
    return new pointConstructor(x, y);
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}