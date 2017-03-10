
import{Point} from './point'

export function doNothing(): void{

}

export function newCanvas(extentPoint?):HTMLCanvasElement {
    // answer a new empty instance of Canvas, don't display anywhere
    // nonRetina - optional Boolean "false"
    // by default retina support is automatic
    let canvas:HTMLCanvasElement= document.createElement('canvas');
    let ext:Point=extentPoint||{x:0,y:0};
    canvas.width=ext.x;
    canvas.height = ext.y;
    return canvas;
}
export function radians(degrees){
    return degrees*Math.PI/180;
}

// answer the first element of list for which predicate evaluates
// true, otherwise answer null
export function detect(list:any[],predicate:Function){
    let i:number;
    let size:number=list.length;
    for(i=0;i<size;i+=1){
        if(predicate.call(null,list[i])){
            return list[i];
        }
    }
    return null;
}

export function cast<T>(obj, cl): T {
    obj.__proto__ = cl.prototype;
    return obj;
}

// answer the absolute coordinates of a DOM element in the document
export function getDocumentPositionOf(aDOMelement:HTMLCanvasElement):Point{
    let pos:Point;
    if(aDOMelement===null){
        return new Point(0,0);
    }
    return new Point(aDOMelement.offsetLeft,aDOMelement.offsetTop);
}

// answer true if element is a member of list
export function contains(list, element){
    return list.some(function (any){
        return any === element;
    })
}


