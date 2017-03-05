import {Gesture} from 'ionic-angular/gestures/gesture';

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
    private canvasGesture: Gesture;
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

    // World Morph display
    public fullDrawOn(aCanvas:HTMLCanvasElement, aRect:Rectangle):void{
        super.fullDrawOn(aCanvas, aRect);
        this.hand.fullDrawOn(aCanvas, aRect);
    }

    private updateBroken(): void{
        let myself = this;
        this.condenseDamages();
        this.broken.forEach((rect:Rectangle) => {
            myself.fullDrawOn(this.worldCanvas, rect);
        })
    }

    // collapse clustered damaged rectangles into their unions,
    // thereby reducing the array of brokens to a manageable size
    private condenseDamages():void{
        let again:boolean = true;
        let size:number = this.broken.length;
        while(again){
            this.broken = this.condense(this.broken);
            if (this.broken.length < size) {
                again = true;
            }else{
                again = false;
            }
            size = this.broken.length;
        }
    }

    private condense(src:Rectangle[]):Rectangle[] {
        return [];
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
        let myself = this;
        this.canvasGesture = new Gesture(this.worldCanvas);
        this.canvasGesture.listen();

        this.canvasGesture.on('panstart', (event) => {
            console.log("panstart");
            myself.hand.processTouchStart(event);
        });
        this.canvasGesture.on('panmove', (event) => {
            console.log("panmove");            
            myself.hand.processTouchMove(event);
        });
        this.canvasGesture.on('panend', (event) => {
            console.log("panend");            
            myself.hand.processTouchEnd(event);
        });    
        this.canvasGesture.on('panup', (event) => {

        });    
        this.canvasGesture.on('pandown', (event) => {

        });
        this.canvasGesture.on('tap', (event) => {

        });
        this.canvasGesture.on('press', (event) => {

        });
        this.canvasGesture.on('swipeleft', (event) => {

        });
        this.canvasGesture.on('swiperight', (event) => {

        });
        this.canvasGesture.on('rotate', (event) => {

        });
        this.canvasGesture.on('pinch', (event) => {

        });
        
    }

    private createPenMorph():void{
        

    }
    
}