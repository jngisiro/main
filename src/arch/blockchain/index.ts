import { Blockchain } from './blockchain.model';
import { Node } from './nodes/node.model';

class BlockchainFactory {
  static create(): Blockchain {
    return new Blockchain();
  }
}

export { BlockchainFactory };
