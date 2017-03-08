import { Node } from './node'
//Node Class

export interface NodeInterface{
    //public member variables
    
    parent:Node;
    
    children:Node[];
    //public methods

    // Node string representation: e.g. 'a Node[3]'
    toString():string;

    // Node child accessing:

    // Add a child at the end of the children list
    addChild(aNode:Node):void;

    // Add a child at the top of the children list
    addChildFirst(aNode:Node):void;

    // remove a child 
    removeChild(aNode:Node):void;

    // Node functions:

    //find the root of the current Node
    root():Node;

    //find the number of Nodes from current Node to root
    depth():number;

    //return all children including current Node
    allChildren():Node[];

    //apply aFunction to all descentants of the current Node include itself
    forAllChildren(aFunction:(node:Node)=>void):void;

    //????????????????? Siyu can't understand what aPredicate means
    anyChild(aPredicate:(node:Node)=>any):boolean;

    //Get all leafs from the descendants of the current Node
    allLeafs():Node[];

    //Get all ancesters of the Node including itself
    allAncesters():Node[];

    //Get all siblings of the Node
    siblings():Node[];

    //Find an ancestor of Node that is an instance of A including itself
    //?? here constructor can only be Node or subclass of Node
    parentThatIsA(constructor:any):Node;

    //Find an ancestor of Node that is an instance of Type in an array including itself
    parentThatIsAnyOf(constructor:any[]):Node;
}