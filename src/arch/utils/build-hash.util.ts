import * as hash from 'object-hash';

export const buildHash = (publicAddress: string): string => {
  return hash({
    publicAddress,
    secret: process.env.SECRET_KEY,
  });
};
