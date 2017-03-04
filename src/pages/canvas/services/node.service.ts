import { Injectable }    from '@angular/core';

import {Node} from './node'
import {NodeConstructor, NodeServiceInterface} from './node.interface'

@Injectable()
export class NodeService implements NodeServiceInterface{

  constructor() {

   }

  create(p?:Node, children?:Node[]): Node{
    return this.createNode(Node, p, children);
  }

  private createNode(nodeConstructor: NodeConstructor, p:Node, children:Node[]): Node {
    return new nodeConstructor(p, children);
  }

}