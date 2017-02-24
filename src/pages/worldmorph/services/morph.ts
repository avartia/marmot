import {Node} from './node'
import {doNothing} from './shared'

export class Morph extends Node{
    protected fps:number; 
    protected lastTime:number;
    public isVisible:boolean;
    constructor() {
        super();
        this.fps = 0;
        this.lastTime = Date.now();
        this.isVisible = true;
    }
    
    public stepFrame(){
        let currentTime:number, 
            leftoverTime:number,
            elapsedTime:number;
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

    public step:() => void = doNothing;



  
}