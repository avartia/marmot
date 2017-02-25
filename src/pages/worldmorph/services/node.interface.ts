//Node Class

export interface NodeInterface{
  //public intance member and public intance methods of Node Class
}

export interface NodeConstructor {
    //constructor of Node Class

    new (parent:NodeInterface, children:NodeInterface[]): NodeInterface;
}

export interface NodeServiceInterface{

    //public methods of NodeService
    create(parent:NodeInterface, children:NodeInterface[]): NodeInterface;
}