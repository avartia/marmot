import { Injectable }    from '@angular/core';

import {SliderMorph} from './slidermorph'
import {SliderMorphConstructor, SliderMorphServiceInterface} from './slidermorph.interface'

@Injectable()
export class SliderMorphService implements SliderMorphServiceInterface{

  constructor() {

   }

  create(): SliderMorph{
    return this.createSliderMorph(SliderMorph);
  }

  private createSliderMorph(sliderMorphConstructor: SliderMorphConstructor): SliderMorph {
    return new sliderMorphConstructor();
  }


}