import { v4 } from 'uuid';

import { NodeFactory } from './nodes/index';
import { Node } from './nodes/node.model';

class Blockchain {
  constructor(
    private _nodes: Node[] = [],
    private _head: Node = NodeFactory.create(v4()),
    private _tail: Node = NodeFactory.create(v4())
  ) {}

  get nodes(): Node[] {
    return this._nodes;
  }

  get head(): Node {
    return this._head;
  }

  get tail(): Node {
    return this._tail;
  }

  addNode(_head: Node): void {
    this.nodes.push(_head);
  }
}

export { Blockchain };
