import * as hash from 'object-hash';
import { v4 } from 'uuid';

import { buildHash } from '../../utils/build-hash.util';

export class Node {
  private readonly _publicAddress: string;

  // id of the network under which this node is operating
  private readonly _networkId: string;

  private address = {
    private: `<PRIVATE --------- * PRIVATE * --------->`,
    public: `<PUBLIC --------- * ${v4()} * --------->`,
  };

  constructor(networkId: string) {
    // console.info("----- Inside Node constructor -----");

    this._networkId = networkId;
    this._publicAddress = hash(this.address);
  }

  public get publicAddress() {
    return this._publicAddress;
  }

  valid(publicAddress: string) {
    console.log("Addresses", publicAddress, this._publicAddress);
    return buildHash(publicAddress) === buildHash(this.publicAddress);
  }
}
