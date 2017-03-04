import { Injectable }    from '@angular/core';

import {Point} from './point'
import {PointConstructor, PointServiceInterface} from './point.interface'
@Injectable()
export class PointService implements PointServiceInterface{

  constructor() {

   }

  create(x:number, y:number): Point{
    return this.createPoint(Point, x, y);
  }

  private createPoint(pointConstructor: PointConstructor, x: number, y: number): Point {
    return new pointConstructor(x, y) as Point;
  }

}