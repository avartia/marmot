import { Injectable }    from '@angular/core';

import {WorldMorph} from './WorldMorph'
import {WorldMorphConstructor, WorldMorphServiceInterface} from './worldmorph.interface'

@Injectable()
export class WorldMorphService implements WorldMorphServiceInterface{

  constructor() {

   }

  create(): WorldMorph{
    return this.createWorldMorph(WorldMorph);
  }

  private createWorldMorph(worldMorphConstructor: WorldMorphConstructor): WorldMorph {
    return new worldMorphConstructor() as WorldMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}