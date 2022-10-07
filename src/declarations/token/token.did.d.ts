import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'balanceOf' : (arg_0: Principal) => Promise<bigint>,
  'getSymbol' : () => Promise<string>,
  'payOut' : () => Promise<string>,
<<<<<<< HEAD
  'transfer' : (arg_0: Principal, arg_1: bigint) => Promise<string>,
=======
>>>>>>> 2c5f48488359432000eba38cba9067c7b6973e2c
}
