import { Injectable }    from '@angular/core';

import { WorldMorph } from './worldmorph'
import { WorldMorphServiceInterface } from './worldmorph.interface'
import { HandMorphService } from './handmorph.service'
import { RectangleService } from './rectangle.service'
import { Color } from "./color";
import { PenMorphService } from "./penmorph.service";

@Injectable()
export class WorldMorphService implements WorldMorphServiceInterface{

  constructor(private handMorphService:HandMorphService,
              private rectangleService:RectangleService,
              private penMorphService:PenMorphService) {

   }

  create(aCanvas:HTMLCanvasElement): WorldMorph{
      let bounds = this.rectangleService.create(0, 
                                                0, 
                                                aCanvas.width, 
                                                aCanvas.height);
      let hand = this.handMorphService.create();
      let color = new Color(205, 205, 205);
      return new WorldMorph(hand, 
                            color,
                            bounds,
                            aCanvas,
                            this.rectangleService,
                            this.penMorphService);
  }

}