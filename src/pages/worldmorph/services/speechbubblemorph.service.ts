import { Injectable }    from '@angular/core';

import {SpeechBubbleMorph} from './SpeechBubbleMorph'
import {SpeechBubbleMorphConstructor, SpeechBubbleMorphInterface} from './shared.interface'

@Injectable()
export class SpeechBubbleMorphService{

  constructor() {

   }

  create(): SpeechBubbleMorph{
    return this.createSpeechBubbleMorph(SpeechBubbleMorph) as SpeechBubbleMorph;
  }

  private createSpeechBubbleMorph(speechBubbleMorphConstructor: SpeechBubbleMorphConstructor): SpeechBubbleMorphInterface {
    return new speechBubbleMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}