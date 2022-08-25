import { v4 } from 'uuid';

import { BlockchainFactory } from '../blockchain/index';
import { NodeFactory } from '../blockchain/nodes/index';

const blockchain = BlockchainFactory.create();
blockchain.addNode(NodeFactory.create(v4()));

console.log(blockchain.nodes);
