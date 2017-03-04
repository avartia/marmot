import {Node} from './node'
import {MorphInterface} from './morph.interface'
import {Rectangle} from './rectangle'
import {Color} from "./color"
import {MenuMorph} from './menumorph'
import {Point} from './point'
import {ShadowMorph} from './shadowmorph'
import {WorldMorph} from './worldmorph'

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
    
    public fps:number; 
    public lastTime:number;
    public trackChanges:boolean;
    public shadowBlur:number;
    public isMorph:boolean;
    public texture:string;
    public cachedTexture:HTMLImageElement; 
    public noticesTransparentClick:boolean;
    public customContextMenu:MenuMorph;


    constructor(noDraw:boolean = null) {
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

    public fullDrawOn(otherCanvas:HTMLCanvasElement,
                      drawingArea:Rectangle):void{

    }
    // Morph deleting
    destroy():void{

    }


    // Morph stepping itself
    step():void{

    }

    // Morph accessing(get morph left border geometry value)
    left():number{
        return;
    }

    // Morph accessing(get morph right border geometry value)
    right():number{
        return;        
    }
    
    // Morph accessing(get morph top border geometry value)
    top():number{
        return;        
    }

    // Morph accessing(get morph bottom border geometry value)
    bottom():number{
        return;        
    }

    // Morph accessing(get morph center point coordinates)
    center():Point{
        return;        
    }

    // Morph accessing(get morph center point's coordinate of bottom border)
    bottomCenter():Point{
        return;        
    }

    // Morph accessing(get morph center point's coordinate of left border)
    leftCenter():Point{
        return;        
    }

    // Morph accessing(get morph center point's coordinate of right border)
    rightCenter():Point{
        return;        
    }

    // Morph accessing(get morph center point's coordinate of top border)
    topCenter():Point{
        return;        
    }

    // Morph accessing(get morph bottom left point's coordinate)
    bottomLeft():Point{
        return;
    }

    // Morph accessing(get morph bottom right point's coordinate)
    bottomRight():Point{
        return;
    }

    // Morph accessing(get morph top left point's coordinate)
    topLeft():Point{
        return;
    }

    // Morph accessing(get morph top right point's coordinate)
    topRight():Point{
        return;
    }

    // Morph accessing(get morph bound itself)
    bounding():Rectangle{
        return;
    }

    // Morph accessing(get morph four corners)
    corners():Point[]{
        return;
    }

    // Morph accessing(get topLeftPoint of morph bound)
    position():Point{
        return;
    }

    // Morph accessing(get extent including width and height of morph)
    extent():Point{
        return;
    }

    // Morph accessing(get width of morph bound)
    width():number{
        return;
    }

    // Morph accessing(get height of morph bound)
    height():number{
        return;
    }

    // Morph accessing(get morph bound with its children)
    fullBounds():Rectangle{
        return;
    }

    // Morph accessing(get morph bound with its children but no shadow)
    fullBoundsNoShadow():Rectangle{
        return;
    }

    // Morph accessing(get morph bound itself intersected by all parents' framemorphs)
    visibleBounds():Rectangle{
        return;
    }

    // Morph accessing(move morph with recording changes)
    moveBy(offset:Point | number):void{
        
    }

    // Morph accessing(just move morph with its children)
    silentMoveBy(offset:Point | number):void{

    }

    // Morph accessing(set position of morph with recording changes)
    setPosition(otherPoint:Point):void{

    }

    // Morph accessing(set position of morph without recording changes)
    silentSetPosition(offset:Point):void{

    } 

    // Morph accessing(set left border of morph by translation)
    setLeft(left:number):void{

    }

    // Morph accessing(set right border of morph by translation)
    setRight(left:number):void{

    }

    // Morph accessing(set top border of morph by translation)
    setTop(left:number):void{

    }

    // Morph accessing(set bottom border of morph by translation)
    setBottom(left:number):void{

    }

    // Morph accessing(set center position of morph itself by translation)
    setCenter(centerPoint:Point){
        
    }

    // Morph accessing(set center position of morph with children by translation)
    setFullCenter(centerPoint:Point){

    }

    // Morph accessing(make morph completely within another morph by translation)  
    keepWithin(otherMorph:Morph):void{

    }

    // Morph accessing(?)
    scrollIntoView():void{

    }

    // Morph accessing(set new extent of morph by redrawing a complete morph)
    silentSetExtent(extentPoint:Point):void{

    }   

    // Morph accessing(set width of morph avoid redrawing)
    silentSetWidth(width:number):void{

    } 


    // Morph accessing(set height of morph avoid redrawing)
    silentSetHeight(height:number):void{

    }  

    // Morph accessing(set color of morph with redrawing)
    setColor(newColor:Color):void{

    }  

    // Morph displaying
    // initialize texture of a morph and draw texture
    drawTexture(url:string):void{

    }  

    // Morph displaying(draw texture of a morph)
    // maybe repeat texture 
    drawCachedTexture():void{

    }

    // Morph displaying(draw canvas of a morph without its children)
    drawOn(otherCanvas:HTMLCanvasElement,
           drawingArea:Rectangle):void{

    }

    // Morph displaying(hide a morph with its children)
    hide():void{

    }

    // Morph displaying(show a morph with its children)
    show():void{

    }

    // Morph displaying(toggle visibility of a morph with its children)
    toggleVisibility():void{

    }

    // Morph full image(?)
    fullImageClassic():HTMLCanvasElement{
        return;
    }

    // Morph full image(?)
    fullImage():HTMLCanvasElement{
        return;
    }

    // Morph shadow(?)
    shadowImage(off:Point, 
                color:Color):HTMLCanvasElement{
        return;
    }
    
    // Morph shadow(produce shadow morph)
    shadowImageBlurred(off:Point, 
                       color:Color):HTMLCanvasElement{
        return;
    }
    
    // Morph shadow(create and set shadow morph)
    shadow(off:Point,
           alpha:number, 
           color:Color):ShadowMorph{
        return;
    }
    
    // Morph shadow(add shadowmorph to a morph)
    addShadow(off:Point,
             alpha:number, 
             color:Color):ShadowMorph{
        return;
    }

    // Morph shadow(get shadowmorph which belongs to a morph)
    getShadow():ShadowMorph{
        return;
    }

    // Morph shadow(remove shadowmorph which belongs to a morph)
    removeShadow():void{

    }
    
    // Morph pen trails
    // answer my pen trails canvas. default is to answer my image
    penTrails():HTMLCanvasElement{
        return;
    }

    // Morph updating(record changes for morphs without children)
    changed():void{

    }

    // Morph updating(record full changes for morphs with children)
    fullChanged():void{

    }

    // Morph updating
    // react to a change in one of my children,
    // default is to just pass this message on upwards
    // override this method for Morphs that need to adjust accordingly
    childChanged():void{

    }
    
    // Morph accessing(get worldmorph which contains the morph)
    getWorld():WorldMorph{
        return;
    }

    // Morph accessing(add new morph and remove old parent)
    add(childMorph):void{
        
    }

    // Morph accessing(add new morph and remove old parent)
    // move child to the first member of its children
    addBack(childMorph):void{

    }

    // Morph accessing(get top layer of morph)  
    topMorphAt(point:Point):Morph{
        return;
    }

    // Morph accessing(get overlapped morph) 
    overlappedMorphs():Morph[]{
        return;
    }

    // Morph pixel access(get color of some pixel in the morph)
    getPixelColor(aPoint:Point):Color{
        return;
    }

    // Morph pixel access
    // (answer whether some point is transparent in the morph)
    isTransparentAt(aPoint:Point):boolean{
        return;
    }

    // Morph duplicating(shallow copy without children)
    copy():Morph{
        return;
    }

    /**Morph duplicating
     * Produce a copy of me with my entire tree of submorphs. Morphs
     * mentioned more than once are all directed to a single new copy.
     * Other properties are also *shallow* copied, so you must override
     * to deep copy Arrays and (complex) Objects
     */  
     fullCopy():Morph{
         return;
     }

    /**Morph duplicating
     * Recursively copy this entire composite morph, 
     * recording the correspondence between 
     * old and new morphs in the given dictionary.
     * This dictionary will be used to update 
     * intra-composite references in the copy. 
     * See updateReferences().
     * 
     * Note: This default implementation copies ONLY morphs. 
     * If a morph stores morphs in other properties 
     * that it wants to copy,
     * then it should override this method to do so. 
     * The same goes for morphs that contain other complex data 
     * that should be copied when the morph is duplicated.
     */
    // copyRecordingReferences(map:Map<Morph, Morph>):

    /**Morph duplicating
     * Update intra-morph references within a composite morph that has
     * been copied. For example, if a button refers to morph X in the
     * orginal composite then the copy of that button in the new composite
     * should refer to the copy of X in new composite, not the original X.
     */
    // updateReferences(map:Map<Morph, Morph>);

    // Morph dragging and dropping
    // get root morph which contains dragging morph
    rootForGrab():Morph{
        return;
    }

    // Morph dragging and dropping
    // answer whether a morph can accept drop of another morph
    wantsDropOf(aMorph:Morph):boolean{
        return;
    }

    // Morph dragging and dropping
    // pick up a morph
    pickUp(aWorld:WorldMorph):void{

    }   
    
    // Morph dragging and dropping
    // answer whether a morph has been picked up
    isPickedUp(aWorld:WorldMorph):void{

    }   

    // Morph dragging and dropping
    // answer a dictionary specifying where I am right now, so
    // I can slide back to it if I'm dropped somewhere else
    situation():{origin:Morph, position:Point}{
        return;
    }   

    // Morph dragging and dropping
    // slide back to origin position when dropped somewhere else
    slideBackTo(situation:{origin:Morph, position:Point},
                steps:number):void{
         return;      
    }

    // Morph utilities
    // do nothing
    nop():void{

    }

    // Morph utilities
    // resize morph
    resize():void{

    }

    // Morph utilities
    // add handlemorph for moving morph
    move():void{

    } 

    // Morph utilities
    // bubble help content
    hint(msg:string):void{

    }

    // Morph utilities
    // inform menu
    inform(msg:string):void{

    }  

    /**Morph utilities
     * inform menu
     * parameters:
     * msg:title
     * callback:function to be executed
     * environment:morph prompt menu belongs to
     * defaultContents
     * width
     * floorNum:minimum number
     * ceilingNum:maximum number
     * isRounded:whether input field value is rounded
     */
    prompt(msg:string,
           callback:Function,
           environment:Morph,
           defaultContents:string,
           width:number,
           floorNum:number,
           ceilingNum:number,
           isRounded:boolean):void{

    }

    /**Morph utilities
     * color menu
     * parameters
     * msg:title
     * callback:function to be executed
     * environment:morph color menu belongs to
     * defaultContents:default color
     */
    pickColor(msg:string,
              callback:Function,
              environment:Morph,
              defaultContents:Color):void{

    }

    // Morph utilities
    // inspect menu
    inspect(anotherObject:Morph):void{

    }

    // Morph menus
    // answer proper menu
    contextMenu():MenuMorph{
        return;
    }

    // Morph menus
    // answer hierarchy menu
    // hierarchyMenu():MenuMorph;

    // Morph menus
    // answer developers menu
    // developersMenu():MenuMorph;

    // Morph menus
    // answer user menu
    // userMenu():null;

    // Morph menu actions
    // set transparent degree
    setAlphaScaled(alpha:number | string):void{

    }

    // Morph menu actions
    // attach morph to another morph
    attach():void{

    }

    // Morph menu actions
    // toggle draggable property
    toggleIsDraggable():void{

    }   

    // Morph menu actions
    // get color setters array
    colorSetters():string[]{
        return;
    }

    // Morph menu actions
    // get number setters array
    numericalSetters():string[]{
        return;
    }  

    // Morph entry field tabbing
    
    // Morph events
    // Events may be "bubbled" up a morph's owner chain
    escalateEvent(functionName:string,
                  arg:any):void{
        return;
    }

    // Morph eval

    // Morph collision detection
    // isTouching(otherMorph:Morph):
    
    // overlappingImage():    



  
}