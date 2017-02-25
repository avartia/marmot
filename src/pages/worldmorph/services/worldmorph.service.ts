import { Injectable }    from '@angular/core';

import {WorldMorph} from './WorldMorph'
import {WorldMorphConstructor, WorldMorphInterface} from './shared.interface'

@Injectable()
export class WorldMorphService{

  constructor() {

   }

  create(): WorldMorph{
    return this.createWorldMorph(WorldMorph) as WorldMorph;
  }

  private createWorldMorph(worldMorphConstructor: WorldMorphConstructor): WorldMorphInterface {
    return new worldMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}