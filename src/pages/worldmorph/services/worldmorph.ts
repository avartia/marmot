import {FrameMorph} from './framemorph'
import {Rectangle} from './rectangle'
import {WorldMorphInterface} from './worldmorph.interface'

export class WorldMorph extends FrameMorph implements WorldMorphInterface{
  public isDevMode: boolean;
  public broken: Rectangle[]; 
  constructor() { 
    super();
    this.isDevMode = false;
    this.broken = [];
  }

  public doOneCycle(): void{
    this.stepFrame();
    this.updateBroken();
  }

  private updateBroken(): void{
    let myself = this;
    this.condenseDamages();
    this.broken.forEach((rect:Rectangle) => {
      
    })

  }

  private condenseDamages(): void{

  }

  
}