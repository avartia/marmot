import {FrameMorph} from './framemorph'
import {Rectangle} from './rectangle'
import {WorldMorphInterface} from './worldmorph.interface'
import {HandMorphService} from './handmorph.service'
import {HandMorph} from './handmorph'
import {ColorService} from './color.service'
import {RectangleService} from './rectangle.service'

export class WorldMorph extends FrameMorph implements WorldMorphInterface
{

  public broken: Rectangle[]; 
  public worldCanvas:HTMLCanvasElement;
  public hand:HandMorph;
  
  constructor(handMorphService:HandMorphService,
              colorService:ColorService,
              rectangleService:RectangleService,
              aCanvas:HTMLCanvasElement) { 
    super();
    this.color = colorService.create(205, 205, 205);
    this.alpha = 1;
    this.bounds = rectangleService.create(0, 
                                          0, 
                                          aCanvas.width,
                                          aCanvas.height);
    this.isVisible = true;
    this.isDraggable = false;
    this.worldCanvas = aCanvas;
    this.noticesTransparentClick = true;
    this.broken = [];
    this.hand = handMorphService.create(this);
    this.drawNew();
    this.fillPage();
    this.initEventListeners();
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

  // World Morph display
  private fullDrawOn(aCanvas:HTMLCanvasElement, aRect:Rectangle):void{
    return;
  }

  // collapse clustered damaged rectangles into their unions,
  // thereby reducing the array of brokens to a manageable size
  private condenseDamages():void{
    
  }

  private fillPage():void{
    let deviceHeight = window.innerHeight;
    let deviceWidth = window.innerWidth;

    this.worldCanvas.width = deviceWidth;
    this.setWidth(deviceWidth);
    this.worldCanvas.height = deviceHeight;
    this.setHeight(deviceHeight);

  }

  // WorldMorph events
  private initEventListeners():void{
    let canvas = this.worldCanvas;
    
  }
  
}