import { Database } from 'bun:sqlite';
import { v4 } from 'uuid';

import { buildHash } from '../utils/build-hash.util';
import { NodeFactory } from './nodes/index';
import { Node } from './nodes/node.model';

class Network {
  private _publicAddress: string;
  private _privateAddress: string;
  private _splitter: Node;
  private _chooser: Node;
  private _nodes: Node[] = [];

  constructor() {
    const randomBytes = v4();

    [this._publicAddress, this._privateAddress] = [
      randomBytes,
      buildHash(randomBytes),
    ];

    [this._splitter, this._chooser] = [
      NodeFactory.create(this.publicAddress),
      NodeFactory.create(this.publicAddress),
    ];

    this._nodes.push(this._splitter, this._chooser);
  }

  get publicAddress(): string {
    return this._publicAddress;
  }

  get nodes(): Node[] {
    return this._nodes;
  }

  get head(): Node {
    return this.nodes[0];
  }

  get tail(): Node {
    return this.nodes[this.nodes.length - 1];
  }

  addNode(_node: Node): string {
    this.nodes.push(_node);
    const node = NodeFactory.create(this._privateAddress);
    return node.publicAddress;
  }
}

export { Network };
