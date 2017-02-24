import {FrameMorph} from './framemorph'
import {Rectangle} from './rectangle'

export class WorldMorph extends FrameMorph{
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
      if(rect)
    })

  }

  private condenseDamages(): void{

  }

  
}