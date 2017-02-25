import { Injectable }    from '@angular/core';

import {InspectorMorph} from './inspectorMorph'
import {InspectorMorphConstructor, InspectorMorphServiceInterface} from './inspectormorph.interface'

@Injectable()
export class InspectorMorphService implements InspectorMorphServiceInterface{

  constructor() {

   }

  create(): InspectorMorph{
    return this.createInspectorMorph(InspectorMorph);
  }

  private createInspectorMorph(inspectorMorphConstructor: InspectorMorphConstructor): InspectorMorph {
    return new inspectorMorphConstructor() as InspectorMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}