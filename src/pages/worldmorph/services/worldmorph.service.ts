import { Injectable }    from '@angular/core';

import {WorldMorph} from './WorldMorph'
import {WorldMorphConstructor, WorldMorphServiceInterface} from './worldmorph.interface'
import {HandMorphService} from './handmorph.service'
@Injectable()
export class WorldMorphService implements WorldMorphServiceInterface{

  constructor(private handMorphService:HandMorphService) {

   }

  create(aCanvas:HTMLCanvasElement): WorldMorph{
    return this.createWorldMorph(WorldMorph, 
                                 this.handMorphService,
                                 aCanvas);
  }

  private createWorldMorph(worldMorphConstructor: WorldMorphConstructor,
                           handMorphService:HandMorphService,
                           aCanvas:HTMLCanvasElement): WorldMorph {
    return new worldMorphConstructor(handMorphService, aCanvas) as WorldMorph;
  }

}