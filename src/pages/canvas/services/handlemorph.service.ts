import { Injectable }    from '@angular/core';

import {HandleMorph} from './HandleMorph'
import {HandleMorphConstructor, HandleMorphServiceInterface} from './handlemorph.interface'

@Injectable()
export class HandleMorphService implements HandleMorphServiceInterface{

  constructor() {

   }

  create(): HandleMorph{
    return this.createHandleMorph(HandleMorph);
  }

  private createHandleMorph(handleMorphConstructor: HandleMorphConstructor): HandleMorph {
    return new handleMorphConstructor() as HandleMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}