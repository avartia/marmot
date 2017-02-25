import { Injectable }    from '@angular/core';

import {TriggerMorph} from './TriggerMorph'
import {TriggerMorphConstructor, TriggerMorphInterface} from './shared.interface'

@Injectable()
export class TriggerMorphService{

  constructor() {

   }

  create(): TriggerMorph{
    return this.createTriggerMorph(TriggerMorph) as TriggerMorph;
  }

  private createTriggerMorph(triggerMorphConstructor: TriggerMorphConstructor): TriggerMorphInterface {
    return new triggerMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}