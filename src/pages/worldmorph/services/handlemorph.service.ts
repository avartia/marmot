import { Injectable }    from '@angular/core';

import {HandleMorph} from './HandleMorph'
import {HandleMorphConstructor, HandleMorphInterface} from './shared.interface'

@Injectable()
export class HandleMorphService{

  constructor() {

   }

  create(): HandleMorph{
    return this.createHandleMorph(HandleMorph) as HandleMorph;
  }

  private createHandleMorph(handleMorphConstructor: HandleMorphConstructor): HandleMorphInterface {
    return new handleMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}