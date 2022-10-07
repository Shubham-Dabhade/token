import React, { useState } from "react";
import { Principal } from "@dfinity/principal";  //importing the principal mmodule but unlike in .mo file where the file is imported from the motoko base file we import it from the dependency that we downloaded
import { token } from "../../../declarations/token";

function Balance() {

  const [inputValue,setInput]=useState("");
  const [balanceResult,setBalance]=useState("");
  const [symbol1,setSymbol]=useState("");
  const [isHidden,setHidden]=useState(true);

  async function handleClick() {
    // console.log(inputValue);
    const principal = Principal.fromText(inputValue);//using this we have converted the input value in Principal type and we will sent it into the backend motko function
    const balance = await token.balanceOf(principal);
    //to show the balance on the frontend the return value will look like this 1_000_000_000 which is Nat so convert it into string
    setBalance(balance.toLocaleString());

    const symbol= await token.getSymbol();
    setSymbol(symbol);

    setHidden(false);
  }

  function handleChange(e){
    var value_in=e.target.value;
    setInput(value_in);
  }

  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={handleChange}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balanceResult} {symbol1}.</p>
    </div>
  );
}

export default Balance;