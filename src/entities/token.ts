import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string
  public readonly projectLink?: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string, projectLink?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
    this.projectLink = projectLink
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, '0xecc360c7e9393E84D44F09b7f75c1dDd03f41969', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.HECOMAIN]: new Token(ChainId.HECOMAIN, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'WHT', 'Wrapped HT'),
  [ChainId.HECOTEST]: new Token(ChainId.HECOTEST, '0x7aF326B6351C8A9b8fb8CD205CBe11d4Ac5FA836', 18, 'WHT', 'Wrapped HT'),
  [ChainId.BIANMAIN]: new Token(ChainId.BIANMAIN, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BIANTEST]: new Token(ChainId.BIANTEST, '0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.OKTEST]: new Token(ChainId.OKTEST, '0xB13991B6253172118b962045906b27ce73C21ecD', 18, 'WOKT', 'Wrapped OKT'),
  [ChainId.REITEST] : new Token(ChainId.REITEST, '0x4B75244212747c74db5fCf1670c504dE89A445A0', 18, 'WREI', 'Wrapped REI'),
  [ChainId.REIMAIN] : new Token(ChainId.REIMAIN, '0x2545AF3D8b11e295bB7aEdD5826021AB54F71630', 18, 'WREI', 'Wrapped REI'),
}
