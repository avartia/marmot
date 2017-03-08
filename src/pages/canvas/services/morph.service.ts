import { Injectable }    from '@angular/core';
import {RectangleService} from './rectangle.service'
import {Morph} from './morph'
import { MorphInterface, MorphServiceInterface } from './morph.interface'
import { Color } from "./color";

@Injectable()
export class MorphService implements MorphServiceInterface{

  constructor(private rectangleService:RectangleService) {

   }

  create(): Morph{
    let bounds = this.rectangleService.create(0, 0, 50, 40);
    let color = new Color(80, 80, 80);
    return new Morph(color, bounds);
  }


}