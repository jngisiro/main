import { NetworkFactory } from '../network/index';

const { nodes, publicAddress } = NetworkFactory.create();

console.log(publicAddress);

nodes.forEach((node) => {
  console.log(node.publicAddress);
  console.log(node.valid(publicAddress));
});
