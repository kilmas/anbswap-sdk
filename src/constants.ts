import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  HECOMAIN = 128,
  HECOTEST = 256,
  BIANMAIN = 56,
  BIANTEST = 97,
  OKTEST = 65
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASHES = {
  [ChainId.MAINNET]: '0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0',
  [ChainId.ROPSTEN]: '0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0',
  [ChainId.RINKEBY]: '0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0',
  [ChainId.GÖRLI]: '0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0',
  [ChainId.KOVAN]: '0xe3a2d8b356e0265479117bb262881a7c7c690a1cf7392d0ab59e30d5134cbe06',
  [ChainId.HECOMAIN]: '0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0',
  [ChainId.HECOTEST]: '0x3990fda9ab516b83a46ecb97d0e6916dcfc56eae1ae253e0b7a74b0412065af1',
  [ChainId.BIANMAIN]: '0x2d1f22154c0ff3e94d21ac5c634de2b702187e932a981c7e327e9c7ef3135143',
  [ChainId.BIANTEST]: '0xba4d18c9e084bbdde0ca796e8ec15d78edc385e1810d53a703a68a3ec478231f',
  [ChainId.OKTEST]: '0xa9252a257da1cf1409d57be07f4bffae98731dad512dd65b33f8ef8a999d92c5',
  [ChainId.OKTEST]: '0xa9252a257da1cf1409d57be07f4bffae98731dad512dd65b33f8ef8a999d92c5'
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x54038C23b72b01eeDBaF4AE4C098D329FB2D32f1',
  [ChainId.HECOMAIN]: '0x76854443c1FC36Bbad8E9Ae361ED415dD673640f',
  [ChainId.HECOTEST]: '0xe2c1453d83f11Fa331a3Ece2D6E174F795071639',
  [ChainId.BIANMAIN]: '0xc4ed717acca2cba1491af7e3584494348782c417',
  [ChainId.BIANTEST]: '0xc4ed717acca2cba1491af7e3584494348782c417',
  [ChainId.OKTEST]: '0xbb362F4213eF1c0114158778c85861c8cdc0a66e'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
// export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
