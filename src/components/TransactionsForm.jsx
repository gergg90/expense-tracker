import { useState } from "react";
import useGlobalState from "../hooks/useGlobalState";

function TransactionsForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useGlobalState();

  const onSubmitTransactionsForm = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={onSubmitTransactionsForm}>
        <div>
          <input
            className="bg-teal-800 text-white px-3 py-2 rounded-lg block my-4 w-full"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Enter your description"
            value={description}
          />

          <input
            className="bg-teal-800 text-white px-3 py-2 rounded-lg block mb-2 w-full"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            step="0.1"
            placeholder="00.00"
            value={amount}
          />

          <button className="bg-purple-900 hover:bg-purple-800 w-full rounded-lg text-white py-2 mt-2 ">
            Submit transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionsForm;
