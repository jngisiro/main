import { Network } from './network.model';
import { Node } from './nodes/node.model';

class NetworkFactory {
  static create(): Network {
    return new Network();
  }
}

export { NetworkFactory };
