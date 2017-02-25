import {NodeInterface} from './node.interface'

export class Node implements NodeInterface {

  constructor(public parent:Node = undefined,
              public children:Node[] = [] ) {
  }

  
}