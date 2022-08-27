import { Node } from './node.model';

class NodeFactory {
  static create(networkId: string): Node {
    return new Node(networkId);
  }
}

export { NodeFactory };
