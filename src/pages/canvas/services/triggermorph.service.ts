import { Injectable }    from '@angular/core';

import {TriggerMorph} from './triggermorph'
import {TriggerMorphConstructor, TriggerMorphServiceInterface} from './triggermorph.interface'

@Injectable()
export class TriggerMorphService implements TriggerMorphServiceInterface{

  constructor() {

   }

  create(): TriggerMorph{
    return this.createTriggerMorph(TriggerMorph);
  }

  private createTriggerMorph(triggerMorphConstructor: TriggerMorphConstructor): TriggerMorph {
    return new triggerMorphConstructor();
  }

}