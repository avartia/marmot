import {NodeInterface} from './node.interface'

export class Node implements NodeInterface {


    constructor(public parent:Node = null,
                public children:Node[] = []) {

    }

    // Node string representation: e.g. 'a Node[3]'
    toString():string{
        return;
    }

    // Node child accessing:

    // Add a child at the end of the children list
    addChild(aNode:Node):void{
      
    }

    // Add a child at the top of the children list
    addChildFirst(aNode:Node):void{

    }

    // remove a child 
    removeChild(aNode:Node):void{

    }

    // Node functions:

    //find the root of the current Node
    root():Node{
        if(this.parent==null)
            return this;
        return this.parent.root();
    }

    //find the number of Nodes from current Node to root
    depth():number{
        return;
    }

    //return all children including current Node
    allChildren():Node[]{
        return;
    }

    //apply aFunction to all descentants of the current Node include itself
    forAllChildren(aFunction:(node:Node)=>void):void{

    }

    //????????????????? Siyu can't understand what aPredicate means
    anyChild(aPredicate:(node:Node)=>any):boolean{
        return;
    }

    //Get all leafs from the descendants of the current Node
    allLeafs():Node[]{
        return;
    }

    //Get all ancesters of the Node including itself
    allAncesters():Node[]{
        return;
    }

    //Get all siblings of the Node
    siblings():Node[]{
        return;
    }

    //Find an ancestor of Node that is an instance of A including itself
    //?? here constructor can only be Node or subclass of Node
    parentThatIsA(constructor:any):Node{
        return;
    }

    //Find an ancestor of Node that is an instance of Type in an array including itself
    parentThatIsAnyOf(constructor:any[]):Node{
        return;
    }
  
}