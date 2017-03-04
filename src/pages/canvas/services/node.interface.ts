//Node Class

export interface NodeInterface{
    //public member variables
    
    
    //public methods

    // Node string representation: e.g. 'a Node[3]'
    toString():string;

    // Node child accessing:

    // Add a child at the end of the children list
    addChild(aNode:NodeInterface):void;

    // Add a child at the top of the children list
    addChildFirst(aNode:NodeInterface):void;

    // remove a child 
    removeChild(aNode:NodeInterface):void;

    // Node functions:

    //find the root of the current Node
    root():NodeInterface;

    //find the number of Nodes from current Node to root
    depth():number;

    //return all children including current Node
    allChildren():NodeInterface[];

    //apply aFunction to all descentants of the current Node include itself
    forAllChildren(aFunction:(node:NodeInterface)=>void):void;

    //????????????????? Siyu can't understand what aPredicate means
    anyChild(aPredicate:(node:NodeInterface)=>any):boolean;

    //Get all leafs from the descendants of the current Node
    allLeafs():NodeInterface[];

    //Get all ancesters of the Node including itself
    allAncesters():NodeInterface[];

    //Get all siblings of the Node
    siblings():NodeInterface[];

    //Find an ancestor of Node that is an instance of A including itself
    //?? here constructor can only be Node or subclass of Node
    parentThatIsA(constructor:any):NodeInterface;

    //Find an ancestor of Node that is an instance of Type in an array including itself
    parentThatIsAnyOf(constructor:any[]):NodeInterface;
}

export interface NodeConstructor {
    //constructor of Node Class

    new (parent:NodeInterface, children:NodeInterface[]): NodeInterface;
}

export interface NodeServiceInterface{

    //public methods of NodeService
    create(parent?:NodeInterface | null, children?:NodeInterface[]): NodeInterface;
}