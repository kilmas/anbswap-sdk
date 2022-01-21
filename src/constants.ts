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
  [ChainId.RINKEBY]: '0x31b8bb71e834f67949639b69cdd3f7a2cf2f6152b0145ab4845b49232ef6eedc',
  [ChainId.GÖRLI]: '0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0',
  [ChainId.KOVAN]: '0xe3a2d8b356e0265479117bb262881a7c7c690a1cf7392d0ab59e30d5134cbe06',
  [ChainId.HECOMAIN]: '0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0',
  [ChainId.HECOTEST]: '0xab958b87f42efcd5fa548617c1e4d32afb09185e25d97dae4547d9043bec7d72',
  [ChainId.BIANMAIN]: '0x4f28dfdda4977962d01e311877b42e2a192039a7276c57cc348ff240475368ee',
  [ChainId.BIANTEST]: '0xea56e21b12517cd75b4dfe120cea52e54ab2951bbcbd6867fbbc35a344f13822',
  [ChainId.OKTEST]: '0xa9252a257da1cf1409d57be07f4bffae98731dad512dd65b33f8ef8a999d92c5',
  [ChainId.OKTEST]: '0xa9252a257da1cf1409d57be07f4bffae98731dad512dd65b33f8ef8a999d92c5'
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '0x78e5E1C986a20061dbb0485D10a5d1c1e472A744',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0x54038C23b72b01eeDBaF4AE4C098D329FB2D32f1',
  [ChainId.HECOMAIN]: '0x76854443c1FC36Bbad8E9Ae361ED415dD673640f',
  [ChainId.HECOTEST]: '0x502dFB9c0865D20A84E909187D71D46b9D90caC7',
  [ChainId.BIANMAIN]: '0xf0bc2E21a76513aa7CC2730C7A1D6deE0790751f',
  [ChainId.BIANTEST]: '0x75FbceBaeC2C35D0416524735A7Ed6d78e52b9ea',
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
