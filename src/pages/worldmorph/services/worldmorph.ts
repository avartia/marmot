import {FrameMorph} from './framemorph'
import {Rectangle} from './rectangle'
import {WorldMorphInterface} from './worldmorph.interface'
import {HandMorphService} from './handmorph.service'
import {HandMorph} from './handmorph'


export class WorldMorph extends FrameMorph implements WorldMorphInterface{
  
  public broken: Rectangle[]; 
  public worldCanvas:HTMLCanvasElement;
  public hand:HandMorph;
  
  constructor(handMorphService:HandMorphService,
              aCanvas:HTMLCanvasElement) { 
    super();
    this.color
    this.color = 
    this.worldCanvas = aCanvas;
    this.broken = [];
    this.hand = handMorphService.create(this);
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

  //World Morph display
  // private fullDrawOn(aCanvas:HTMLCanvasElement, aRect:Rectangle):void{
  //   return;
  // }


  // collapse clustered damaged rectangles into their unions,
  // thereby reducing the array of brokens to a manageable size
  
  private condenseDamages():void{
    
  }

  private fillPage():void{

  }

  // WorldMorph events
  private initEventListeners():void{

  }
  
}