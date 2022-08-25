import { v4 } from 'uuid';

import { Node } from './node.model';

class NodeFactory {
  static create(
    prevNode: string,
    nextNode: string = `node-id-${v4()}`,
    transactionId: string = `transaction-id-${v4()}`
  ): Node {
    return new Node(prevNode, nextNode, transactionId);
  }
}

export { NodeFactory };
