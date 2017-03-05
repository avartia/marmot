import { Injectable }    from '@angular/core';

import {Node} from './node'
import {NodeConstructor, NodeServiceInterface} from './node.interface'

@Injectable()
export class NodeService implements NodeServiceInterface{

  constructor() {

   }

  create(parent?:Node, children?:Node[]): Node{
    return this.createNode(Node, parent, children);
  }

  private createNode(nodeConstructor: NodeConstructor, parent:Node, children:Node[]): Node {
    return new nodeConstructor(parent, children);
  }

}