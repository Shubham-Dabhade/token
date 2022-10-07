import React, { useState } from "react";
import { token } from "../../../declarations/token";
import { Principal } from "@dfinity/principal";


function Transfer() {
  
  const [recipientId,setId]=useState("");
  const [amount,setAmount]=useState("");
  const [feedback,setFeedback]=useState("");
  const [isHidden,setHidden]=useState(true);
  const [isDisabled,setDisable]=useState(false);

  async function handleClick() {
    setHidden(true);
    console.log("clicked");
    setDisable(true);
    const recipient = Principal.fromText(recipientId);
    const amountToTranfer= Number(amount);
    const result = await token.transfer(recipient,amountToTranfer);
    setFeedback(result);
    setHidden(false);
    setDisable(false);
  }

  function handleRecipient(e){
    let value=e.target.value;
    setId(value);
  }

  function handleAmount(e){
    let amount=e.target.value;
    setAmount(amount);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={handleRecipient}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmount}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;