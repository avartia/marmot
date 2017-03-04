export interface SyntaxElementMorphInterface{
    //public intance member and public intance methods of SyntaxElementMorph Class
    //SyntaxElementMorph is the ancestor of all blocks and input slots

    //SyntaxElementMorph accessing:
    //return all children as an array except shadowmorph and blockhighlightmorph
    parts():SyntaxElementMorphInterface[];

    //return all children which are types of SyntaxElementMorph
    inputs():SyntaxElementMorphInterface[];

    //return all Inputs(argmorph or reporterblockmorph) from its children
    allInputs():SyntaxElementMorphInterface[];

    // answer empty input slots of all children excluding itself,
    // but omit those in nested rings (lambdas) and JS-Function primitives.
    // Used by the evaluator when binding implicit formal parameters
    // to empty input slots
    allEmptySlots():SyntaxElementMorphInterface[];

    //tag 'report' and 'stop this block' blocks of all children including myself
    tagExitBlocks(stopTag:any, isCommand:any):void;

    // SyntaxElementMorph enumerating:

    topBlock():SyntaxElementMorphInterface;

    // SyntaxElementMorph drag & drop:
    reactToGrabOf(grabbedMorph:SyntaxElementMorphInterface):void;

    // SyntaxElementMorph layout:
    fixLayout(silently:boolean):void;

    // SyntaxElementMorph layout update optimization
    startLayout():void;

    endLayout():void;





}

export interface SyntaxElementMorphConstructor{
    //constructor of SyntaxElementMorph Class
    new(noDraw:boolean):SyntaxElementMorphInterface;

}

export interface SyntaxElementMorphServiceInterface{
    //public methods of RectangleService
    create(noDraw:boolean):SyntaxElementMorphInterface;
}