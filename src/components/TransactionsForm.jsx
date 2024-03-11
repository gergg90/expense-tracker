import { useState } from "react";
import useGlobalState from "../hooks/useGlobalState";

function TransactionsForm() {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();

  const { addTransaction } = useGlobalState();

  const onSubmitTransactionsForm = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitTransactionsForm}>
        <div>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Enter your description"
          />

          <input
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            step="0.1"
            placeholder="00.00"
          />
          <div>
            <button>Submit transaction</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionsForm;
