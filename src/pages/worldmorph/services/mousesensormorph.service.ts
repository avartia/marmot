import { Injectable }    from '@angular/core';

import {MouseSensorMorph} from './MouseSensorMorph'
import {MouseSensorMorphConstructor, MouseSensorMorphInterface} from './shared.interface'

@Injectable()
export class MouseSensorMorphService{

  constructor() {

   }

  create(): MouseSensorMorph{
    return this.createMouseSensorMorph(MouseSensorMorph) as MouseSensorMorph;
  }

  private createMouseSensorMorph(mouseSensorMorphConstructor: MouseSensorMorphConstructor): MouseSensorMorphInterface {
    return new mouseSensorMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}