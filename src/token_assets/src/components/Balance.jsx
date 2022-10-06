import React, { useState } from "react";
import { Principal } from"@dfinity/principal";  //importing the principal mmodule but unlike in .mo file where the file is imported from the motoko base file we import it from the dependency that we downloaded


function Balance() {

  const [inputValue,setInput]=useState("");
  
  function handleClick() {
    console.log(inputValue);
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
      <p>This account has a balance of XYZ.</p>
    </div>
  );
}

export default Balance;
