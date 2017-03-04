import { Injectable }    from '@angular/core';

import {SliderButtonMorph} from './SliderButtonMorph'
import {SliderButtonMorphConstructor, SliderButtonMorphServiceInterface} from './SliderButtonMorph.interface'

@Injectable()
export class SliderButtonMorphService implements SliderButtonMorphServiceInterface{

  constructor() {

   }

  create(): SliderButtonMorph{
    return this.createSliderButtonMorph(SliderButtonMorph);
  }

  private createSliderButtonMorph(sliderButtonMorphConstructor: SliderButtonMorphConstructor): SliderButtonMorph {
    return new sliderButtonMorphConstructor();
  }

}