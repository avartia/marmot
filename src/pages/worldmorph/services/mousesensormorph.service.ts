import { Injectable }    from '@angular/core';

import {MouseSensorMorph} from './MouseSensorMorph'
import {MouseSensorMorphConstructor, MouseSensorMorphServiceInterface} from './mousesensormorph.interface'

@Injectable()
export class MouseSensorMorphService{

  constructor() {

   }

  create(): MouseSensorMorph{
    return this.createMouseSensorMorph(MouseSensorMorph) ;
  }

  private createMouseSensorMorph(mouseSensorMorphConstructor: MouseSensorMorphConstructor): MouseSensorMorph {
    return new mouseSensorMorphConstructor()  as MouseSensorMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}