import { Injectable }    from '@angular/core';

import {SliderMorph} from './SliderMorph'
import {SliderMorphConstructor, SliderMorphInterface} from './shared.interface'

@Injectable()
export class SliderMorphService{

  constructor() {

   }

  create(): SliderMorph{
    return this.createSliderMorph(SliderMorph) as SliderMorph;
  }

  private createSliderMorph(sliderMorphConstructor: SliderMorphConstructor): SliderMorphInterface {
    return new sliderMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}