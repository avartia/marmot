import { Injectable }    from '@angular/core';

import {Node} from './Node'
import {NodeConstructor, NodeInterface} from './shared.interface'

@Injectable()
export class NodeService{

  constructor() {

   }

  create(parent:Node, children:Node[]): Node{
    return this.createNode(Node, parent, children) as Node;
  }

  private createNode(nodeConstructor: NodeConstructor, parent:Node, children:Node[]): NodeInterface {
    return new nodeConstructor(parent, children);
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}