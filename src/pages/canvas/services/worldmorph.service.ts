import { Injectable }    from '@angular/core';

import {WorldMorph} from './WorldMorph'
import {WorldMorphConstructor, WorldMorphServiceInterface} from './worldmorph.interface'
import {HandMorphService} from './handmorph.service'
import {ColorService} from './color.service'
import {RectangleService} from './rectangle.service'

@Injectable()
export class WorldMorphService implements WorldMorphServiceInterface{

  constructor(private handMorphService:HandMorphService,
              private colorService:ColorService,
              private rectangleService:RectangleService) {

   }

  create(aCanvas:HTMLCanvasElement): WorldMorph{
    return this.createWorldMorph(WorldMorph, 
                                 this.handMorphService,
                                 this.colorService,
                                 this.rectangleService,
                                 aCanvas);
  }

  private createWorldMorph(worldMorphConstructor: WorldMorphConstructor,
                           handMorphService:HandMorphService,
                           colorService:ColorService,
                           rectangleService:RectangleService,
                           aCanvas:HTMLCanvasElement): WorldMorph {
    return new worldMorphConstructor(handMorphService, 
                                     colorService,
                                     rectangleService,
                                     aCanvas) as WorldMorph;
  }

}