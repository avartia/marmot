import { Injectable }    from '@angular/core';

import {InspectorMorph} from './InspectorMorph'
import {InspectorMorphConstructor, InspectorMorphInterface} from './shared.interface'

@Injectable()
export class InspectorMorphService{

  constructor() {

   }

  create(): InspectorMorph{
    return this.createInspectorMorph(InspectorMorph) as InspectorMorph;
  }

  private createInspectorMorph(inspectorMorphConstructor: InspectorMorphConstructor): InspectorMorphInterface {
    return new inspectorMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}