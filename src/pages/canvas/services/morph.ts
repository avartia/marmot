import {Node} from './node'
import {MorphInterface} from './morph.interface'
import {Rectangle} from './rectangle'
import {RectangleService} from './rectangle.service'
import {Color} from "./color"
import {MenuMorph} from './menumorph'
import {Point} from './point'
import {ShadowMorph} from './shadowmorph'
import {WorldMorph} from './worldmorph'
import { HandMorph } from './handmorph'
import { newCanvas } from "./shared.function";
import { ScrollFrameMorph } from "./scrollframemorph";
import { FrameMorph } from "./framemorph";
import {ShadowMorphService} from './shadowmorph.service';


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

    static trackChanges=true;
    static shadowBlur=4;

    constructor(color?: Color, 
                bounds?: Rectangle,
                isDraw?:boolean,
                private shadowMorphService?:ShadowMorphService
                ) {
        super();
        this.fps = 0;
        this.lastTime = Date.now();
        this.isVisible = true;
        this.bounds= bounds;
        this.color = color;
        this.cachedFullBounds=null;
        this.noticesTransparentClick=false;//????????????????
        if (isDraw === true) {
            this.drawNew();
        }
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
    // draw the morph in the memory the first time
    public drawNew():void{
        this.image = newCanvas(this.extent());
        let context = this.image.getContext('2d');
        context.fillStyle = this.color.toString();
        context.fillRect(0, 0, this.width(), this.height());


    }
    public setWidth(width:number):void{

    }

    public setHeight(width:number):void{

    }

    public setExtent(extentPoint:Point, 
                     silently:boolean):void{
        if (silently) {
        this.silentSetExtent(extentPoint);
        return;
    }
    if (!extentPoint.equal(this.extent())) {
        this.changed();
        this.silentSetExtent(extentPoint);
        this.changed();
        this.drawNew();
    }
    }

    public fullDrawOn(otherCanvas:HTMLCanvasElement,
                      drawingArea:Rectangle):void{
        var rectangle:Rectangle;
        if (!this.isVisible) {
            return null;
        }
        rectangle = drawingArea || this.fullBounds();
        this.drawOn(otherCanvas, rectangle);
        //if (this.cachedFullImage) {return; }
        this.children.forEach(function (child) {
            (child as Morph).fullDrawOn(otherCanvas, rectangle);
        });
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
        return this.bounds.center();        
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
        return this.bounds.topLeft();
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
        return this.bounds.origin;
    }

    // Morph accessing(get extent including width and height of morph)
    extent():Point{
        return this.bounds.extent();
    }

    // Morph accessing(get width of morph bound)
    width():number{
        return this.bounds.width();
    }

    // Morph accessing(get height of morph bound)
    height():number{
        return;
    }

    // Morph accessing(get morph bound with its children)
    fullBounds():Rectangle{
        let result:Rectangle;
        result = this.bounds;
        this.children.forEach(function (child) {
        if ((child as Morph).isVisible) {
            result = result.merge((child as Morph).fullBounds());
        }
        });
        return result;
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
        this.fullChanged();
        this.silentMoveBy(offset);
        this.fullChanged();
    }

    // Morph accessing(just move morph with its children)
    silentMoveBy(offset:Point | number):void{
        let children:Node[]=this.children;
        let i:number=children.length;
        this.bounds=this.bounds.translateBy(offset);
        // if (this.cachedFullBounds) {
        //     this.cachedFullBounds = this.cachedFullBounds.translateBy(delta);
        // }
        for(;i>0;i-=1){
            (children[i-1] as Morph).silentMoveBy(offset);
        }
    }

    // Morph accessing(set position of morph with recording changes)
    setPosition(otherPoint:Point):void{
        let delta=otherPoint.subtract(this.topLeft());
        if((delta.x!==0)||(delta.y!==0)){
            this.moveBy(delta);
        }
    }

    // Morph accessing(set position of morph without recording changes)
    silentSetPosition(offset:Point):void{
        let delta=offset.subtract(this.topLeft());
        if((delta.x!==0)||(delta.y!==0)){
            this.silentMoveBy(delta);
        }
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

    // Morph accessing(set new extent of morph by revise the point corner)
    silentSetExtent(extentPoint:Point):void{
        let ext:Point, newWidth:number, newHeight:number;
        ext = extentPoint.round();
        newWidth = Math.max(ext.x, 0);
        newHeight = Math.max(ext.y, 0);
        this.bounds.corner = new Point(
            this.bounds.origin.x + newWidth,
            this.bounds.origin.y + newHeight
        );
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
        let rectangle:Rectangle;
        let area:Rectangle;
        let delta:Point;
        let src:Rectangle;
        let sl:number;
        let st:number;
        let context:CanvasRenderingContext2D;
        let w:number;
        let h:number;
        let pic:HTMLCanvasElement= this.image;
        let bounds:Rectangle = this.bounds;
        if (!this.isVisible) {
           return null;
        }
        rectangle = drawingArea || bounds;
        area = rectangle.intersect(bounds);
        if (area.extent().gt(new Point(0, 0))) {
            delta = bounds.position().neg();
            src = area.copy().translateBy(delta);
            context = otherCanvas.getContext('2d');
            context.globalAlpha = this.alpha;

            sl = src.left();
            st = src.top();
            w = Math.min(src.width(), pic.width - sl);
            h = Math.min(src.height(), pic.height - st);

            if (w < 1 || h < 1) {
            return null;
        }

        context.drawImage(
            pic,
            sl,
            st,
            w,
            h,
            area.left(),
            area.top(),
            w,
            h
        );
    }
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
    //all the coordinates will be subtracted by (fb.origin.x,fb.origin.y) after using translate
    //new a HTMLCanvasElement same as this.image and return it
    fullImageClassic():HTMLCanvasElement{
        let fb=this.fullBounds();
        let img:HTMLCanvasElement=newCanvas(fb.extent());
        let ctx:CanvasRenderingContext2D=img.getContext('2d');
        ctx.translate(-fb.origin.x,-fb.origin.y);
        this.fullDrawOn(img,fb);
        //img.globalAlpha=this.alpha;
        return img;
    }

    // return this.image directly
    fullImage():HTMLCanvasElement{
        return this.image;
    }

    // Morph shadow
    // create a shadow image without blur
    shadowImage(off:Point, 
                color:Color):HTMLCanvasElement{
        let fb:Point=this.fullBounds().extent();
        let img:HTMLCanvasElement=this.fullImage();
        let offset=off||new Point(7,7);
        let clr=color||new Color(0,0,0);
        let outline=newCanvas(fb);
        let sha=newCanvas(fb);
        let ctx:CanvasRenderingContext2D=outline.getContext('2d');
        ctx.drawImage(img,0,0);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(
            img,
            -offset.x,
            -offset.y
        );
        ctx=sha.getContext('2d');
        ctx.drawImage(outline,0,0);
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle = clr.toString();
        ctx.fillRect(0, 0, fb.x, fb.y);
        return sha;
    }
    
    // create a shadow image with blur
    shadowImageBlurred(off:Point, 
                       color:Color):HTMLCanvasElement{
        let blur:number=this.shadowBlur;
        let fb:Point=this.fullBounds().extent().add(blur*2);
        let offset:Point= off || new Point(7, 7);
        let sha:HTMLCanvasElement=newCanvas(fb);
        let ctx:CanvasRenderingContext2D=sha.getContext('2d');
        let img:HTMLCanvasElement=this.fullImage();
        let clr=color||new Color(0,0,0);
        ctx.shadowOffsetX=offset.x;
        ctx.shadowOffsetY=offset.y;
        ctx.shadowBlur=blur;
        ctx.shadowColor=clr.toString();
        ctx.drawImage(
            img,
            blur-offset.x,
            blur-offset.y
        );
        ctx.shadowOffsetX=0;
        ctx.shadowOffsetY=0;
        ctx.shadowBlur=0;
        ctx.globalCompositeOperation='destination-out';
        ctx.drawImage(
            img,
            blur - offset.x,
            blur - offset.y
        );
        return sha;
    }
    
    // Morph shadow(create and set shadow morph)
    shadow(off:Point,
           a:number, 
           color:Color):ShadowMorph{
        let shadow = this.shadowMorphService.create();
        let offset:Point= off || new Point(7, 7);
        let alpha:number = a || ((a === 0) ? 0 : 0.2);
        let fb:Rectangle=this.fullBounds();
        shadow.setExtent(fb.extent().add(this.shadowBlur*2),true);
        // if (useBlurredShadows && !MorphicPreferences.isFlat) {
        //     shadow.image = this.shadowImageBlurred(offset, color);
        //     shadow.alpha = alpha;
        //     shadow.setPosition(fb.origin.add(offset).subtract(this.shadowBlur));
        // } else {
        //     shadow.image = this.shadowImage(offset, color);
        //     shadow.alpha = alpha;
        //     shadow.setPosition(fb.origin.add(offset));
        // }
        shadow.image = this.shadowImage(offset, color);
        shadow.alpha = alpha;
        shadow.setPosition(fb.origin.add(offset));
        return shadow;
    }
    
    // Morph shadow(add shadowmorph to a morph)
    addShadow(off?:Point,
              a?:number, 
              color?:Color):ShadowMorph{
        let shadow:ShadowMorph;
        let offset:Point=off || new Point(7,7);
        let alpha = a || ((a === 0)? 0: 0.2);
        shadow = this.shadow(offset,alpha,color);
        this.addBack(shadow);
        this.fullChanged();        
        return shadow;
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
        if (this.trackChanges) {
        let w = this.root();
        if (w instanceof WorldMorph) {
            w.broken.push(this.visibleBounds());
        }
    }
    if (this.parent) {
        (this.parent as Morph).childChanged(this);
    }
    }

    // Morph updating(record full changes for morphs with children)
    fullChanged():void{
        if (this.trackChanges) {
        let w = this.root();
        if (w instanceof WorldMorph) {
            w.broken.push(
                (this.fullBounds())
            );
        }
    }
    }

    // Morph updating
    // react to a change in one of my children,
    // default is to just pass this message on upwards
    // override this method for Morphs that need to adjust accordingly
    childChanged(changedMorph:Morph):void{
        if(this.parent){
            (this.parent as Morph).childChanged(changedMorph);
        }
    }
    
    // Morph accessing(get worldmorph which contains the morph)
    getWorld():WorldMorph{
        let root = this.root();
        if (root instanceof WorldMorph) {
             return root;
        }
        //  if (root instanceof HandMorph) {
        //      return root.myWorld;
        // }
        return null;
    }

    // Morph accessing(add new morph and remove old parent)
    add(childMorph):void{
        let owner=childMorph.parent;
        if(owner!==null){
            owner.removeChild(childMorph);
        }
        this.addChild(childMorph);
    }

    // Morph accessing(add new morph and remove old parent)
    // move child to the first member of its children
    addBack(childMorph):void{
        let owner=childMorph.parent;
        if(owner!==null){
            owner.removeChild(childMorph);
        }
        this.addChildFirst(childMorph);
    }

    // Morph accessing(get top layer of morph where the cursor click at)
    //if the morph can notice transparent click, then return itself;
    //if it can't,  judge whether the position of the point in morph is transparent or not,
    //if it is transparent, return null; if it is not, return itself
    topMorphAt(point:Point):Morph{
        let i:number;
        let result:Morph;
        if(!this.isVisible) {return null; }
        for(i=this.children.length-1;i>=0;i-=1){
            result=(this.children[i] as Morph).topMorphAt(point);
            if(result){return result;}
        }
        return this.bounds.containsPoint(point)&&
            (this.noticesTransparentClick|| !this.isTransparentAt(point))? this
            : null;
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
        let point:Point;
        let context:CanvasRenderingContext2D;
        let data;
        if(this.bounds.containsPoint(aPoint)){
            if(this.texture){
                return false;
            }
            point = aPoint.subtract(this.bounds.origin);
            context = this.image.getContext('2d');
            data = context.getImageData(
                Math.floor(point.x),
                Math.floor(point.y),
                1,
                1
            );
            //if data.data[3]===0, means the point on the morph is transparent
            //else, means the point on the morph is not transparent 
            return data.data[3]===0;
        }
        return false;
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
        if ((this as Morph) instanceof ShadowMorph ){
            return (this.parent as Morph).rootForGrab();
        }
        if (this instanceof ScrollFrameMorph){
            return this.parent as Morph;
        }
        if (this.parent === null ||
            this instanceof WorldMorph ||
            this instanceof FrameMorph ||
            this.isDraggable === true){
            return this;
        }
        return (this.parent as Morph).rootForGrab();
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
        if(this.parent){
            return {
                origin: this.parent as Morph,
                position: this.position().subtract((this.parent as Morph).position())
            };
        }
        return null;
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