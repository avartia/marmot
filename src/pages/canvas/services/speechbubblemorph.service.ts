import { Injectable }    from '@angular/core';

import {SpeechBubbleMorph} from './SpeechBubbleMorph'
import {SpeechBubbleMorphConstructor, SpeechBubbleMorphServiceInterface} from './speechbubblemorph.interface'

@Injectable()
export class SpeechBubbleMorphService implements SpeechBubbleMorphServiceInterface{

  constructor() {

  }

  create(): SpeechBubbleMorph{
    return this.createSpeechBubbleMorph(SpeechBubbleMorph);
  }

  private createSpeechBubbleMorph(speechBubbleMorphConstructor: SpeechBubbleMorphConstructor): SpeechBubbleMorph {
    return new speechBubbleMorphConstructor();
  }

}