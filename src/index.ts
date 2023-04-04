import { getCreate2Address, getAddress } from '@ethersproject/address'
import { Bytes, BytesLike, concat } from '@ethersproject/bytes'
import { keccak256 } from '@ethersproject/keccak256'

/**
 * Returns EIP-1167 initCode.
 * @param target clone imlementation
 */
export function getEip1167InitCode(target: string): Bytes {
  return concat([
    '3d602d80600a3d3981f3363d3d373d3d3d363d73',
    getAddress(target),
    '5af43d82803e903d91602b57fd5bf3',
  ])
}

/**
 * Returns EIP-1167 CREATE-2 address.
 * @param from contract deployer
 * @param salt CREATE-2 salt
 * @param target clone implementation
 */
export function getEip1167Create2Address(
  from: string,
  salt: BytesLike,
  target: string
): string {
  return getCreate2Address(from, salt, keccak256(getEip1167InitCode(target)))
}
