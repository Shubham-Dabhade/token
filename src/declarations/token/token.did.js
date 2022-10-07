export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'getSymbol' : IDL.Func([], [IDL.Text], ['query']),
    'payOut' : IDL.Func([], [IDL.Text], []),
<<<<<<< HEAD
    'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Text], []),
=======
>>>>>>> 2c5f48488359432000eba38cba9067c7b6973e2c
  });
};
export const init = ({ IDL }) => { return []; };
