import {Node} from './node'
import {MorphInterface} from './morph.interface'
import {Rectangle} from './rectangle'
import {Color} from "./color"
import {MenuMorph} from './menumorph'
import {Point} from './point'
import {ShadowMorph} from './shadowmorph'
import {WorldMorph} from './worldmorph'
import {doNothing} from './shared.function'

export class Morph extends Node implements MorphInterface{
        
    public isVisible:boolean;
    public image:HTMLCanvasElement;
    public bounds:Rectangle;
    public cachedFullImage:HTMLCanvasElement;
    public cachedFullBounds:Rectangle;
    public color:Color;
    public alpha:number;
    public isDraggable:boolean;
    public isTemplate:boolean;
    public acceptsDrops:boolean;
    
    protected fps:number; 
    protected lastTime:number;
    protected trackChanges:boolean;
    protected shadowBlur:number;
    protected isMorph:boolean;
    protected texture:string;
    protected cachedTexture:HTMLImageElement; 
    protected noticesTransparentClick:boolean;
    protected customContextMenu:MenuMorph;

    constructor(noDraw:boolean) {
        super();
        this.fps = 0;
        this.lastTime = Date.now();
        this.isVisible = true;
    }
    
    public stepFrame(){
        let currentTime:number; 
        let leftoverTime:number;
        let elapsedTime:number;
        currentTime = Date.now();
        elapsedTime = currentTime - this.lastTime; 
        if(this.fps > 0){
            leftoverTime = (1000 / this.fps) - elapsedTime;
        }else{
            leftoverTime = 0;
        }
        if(leftoverTime < 1){
            this.lastTime = Date.now();
            this.step();
            if(this.isVisible === true){
                this.children.forEach((child) => (child as Morph).stepFrame());
            }
        }
    }

    public drawNew():void{


    }
    public setWidth(width:number):void{

    }

    public setHeight(width:number):void{

    }

    public setExtent(extentPoint:Point, 
                     silently:boolean):void{

    }



  
}